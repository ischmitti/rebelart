console.log("sw file");
const CACHE_NAME = "cache-v1";
const assetToCache = [
    "/",
    "/gallery",
    "/gallery/politics",
    "/gallery/more",
    "/about",
    "/poster"
]

self.addEventListener("install", function (event) {
    console.log("installing", self);
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log(assetToCache);
                return cache.addAll(assetToCache);
            })
            .catch(console.error)
    )
});

self.addEventListener("fetch", function (event) {
    event.respondWidth(
        catches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    )
});