import { noop } from '@vkontakte/vkjs';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { TooltipBase, type TooltipBaseProps } from './TooltipBase';

export const TooltipBasePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          header: [undefined, 'Some header'],
          onCloseIconClick: [undefined, noop],
        },
      ]}
    >
      {(props: TooltipBaseProps) => (
        <TooltipBase text="Some text" {...props} className={TEST_CLASS_NAMES.CONTENT} />
      )}
    </ComponentPlayground>
  );
};
