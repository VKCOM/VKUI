import "../node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/vkBaseDark/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/calendar/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/calendarDark/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/calls/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/cloud/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/home/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/homeDark/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/media/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/mediaDark/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/mycom/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/octavius/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/octaviusDark/cssVars/declarations/onlyVariablesLocal.css";
// import "../node_modules/@vkontakte/vkui-tokens/themes/octaviusCompact/cssVars/declarations/onlyVariablesLocal.css";
// import "../node_modules/@vkontakte/vkui-tokens/themes/octaviusCompactDark/cssVars/declarations/onlyVariablesLocal.css";
// import "../node_modules/@vkontakte/vkui-tokens/themes/octaviusVK/cssVars/declarations/onlyVariablesLocal.css";
// import "../node_modules/@vkontakte/vkui-tokens/themes/octaviusVKDark/cssVars/declarations/onlyVariablesLocal.css";
// import "../node_modules/@vkontakte/vkui-tokens/themes/octaviusWhite/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/otvet/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/otvetDark/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/paradigmBase/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/paradigmBaseDark/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/pharma/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/promo/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/search/cssVars/declarations/onlyVariablesLocal.css";
import "../node_modules/@vkontakte/vkui-tokens/themes/todo/cssVars/declarations/onlyVariablesLocal.css";
import "../src/styles/unstable.css";
import "../src/styles/common.css";
import "../src/fonts/fonts.css";

import { useState, useRef } from "react";
import pkg from "../package";
import * as VKUI from "../src";
import * as VKUIUnstable from "../src/unstable";
import * as Icons from "@vkontakte/icons";
import {
  getRandomInt,
  getRandomUser,
  getRandomUsers,
  getAllUsers,
  importantCountries,
  getAvatarUrl,
  perfLogger,
} from "./utils";

const ui = { ...VKUI, ...VKUIUnstable };

for (let i in ui) {
  if (ui.hasOwnProperty(i)) {
    window[i] = ui[i];
  }
}

Object.getOwnPropertyNames(Icons).forEach((name) => {
  if (name.startsWith("Icon")) {
    const icon = Icons[name];
    window[name] = icon;

    if (typeof icon.mountIcon === "function") {
      // Нужно смонтировать символ иконки до того, как общий спрайт будет клонирован во все iframe предпросмотры компонентов.
      // Раньше код для добавления SVG-символа в спрайт находился в корне модуля,
      // а теперь по-умолчанию символ добавляется только во время первого рендера иконки.
      icon.mountIcon();
    }
  }
});

window.osname = VKUI.platform();

window.schemeId =
  window.localStorage.getItem("vkui-styleguide:schemeId") ||
  pkg.defaultSchemeId;

window.getRandomInt = getRandomInt;
window.getRandomUser = getRandomUser;
window.importantCountries = importantCountries;

window.getRandomInt = getRandomInt;
window.getRandomUser = getRandomUser;
window.getRandomUsers = getRandomUsers;
window.getAllUsers = getAllUsers;
window.importantCountries = importantCountries;
window.getAvatarUrl = getAvatarUrl;
window.perfLogger = perfLogger;

window.useState = useState;
window.useRef = useRef;
