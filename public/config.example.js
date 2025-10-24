// Copy this to public/config.js and fill with your Firebase Web App credentials.
// These are client-side values (not secrets). Security is enforced by Firestore rules.
window.firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Keep the public demo read-only
window.demo = {
  allowWrites: false,
  useFirebase: false,
};
