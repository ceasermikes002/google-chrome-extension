const iframeHosts = [
  '*',
];

chrome.runtime.onInstalled.addListener(() => {
  const RULE = {
    id: 1,
    condition: {
      initiatorDomains: [chrome.runtime.id],
      requestDomains: iframeHosts,
      resourceTypes: ['sub_frame'],
    },
    action: {
      type: 'modifyHeaders',
      responseHeaders: [
        {header: 'X-Frame-Options', operation: 'remove'},
        {header: 'Frame-Options', operation: 'remove'},
        // Uncomment the following line to suppress `frame-ancestors` error
        // {header: 'Content-Security-Policy', operation: 'remove'},
      ],
    },
  };
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [RULE.id],
    addRules: [RULE],
  });
});