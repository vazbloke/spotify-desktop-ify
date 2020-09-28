chrome.webRequest.onBeforeRequest.addListener(
  ({ url }) => {
    const [fullMatch, type, identifier] =
      url.match(
        /open\.spotify\.com\/(track|album|artist|playlist|concert|episode|show)\/([^\&\#\/\?]+)/i
      ) || [];

    return fullMatch ? { redirectUrl: `spotify:${type}:${identifier}` } : null;
  },
  {
    urls: ['https://open.spotify.com/*'],
    types: ['xmlhttprequest'],
  },
  ['blocking']
);
