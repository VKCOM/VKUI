import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { Headline } from './Headline';

describe('Headline', () => {
  baselineComponent((p) => <Headline {...p}>Headline</Headline>);
});
