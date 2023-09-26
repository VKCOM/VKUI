import { baselineComponent } from '../../../testing/utils';
import { Headline } from './Headline';

describe('Headline', () => {
  baselineComponent((props) => <Headline {...props}>Headline</Headline>);
});
