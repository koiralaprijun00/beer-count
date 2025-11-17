import { UserBeer } from './firestore';

const STORAGE_KEY = 'beercount_user_beers';

// Get user beers from localStorage
export const getUserBeersFromStorage = (userId: string): UserBeer[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(`${STORAGE_KEY}_${userId}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to read from localStorage', error);
  }
  return [];
};

// Save user beers to localStorage
export const saveUserBeersToStorage = (userId: string, beers: UserBeer[]): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(beers));
  } catch (error) {
    console.error('Failed to save to localStorage', error);
  }
};

// Increment beer count in localStorage
export const incrementBeerCountInStorage = (userId: string, beerId: string): UserBeer => {
  const beers = getUserBeersFromStorage(userId);
  const existing = beers.find((b) => b.beerId === beerId);
  const now = Date.now();
  
  if (existing) {
    const updated = beers.map((b) =>
      b.beerId === beerId
        ? {
            ...b,
            count: b.count + 1,
            lastDrunkAt: { seconds: Math.floor(now / 1000), nanoseconds: 0 }
          }
        : b
    );
    saveUserBeersToStorage(userId, updated);
    return updated.find((b) => b.beerId === beerId)!;
  } else {
    const newBeer: UserBeer = {
      id: `local_${beerId}_${Date.now()}`,
      userId,
      beerId,
      count: 1,
      firstDrunkAt: { seconds: Math.floor(now / 1000), nanoseconds: 0 },
      lastDrunkAt: { seconds: Math.floor(now / 1000), nanoseconds: 0 }
    };
    const updated = [...beers, newBeer];
    saveUserBeersToStorage(userId, updated);
    return newBeer;
  }
};

// Decrement beer count in localStorage
export const decrementBeerCountInStorage = (userId: string, beerId: string): UserBeer | null => {
  const beers = getUserBeersFromStorage(userId);
  const existing = beers.find((b) => b.beerId === beerId);
  
  if (!existing || existing.count <= 1) {
    // Remove if count would be 0 or less
    const updated = beers.filter((b) => b.beerId !== beerId);
    saveUserBeersToStorage(userId, updated);
    return null;
  }
  
  const now = Date.now();
  const updated = beers.map((b) =>
    b.beerId === beerId
      ? {
          ...b,
          count: b.count - 1,
          lastDrunkAt: { seconds: Math.floor(now / 1000), nanoseconds: 0 }
        }
      : b
  );
  saveUserBeersToStorage(userId, updated);
  return updated.find((b) => b.beerId === beerId)!;
};

// Get single beer entry from localStorage
export const getUserBeerEntryFromStorage = (userId: string, beerId: string): UserBeer | null => {
  const beers = getUserBeersFromStorage(userId);
  return beers.find((b) => b.beerId === beerId) || null;
};

