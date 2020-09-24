chrome.webRequest.onBeforeRequest.addListener(
  ({ url }) => {
    const [fullURL, type, URI] = url.match(
      /[\/\&](track|playlist|album|artist)\/([^\&\#\/\?]+)/i
    );

    return { redirectUrl: `spotify:${type}:${URI}` };
  },
  {
    urls: ['*://open.spotify.com/*', '*://play.spotify.com/*'],
    types: [
      'main_frame',
      'sub_frame',
      'stylesheet',
      'script',
      'image',
      'object',
      'xmlhttprequest',
      'other',
    ],
  },
  ['blocking']
);
