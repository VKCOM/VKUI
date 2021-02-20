import { baselineComponent, mountTest } from '../../testing/utils';
import ModalPage from '../ModalPage/ModalPage';
import ModalCard from '../ModalCard/ModalCard';
import { ModalRootTouch } from './ModalRoot';

describe('ModalRootTouch', () => {
  baselineComponent<any>(ModalRootTouch, { forward: false });
  describe('With ModalPage', () =>
    mountTest(() => <ModalRootTouch activeModal="m"><ModalPage id="m" /></ModalRootTouch>));
  describe('With ModalCard', () =>
    mountTest(() => <ModalRootTouch activeModal="m"><ModalCard id="m" /></ModalRootTouch>));
});
