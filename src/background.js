// src/background.js
let blockedUrls = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'block') {
    blockedUrls = request.urls;
    setTimeout(() => {
      blockedUrls = [];
    }, request.duration * 60 * 1000); // Convert minutes to milliseconds
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (blockedUrls.some(url => details.url.includes(url))) {
      return { cancel: true };
    }
    return { cancel: false };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
