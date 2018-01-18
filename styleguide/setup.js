export const uaList = {
  ios: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
  android: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36'
};

Object.defineProperty(navigator, 'userAgent', {
  get: function () { return window.localStorage.getItem('vkui-styleguide:ua') || uaList.ios; }
});

window.colors = require('../src/helpers/colors');
