import React from 'react';
import { sizes as avatarSizes } from '../src/components/Avatar/Avatar';
import { values as colors, titles as colorTitles, keys as colorKeys } from '../src/helpers/colors'
import DocIcon from './Components/Icon';
import {platform, IOS, ANDROID} from '../src/lib/platform';

window.osname = platform();
window.IOS = IOS;
window.ANDROID = ANDROID;

window.Icon = {};

Object.keys(icons).forEach((iconPath) => {
  let Icon = require('../dist/icons/' + iconPath +'.js').default;
  const iconSize = iconPath.split('/')[0];
  const iconName = 'Icon' + iconSize + iconPath.split('/')[1].charAt(0).toUpperCase() + iconPath.split('/')[1].slice(1);
  if (!window.Icon.hasOwnProperty(iconSize)) window.Icon[iconSize] = {};
  window[iconName] = (props) => <DocIcon><Icon { ...props } /></DocIcon>;
  window.Icon[iconSize][iconName] = (props) => <DocIcon><Icon { ...props } /></DocIcon>;
});

console.log(Icon);

window.colors = colors;

window.colorTitles = colorTitles;

window.colorKeys = colorKeys;

window.avatarSizes = avatarSizes;
