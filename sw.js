// Keeps every game file on the iPad so it runs with no internet. A new version string replaces the old cache.
const CACHE = 'sarang-bada-cb4cc24314';
const FILES = ["./", "assets/boksil-laugh.jpg", "assets/boksil.jpg", "assets/bubu-laugh.jpg", "assets/bubu.jpg", "assets/doto.jpg", "assets/lulu-laugh.jpg", "assets/lulu.jpg", "assets/momo-laugh.jpg", "assets/momo-sing.jpg", "assets/mungsil-chef.jpg", "assets/mungsil-laugh.jpg", "assets/nabi-laugh.jpg", "assets/nabi.jpg", "assets/pingping-laugh.jpg", "assets/pingping.jpg", "assets/ppobyongi-cheer.jpg", "assets/ppobyongi-laugh.jpg", "assets/ppobyongi-meadow.jpg", "assets/ppobyongi-sleepy.jpg", "assets/ppobyongi-surprise.jpg", "fonts/Gowun.woff2", "fonts/Jua.woff2", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "index.html", "manifest.webmanifest"];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request).catch(() => caches.match('./index.html'))));
});
