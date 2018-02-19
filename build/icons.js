const glob = require('glob');

module.exports.entry = glob.sync('./src/assets/svg/**/*.svg').reduce((entries, iconPath) => {
  let splitedPath = iconPath.split('/');
  const iconName = splitedPath.slice(-2).join('/').replace(/_\d*\.svg/, '');
  entries[iconName] = iconPath;
  return entries;
}, {});
