import { baselineComponent } from '../../testing/utils';
import { ModalRoot } from './ModalRootAdaptive';

describe('ModalRoot', () => {
  baselineComponent<any>(ModalRoot, { forward: false });
});
