const path = require('path');
const fs = require('fs');
const typescriptDocgen = require('react-docgen-typescript');
const webpackConfig = require('../webpack.config');

/**
 * Returns component paths by its names
 * @param {string[]} componentNames
 * @param {string[]} ext Available file extensions
 * @returns {string[]}
 *
 * @todo Temporary solution. Get rid of this function
 */
const getComponentsPaths = (componentNames, ext = ['tsx', 'js']) => {
  return componentNames
    .map(
      item =>
        ext
          .map(ext => {
            const componentPath = path.join(__dirname, '../src/components/', item, item + '.' + ext);
            return !fs.existsSync(componentPath) ? false : componentPath;
          })
          .filter(Boolean)[0]
    )
    .filter(Boolean);
};

module.exports = {
  title: 'VKUI styleguide',
  styleguideDir: path.join(__dirname, '../docs'),
  styleguideComponents: {
    PlaygroundRenderer: path.join(__dirname, './components/PlaygroundRenderer'),
    StyleGuideRenderer: path.join(__dirname, './components/StyleGuideRenderer'),
    PathlineRenderer: path.join(__dirname, './components/PathlineRenderer')
  },
  // TODO
  // propsParser: typescriptDocgen.withDefaultConfig().parse,
  sections: [
    {
      name: 'Intro',
      content: './pages/intro.md'
    },
    {
      name: 'Installation',
      content: './pages/installation.md'
    },
    {
      name: 'HTML',
      content: './pages/html.md'
    },
    {
      name: 'Hello World',
      content: './pages/hello_world.md'
    },
    {
      name: 'Concept',
      content: './pages/concept.md'
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Layout',
          components: () =>
            getComponentsPaths([
              'Root',
              'View',
              'Panel',
              'PanelHeader',
              'HeaderButton',
              'PanelHeaderContent',
              'HeaderContext',
              'Epic',
              'Tabbar',
              'TabbarItem',
              'FixedLayout',
              'HorizontalScroll'
            ])
        },
        {
          name: 'Popouts',
          components: () =>
            getComponentsPaths([
              'PopoutWrapper', //
              'ActionSheet',
              'ActionSheetItem',
              'Alert',
              'ScreenSpinner'
            ])
        },
        {
          name: 'Blocks',
          components: () =>
            getComponentsPaths([
              'Button',
              'CellButton',
              'Div',
              'Link',
              'Header',
              'Group',
              'Cell',
              'List',
              'Footer',
              'Spinner',
              'Switch',
              'InfoRow',
              'Avatar',
              'Entity',
              'Gallery',
              'Progress',
              'Search',
              'Tabs',
              'TabsItem',
              'FixedTabs',
              'Tooltip',
              'PullToRefresh',
              'Counter',
              'Touch'
            ])
        },
        {
          name: 'Forms',
          components: () =>
            getComponentsPaths([
              'FormLayout',
              'FormLayoutGroup',
              'FormStatus',
              'Slider',
              'RangeSlider',
              'Radio',
              'Checkbox',
              'Input',
              'Select',
              'SelectMimicry',
              'Textarea',
              'File'
            ])
        },
        {
          name: 'Helpers',
          content: './pages/helpers.md',
          components: () =>
            getComponentsPaths([
              'PanelSpinner',
              'PanelHeaderBack',
              'PanelHeaderClose',
              'PanelHeaderSubmit',
              'PanelHeaderEdit'
            ])
        },
        {
          name: 'Icons',
          content: './pages/icons.md'
        },
        {
          name: 'Colors',
          content: './pages/colors.md'
        },
        {
          name: 'Themes',
          content: './pages/themes.md'
        },
        {
          name: 'Utils',
          content: './pages/utils.md'
        }
      ]
    }
  ],
  require: [path.resolve(__dirname, './setup.js'), path.resolve(__dirname, './setup.css')],
  webpackConfig: Object.assign({}, webpackConfig, {
    resolve: {
      alias: {
        'rsg-components/Preview': path.join(__dirname, './Components/Preview')
      }
    }
  })
};
