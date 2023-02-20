'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "untitled%20folder/.git/config": "5ec7d75dca5e834554b0fa10686a6dff",
"untitled%20folder/.git/objects/04/811e6c62f2879e510503806581f1b49235ffed": "5dfb8c7beecf350f1b381879287c53a1",
"untitled%20folder/.git/objects/6a/121bbc163ac5102ae31937f05d64ba5e02ef18": "6e290724fee6bbe366611a82a00eebad",
"untitled%20folder/.git/objects/bf/ad582fde15c4f3c92ede45531b71d41460d77a": "e5134c0bbd47e53340e204d61417282a",
"untitled%20folder/.git/objects/8b/0d98dff515bccb16d0c0b94c6e2f940abdb193": "2f33ce68e3c224b9e7b56e0f54aa2187",
"untitled%20folder/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"untitled%20folder/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"untitled%20folder/.git/logs/HEAD": "76deb50b99a0e499448ee227501cd880",
"untitled%20folder/.git/logs/refs/heads/main": "2fc06dec815e276adfdaec4a091102ca",
"untitled%20folder/.git/logs/refs/remotes/origin/main": "8a0730589b043d61d2a90ca77cfb3686",
"untitled%20folder/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"untitled%20folder/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"untitled%20folder/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"untitled%20folder/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"untitled%20folder/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"untitled%20folder/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"untitled%20folder/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"untitled%20folder/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"untitled%20folder/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"untitled%20folder/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"untitled%20folder/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"untitled%20folder/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"untitled%20folder/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"untitled%20folder/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"untitled%20folder/.git/refs/heads/main": "ab8417c9dafd90881a2a480e8fa52aac",
"untitled%20folder/.git/refs/remotes/origin/main": "ab8417c9dafd90881a2a480e8fa52aac",
"untitled%20folder/.git/index": "958382c4f6617c29823705514e73d131",
"untitled%20folder/.git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"untitled%20folder/Archive.zip": "d4b555c5f674b6e9f6ef4c9de76c3aef",
"version.json": "1642fdd4984b22a48a0fb58e77135b71",
"index.html": "a63f669455a15cb1051844a096a8bc7e",
"/": "a63f669455a15cb1051844a096a8bc7e",
"main.dart.js": "0b10d92f2e9c167cf5d3be4bbbb16ac0",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"v.jpeg": "bc1e13a55d51b989bc5af08bcdd10265",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9f5e78e4818f65d173c10e579b2f1c93",
".git/config": "3c3735f36d258671f3c10bc08ef4486b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3b/766c19852184558d97dbad10bcd1c930528dcc": "a911a1275f181ecc1447fdeb7e4c12c0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/3eb8fe6903c02163263f8b26fcf4de380b1571": "9bf9fe0e644859b9aad3054b3089a293",
".git/objects/32/01f8163b27621a471d5dc1235f5051fe7beb8a": "53e14fbee511793527955be08aa0a5ac",
".git/objects/56/ddb8a8174d70c5fc964c0616e3fbe99c1a1cff": "8761dd898456ec0cc5cc02958656463d",
".git/objects/67/aa5eaab25b1888cd19280cd2af389e8e43cfde": "34c553648eb025a29f618660ca3061b8",
".git/objects/9d/d152b003cf94fbb6dd27227fd0cf4bcf856518": "32d567207da91e972c5188ca8157d619",
".git/objects/a3/07f3213bd78e57303f7c12b2b4d58993893f34": "e6361fffe15928c9dcbc33f2751956c6",
".git/objects/ac/d75aed1a5a56f5b6ea92c44b2c383a46da2c65": "bbebfcd71246346e1fc4cba15115882a",
".git/objects/df/47ff5a67c8505e2e8c23272e16674005190b99": "d170b37455b882abe8f27c8fbd352243",
".git/objects/da/ef72240f038b2c1af90b6e7338f925a1c51606": "5f51fdc211dab66d75546d895f5060f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/2017f1cff8dcddba199a5f8cdbe43643951d3a": "4e9e9a4259f40a76e081f2e8609f27f7",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/d1ce6619c6b03e96b8abab846d5c0825d3d320": "0567eb7967e45e3812ffac9dc2c713f4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a4cdaa0ea889b0cf409971bf9b7a645655a43a": "35e9b20a2c42e4637905bc21a13c96ae",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e070a8fc7cff007697aed54f510ac8cccdd218": "d681bb62bd058323c98c4235c56fc9b6",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/27/77df95af2e01399c4057ed25609b6ecd4ae7db": "273829cc53546638f55f682a35526d4d",
".git/objects/4b/f802f1ec4935cd171797da727a76bd09ee3027": "6d73db0335ae754cc047726b28143e51",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/b39a751ccc516eb57c1064c8b37831a783f9ac": "0bcb003e92544e5ab2e6b790e95b3f8b",
".git/objects/42/2475d4f430aa0bafcf64965adfd4fc868bb82a": "20799d67ba1ed797391cdf5eaedbe2b7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/07ca94c46d4fd1b274f9017bfa344bef953360": "61f811874a7de996cde03a02a1f17655",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/4f1ae1978272e01b63fa7d3a82bc5383e79eaa": "8b55bdea027d750b35e5edc7395e5522",
".git/objects/91/89244597faac535b02530ca8d822f3039c8308": "22912e993179c5bd1f1cb1d37ea3a0c9",
".git/objects/62/a8e0b01a4d7c4e02e603271bda12d7465b6b74": "ebdae6745bccdf75ccfa9a12dc458559",
".git/objects/62/94dc661a613a8cd9fb78c7c4c0f955b6312c6c": "ea4bce3ca4042e7d8f5d322cd86a2ae0",
".git/objects/30/066dc4472dee1a9a5657dd04a6c9c0c5023df3": "cb443515892000cc2bf916723b13f807",
".git/objects/5e/0209274ac39d94c6558a34f17abd835124b37d": "85d3e7f52964c353d2623f7bca2f5a29",
".git/objects/39/e1f336e2f2ae2043c04984e3f33c2e8b6fe3c0": "b14b21f9b45e09a0940d9fa8a2530cbf",
".git/objects/b1/b5540c6613c977a3990475341645a58c40ad4b": "4543c8f752365677a8a289040bd1d6db",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/24b6c34e4980494917a888c1e1da0fcc38302d": "3db360598fd0b6846a395b34a08529c0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/23592ec0c99c9150813badc4da3161c171a8a2": "97bc716aedeb317caf09be21ea3aea30",
".git/objects/b0/f4a955dc8d955abfefe416145db1deeaebf931": "1b9362be0539f8a0ef026a88c7296fc5",
".git/objects/b0/475058c9191b4e1c6707d44afbc451a2ca52de": "8278aebf8fdd670d3d2b2ae7f1ed570c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/762e85c77783e4caec0fd57a6bc45f0e11e208": "91d36b690f314b7840542cdb683b86e7",
".git/objects/c4/51d5bd89103279c37508a31c0b8408c206dc43": "ebfa889bbf3c1893209beda139742edd",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/c72a1227c68b3c2f205fc8aaf4a7e9e0ef69b9": "a17ae1e7126253f4fb0c4b058615aa72",
".git/objects/f9/9f34f56bedf9df20139a4400c648e13f3d422b": "f4e7936e50fd4665011760584c0b2f13",
".git/objects/e8/481e17c6aaf23509300300717d4305957bee45": "8f41d2083bd9ad9444cd2ac26f770355",
".git/objects/fa/74cc585295cead8cb238bb9ae3e8ffc522bcd0": "736cc932cae6e03525b1cfc8c8207fcd",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/9fa30cbf51b2d1e61b3ca08f96c919ebdca01c": "5cc080a27f239fb4430d4505194e20ea",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/12/abd67fac76e0d7dfd7592e3476ccb614b3aa0b": "66b9ea479b7ffae424982f707bcf9ecd",
".git/objects/8c/0c21bf370f821b58a08a16198c6a3403f3f358": "7f60c65e2c5157c90a058f52bed032a7",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/29df89dede13e0dbd964ee089721286c11e8bd": "1b83a86cb85c49652b60394ac135b1fa",
".git/objects/47/f7e176f65b8be9f9eab6cf17db8deb38a9b32d": "46dd3ac5a2a320b17b9ab49dd7265d61",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "093bf6fc2c2d3a07e2e13abd6382a86a",
".git/logs/refs/heads/main": "f30ce65f78a5bf357fcf7ee67d2f7cae",
".git/logs/refs/remotes/origin/main": "57494e5f679ece4a4d4db49c90efc1c3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f0426acddcc81f32322e8f023e53ef1d",
".git/refs/remotes/origin/main": "f0426acddcc81f32322e8f023e53ef1d",
".git/index": "0b47ada12c367dcb75b3762063c60078",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "140ebc0cddd4a11a371e0ca289b081dd",
"assets/NOTICES": "44ef2d2635e3145e87516119449ab1c5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/v.jpeg": "93cc8e439fb0300e0b49ec281e77ddd2",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
