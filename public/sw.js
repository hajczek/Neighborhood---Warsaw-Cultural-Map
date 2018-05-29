/**
 * 
 * 
 */

self.addEventListener('install', function(e) {
    console.log("install");
    try {
      console.log('typeof System in install', typeof System);
    } catch (e) {}
  
    console.log('caching');
    e.waitUntil(
      caches.open('v1').then(function(cache) {
        console.log('caching - getting');
        return cache.addAll([
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
            'manifest.json',
        ]);
      }).catch(function(error) {
        console.log('error', error)
      })
    );
  
    self.addEventListener('fetch', function(e) {
      console.log('fetching ->', e.request);
      e.respondWith(
        caches.match(e.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          } else {
            console.log('There are not response content');
          }
          return fetch(e.request);
        })
      );
    });
  });