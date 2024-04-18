import '../packages/vkui/src/styles/constants.css';
import '../packages/vkui/src/styles/themes.css';
import '../packages/vkui/src/styles/common.css';

import { useRef, useState } from 'react';
import * as Icons from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import {
  IconExampleForBadgeBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
  IconExampleForOverlayBasedOnImageBaseSize,
} from '@vkui/testing/icons';
import {
  getAllUsers,
  getAvatarUrl,
  getRandomInt,
  getRandomUser,
  getRandomUsers,
  importantCountries,
} from '@vkui/testing/mock';
import * as VKUI from '../packages/vkui/src';
import { clamp } from '../packages/vkui/src/helpers/math';

const unstablePrefix = 'unstable_';
const ui = { ...VKUI };

for (let name in ui) {
  if (ui.hasOwnProperty(name)) {
    window[name.replace(unstablePrefix, '')] = ui[name];
  }
}

Object.getOwnPropertyNames(Icons).forEach((name) => {
  if (name.startsWith('Icon')) {
    window[name] = Icons[name];
  }
});

window.osname = VKUI.platform();

window.getRandomInt = getRandomInt;
window.getRandomUser = getRandomUser;
window.importantCountries = importantCountries;

window.getRandomInt = getRandomInt;
window.getRandomUser = getRandomUser;
window.getRandomUsers = getRandomUsers;
window.getAllUsers = getAllUsers;
window.importantCountries = importantCountries;
window.getAvatarUrl = getAvatarUrl;
window.IconExampleForOverlayBasedOnImageBaseSize = IconExampleForOverlayBasedOnImageBaseSize;
window.IconExampleForFallbackBasedOnImageBaseSize = IconExampleForFallbackBasedOnImageBaseSize;
window.IconExampleForBadgeBasedOnImageBaseSize = IconExampleForBadgeBasedOnImageBaseSize;

window.useState = useState;
window.useRef = useRef;

window.noop = noop;

window.clamp = clamp;
