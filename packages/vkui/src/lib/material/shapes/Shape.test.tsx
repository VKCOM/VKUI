import { baselineComponent } from '../../../testing/utils';
import { Shape } from './Shape';
import * as shapes from './shapes';

describe('Shape', () => {
  baselineComponent((props) => <Shape params={shapes.ovalParams} {...props} />);
});
