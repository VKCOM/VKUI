import { baselineComponent } from '../../testing/utils';
import { ModalRootTouch } from './ModalRoot';

describe('ModalRootTouch', () => {
  baselineComponent<any>(ModalRootTouch, { forward: false });
});
