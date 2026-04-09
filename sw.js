const CACHE = 'wavs-v1';
const PRECACHE = [
    '/',
    '/index.html',
    '/.tmp/parks_data.js',
    '/.tmp/attractions_data.js',
    '/brand_asset/thailand-provinces.geojson',
    '/brand_asset/thailand.geojson',
    '/brand_asset/WAVS Logo.png',
    '/brand_asset/parks/khaoyai.jpg',
    '/brand_asset/parks/phukradueng.jpg',
    '/brand_asset/parks/doiinthanon.jpg',
    '/brand_asset/parks/kaengkrachan.jpg',
    '/brand_asset/parks/phiphi.jpg',
    '/brand_asset/parks/tarutao.jpg',
];

self.addEventListener('install', e =>
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()))
);

self.addEventListener('activate', e =>
    e.waitUntil(caches.keys().then(keys =>
        Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()))
);

self.addEventListener('fetch', e => {
    const url = e.request.url;
    // Skip cross-origin tile requests (map tiles, CDN scripts)
    if (!url.startsWith(self.location.origin)) return;
    e.respondWith(
        caches.match(e.request).then(cached => {
            const network = fetch(e.request).then(res => {
                if (res.ok) {
                    const clone = res.clone();
                    caches.open(CACHE).then(c => c.put(e.request, clone));
                }
                return res;
            });
            return cached || network;
        })
    );
});
