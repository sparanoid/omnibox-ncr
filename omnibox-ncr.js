// permissions update source: https://www.google.com/supported_domains
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var requestURL = details.url;
    // https://regex101.com/r/bcBcDL/3
    var re = new RegExp('^(http(?:s)?):\/\/www\.google\.(?:(?!com\/)[a-z]+\.?[a-z]+)', 'i');
    return {
      redirectUrl: requestURL.replace(re, '$1://www.google.com')
    };
  },
  {urls: ['<all_urls>']},
  ['blocking']
);
