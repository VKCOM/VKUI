import { baselineComponent } from '../../../testing/utils';
import { DisplayTitle } from './DisplayTitle';

describe('DisplayTitle', () => {
  baselineComponent((props) => <DisplayTitle {...props}>DisplayTitle</DisplayTitle>);
});
