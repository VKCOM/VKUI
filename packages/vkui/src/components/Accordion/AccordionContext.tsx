import * as React from 'react';
import { noop } from '@vkontakte/vkjs';

export interface AccordionContextProps {
  /**
   * [a11y] Id для `Accordion.Summary`.
   */
  labelId: string;
  /**
   * [a11y] Id для свойства `Accordion.Content`.
   */
  contentId: string;
  /**
   * Состояние аккордеона
   * `true` - аккордеон развернут, `false` - аккордеон свернут.
   */
  expanded: boolean;
  /**
   * Обработчик изменения состояния аккордеона.
   */
  onChange: (e: boolean) => void;
}

export const AccordionContext: React.Context<AccordionContextProps> =
  React.createContext<AccordionContextProps>({
    labelId: '',
    contentId: '',
    expanded: false,
    onChange: noop,
  });
