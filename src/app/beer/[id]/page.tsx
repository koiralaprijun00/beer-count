'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  decrementUserBeerCount,
  fetchBeerById,
  fetchUserBeerEntry,
  incrementUserBeerCount,
  UserBeer
} from '@/lib/firestore';
import { Beer, seededBeers } from '@/data/beers';
import { LoadingState } from '@/components/LoadingState';
import { formatRelativeTime } from '@/lib/format';
import {
  getUserBeerEntryFromStorage,
  incrementBeerCountInStorage,
  decrementBeerCountInStorage,
  saveUserBeersToStorage
} from '@/lib/localStorage';

export default function BeerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { user, loading } = useCurrentUser();
  const [beer, setBeer] = useState<Beer | null>(null);
  const [userBeer, setUserBeer] = useState<UserBeer | null>(null);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, router, user]);

  useEffect(() => {
    const load = async () => {
      if (!user || !id) return;
      
      // Load from localStorage immediately
      const localEntry = getUserBeerEntryFromStorage(user.uid, id);
      const localBeer = seededBeers.find((b) => b.id === id);
      setBeer(localBeer || null);
      setUserBeer(localEntry);
      setFetching(false);
      
      // Then try to load from Firestore in background
      try {
        const [beerDoc, userEntry] = await Promise.all([
          fetchBeerById(id).catch(() => localBeer || null),
          fetchUserBeerEntry(user.uid, id).catch(() => localEntry)
        ]);
        if (beerDoc) setBeer(beerDoc);
        if (userEntry) {
          setUserBeer(userEntry);
          // Update localStorage with Firestore data
          const allBeers = getUserBeerEntryFromStorage(user.uid, 'dummy') ? [] : []; // Get all
          // This is a simplified version - in production you'd merge properly
        }
      } catch (error) {
        console.error('Failed to load from Firestore:', error);
      }
    };
    load();
  }, [id, user]);

  const countLabel = useMemo(() => {
    const count = userBeer?.count ?? 0;
    if (count === 0) return 'You haven’t logged this beer yet. First time coming up? 🍻';
    if (count === 1) return 'You’ve had this once. Just getting started. 😏';
    if (count >= 5) return 'This one’s a favorite! ⭐';
    return `You’ve had this ${count} times.`;
  }, [userBeer]);

  const handleIncrement = async () => {
    if (!user || !beer) return;
    setError('');
    
    // Update UI immediately
    const currentCount = userBeer?.count ?? 0;
    setUserBeer((prev) => ({
      id: prev?.id ?? `${beer.id}-temp`,
      beerId: beer.id,
      userId: user.uid,
      count: currentCount + 1
    }));
    
    // Save to localStorage immediately
    try {
      const updated = incrementBeerCountInStorage(user.uid, beer.id);
      setUserBeer(updated);
    } catch (e) {
      setError('Could not save.');
      return;
    }
    
    // Try to sync with Firestore in background
    try {
      const updated = await incrementUserBeerCount(user.uid, beer.id);
      setUserBeer(updated);
    } catch (e) {
      console.warn('Firestore sync failed, but saved locally', e);
    }
  };

  const handleDecrement = async () => {
    if (!user || !beer) return;
    if (!userBeer || userBeer.count === 0) return;
    setError('');
    
    // Update UI immediately
    const currentCount = userBeer.count;
    setUserBeer((prev) =>
      prev
        ? {
            ...prev,
            count: currentCount > 0 ? currentCount - 1 : 0
          }
        : null
    );
    
    // Save to localStorage immediately
    try {
      const updated = decrementBeerCountInStorage(user.uid, beer.id);
      setUserBeer(updated);
    } catch (e) {
      setError('Could not save.');
      return;
    }
    
    // Try to sync with Firestore in background
    try {
      const updated = await decrementUserBeerCount(user.uid, beer.id);
      setUserBeer(updated);
    } catch (e) {
      console.warn('Firestore sync failed, but saved locally', e);
    }
  };

  if (loading || !user) {
    return <LoadingState label="Checking access..." />;
  }

  if (fetching) {
    return <LoadingState label="Loading beer..." />;
  }

  if (!beer) {
    return (
      <div className="rounded-2xl bg-white p-6 text-center text-sm text-slate-600">
        Beer not found. <button onClick={() => router.push('/search')} className="text-amber-700 font-semibold">Go back</button>
      </div>
    );
  }

  return (
    <div className="space-y-5 fade-in">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="rounded-full border border-amber-200 bg-white px-3 py-2 text-sm font-medium text-amber-700 shadow-sm hover:bg-amber-100"
        >
          ← Back
        </button>
        <div>
          <p className="text-xs text-slate-500">Beer detail</p>
          <h1 className="text-xl font-semibold text-slate-900">{beer.name}</h1>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-md border border-amber-100 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-amber-gradient text-white grid place-items-center text-lg font-bold shadow-sm">
            {beer.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm text-slate-600">{[beer.style, beer.country].filter(Boolean).join(' · ')}</p>
            {beer.abv && <p className="text-xs text-slate-500">ABV {beer.abv}%</p>}
          </div>
        </div>
        <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-white to-amber-50 p-6 shadow-inner">
          <p className="text-xs uppercase text-slate-500 tracking-wide">You’ve drunk this</p>
          <div className="mt-3 flex items-center justify-between">
            <button
              aria-label="Decrease count"
              onClick={handleDecrement}
              className="h-10 w-10 rounded-full border border-amber-200 bg-white text-amber-700 text-lg font-semibold shadow-sm active:scale-95"
            >
              −
            </button>
            <p className="text-5xl font-bold text-amber-600">{userBeer?.count ?? 0}</p>
            <button
              aria-label="Increase count"
              onClick={handleIncrement}
              className="h-10 w-10 rounded-full bg-amber-500 text-white text-lg font-semibold shadow-sm active:scale-95"
            >
              +
            </button>
          </div>
          <p className="mt-3 text-sm text-slate-600">{countLabel}</p>
          <p className="text-xs text-slate-500">Last updated: {formatRelativeTime(userBeer?.lastDrunkAt)}</p>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
}
