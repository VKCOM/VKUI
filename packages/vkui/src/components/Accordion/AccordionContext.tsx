import * as React from 'react';
import { noop } from '@vkontakte/vkjs';

export interface AccordionContextProps {
  /**
   * `id` для label (для обеспечения доступности a11y).
   */
  labelId: string;
  /**
   * `id` для content (для обеспечения доступности a11y).
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
