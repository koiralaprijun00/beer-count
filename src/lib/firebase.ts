import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Validate that all required environment variables are present
const requiredEnvVars = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check for missing required variables
const missingVars = Object.entries(requiredEnvVars)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingVars.length > 0) {
  const errorMessage = `Missing required Firebase environment variables: ${missingVars.join(', ')}\n` +
    `Please check your .env.local file and restart your dev server.`;
  console.error('Firebase Configuration Error:', errorMessage);
  throw new Error(errorMessage);
}

const firebaseConfig = {
  apiKey: requiredEnvVars.apiKey!,
  authDomain: requiredEnvVars.authDomain!,
  projectId: requiredEnvVars.projectId!,
  storageBucket: requiredEnvVars.storageBucket!,
  messagingSenderId: requiredEnvVars.messagingSenderId!,
  appId: requiredEnvVars.appId!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Validate config object has all required fields
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
  console.error('Firebase Config:', firebaseConfig);
  throw new Error('Firebase configuration is incomplete. Please check your environment variables.');
}

let app;
try {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
} catch (error: any) {
  console.error('Firebase initialization error:', error);
  console.error('Firebase Config:', JSON.stringify(firebaseConfig, null, 2));
  throw new Error(`Failed to initialize Firebase: ${error.message}`);
}

// Verify app is initialized
if (!app) {
  throw new Error('Firebase app failed to initialize');
}

let auth: ReturnType<typeof getAuth>;
try {
  auth = getAuth(app);
} catch (error: any) {
  console.error('Firebase Auth initialization error:', error);
  console.error('App initialized:', !!app);
  throw new Error(`Failed to initialize Firebase Auth: ${error.message}`);
}

export { auth };
export const db = getFirestore(app);

// Auth providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

// Initialize Analytics only in browser environment
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
export { analytics };

