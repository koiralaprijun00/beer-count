'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { fetchAllBeers, fetchUserBeers, incrementUserBeerCount, UserBeer } from '@/lib/firestore';
import { Beer, seededBeers } from '@/data/beers';
import { LoadingState } from '@/components/LoadingState';

export default function SearchPage() {
  const router = useRouter();
  const { user, loading } = useCurrentUser();
  const [beers, setBeers] = useState<Beer[]>([]);
  const [userBeers, setUserBeers] = useState<UserBeer[]>([]);
  const [query, setQuery] = useState('');
  const [loadingData, setLoadingData] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, router, user]);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      setLoadingData(true);
      try {
        const [beerList, stats] = await Promise.all([
          fetchAllBeers(),
          fetchUserBeers(user.uid)
        ]);
        setBeers(beerList);
        setUserBeers(stats);
      } catch (error) {
        console.error('Failed to load data:', error);
        // Use seeded beers as fallback if Firestore fails
        setBeers(seededBeers);
        setUserBeers([]);
      } finally {
        setLoadingData(false);
      }
    };
    load();
  }, [user]);

  const filteredBeers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return beers;
    return beers.filter((beer) => beer.name.toLowerCase().includes(q));
  }, [beers, query]);

  const handleDrink = async (beer: Beer) => {
    if (!user) return;
    setMessage('');
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
    try {
      await incrementUserBeerCount(user.uid, beer.id);
      setMessage(`+1 🍺 Added to your count!`);
    } catch (error) {
      setMessage('Could not update. Try again.');
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
