import * as React from 'react';
import { noop } from '@vkontakte/vkjs';

export interface AccordionContextProps {
  /**
   * id для label(a11y)
   */
  labelId: string;
  /**
   * id для contentId(a11y)
   */
  contentId: string;
  /**
   * Состояние раскрытости аккордиона
   */
  expanded: boolean;
  /**
   * Колбэк изменения состояния раскрытости
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
