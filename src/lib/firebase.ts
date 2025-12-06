import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyAy5gvt8UQwKln_k4kR5E5sYe2rLHzviXo",
  authDomain: "hubcredo-3d6d8.firebaseapp.com",
  projectId: "hubcredo-3d6d8",
  storageBucket: "hubcredo-3d6d8.firebasestorage.app",
  messagingSenderId: "529557295214",
  appId: "1:529557295214:web:9cc06909b5762116e5d67f",
  measurementId: "G-S3SJ6D9LCR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export default app;
