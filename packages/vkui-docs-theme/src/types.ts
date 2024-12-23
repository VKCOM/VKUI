import type React from 'react';
import type { NavbarProps } from './components/Navbar/Navbar';
import type { ColorSchemeProviderProps } from './contexts';

export interface DocsThemeConfig {
  /**
   * Баннер сверху
   */
  banner?: {
    dismissible: boolean;
    key: string;
    content?: React.ReactNode;
  };
  /**
   * Кастомные MDX-компоненты, которыми можно заменить дефолтные
   */
  components?: object;
  /**
   * Направление письма сайта
   */
  direction?: 'ltr' | 'rtl';
  /**
   * Кастомизация <head>-элемента
   */
  head?: React.ReactNode | React.FC;
  /**
   * Лого документации
   */
  logo: React.ReactNode | React.FC;
  /**
   * Ссылка для лого документации
   *
   * `true` - для перехода на главную
   */
  logoLink: boolean | string;
  /**
   * Компонент-обертка для main-контента
   */
  main?: React.FC<{ children: React.ReactNode }>;
  /**
   * Навигационное меню
   */
  navbar: {
    extraButtons?: React.ReactNode | React.FC;
    component: null | React.ReactNode | React.FC<NavbarProps>;
    versions?: React.ReactNode | React.FC;
  };
  /**
   * Показывать ссылки на следующую/предыдущую страницы
   */
  navigation: boolean | { next: boolean; prev: boolean };
  /**
   * Управление цветовой схемой сайта
   */
  colorScheme: ColorSchemeProviderProps;
  /**
   * Поиск сайта
   */
  search: {
    component: null | React.ReactNode | React.FC;
    emptyResult: React.ReactNode;
    error: React.ReactNode;
    loading: React.ReactNode;
    placeholder: React.ReactNode;
  };
  /**
   * Описание репозитория сайта
   */
  project: {
    icon: React.ReactNode;
    link?: `https://${string}`;
  };
}

// eslint-disable-next-line @typescript-eslint/ban-types
type DeepPartial<T> = T extends Function
  ? T
  : T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

export type PartialDocsThemeConfig = DeepPartial<DocsThemeConfig>;
