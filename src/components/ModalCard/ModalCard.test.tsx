import { baselineComponent } from '../../testing/utils';
import ModalCard from './ModalCard';

describe('ModalCard', () => {
  baselineComponent((p) => <ModalCard nav="id" {...p} />);
});
