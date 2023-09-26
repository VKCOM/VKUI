import { baselineComponent } from '../../testing/utils';
import { RichCell } from './RichCell';

describe('RichCell', () => {
  baselineComponent((props) => <RichCell {...props}>RichCell</RichCell>);
});
