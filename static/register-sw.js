if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      () => {
        console.log("ServiceWorker registered!");
      },
      (err) => {
        console.log("ServiceWorker registration failed: ", err);
      },
    );
  });
}
