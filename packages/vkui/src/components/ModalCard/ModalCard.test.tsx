/**
 * jest-runners-groups
 * @group unit
 */

import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { ModalCard } from './ModalCard';

describe('ModalCard', () => {
  baselineComponent((p) => <ModalCard nav="id" {...p} />);
});
