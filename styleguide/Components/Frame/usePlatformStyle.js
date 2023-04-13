import React from 'react';
import { Platform } from '@vkui';

/**
 * Возвращает ссылку на onlyVariablesLocal платформы
 * @param {string} platform
 * @return {string}
 */
function onlyVariablesLocalURL(platform) {
  return `https://unpkg.com/@vkontakte/vkui-tokens@4/themes/${platform}/cssVars/declarations/onlyVariablesLocal.css`;
}
/**
 * Возвращает элемент для подключения стилей платформы
 * @param {string} platform
 * @return {HTMLLinkElement}
 */
function tokensLinkElement(platform) {
  const element = document.createElement('link');
  element.rel = 'stylesheet';
  element.href = onlyVariablesLocalURL(platform);

  return element;
}
/**
 * Добавляет платформенные стили
 * @param {string} platform
 * @param {Document} doc
 * @return {boolean}
 */
function usePlatformStyleOne(platform, doc = document) {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (
      [Platform.ANDROID, Platform.IOS, Platform.VKCOM].includes(platform.replace('Dark', '')) ||
      doc.querySelector(`link[href="${onlyVariablesLocalURL(platform)}"]`)
    ) {
      setLoaded(true);
      return;
    }

    setLoaded(false);

    const node = tokensLinkElement(platform);
    node.addEventListener('load', () => setLoaded(true));
    node.addEventListener('error', () => {
      console.warn(`Error load ${platform}`);
      setLoaded(true);
    });

    doc.head.appendChild(node);
  }, [platform]);

  return loaded;
}

/**
 * Добавляет платформенные стили
 * @param {string} platform
 * @param {Document} doc
 * @return {boolean}
 */
export function usePlatformStyle(platform, doc = document) {
  const lightLoaded = usePlatformStyleOne(platform, doc);
  const darkLoaded = usePlatformStyleOne(platform + 'Dark', doc);

  return lightLoaded && darkLoaded;
}
