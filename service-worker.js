self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("study-ai").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js",
        "./prompts.js"
      ])
    )
  );
});
