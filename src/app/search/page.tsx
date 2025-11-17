'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { fetchAllBeers, fetchUserBeers, incrementUserBeerCount, UserBeer } from '@/lib/firestore';
import { Beer, seededBeers } from '@/data/beers';
import { LoadingState } from '@/components/LoadingState';
import { searchBeersAPI } from '@/lib/beerApi';
import { getUserBeersFromStorage, incrementBeerCountInStorage, saveUserBeersToStorage } from '@/lib/localStorage';

export default function SearchPage() {
  const router = useRouter();
  const { user, loading } = useCurrentUser();
  const [beers, setBeers] = useState<Beer[]>([]);
  const [userBeers, setUserBeers] = useState<UserBeer[]>([]);
  const [query, setQuery] = useState('');
  const [loadingData, setLoadingData] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [message, setMessage] = useState('');
  const [searchResults, setSearchResults] = useState<Beer[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, router, user]);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      
      // Show seeded beers immediately for fast loading
      setBeers(seededBeers);
      
      // Load from localStorage immediately (instant)
      const localStats = getUserBeersFromStorage(user.uid);
      setUserBeers(localStats);
      setLoadingData(false);
      
      // Then try to load from Firestore in background
      try {
        const [beerList, stats] = await Promise.all([
          fetchAllBeers().catch(() => seededBeers),
          fetchUserBeers(user.uid).catch(() => [])
        ]);
        
        // Update with Firestore data if available
        if (beerList.length > 0) {
          setBeers(beerList);
        }
        
        // Merge Firestore stats with localStorage (Firestore takes priority)
        if (stats.length > 0) {
          setUserBeers(stats);
          saveUserBeersToStorage(user.uid, stats);
        }
      } catch (error) {
        console.error('Failed to load from Firestore:', error);
        // Keep using localStorage data
      }
    };
    load();
  }, [user]);

  // Search API when user types (debounced)
  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      const q = query.trim();
      if (q.length >= 2) {
        setLoadingSearch(true);
        try {
          const apiResults = await searchBeersAPI(q);
          setSearchResults(apiResults);
        } catch (error) {
          console.error('Search failed', error);
          setSearchResults([]);
        } finally {
          setLoadingSearch(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 500); // Debounce 500ms

    return () => clearTimeout(searchTimeout);
  }, [query]);

  const filteredBeers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return beers;
    
    // Combine local beers and API search results
    const localMatches = beers.filter((beer) => 
      beer.name.toLowerCase().includes(q) ||
      beer.country?.toLowerCase().includes(q) ||
      beer.style?.toLowerCase().includes(q)
    );
    
    // Merge with API results, avoiding duplicates
    const apiMatches = searchResults.filter(
      (apiBeer) => !localMatches.some((local) => local.name === apiBeer.name)
    );
    
    return [...localMatches, ...apiMatches];
  }, [beers, query, searchResults]);

  const handleDrink = async (beer: Beer) => {
    if (!user) return;
    setMessage('');
    
    // Update UI immediately (optimistic update)
    setUserBeers((prev) => {
      const existing = prev.find((entry) => entry.beerId === beer.id);
      if (existing) {
        return prev.map((entry) =>
          entry.beerId === beer.id ? { ...entry, count: entry.count + 1 } : entry
        );
      }
      return [
        ...prev,
        { id: `${beer.id}-temp`, beerId: beer.id, userId: user.uid, count: 1 }
      ];
    });
    
    // Save to localStorage immediately (always works)
    try {
      const updated = incrementBeerCountInStorage(user.uid, beer.id);
      setUserBeers((prev) => {
        const filtered = prev.filter((b) => b.beerId !== beer.id);
        return [...filtered, updated];
      });
      setMessage(`+1 🍺 Added to your count!`);
    } catch (error) {
      console.error('Failed to save to localStorage', error);
      setMessage('Could not save. Try again.');
      return;
    }
    
    // Try to sync with Firestore in background (non-blocking)
    try {
      await incrementUserBeerCount(user.uid, beer.id);
      // Refresh from Firestore to get the real ID
      const stats = await fetchUserBeers(user.uid).catch(() => getUserBeersFromStorage(user.uid));
      setUserBeers(stats);
      saveUserBeersToStorage(user.uid, stats);
    } catch (error) {
      // Firestore failed, but localStorage already saved it
      console.warn('Firestore sync failed, but saved locally', error);
    }
  };

  if (loading || !user) {
    return <LoadingState label="Checking access..." />;
  }

  return (
    <div className="space-y-4 fade-in">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="rounded-full border border-amber-200 bg-white px-3 py-2 text-sm font-medium text-amber-700 shadow-sm hover:bg-amber-100"
        >
          ← Back
        </button>
        <h1 className="text-xl font-semibold text-slate-900">Find a beer 🔍</h1>
      </div>
      <p className="text-xs text-slate-500">Tap “I drank this” every time you drink it.</p>

      <div className="rounded-full bg-white px-4 py-3 shadow-sm border border-amber-100 flex items-center gap-2">
        <span className="text-slate-400">🔎</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name… (Guinness, IPA...)"
          className="w-full bg-transparent text-sm focus:outline-none"
        />
      </div>

      {message && <p className="text-xs text-amber-700">{message}</p>}

      {loadingData ? (
        <LoadingState label="Loading beers..." />
      ) : (
        <div className="space-y-3">
          {query.trim().length >= 2 && loadingSearch && (
            <p className="text-xs text-slate-500 text-center py-2">Searching worldwide beers...</p>
          )}
          {query.trim().length >= 2 && !loadingSearch && filteredBeers.length === 0 && (
            <p className="text-xs text-slate-500 text-center py-4">
              No beers found. Try a different search term.
            </p>
          )}
          {filteredBeers.map((beer) => {
            const userEntry = userBeers.find((entry) => entry.beerId === beer.id);
            const dotColor = beer.style?.toLowerCase().includes('ipa')
              ? 'bg-teal-400'
              : beer.style?.toLowerCase().includes('lager')
                ? 'bg-amber-400'
                : 'bg-lime-400';
            return (
              <div
                key={beer.id}
                className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm border border-amber-100 hover:border-amber-200 transition"
              >
                <button
                  onClick={() => router.push(`/beer/${beer.id}`)}
                  className="flex flex-1 items-center gap-3 text-left"
                >
                  <span className={`h-3 w-3 rounded-full ${dotColor}`} aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-900">{beer.name}</p>
                    <p className="text-xs text-slate-500">
                      {[beer.style, beer.country].filter(Boolean).join(' · ') || 'Mystery style'}
                    </p>
                  </div>
                </button>
                {userEntry ? (
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      × {userEntry.count}
                    </span>
                    <button
                      onClick={() => handleDrink(beer)}
                      className="rounded-full bg-amber-500 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-amber-600 active:scale-[0.98] transition"
                    >
                      +1
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleDrink(beer)}
                    className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-700 hover:bg-amber-100 active:scale-[0.98] transition"
                  >
                    I drank this
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
