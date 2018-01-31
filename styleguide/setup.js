import React from 'react';
import { sizes } from '../src/components/Avatar/Avatar';
import { values as colors, titles as colorTitles, keys as colorKeys } from '../src/helpers/colors'
import Icon24About from '../dist/icons/24/about_24';
import Icon24Services from '../dist/icons/24/services_24';

import DocIcon from './Components/Icon';

window.Icon24About = (props) => <DocIcon><Icon24About {...props} /></DocIcon>;
window.Icon24Services = (props) => <DocIcon><Icon24Services {...props} /></DocIcon>;

window.colors = colors;

window.colorTitles = colorTitles;

window.colorKeys = colorKeys;

window.avatarSizes = sizes;
