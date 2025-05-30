import type React from 'react';
import type { NavbarProps } from './components/Navbar/Navbar';
import type { ColorSchemeProviderProps } from './contexts';

export interface DocsThemeConfig {
  /**
   * Баннер сверху
   */
  banner?: React.ReactElement;
  /**
   * Направление письма сайта
   */
  direction?: 'ltr' | 'rtl';
  /**
   * Навигационное меню
   */
  navbar?: React.ReactElement<NavbarProps>;
  /**
   * Компонент внизу страницы
   */
  footer?: React.ReactElement;
  /**
   * Компонент для дополнительных кнопок
   */
  extraButtons?: React.ReactElement;
  /**
   * Компонент версионирования
   */
  versions?: React.ReactElement;
  /**
   * Показывать ссылки на следующую/предыдущую страницы
   */
  navigation: boolean | { next: boolean; prev: boolean };
  /**
   * Управление цветовой схемой сайта
   */
  colorScheme?: ColorSchemeProviderProps;
  /**
   * Поиск сайта
   */
  search?: React.ReactElement;
  /**
   * Описание репозитория сайта
   */
  projectLink: `https://${string}`;
}
