/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { ModalDismissButton } from './ModalDismissButton';

describe('ModalDismissButton', () => {
  baselineComponent(ModalDismissButton);
});
