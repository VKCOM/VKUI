import * as React from 'react';
import { Icon24AddOutline, Icon24MinusOutline } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Div } from '../Div/Div';
import { Accordion } from './Accordion';
import { AccordionSummaryProps } from './AccordionSummary';

describe('Accordion', () => {
  describeScreenshotFuzz(
    ({ open, ...props }: AccordionSummaryProps) => (
      <Accordion open={open}>
        <Accordion.Summary {...props}>Title</Accordion.Summary>
        <Div className="vkuiProps">Content</Div>
      </Accordion>
    ),
    [
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
    ],
  );
});
