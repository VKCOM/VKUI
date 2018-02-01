import React from 'react';
import { sizes } from '../src/components/Avatar/Avatar';
import { values as colors, titles as colorTitles, keys as colorKeys } from '../src/helpers/colors'
import DocIcon from './Components/Icon';

window.Icon = {};

Object.keys(icons).forEach((iconName) => {
  let Icon = require('../dist/icons/' + iconName +'.js').default;
  window.Icon[`${iconName}`] = (props) => <DocIcon><Icon { ...props } /></DocIcon>;
});

window.colors = colors;

window.colorTitles = colorTitles;

window.colorKeys = colorKeys;

window.avatarSizes = sizes;
