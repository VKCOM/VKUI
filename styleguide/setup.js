import '../src/styles/themes.css';
import '../src/styles/common.css';

import { useState, useRef } from 'react';
import * as VKUI from '../src';
import {
  IconExampleForOverlayBasedOnImageBaseSize,
  IconExampleForFallbackBasedOnImageBaseSize,
  IconExampleForBadgeBasedOnImageBaseSize,
} from '../src/testing/icons';
import * as Icons from '@vkontakte/icons';
import {
  getRandomInt,
  getRandomUser,
  getRandomUsers,
  getAllUsers,
  importantCountries,
  getAvatarUrl,
  perfLogger,
} from './utils';

const unstablePrefix = 'unstable_';
const ui = { ...VKUI };

for (let name in ui) {
  if (ui.hasOwnProperty(name)) {
    window[name.replace(unstablePrefix, '')] = ui[name];
  }
}

Object.getOwnPropertyNames(Icons).forEach((name) => {
  if (name.startsWith('Icon')) {
    const icon = Icons[name];
    window[name] = icon;

    if (typeof icon.mountIcon === 'function') {
      // Нужно смонтировать символ иконки до того, как общий спрайт будет клонирован во все iframe предпросмотры компонентов.
      // Раньше код для добавления SVG-символа в спрайт находился в корне модуля,
      // а теперь по-умолчанию символ добавляется только во время первого рендера иконки.
      icon.mountIcon();
    }
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
window.perfLogger = perfLogger;

window.useState = useState;
window.useRef = useRef;
