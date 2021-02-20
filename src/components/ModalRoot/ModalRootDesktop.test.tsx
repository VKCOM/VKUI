import { baselineComponent } from '../../testing/utils';
import { ModalRootDesktop } from './ModalRootDesktop';

describe('ModalRootDesktop', () => {
  baselineComponent<any>(ModalRootDesktop, { forward: false });
});
