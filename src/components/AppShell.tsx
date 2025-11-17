'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuthContext } from '@/contexts/AuthContext';
import { useMemo } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/search', label: 'Search', icon: '🔍' }
];

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext();
  const router = useRouter();
  const pathname = usePathname();

  const userInitial = useMemo(() => user?.email?.[0]?.toUpperCase() ?? '🍺', [user]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-slate-900">
      <header className="sticky top-0 z-10 bg-[#fdfaf5]/90 backdrop-blur-md border-b border-amber-100">
        <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-semibold text-amber-700">
            <span className="text-xl">BeerCount</span>
            <span role="img" aria-label="beer">
              🍺
            </span>
          </Link>
          <div className="flex items-center gap-2">
            {user ? (
              <>
                <div className="h-9 w-9 rounded-full bg-amber-100 text-amber-700 grid place-items-center text-sm font-semibold border border-amber-200">
                  {userInitial}
                </div>
                <button
                  onClick={handleLogout}
                  className="rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 hover:bg-amber-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="rounded-full bg-amber-500 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-amber-600"
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 pb-20 pt-4">{children}</main>

      {user && (
        <nav className="fixed bottom-4 left-0 right-0">
          <div className="mx-auto flex max-w-md items-center justify-around rounded-full border border-amber-200 bg-white/95 px-4 py-2 shadow-md">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center text-xs font-medium transition ${
                    active ? 'text-amber-700' : 'text-slate-500'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <Link
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
              className="flex flex-col items-center text-xs font-medium text-slate-500 transition hover:text-amber-700"
            >
              <span className="text-lg">🚪</span>
              <span>Logout</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};
