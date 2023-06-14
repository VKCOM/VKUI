import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { HorizontalCell } from './HorizontalCell';

describe('HorizontalCell', () => {
  baselineComponent((props) => <HorizontalCell {...props}>HorizontalCell</HorizontalCell>);
});
