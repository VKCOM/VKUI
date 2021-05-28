const path = require('path');
const glob = require('glob');

const cmpDir = path.normalize(path.join(__dirname, '../src/components'));
const components = glob.sync('**/*.tsx', { cwd: cmpDir })
  .filter(f => path.basename(f).match(/^[A-Z]/) && !f.match(/\.(e2e|test)\.tsx$/))
  .map(f => f.split('.')[0]);
const stylesheets = glob.sync('**/*.css', { cwd: cmpDir });

const modular = [];
const globals = [];

const isModular = {
  'AdaptivityProvider/AdaptivityContext': false,
  'AdaptivityProvider/AdaptivityProvider': false,
  'AppRoot/AppRoot': false,
  'AppRoot/AppRootPortal': false,
  'ConfigProvider/ConfigProvider': false,
  'ConfigProvider/ConfigProviderContext': false,
  'NativeSelect/NativeSelect': false,
  'PanelHeaderClose/PanelHeaderClose': false,
  'PanelHeaderEdit/PanelHeaderEdit': false,
  'PanelHeaderSubmit/PanelHeaderSubmit': false,
  'PanelSpinner/PanelSpinner': false,
  'SelectMimicry/SelectMimicry': false,
  'Slider/Slider': true,
  'Tooltip/TooltipContainer': false,
  'Touch/Touch': false,
};

components.forEach(cmp => {
  const styles = stylesheets.filter(s => path.dirname(s) === path.dirname(cmp));
  if (cmp in isModular) {
    return (isModular[cmp] ? modular : globals).push(cmp);
  }
  if (styles.length) {
    return (styles.some(s => s.endsWith('.m.css')) ? modular : globals).push(cmp);
  }
  throw new Error(`Can not infer CSS modularity for ${cmp}`);
});

Object.assign(module.exports, { modular, globals });
