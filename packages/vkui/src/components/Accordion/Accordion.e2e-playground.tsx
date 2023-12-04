import * as React from 'react';
import { Icon24AddOutline, Icon24MinusOutline } from '@vkontakte/icons';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { Div } from '../Div/Div';
import { Accordion } from './Accordion';
import type { AccordionSummaryProps } from './AccordionSummary';

export const AccordionPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          iconPosition: ['after', 'before'],
          open: [false, true],
        },
        {
          ExpandIcon: [Icon24AddOutline],
          CollapseIcon: [Icon24MinusOutline],
          iconPosition: ['after', 'before'],
          open: [false, true],
        },
      ]}
    >
      {({ open, ...restProps }: AccordionSummaryProps) => (
        <Accordion expanded={open}>
          <Accordion.Summary {...restProps}>Title</Accordion.Summary>
          <Accordion.Content>
            <Div className={TEST_CLASS_NAMES.CONTENT}>Content</Div>
          </Accordion.Content>
        </Accordion>
      )}
    </ComponentPlayground>
  );
};
