const path = require('path');
const fs = require('fs');
const typescriptDocgen = require('react-docgen-typescript');
const webpackConfig = require('./webpack.config');

const styleguideDir = path.join(__dirname, 'styleguide');

/**
 * Returns component paths by its names
 * @param {string[]} componentNames
 * @param {string[]} ext Available file extensions
 * @returns {string[]}
 *
 * @todo Temporary solution. Get rid of this function
 */
const getComponentsPaths = (componentNames, ext = ['tsx', 'ts']) => {
  return componentNames
    .map(
      item =>
        ext
          .map(ext => {
            const componentPath = path.join(styleguideDir, '../src/components/', item, item + '.' + ext);
            return !fs.existsSync(componentPath) ? false : componentPath;
          })
          .filter(Boolean)[0]
    )
    .filter(Boolean);
};

module.exports = {
  title: 'VKUI styleguide',
  styleguideDir: path.join(styleguideDir, '../docs'),
  styleguideComponents: {
    PlaygroundRenderer: path.join(styleguideDir, './components/PlaygroundRenderer'),
    StyleGuideRenderer: path.join(styleguideDir, './components/StyleGuideRenderer'),
    PathlineRenderer: path.join(styleguideDir, './components/PathlineRenderer')
  },
  // TODO
  propsParser: typescriptDocgen.withDefaultConfig({
    /* propFilter: { skipPropsWithoutDoc: true } */
  }).parse,
  sections: [
    {
      name: 'Intro',
      content: path.join(styleguideDir, './pages/intro.md')
    },
    {
      name: 'Installation',
      content: path.join(styleguideDir, './pages/installation.md')
    },
    {
      name: 'HTML',
      content: path.join(styleguideDir, './pages/html.md')
    },
    {
      name: 'Hello World',
      content: path.join(styleguideDir, './pages/hello_world.md')
    },
    {
      name: 'Concept',
      content: path.join(styleguideDir, './pages/concept.md')
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
        // {
        //   name: 'Popouts',
        //   components: () =>
        //     getComponentsPaths([
        //       'PopoutWrapper', //
        //       'ActionSheet',
        //       'ActionSheetItem',
        //       'Alert',
        //       'ScreenSpinner'
        //     ])
        // },
        // {
        //   name: 'Blocks',
        //   components: () =>
        //     getComponentsPaths([
        //       'Button',
        //       'CellButton',
        //       'Div',
        //       'Link',
        //       'Header',
        //       'Group',
        //       'Cell',
        //       'List',
        //       'Footer',
        //       'Spinner',
        //       'Switch',
        //       'InfoRow',
        //       'Avatar',
        //       'Entity',
        //       'Gallery',
        //       'Progress',
        //       'Search',
        //       'Tabs',
        //       'TabsItem',
        //       'FixedTabs',
        //       'Tooltip',
        //       'PullToRefresh',
        //       'Counter',
        //       'Touch'
        //     ])
        // },
        // {
        //   name: 'Forms',
        //   components: () =>
        //     getComponentsPaths([
        //       'FormLayout',
        //       'FormLayoutGroup',
        //       'FormStatus',
        //       'Slider',
        //       'RangeSlider',
        //       'Radio',
        //       'Checkbox',
        //       'Input',
        //       'Select',
        //       'SelectMimicry',
        //       'Textarea',
        //       'File'
        //     ])
        // },
        // {
        //   name: 'Helpers',
        //   content: path.join(styleguideDir, './pages/helpers.md'),
        //   components: () =>
        //     getComponentsPaths([
        //       'PanelSpinner',
        //       'PanelHeaderBack',
        //       'PanelHeaderClose',
        //       'PanelHeaderSubmit',
        //       'PanelHeaderEdit'
        //     ])
        // },
        {
          name: 'Icons',
          content: path.join(styleguideDir, './pages/icons.md')
        },
        {
          name: 'Colors',
          content: path.join(styleguideDir, './pages/colors.md')
        },
        {
          name: 'Themes',
          content: path.join(styleguideDir, './pages/themes.md')
        },
        {
          name: 'Utils',
          content: path.join(styleguideDir, './pages/utils.md')
        }
      ]
    }
  ],
  require: [path.resolve(styleguideDir, './setup.js'), path.resolve(styleguideDir, './setup.css')],
  webpackConfig: Object.assign({}, webpackConfig, {
    resolve: {
      alias: {
        'rsg-components/Preview': path.join(styleguideDir, './Components/Preview')
      }
    }
  })
};
