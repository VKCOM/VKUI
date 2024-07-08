import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ModalDismissButton, type ModalDismissButtonProps } from './ModalDismissButton';

export const ModalDismissButtonPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props}>
    {(props: ModalDismissButtonProps) => (
      <div style={{ width: 60 }}>
        <div style={{ width: 1, height: 60, position: 'relative' }}>
          <ModalDismissButton {...props} />
        </div>
        <div style={{ width: 1, height: 60, position: 'relative' }}>
          <ModalDismissButton {...props} onClick={noop} hovered />
        </div>
        <div style={{ width: 1, height: 60, position: 'relative' }}>
          <ModalDismissButton {...props} onClick={noop} activated />
        </div>
      </div>
    )}
  </ComponentPlayground>
);
