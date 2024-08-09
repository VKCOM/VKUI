import { baselineComponent } from '../../testing/utils';
import { CardGrid } from '../CardGrid/CardGrid';
import { Card } from './Card';

describe('Card', () => {
  baselineComponent((props) => (
    <CardGrid>
      <Card {...props} />
    </CardGrid>
  ));
});
