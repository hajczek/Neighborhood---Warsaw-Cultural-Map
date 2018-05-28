/**
 * @description FEND Project 8 : Neighborhood
 * @description service worker for a offline map
 * @author Iwona Kolanowska
 * @version 1.0
 */

// Cache name
let cacheMap = 'cacheMap'; 

// Files list to cache
let cacheFiles = [
    '/',
    '../data/cinemas.json',
    '../data/galeries.json',
    '../data/museums.json',
    '../data/theatres.json',  
    '../icons/cinema.png',
    '../icons/galeria.png',
    '../icons/museum.png',
    '../icons/theatre.png',
    'index.html',
    './App.css',
    './App.js',
    './index.css',
    './Map.js',
    './Places.js',
    './WikipediaApi.js',
    '/static/js/bundle.js',
]

// Installation Service worker
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheMap).then(cache => {
        return cache.addAll(cacheFiles);
    }).then( () => {
        return self.skipWaiting();
        })
    );
});

// Activation Service worker
self.addEventListener('activate', e => {
    e.waitUntil(caches.keys()
    .then(cacheNames => Promise.all(cacheNames.filter(cacheName => cacheName.startsWith('cacheMap') && cacheName !== cacheMap)
    .map(cacheName => caches.delete(cacheName)))))
});


// Fetch Service worker
self.addEventListener('fetch', e => {
    
    const url = new URL(e.request.url);

    if (url.pathname.includes('index.html')) {
          e.respondWith(
              caches.match('index.html')
              .then(response => response || fetch(e.request))
          );
          return;
    } 
    e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});