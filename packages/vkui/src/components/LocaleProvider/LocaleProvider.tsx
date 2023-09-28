import * as React from 'react';
import { ConfigProviderContextInterface } from '../ConfigProvider/ConfigProviderContext';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface LocaleProviderProps {
  /**
   * Строка с языковой меткой BCP 47
   */
  value: ConfigProviderContextInterface['locale'];
  children: React.ReactNode;
}

/**
 * Компонент, прокидывающий локаль. Список можно найти в
 * [реестре языковых подметок IANA](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
 *
 * @since 5.0.0
 * @see https://vkcom.github.io/VKUI/#/LocaleProvider
 */
export function LocaleProvider({ value, children }: LocaleProviderProps) {
  return <ConfigProviderOverride locale={value}>{children}</ConfigProviderOverride>;
}
