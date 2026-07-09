import { describe } from 'vitest';
import { baselineComponent } from '../../testing/utils';
import { Mark } from './Mark';

describe(Mark, () => {
  baselineComponent(Mark);
});
