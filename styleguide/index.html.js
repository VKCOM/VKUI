const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');
const {
  generateCSSReferences,
  generateJSReferences
} = MiniHtmlWebpackPlugin;

module.exports = ({ css, js, title, publicPath }) => (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      ${generateCSSReferences(css, publicPath)}
      <script>
        window.uaList = {
          ios: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
          android: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36'
        };
  
        Object.defineProperty(navigator, 'userAgent', {
          get: function () { return window.localStorage.getItem('vkui-styleguide:ua') || window.uaList.ios; }
        });
      </script>
      <style>
          * {
              -webkit-user-select: initial !important;
              user-select: initial !important;
          }
      </style>
    </head>
    <body>
      <div id="app"></div>
      ${generateJSReferences(js, publicPath)}
    </body>
  </html>
`);
