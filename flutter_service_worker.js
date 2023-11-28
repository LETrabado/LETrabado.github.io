'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "147b9c701d1d55031538db3bf6961c02",
"assets/AssetManifest.json": "e44317ccad48f0e92f205bb0869454ec",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/lib/assets/broken_images/img1/0.jpg": "6933787bafbf317f62984e5a1da62ca8",
"assets/lib/assets/broken_images/img1/1.jpg": "bc5c0c21d17b0620d2a15aa9a20cd021",
"assets/lib/assets/broken_images/img1/2.jpg": "c5f146f19d531b1443ab6b0b4d5e452b",
"assets/lib/assets/broken_images/img1/3.jpg": "2199e55a8a87e713c232cbca08ca4b04",
"assets/lib/assets/broken_images/img1/4.jpg": "97dd5197e20546a566aae7c1da2c66d0",
"assets/lib/assets/broken_images/img1/5.jpg": "76c4ae3057bc9a00935ef6c50f0de778",
"assets/lib/assets/broken_images/img1/6.jpg": "9324b458f54a4ab726ea7abac16926b9",
"assets/lib/assets/broken_images/img1/7.jpg": "b5b6d7422d001a725c8f6ceea3a56b15",
"assets/lib/assets/broken_images/img1/8.jpg": "8a1dcffbe709ea4522390572cef130b8",
"assets/lib/assets/broken_images/img1/9.jpg": "51ac2083463075b80bd7362873793fac",
"assets/lib/assets/broken_images/img2/0.jpg": "6933787bafbf317f62984e5a1da62ca8",
"assets/lib/assets/broken_images/img2/1.jpg": "09646f29a2297f6a30c00893ef3f452a",
"assets/lib/assets/broken_images/img2/2.jpg": "28c0ed6cd88c437cb53ddeeb408bcdea",
"assets/lib/assets/broken_images/img2/3.jpg": "44acceacfb6bc21db214a6f0c31058d9",
"assets/lib/assets/broken_images/img2/4.jpg": "bd96775f5f9ecf0f8302b65a9c7fb534",
"assets/lib/assets/broken_images/img2/5.jpg": "cfb090bdbc442011a82b47f289f1d6d9",
"assets/lib/assets/broken_images/img2/6.jpg": "66baab5d3b3e5498486f746bb2733e60",
"assets/lib/assets/broken_images/img2/7.jpg": "821564638ae56a38e3ace32f83070229",
"assets/lib/assets/broken_images/img2/8.jpg": "6a23ea2b8d2bd200bf5428a3b630e33e",
"assets/lib/assets/broken_images/img2/9.jpg": "a7aea1feb25f328ef5a70f7951e87c03",
"assets/lib/assets/broken_images/img3/0.jpg": "6933787bafbf317f62984e5a1da62ca8",
"assets/lib/assets/broken_images/img3/1.jpg": "839abe80ee7755d5f2c43380c47c26a9",
"assets/lib/assets/broken_images/img3/2.jpg": "0d348f704f454a2556c7eedfba2dd06d",
"assets/lib/assets/broken_images/img3/3.jpg": "5facaf6eaf957442325984f7bdc21372",
"assets/lib/assets/broken_images/img3/4.jpg": "f5d5c1c29d33e78ee690f26e17dd8957",
"assets/lib/assets/broken_images/img3/5.jpg": "878987ed33fb3abda599e9fa8f2048ad",
"assets/lib/assets/broken_images/img3/6.jpg": "7d99dbd1a12b19c5be733d3827ca1392",
"assets/lib/assets/broken_images/img3/7.jpg": "021a1883e48acf70dfa9ed62e2c61ca7",
"assets/lib/assets/broken_images/img3/8.jpg": "75f76bf219bd306a160f29c48c6c497f",
"assets/lib/assets/broken_images/img3/9.jpg": "9b4e34e578c3d2a7acd99ed199fd3fbc",
"assets/lib/assets/broken_images/img4/0.jpg": "6933787bafbf317f62984e5a1da62ca8",
"assets/lib/assets/broken_images/img4/1.jpg": "1d9f70e76ee5d677fc1ccf8a746febb9",
"assets/lib/assets/broken_images/img4/2.jpg": "f270cea846f71f1c87af6b7ae317bcfa",
"assets/lib/assets/broken_images/img4/3.jpg": "d84aaca9e30b3fcaa23068542f95417c",
"assets/lib/assets/broken_images/img4/4.jpg": "cb02fcd7508abd17b3b33c9472a8a0c6",
"assets/lib/assets/broken_images/img4/5.jpg": "c9e4cdb9291223a4f394183ed992bacf",
"assets/lib/assets/broken_images/img4/6.jpg": "96991fb696038084269155774ceaaed5",
"assets/lib/assets/broken_images/img4/7.jpg": "11336f8336cf1bd782ccbf6819d72c92",
"assets/lib/assets/broken_images/img4/8.jpg": "538d35d4f7be0b0cbbbc3d556e0fe8e8",
"assets/lib/assets/broken_images/img4/9.jpg": "fd59d45f865fd050f1acc837adb8e83b",
"assets/lib/assets/broken_images/img5/0.jpg": "6933787bafbf317f62984e5a1da62ca8",
"assets/lib/assets/broken_images/img5/1.jpg": "cb039f38c48f19d8d9c5335444e7e813",
"assets/lib/assets/broken_images/img5/2.jpg": "6a66e2cc29601a467b4f94de65cc2505",
"assets/lib/assets/broken_images/img5/3.jpg": "efa6f7d487ebe0f661fc27e55c474dc1",
"assets/lib/assets/broken_images/img5/4.jpg": "cc6d82b22b19f6e8f8731f5caea9e23b",
"assets/lib/assets/broken_images/img5/5.jpg": "2278d3b84640cac0f66f32aae54a58e9",
"assets/lib/assets/broken_images/img5/6.jpg": "3ecc7790d1ff1c937762b956b7f2550b",
"assets/lib/assets/broken_images/img5/7.jpg": "b0c395656e1133eaf3a496b4e7ee902d",
"assets/lib/assets/broken_images/img5/8.jpg": "a5fca7b7aadeb6e2daaa6b39ce50f8a6",
"assets/lib/assets/broken_images/img5/9.jpg": "6d3202ef845b29055e9605f830e9b3f4",
"assets/lib/assets/broken_images/img6/0.jpg": "6933787bafbf317f62984e5a1da62ca8",
"assets/lib/assets/broken_images/img6/1.jpg": "60ecfe258a0e012e1fae8f910d1bd6d7",
"assets/lib/assets/broken_images/img6/2.jpg": "81b0c19b48e0ab5e5131cb1397399072",
"assets/lib/assets/broken_images/img6/3.jpg": "3fbbe021d933f6f27ae74624058e578d",
"assets/lib/assets/broken_images/img6/4.jpg": "f59f01772122625e16f0cb3e334816f2",
"assets/lib/assets/broken_images/img6/5.jpg": "5988cf942468aeba026a48bb66afd0e9",
"assets/lib/assets/broken_images/img6/6.jpg": "a38252af35ccc18f765944c1d57aa18c",
"assets/lib/assets/broken_images/img6/7.jpg": "98fecc64778f8ae530d9261f962e262f",
"assets/lib/assets/broken_images/img6/8.jpg": "52c94cf9af9059dfe9afa9f5adbeb45e",
"assets/lib/assets/broken_images/img6/9.jpg": "f535326fcc83b42becbd321a06107281",
"assets/NOTICES": "b4759f5ccc00ce455aa5e8e0a5c6a697",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "867a218cea783bcfb57d68e465a384eb",
"/": "867a218cea783bcfb57d68e465a384eb",
"main.dart.js": "32bee4e507cc8a69773f5b96c04d6091",
"manifest.json": "567f1d4a57199f420f4af9acf7c87a96",
"version.json": "c54d1f62d68ad3e2a5a6ef996db66b9c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
