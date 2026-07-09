import { describe } from 'vitest';
import { baselineComponent } from '../../../testing/utils';
import { Footnote } from './Footnote';

describe('Footnote', () => {
  baselineComponent((props) => <Footnote {...props}>Footnote</Footnote>);
});
