chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var requestURL = details.url;
    // https://regex101.com/r/bcBcDL/1
    var re = new RegExp('^http(:?s)?:\/\/www\.google\.(?:(?!com\/)[a-zA-Z]+\.?[a-zA-Z]+\/)', 'i');
    if (re.test(requestURL)) {
      return {
        redirectUrl: requestURL.replace(re, 'https://www.google.com/')
      };
    }
  },
  {urls: ['<all_urls>']},
  ['blocking']
);
