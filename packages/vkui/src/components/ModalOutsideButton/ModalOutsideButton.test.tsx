import { Icon12Add } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { ModalOutsideButton } from './ModalOutsideButton';

describe('ModalOutsideButton', () => {
  baselineComponent((props) => (
    <ModalOutsideButton aria-label="Больше" onClick={noop} {...props}>
      <Icon12Add />
    </ModalOutsideButton>
  ));
});
