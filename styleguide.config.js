const path = require('path');

module.exports = {
  title: 'VKUI styleguide',
  // theme: {
  //   baseBackground: '#fdfdfc',
  //   link: '#274e75',
  //   linkHover: '#90a7bf',
  //   border: '#e0d2de',
  //   font: ['Helvetica', 'sans-serif'],
  // },
  // styles: {
  //
  // },

  // Override Styleguidist components
  styleguideComponents: {
    PlaygroundRenderer: path.join(__dirname, 'styleguide/components/Playground')
  },
};
