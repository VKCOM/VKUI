import { baselineComponent } from '../../../testing/utils';
import { EllipsisText } from './EllipsisText';

describe('EllipsisText', () => {
  baselineComponent((props) => <EllipsisText {...props}>EllipsisText</EllipsisText>);
});
