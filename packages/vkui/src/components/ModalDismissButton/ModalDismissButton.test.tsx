import { noop } from '@vkontakte/vkjs';
import { describe } from 'vitest';
import { baselineComponent } from '../../testing/utils';
import { ModalDismissButton } from './ModalDismissButton';

describe('ModalDismissButton', () => {
  baselineComponent((props) => <ModalDismissButton onClick={noop} {...props} />);
});
