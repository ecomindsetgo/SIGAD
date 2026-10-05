const CACHE='sigad-v0.3-shell';
const ASSETS=['./','./index.html','./assets/app.css','./assets/logo-sigad.png','./assets/logo-pj.png','./assets/icon-192.png','./assets/icon-512.png','./js/app.js','./js/archive360.js','./js/vendor-jszip.min.js','./data/plantilla_observaciones.csv','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{const copy=res.clone();if(new URL(e.request.url).origin===location.origin)caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html'))))});
