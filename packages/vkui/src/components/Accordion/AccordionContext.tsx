import * as React from 'react';
import { noop } from '@vkontakte/vkjs';

export interface AccordionContextProps {
  labelId: string;
  contentId: string;
  expanded: boolean;
  onChange: (e: boolean) => void;
}

export const AccordionContext: React.Context<AccordionContextProps> =
  React.createContext<AccordionContextProps>({
    labelId: '',
    contentId: '',
    expanded: false,
    onChange: noop,
  });
