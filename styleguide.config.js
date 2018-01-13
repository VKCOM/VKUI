const path = require('path');

module.exports = {
  title: 'VKUI styleguide',
  assetsDir: path.join(__dirname, 'dist'),
  styleguideComponents: {
    PlaygroundRenderer: path.join(__dirname, 'styleguide/components/PlaygroundRenderer')
  },
  sections: [
    {
      name: 'Установка',
      content: 'styleguide/pages/installation.md'
    }, {
      name: 'Hello World',
      content: 'README.md'
    }, {
      name: 'Концепция',
      content: 'styleguide/pages/concept.md'
    }, {
      name: 'Компоненты',
      sections: [{
        name: 'Layout',
        components: () => [
          './src/components/View/View.js',
          './src/components/ScrollView/ScrollView.js',
          './src/components/Root/Root.js',
          './src/components/FixedLayout/FixedLayout.js'
        ]
      }, {
        name: 'Всплывающие окна',
        components: () => [
          './src/components/PopoutWrapper/PopoutWrapper.js',
          './src/components/ActionSheet/ActionSheet.js',
          './src/components/ActionSheetItem/ActionSheetItem.js',
          './src/components/Alert/Alert.js',
          './src/components/AlertInput/AlertInput.js',
          './src/components/ScreenSpinner/ScreenSpinner.js'
        ]
      }, {
        name: 'Элементы',
        components: () => [
          './src/components/Button/Button.js',
          './src/components/Tappable/Tappable.js'
        ]
      }]
    }
  ],
  context: {
    PropTypes: 'prop-types',
    ReactFrame: 'react-frame-component'
  },
  webpackConfig: Object.assign({}, require('./webpack.config'), {
    resolve: {
      alias: {
        'rsg-components/Preview': path.join(__dirname, 'styleguide/Components/Preview')
      }
    }
  })
};
