import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyA94oJQNcMgL0RoA0j0yCt4FeLOpHKp1Kw',
  authDomain: 'portfolio-cf690.firebaseapp.com',
  projectId: 'portfolio-cf690',
  storageBucket: 'portfolio-cf690.appspot.com',
  messagingSenderId: '945503066403',
  appId: '1:945503066403:web:a8f0ca34d753aca1f91496',
  measurementId: 'G-H767PL819J',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
