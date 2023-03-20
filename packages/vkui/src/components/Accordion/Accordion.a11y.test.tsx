import React from 'react';
import { a11yBasicTest } from '../../testing/a11y';
import { Accordion } from './Accordion';

describe(Accordion, () => {
  a11yBasicTest(() => (
    <Accordion>
      <Accordion.Summary>Title</Accordion.Summary>
      Content
    </Accordion>
  ));
});
