'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "04b4a88befc29ee98d83d44bacf20260",
"assets/assets/fonts/GreatVibes-Regular.ttf": "c1c92d0c804d46cb62814e7389725082",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/images/bg/bg1.jpg": "c8e29f1b41127c669587b4352ed493d4",
"assets/assets/images/bg/bg2.jpg": "54c25d227ec319aeff2739b305404f8e",
"assets/assets/images/couple/bg/pic1.jpg": "ee4be174c4247804e40aa15ae6cbd09b",
"assets/assets/images/couple/bg/pic2.jpg": "41c9ec21ecd11a66c4cb0471e65d7959",
"assets/assets/images/couple/bg/pic3.jpg": "7cc89bcc80dbc8e86de9cd83e20bee8c",
"assets/assets/images/couple/bg/pic4.jpg": "585d80c31253bfb2ba75fe60633d6b68",
"assets/assets/images/couple/bg/pic5.png": "7854046658ea3a8c4a6dd872d26ed0f3",
"assets/assets/images/couple/details/bride.JPEG": "dfa33a458813eb76c11d87a7b5cef56b",
"assets/assets/images/couple/details/groom.JPEG": "64b59a9a8fae0329ae8ca63db84c9eb6",
"assets/assets/images/couple/profile/bride.jpg": "aa1d8216f20a9ed670fe83ba25abadc9",
"assets/assets/images/couple/profile/groom.jpg": "c59c69cd573af6a1525a7d591c633cae",
"assets/assets/images/icons/actor.png": "c58c7d249ea0102477c04d1bb2421f0b",
"assets/assets/images/icons/c.jpg": "c74d089b87aebf836e6c0cb5f75ebe7e",
"assets/assets/images/icons/car.png": "48e13ce946d0907a041330b16c160e35",
"assets/assets/images/icons/color.png": "2bc06fd8a1063f520602b7de5937d378",
"assets/assets/images/icons/destination.png": "8b23710743def073df52b23ab54a2d7c",
"assets/assets/images/icons/events.png": "b119922e89aa94ab4a25e3f6d316a87e",
"assets/assets/images/icons/favlist.png": "3826cf87a4a0c497c3b5ced4edf832a1",
"assets/assets/images/icons/hobby.png": "cde8bc3168358697f64187286323438c",
"assets/assets/images/icons/icon.png": "8c1aa6a2e4221c8ad2dbf1cb406ae301",
"assets/assets/images/icons/movie.png": "6ff7fe8d4c350b49f878a173cbea94b8",
"assets/assets/images/icons/number.png": "541e4fa349a7d196e9256a71e3b98d4d",
"assets/assets/images/icons/photos.png": "4456370242406a675c252fca17cda3d5",
"assets/assets/images/icons/singer.png": "2496ac17e0d5280fd5ddaf5376efc2f0",
"assets/assets/images/icons/sport.png": "d06a6b5ce27ded8e4c17e0edb29eb19d",
"assets/assets/images/icons/video.png": "05109d9eb7d79e8b9541a1a3086381bf",
"assets/assets/images/icons/wishlist.png": "7b54f2c23d15ff94ce1ab3d74ab2835f",
"assets/assets/images/splash/faces.gif": "d470c5f16a84ffb3d586ef091dbd23b9",
"assets/FontManifest.json": "b4c08c87384b23dff92dadb0fd483c1c",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "73b1821438d908ce8f476cde123b2eaa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"favicon.png": "c89128a403615e100d035729a342eead",
"icons/Icon-192.png": "2d8d595ae9264985b13bd9be9720205a",
"icons/Icon-512.png": "d8df2ecd166d0fd35118262c1a1e234b",
"index.html": "348e0172a1cfd2b376f5f981f095a03e",
"/": "348e0172a1cfd2b376f5f981f095a03e",
"main.dart.js": "a484abc4caec5c447d235a18feead725",
"manifest.json": "c3e86a3c2bb27c93265d96cb99ebea8b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
