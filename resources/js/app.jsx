import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';
import Routing from './Client-Route/Routing';










const CACHE_NAME = 'my-react-app-cache-v1';
const urlsToCache = [
  '/Intro.jsx',
  '/TechStack.jsx',
  './Contact.jsx',
  './About.jsx',
  './Services.jsx',

];

// Install the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// Function to cache static assets
const cacheStaticAssets = async () => {
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(urlsToCache);
    console.log('Static assets cached successfully');
  } catch (error) {
    console.error('Error caching static assets:', error);
  }
};

// Cache static assets when the page loads
cacheStaticAssets();


const App = () => {
  return (
    <div className="Outfitfont text-white bg-[#07041B]">
      <Routing />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
