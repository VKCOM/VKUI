import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { Footnote } from './Footnote';

describe('Footnote', () => {
  baselineComponent((props) => <Footnote {...props}>Footnote</Footnote>);
});
