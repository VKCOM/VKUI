import { baselineComponent, mountTest } from '../../testing/utils';
import ModalPage from '../ModalPage/ModalPage';
import ModalCard from '../ModalCard/ModalCard';
import { ModalRootDesktop } from './ModalRootDesktop';

describe('ModalRootDesktop', () => {
  baselineComponent<any>(ModalRootDesktop, { forward: false });
  describe('With ModalPage', () =>
    mountTest(() => <ModalRootDesktop activeModal="m"><ModalPage id="m" /></ModalRootDesktop>));
  describe('With ModalCard', () =>
    mountTest(() => <ModalRootDesktop activeModal="m"><ModalCard id="m" /></ModalRootDesktop>));
});
