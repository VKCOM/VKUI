import { baselineComponent } from '../../../testing/utils';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  baselineComponent((props) => <Paragraph {...props}>Paragraph</Paragraph>);
});
