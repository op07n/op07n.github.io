/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0919a8aa0040231ac290b652b0660fd1"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "50aed08c9bd1d8a18d295039a346d894"
  },
  {
    "url": "assets/css/0.styles.bfd1efc9.css",
    "revision": "b511fabb83f079ed01ece1daff9c8453"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/js/1.f423a4fc.js",
    "revision": "539096279149ed6d8d215e9732e397ca"
  },
  {
    "url": "assets/js/10.5f110b11.js",
    "revision": "03822118dfaadd644ae9c0b41707c94f"
  },
  {
    "url": "assets/js/11.cd2adbb2.js",
    "revision": "34a35732bbd3614f593749b6d168be24"
  },
  {
    "url": "assets/js/12.8162d2cc.js",
    "revision": "07a5148533bc5cd8ffc9aa92dbe33dcd"
  },
  {
    "url": "assets/js/13.b23a6799.js",
    "revision": "abb8301395fad8adba57a644a13bdbf6"
  },
  {
    "url": "assets/js/14.c77126b8.js",
    "revision": "3da1b4c7bc06228ff24456158ad44f6d"
  },
  {
    "url": "assets/js/15.a0b9db92.js",
    "revision": "9d2cdbb4bfc064ce75e1221d616511f3"
  },
  {
    "url": "assets/js/16.d59d0d1c.js",
    "revision": "a17fed18ee108563ca2892b1aa6439ee"
  },
  {
    "url": "assets/js/17.a333b823.js",
    "revision": "6d7eaae015150469230b8e951ce2de76"
  },
  {
    "url": "assets/js/18.4ecb947a.js",
    "revision": "b6d2efb420000e6488a9defbd5e41ab5"
  },
  {
    "url": "assets/js/19.eea177bf.js",
    "revision": "872b8ecaeef1f6793b0468e29d4f8465"
  },
  {
    "url": "assets/js/2.e8201684.js",
    "revision": "480a3650a1f8e81f9ce9f0a775ec5e4c"
  },
  {
    "url": "assets/js/20.ba981131.js",
    "revision": "5a8002274106b965655c083bb55e3f84"
  },
  {
    "url": "assets/js/21.38159a71.js",
    "revision": "13ba90c4a28bd1c65b807cc8dd820492"
  },
  {
    "url": "assets/js/22.1f44248a.js",
    "revision": "077b2a4068523514b14617f490e3d5b4"
  },
  {
    "url": "assets/js/23.3385926e.js",
    "revision": "bdfac7e64563bcc24f85d2858519de06"
  },
  {
    "url": "assets/js/24.83621441.js",
    "revision": "600844f3b06bc3422199aa5e89822106"
  },
  {
    "url": "assets/js/25.9dcb5309.js",
    "revision": "3a074d1d6d5dc44b121539b4488cd14f"
  },
  {
    "url": "assets/js/26.3b20d750.js",
    "revision": "f4bb974c4f6492f063a627f716cb2f6c"
  },
  {
    "url": "assets/js/27.f7b5dadd.js",
    "revision": "f1d86da7033e2678ab702f4648e5817a"
  },
  {
    "url": "assets/js/28.39ddf49d.js",
    "revision": "471524f3f7f62912574947a1e134eff8"
  },
  {
    "url": "assets/js/29.9e75d860.js",
    "revision": "9740c66b4ee48522e3fe1893129c1ea1"
  },
  {
    "url": "assets/js/3.6952d45c.js",
    "revision": "d0b0f8aa373a7051b31d5292da38a615"
  },
  {
    "url": "assets/js/30.21b50eed.js",
    "revision": "e367c42fe2cfd2f0e1e90eaa81f27747"
  },
  {
    "url": "assets/js/31.68d1dd68.js",
    "revision": "8e56620e3618c8067b9537045c1315df"
  },
  {
    "url": "assets/js/32.5282efa2.js",
    "revision": "0bd210919fe6aacbf3d51489bb4a7493"
  },
  {
    "url": "assets/js/33.5639ccb5.js",
    "revision": "b4aef47b6027308205a38a3e516b5e0c"
  },
  {
    "url": "assets/js/34.f493339f.js",
    "revision": "b84d9740afcae72b62da8b400246fc1d"
  },
  {
    "url": "assets/js/35.d11b4d74.js",
    "revision": "5a556788f215e5cf54bea3961522226e"
  },
  {
    "url": "assets/js/36.f088e529.js",
    "revision": "14369fd34f802ebf656adc504763e384"
  },
  {
    "url": "assets/js/37.024a5867.js",
    "revision": "b5507c8be58a428ed4cb3a982e4d695b"
  },
  {
    "url": "assets/js/38.11dacc44.js",
    "revision": "51884a399feb0fb522374a03e1b3b3cd"
  },
  {
    "url": "assets/js/39.2b000edc.js",
    "revision": "edbb839a0211eef85bcb84f0a809440a"
  },
  {
    "url": "assets/js/4.94fa93bb.js",
    "revision": "a62109d889dac640b74280dfd4cc8b08"
  },
  {
    "url": "assets/js/40.e97aba22.js",
    "revision": "2752a844c8fec74ef54571a5a989850c"
  },
  {
    "url": "assets/js/41.edefd9c0.js",
    "revision": "8b6c98409284b8edbcadad2963a415f0"
  },
  {
    "url": "assets/js/42.df1c0269.js",
    "revision": "edf2c889169d4e45ab63806f885aa7ed"
  },
  {
    "url": "assets/js/43.a8dc7685.js",
    "revision": "308a4ef3ad3cb1da1e814adb09a0d3bc"
  },
  {
    "url": "assets/js/44.0066c772.js",
    "revision": "72cf4b694fe02a488695bfe024f39220"
  },
  {
    "url": "assets/js/45.c729feae.js",
    "revision": "ef394c2607f655bd2cb64ca3d94e48fb"
  },
  {
    "url": "assets/js/46.c26b609b.js",
    "revision": "42cfdabba1488af2a1e0565c6439f27f"
  },
  {
    "url": "assets/js/47.16fdd0be.js",
    "revision": "1bb8126a458749059ef1481b9fe8bdb0"
  },
  {
    "url": "assets/js/48.6141a129.js",
    "revision": "cfbb49f672bf0b5ccdab8bbd857199f4"
  },
  {
    "url": "assets/js/49.63459b53.js",
    "revision": "629806082f1745f5a49a6c67ded6efd5"
  },
  {
    "url": "assets/js/5.5dff776a.js",
    "revision": "3e086a9c03db230d7b9e5a8f19a86499"
  },
  {
    "url": "assets/js/50.79e7d800.js",
    "revision": "f3760993525db50cc128d14426876666"
  },
  {
    "url": "assets/js/51.5d592ad0.js",
    "revision": "4878aa718e9fef0771b59a074aa99554"
  },
  {
    "url": "assets/js/52.822caa9c.js",
    "revision": "ce473bcb16b86408ab0952801bb21326"
  },
  {
    "url": "assets/js/53.d104371a.js",
    "revision": "5dc9455504a4d06d7c9cbf1c4a6880a0"
  },
  {
    "url": "assets/js/54.59186627.js",
    "revision": "875e764550f31fc43ec7610d9e88bb25"
  },
  {
    "url": "assets/js/55.22062d1b.js",
    "revision": "28c4f5b98ef3ddf60634171dc27e1b3c"
  },
  {
    "url": "assets/js/6.051e918d.js",
    "revision": "bda05f1d80f7d5224e42ec89f31dda96"
  },
  {
    "url": "assets/js/7.3c977809.js",
    "revision": "56fbc9ec595dcb4b9f8eaf411a12723b"
  },
  {
    "url": "assets/js/9.2c4ad484.js",
    "revision": "71df20039d8996d951636ab970a7fda2"
  },
  {
    "url": "assets/js/app.d948e1cb.js",
    "revision": "4494d822c9340ce1a9bc0440882a38e9"
  },
  {
    "url": "authors/index.html",
    "revision": "f8233b660821c6cae8f4e3b34c4b0e83"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "159594a2ca4a548cbf48e69541e42482"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "categories/index.html",
    "revision": "dbeb023059b083493e05fa840c1cdc6a"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "ece78c2943327e4eda526dce563f8914"
  },
  {
    "url": "contact/index.html",
    "revision": "1daae6b1676cd571ba5c7b36cdfe79a0"
  },
  {
    "url": "es/autores/index.html",
    "revision": "ba9c04e4d0055d7a4cba196aa2c2aabd"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "5050f3438729942f1966cec711dfac24"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "7a14fa8181e15048baefc7023dcd934c"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "2a1c39ac7b342f9c1eb1a8023c785ef3"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "2e5031816e33ec49cc5a9593b674a7de"
  },
  {
    "url": "es/index.html",
    "revision": "96bff8540ec97be530aa6a6d3f4a4720"
  },
  {
    "url": "es/posts/index.html",
    "revision": "7ba48b207f8f2fcbf5b9642ce9966e7e"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "0b6f8ff3264d5bfd09a01e1dc6673a66"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "f10b215d3b188e0b291ba378c4c30523"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "index.html",
    "revision": "d55afb30c4158f8d22de35d3588a2039"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "posts/How-I-run-this-blog-with-travis.html",
    "revision": "5f3c9c828ee6b31173a22cba43b29acc"
  },
  {
    "url": "posts/index.html",
    "revision": "cfa4161732fd885144632c7a09690b98"
  },
  {
    "url": "posts/Mono-winforms-on-replit.html",
    "revision": "5f784366f8f6574918e74cfb6adb30fe"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "cc9ddd717e694bfccd75c5b7664e553e"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "081cf30158c25805d6b44b3fb9fd29cd"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "ccb6b976cbb39e1393d1559838ced124"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "a71bf01803db49ba1fcdef7578a56325"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "2cca7fafd09aeb5ccac098515d616c7c"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "024293c58e6f57055391c4c385a7f055"
  },
  {
    "url": "pt/index.html",
    "revision": "86d2d080de897e78572625f2cb407685"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "e096358891a0b9dd8b4019e9be719739"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "5401d51932fc9f683f3f87e2165f1813"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "3a8e6596c27c81b488352d11a13526ca"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
