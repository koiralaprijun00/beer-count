import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where
} from 'firebase/firestore';
import { db } from './firebase';
import { seededBeers, Beer } from '@/data/beers';

export type UserBeer = {
  id: string;
  userId: string;
  beerId: string;
  count: number;
  firstDrunkAt?: { seconds: number; nanoseconds: number };
  lastDrunkAt?: { seconds: number; nanoseconds: number };
};

export const fetchAllBeers = async (): Promise<Beer[]> => {
  try {
    const snapshot = await getDocs(collection(db, 'beers'));
    if (snapshot.empty) {
      return seededBeers;
    }
    return snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...(docSnap.data() as Beer) }));
  } catch (error: any) {
    console.error('Failed to fetch beers', error);
    // Check if it's a Firestore not found/not initialized error
    if (error?.code === 'not-found' || error?.code === 404 || error?.message?.includes('not found')) {
      console.warn('Firestore database may not be initialized. Using seeded beers as fallback.');
    }
    return seededBeers;
  }
};

export const fetchBeerById = async (id: string): Promise<Beer | null> => {
  try {
    const snap = await getDoc(doc(db, 'beers', id));
    if (snap.exists()) {
      return { id: snap.id, ...(snap.data() as Beer) };
    }
    return seededBeers.find((beer) => beer.id === id) ?? null;
  } catch (error) {
    console.error('Failed to fetch beer by id', error);
    return seededBeers.find((beer) => beer.id === id) ?? null;
  }
};

export const fetchUserBeers = async (userId: string): Promise<UserBeer[]> => {
  try {
    const q = query(collection(db, 'userBeers'), where('userId', '==', userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...(docSnap.data() as UserBeer) }));
  } catch (error: any) {
    console.error('Failed to fetch user beers', error);
    // Check if it's a Firestore not found/not initialized error
    if (error?.code === 'not-found' || error?.code === 404 || error?.message?.includes('not found')) {
      console.warn('Firestore database may not be initialized. Returning empty array.');
    }
    return []; // Return empty array on error instead of hanging
  }
};

export const fetchUserBeerEntry = async (
  userId: string,
  beerId: string
): Promise<UserBeer | null> => {
  try {
    const q = query(
      collection(db, 'userBeers'),
      where('userId', '==', userId),
      where('beerId', '==', beerId)
    );
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    const docSnap = snapshot.docs[0];
    return { id: docSnap.id, ...(docSnap.data() as UserBeer) };
  } catch (error: any) {
    console.error('Failed to fetch user beer entry', error);
    return null;
  }
};

export const incrementUserBeerCount = async (
  userId: string,
  beerId: string
): Promise<UserBeer> => {
  try {
    const existing = await fetchUserBeerEntry(userId, beerId);
    if (!existing) {
      const now = Date.now();
      const newDoc = await addDoc(collection(db, 'userBeers'), {
        userId,
        beerId,
        count: 1,
        firstDrunkAt: serverTimestamp(),
        lastDrunkAt: serverTimestamp()
      });
      return {
        id: newDoc.id,
        userId,
        beerId,
        count: 1,
        firstDrunkAt: { seconds: Math.floor(now / 1000), nanoseconds: 0 },
        lastDrunkAt: { seconds: Math.floor(now / 1000), nanoseconds: 0 }
      };
    }

    const ref = doc(db, 'userBeers', existing.id);
    const now = Date.now();
    await updateDoc(ref, {
      count: existing.count + 1,
      lastDrunkAt: serverTimestamp()
    });
    return {
      ...existing,
      count: existing.count + 1,
      lastDrunkAt: { seconds: Math.floor(now / 1000), nanoseconds: 0 }
    };
  } catch (error: any) {
    console.error('Failed to increment user beer count', error);
    // Return a mock entry if Firestore fails (for offline/fallback behavior)
    throw new Error('Failed to save beer count. Please check your Firestore setup.');
  }
};

export const decrementUserBeerCount = async (
  userId: string,
  beerId: string
): Promise<UserBeer | null> => {
  const existing = await fetchUserBeerEntry(userId, beerId);
  if (!existing) return null;

  if (existing.count <= 1) {
    await deleteDoc(doc(db, 'userBeers', existing.id));
    return null;
  }

  const ref = doc(db, 'userBeers', existing.id);
  const now = Date.now();
  await updateDoc(ref, {
    count: existing.count - 1,
    lastDrunkAt: serverTimestamp()
  });
  return {
    ...existing,
    count: existing.count - 1,
    lastDrunkAt: { seconds: Math.floor(now / 1000), nanoseconds: 0 }
  };
};
