import Chip, { ChipProps } from './Chip';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('Chip', () => {
  describeScreenshotFuzz((props: ChipProps) => (<Chip value="arctic_monkeys" {...props}>Arctic Monkeys</Chip>), [{
    removable: [false, true],
  }]);
});
