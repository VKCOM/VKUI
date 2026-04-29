import type React from 'react';
import type { NavbarProps } from './components/Navbar/Navbar';
import type { ColorSchemeProviderProps } from './contexts';

export interface DocsThemeConfig {
  /**
   * Баннер сверху
   */
  banner?: React.ReactElement | undefined;
  /**
   * Направление письма сайта
   */
  direction?: 'ltr' | 'rtl' | undefined;
  /**
   * Навигационное меню
   */
  navbar?: React.ReactElement<NavbarProps> | undefined;
  /**
   * Доступные для фильтрации разделы навигационного меню
   */
  searchableNavbarItems?: string[] | undefined;
  /**
   * Компонент внизу страницы
   */
  footer?: React.ReactElement | undefined;
  /**
   * Компонент для дополнительных кнопок
   */
  extraButtons?: React.ReactElement | undefined;
  /**
   * Компонент версионирования
   */
  versions?: React.ReactElement | undefined;
  /**
   * Показывать ссылки на следующую/предыдущую страницы
   */
  navigation: boolean | { next: boolean; prev: boolean };
  /**
   * Управление цветовой схемой сайта
   */
  colorScheme?: ColorSchemeProviderProps | undefined;
  /**
   * Поиск сайта
   */
  search?: React.ReactElement | undefined;
  /**
   * Описание репозитория сайта
   */
  projectLink: `https://${string}`;
}
