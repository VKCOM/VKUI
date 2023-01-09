import React from 'react';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';
import { ConfigProviderContextInterface } from '../ConfigProvider/ConfigProviderContext';

export interface LocaleProviderProps {
  /**
   * Строка с языковой меткой BCP 47
   */
  value: ConfigProviderContextInterface['locale'];
  children: React.ReactNode;
}

/**
 * Компонент, прокидывающий локаль. Список можно найти в
 * [реестре языковых подмёток IANA](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
 *
 * @version 5.0.0
 * @see https://vkcom.github.io/VKUI/#/LocaleProvider
 */
export function LocaleProvider({ value, children }: LocaleProviderProps) {
  return <ConfigProviderOverride locale={value}>{children}</ConfigProviderOverride>;
}
