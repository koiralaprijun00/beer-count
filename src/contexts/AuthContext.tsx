'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  error: null
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
        setError(null); // Clear any previous errors on successful auth state
      },
      (err) => {
        // Handle specific Firebase Auth errors
        const errorCode = (err as any)?.code;
        const errorMessage = err?.message || '';
        if (errorCode === 'auth/configuration-not-found' || errorMessage.includes('CONFIGURATION_NOT_FOUND')) {
          const configError = new Error(
            'Firebase Authentication is not configured. Please enable Authentication in Firebase Console: ' +
            'https://console.firebase.google.com/project/beer-count-55993/authentication'
          );
          setError(configError);
        } else {
          setError(err);
        }
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
