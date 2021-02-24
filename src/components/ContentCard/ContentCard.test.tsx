import { baselineComponent } from '../../testing/utils';
import ContentCard from './ContentCard';

describe('ContentCard', () => {
  baselineComponent((props) => <ContentCard image="/image.png" {...props} />);
});
