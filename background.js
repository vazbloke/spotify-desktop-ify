chrome.webRequest.onBeforeRequest.addListener(
  ({ url }) => {
    const [fullMatch, type, identifier] =
      url.match(
        /spotify\.com\/(track|album|artist|playlist|concert|episode|show)\/([^\&\#\/\?]+)/i
      ) || [];

    return fullMatch ? { redirectUrl: `spotify:${type}:${identifier}` } : null;
  },
  {
    urls: ['*://open.spotify.com/*', '*://play.spotify.com/*'],
    types: ['xmlhttprequest'],
  },
  ['blocking']
);
