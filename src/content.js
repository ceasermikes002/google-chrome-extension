// content.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'blockWebsites') {
      blockWebsites(message.urls, message.duration);
    }
  });
  
  function blockWebsites(urls, duration) {
    // Implement logic to block websites using chrome.webRequest API
    // For example, you can redirect the blocked URLs to a custom page
    chrome.webRequest.onBeforeRequest.addListener(
      (details) => {
        if (urls.includes(details.url)) {
          return { redirectUrl: chrome.runtime.getURL('blocked.html') };
        }
      },
      { urls: ['<all_urls>'] },
      ['blocking']
    );
  
    // Set a timeout to unblock websites after the specified duration
    setTimeout(() => {
      chrome.webRequest.onBeforeRequest.removeListener(blockWebsites);
    }, duration * 60 * 1000);
  }
  