import { baselineComponent } from '../../testing/utils';
import { NumberInputLike } from './NumberInputLike';

describe('NumberInputLike', () => {
  baselineComponent((props) => (
    <NumberInputLike
      value={10}
      minValue={0}
      maxValue={20}
      length={2}
      index={0}
      label="number-input-like"
      {...props}
    />
  ));
});
