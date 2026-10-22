'use client';

import * as React from 'react';
import { useColorScheme } from '../../../src';
import { useDOM } from '../../../src/lib/dom';
import styles from './ColorPickerControl.module.css';

const STORAGE_KEY = 'sb-icons-color';

export const getLocalStorageIconsColorValue = (window?: Window) => {
  return window?.localStorage.getItem(STORAGE_KEY);
};

export const updateLocalStorageIconsColorValue = (window: Window | undefined, color: string) => {
  window?.localStorage.setItem(STORAGE_KEY, color);
};

const ColorPickerControl: React.FC<{
  containerRef: React.RefObject<HTMLDivElement | null>;
}> = ({ containerRef }) => {
  const colorScheme = useColorScheme();
  const { window } = useDOM();
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleContainerClick = () => {
    inputRef.current?.click();
  };

  React.useEffect(
    function initColorFromStorage() {
      const color =
        getLocalStorageIconsColorValue(window) || (colorScheme === 'dark' ? '#ffffff' : '#000000');
      containerRef.current?.style.setProperty('--vkui_internal--IconsOverview_icons_color', color);
    },
    [colorScheme, containerRef, window],
  );

  const handleColorChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    containerRef.current?.style.setProperty('--vkui_internal--IconsOverview_icons_color', newValue);
    updateLocalStorageIconsColorValue(window, newValue);
  };

  return (
    <div className={styles.container} onClick={handleContainerClick} role="button" tabIndex={0}>
      <input
        type="color"
        ref={inputRef}
        className={styles.input}
        onChange={handleColorChange}
        aria-label="Выбор цвета"
      />
    </div>
  );
};

export { ColorPickerControl };
