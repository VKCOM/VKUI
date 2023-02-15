/**
 * jest-runners-groups
 * @group unit
 */

import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { Title } from './Title';

describe('Title', () => {
  baselineComponent((p) => <Title {...p}>Title</Title>);
});
