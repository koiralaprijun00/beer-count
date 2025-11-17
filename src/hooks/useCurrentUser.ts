'use client';

import { useAuthContext } from '@/contexts/AuthContext';

export const useCurrentUser = () => {
  const { user, loading, error } = useAuthContext();
  return { user, loading, error };
};
