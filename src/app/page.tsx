'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { fetchAllBeers, fetchUserBeers, UserBeer } from '@/lib/firestore';
import { Beer, seededBeers } from '@/data/beers';
import { LoadingState } from '@/components/LoadingState';
import { formatRelativeTime } from '@/lib/format';
import { getUserBeersFromStorage, saveUserBeersToStorage } from '@/lib/localStorage';

export default function HomePage() {
  const { user, loading } = useCurrentUser();

  if (loading) return <LoadingState label="Loading your beers..." />;

  if (!user) {
    return <Landing />;
  }

  return <Dashboard />;
}

const Landing = () => {
  return (
    <div className="space-y-8 pt-4 pb-10 fade-in">
      <div className="text-center space-y-2">
        <p className="text-sm text-amber-600 font-semibold">BeerCount</p>
        <h1 className="text-3xl font-semibold text-slate-900 leading-tight">
          How many beers have you <span className="text-amber-600">really</span> drunk?
        </h1>
        <p className="text-sm text-slate-600">
          Track every beer you taste. See your stats. Celebrate your beer journey.
        </p>
      </div>

      <div className="space-y-3 rounded-3xl bg-white p-6 shadow-md border border-amber-100">
        <p className="text-xs text-slate-500 flex items-center gap-2">
          🍻 You could be tracking this
        </p>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-amber-gradient text-white grid place-items-center text-xl font-bold shadow-sm">
            42
          </div>
          <div className="space-y-1 text-sm text-slate-700">
            <p className="font-semibold">42 beers · 17 unique · 6 countries</p>
            <p className="text-xs text-slate-500">Make your beer stories count 🍺</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          href="/signup"
          className="w-full rounded-full bg-amber-500 text-white font-semibold py-3 text-sm shadow-sm hover:bg-amber-600 active:scale-[0.98] transition block text-center"
        >
          Get started
        </Link>
        <Link
          href="/login"
          className="w-full rounded-full border border-amber-200 text-amber-700 font-medium py-3 text-sm bg-amber-50 hover:bg-amber-100 block text-center"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { user } = useCurrentUser();
  const router = useRouter();
  const [userBeers, setUserBeers] = useState<UserBeer[]>([]);
  const [beerCatalog, setBeerCatalog] = useState<Beer[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      
      // Load from localStorage immediately (instant)
      const localStats = getUserBeersFromStorage(user.uid);
      setUserBeers(localStats);
      setBeerCatalog(seededBeers);
      setLoadingData(false);
      
      // Then try to load from Firestore in background
      try {
        const [stats, beers] = await Promise.all([
          fetchUserBeers(user.uid).catch(() => localStats),
          fetchAllBeers().catch(() => seededBeers)
        ]);
        
        setUserBeers(stats);
        setBeerCatalog(beers);
        saveUserBeersToStorage(user.uid, stats);
      } catch (error) {
        console.error('Failed to load from Firestore:', error);
        // Keep using localStorage data
      }
    };
    load();
  }, [user]);

  const totalDrunk = useMemo(() => userBeers.reduce((sum, entry) => sum + entry.count, 0), [userBeers]);
  const uniqueBeers = userBeers.length;

  const recentBeers = useMemo(() => {
    const mapped = userBeers
      .map((entry) => ({
        ...entry,
        beer: beerCatalog.find((b) => b.id === entry.beerId)
      }))
      .sort((a, b) => (b.lastDrunkAt?.seconds ?? 0) - (a.lastDrunkAt?.seconds ?? 0));
    return mapped.slice(0, 6);
  }, [userBeers, beerCatalog]);

  return (
    <div className="space-y-6 fade-in">
      <div className="space-y-1">
        <p className="text-sm text-slate-500">Hi, {user?.email} 👋</p>
        <h1 className="text-2xl font-semibold text-slate-900">Here’s your beer journey.</h1>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white p-4 shadow-md border border-amber-100">
          <p className="text-xs text-slate-500 flex items-center gap-1">🍺 Total drunk</p>
          <p className="text-3xl font-bold text-amber-600">{totalDrunk}</p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-md border border-amber-100">
          <p className="text-xs text-slate-500 flex items-center gap-1">🧩 Unique beers</p>
          <p className="text-3xl font-bold text-amber-600">{uniqueBeers}</p>
        </div>
      </div>

      <button
        onClick={() => router.push('/search')}
        className="w-full rounded-full bg-amber-500 text-white font-semibold py-3 text-sm shadow-sm hover:bg-amber-600 active:scale-[0.98] transition"
      >
        + Add a beer I drank
      </button>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
            🕑 Recent beers
          </p>
          <Link href="/search" className="text-xs text-amber-700 font-medium">
            View all
          </Link>
        </div>
        {loadingData ? (
          <LoadingState label="Loading stats..." />
        ) : recentBeers.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-amber-200 bg-white p-5 text-sm text-slate-600 text-center">
            No beers tracked yet. Start your journey 🍺
          </div>
        ) : (
          <div className="space-y-3">
            {recentBeers.map((entry) => (
              <button
                key={entry.id}
                onClick={() => router.push(`/beer/${entry.beerId}`)}
                className="w-full rounded-2xl bg-white p-4 shadow-sm border border-amber-100 flex items-center justify-between active:scale-[0.99] transition"
              >
                <div className="text-left">
                  <p className="font-semibold text-slate-900">{entry.beer?.name ?? 'Unknown beer'}</p>
                  <p className="text-xs text-slate-500">
                    Last drunk: {formatRelativeTime(entry.lastDrunkAt)}
                  </p>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  × {entry.count}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
