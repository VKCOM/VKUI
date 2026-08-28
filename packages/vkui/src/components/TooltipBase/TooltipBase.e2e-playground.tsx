import { noop } from '@vkontakte/vkjs';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { Link } from '../Link/Link';
import { TooltipBase, type TooltipBaseProps } from './TooltipBase';

export const TooltipBasePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          title: [undefined, 'Some header'],
          onCloseIconClick: [undefined, noop],
        },
        {
          action: [
            <Link href="#" key="">
              Ссылка
            </Link>,
          ],
          appearance: ['white'],
        },
      ]}
    >
      {(props: TooltipBaseProps) => (
        <TooltipBase description="Some text" {...props} className={TEST_CLASS_NAMES.CONTENT} />
      )}
    </ComponentPlayground>
  );
};
