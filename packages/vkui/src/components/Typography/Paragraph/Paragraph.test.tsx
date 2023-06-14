import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  baselineComponent((props) => <Paragraph {...props}>Paragraph</Paragraph>);
});
