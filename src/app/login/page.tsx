'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export default function LoginPage() {
  const router = useRouter();
  const { user, loading } = useCurrentUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.replace('/');
    }
  }, [loading, router, user]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/');
    } catch (err: any) {
      setError(err.message || 'Failed to log in');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-6 pt-4 pb-10 fade-in">
      <div className="text-center space-y-2">
        <p className="text-sm font-semibold text-amber-600">BeerCount</p>
        <h1 className="text-2xl font-semibold text-slate-900">Welcome back 🍺</h1>
        <p className="text-sm text-slate-600">Log in to see your beer stats.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-md border border-amber-100">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-300"
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-300"
            placeholder="••••••••"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-amber-500 text-white font-semibold py-3 text-sm shadow-sm hover:bg-amber-600 active:scale-[0.98] transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Logging in...' : 'Log in'}
        </button>
      </form>

      <p className="text-center text-sm text-slate-600">
        Don’t have an account?{' '}
        <Link href="/signup" className="font-semibold text-amber-700">
          Sign up
        </Link>
      </p>
    </div>
  );
}
