import { Icon20More } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ModalOutsideButton, type ModalOutsideButtonProps } from './ModalOutsideButton';

export const ModalOutsideButtonPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props}>
    {(props: ModalOutsideButtonProps) => (
      <div style={{ width: 60, display: 'flex', flexDirection: 'column' }}>
        <ModalOutsideButton aria-label="Больше" {...props}>
          <Icon20More />
        </ModalOutsideButton>
        <ModalOutsideButton aria-label="Больше" {...props} onClick={noop} hovered>
          <Icon20More />
        </ModalOutsideButton>
        <ModalOutsideButton aria-label="Больше" {...props} onClick={noop} activated>
          <Icon20More />
        </ModalOutsideButton>
      </div>
    )}
  </ComponentPlayground>
);
