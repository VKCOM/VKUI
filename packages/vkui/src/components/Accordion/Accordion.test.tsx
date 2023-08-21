import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  baselineComponent((props) => (
    <Accordion {...props}>
      <Accordion.Summary>Title</Accordion.Summary>
      Content
    </Accordion>
  ));
});
