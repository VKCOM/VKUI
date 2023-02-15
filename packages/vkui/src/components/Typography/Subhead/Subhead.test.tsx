/**
 * jest-runners-groups
 * @group unit
 */

import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { Subhead } from './Subhead';

describe('Subhead', () => {
  baselineComponent((p) => <Subhead {...p}>Subhead</Subhead>);
});
