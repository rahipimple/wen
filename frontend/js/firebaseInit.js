/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Firebase & Analytics Initialization
 *
 * Config provided for edwen-dcd41 project
 */

// User's Firebase web app configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj6CUcL9_tu3aoPv2iZC9PZHxGmBh7Fzg",
  authDomain: "edwen-dcd41.firebaseapp.com",
  databaseURL: "https://edwen-dcd41-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "edwen-dcd41",
  storageBucket: "edwen-dcd41.firebasestorage.app",
  messagingSenderId: "934831478430",
  appId: "1:934831478430:web:c8f6d6d5a1d6599cf98d8f",
  measurementId: "G-MB3BZSBF3K"
};

// Global variables for access across application modules
window.firebaseConfig = firebaseConfig;
window.firebaseApp = null;
window.firebaseAnalytics = null;

// Initialize Firebase App & Analytics safely
try {
  if (typeof firebase !== 'undefined') {
    // Initialize standard Firebase app instance
    const app = firebase.initializeApp(firebaseConfig);
    window.firebaseApp = app;

    // Initialize Analytics if supported in current browser context
    if (typeof firebase.analytics === 'function') {
      const analytics = firebase.analytics();
      window.firebaseAnalytics = analytics;
      console.log('✅ Firebase Analytics initialized (Measurement ID: G-MB3BZSBF3K)');
    }

    console.log('✅ Firebase successfully initialized for project:', firebaseConfig.projectId);
  } else {
    console.info('ℹ️ Firebase SDK script tag not loaded or blocked; running in standalone mode.');
  }
} catch (error) {
  console.warn('⚠️ Firebase initialization notice:', error.message);
}

/**
 * Universal event tracker helper
 * Safely forwards events to Firebase Analytics and falls back to console log
 */
window.trackEvent = function(eventName, eventParams = {}) {
  try {
    if (window.firebaseAnalytics && typeof window.firebaseAnalytics.logEvent === 'function') {
      window.firebaseAnalytics.logEvent(eventName, eventParams);
      console.log(`📊 [Firebase Analytics] Event: "${eventName}"`, eventParams);
    } else {
      console.debug(`📊 [Local Analytics Trace] Event: "${eventName}"`, eventParams);
    }
  } catch (err) {
    console.debug('Analytics logging skipped:', err);
  }
};
