import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { Subhead } from './Subhead';

describe('Subhead', () => {
  baselineComponent((props) => <Subhead {...props}>Subhead</Subhead>);
});
