import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { AppRoot } from '../AppRoot/AppRoot';
import { Snackbar, type SnackbarProps } from './Snackbar';

const BASE_OFFSET_Y = 64;

const offsetYByPlacement = {
  'top-start': 0,
  'top': BASE_OFFSET_Y,
  'top-end': BASE_OFFSET_Y * 2,
  'bottom-start': BASE_OFFSET_Y * 2,
  'bottom': BASE_OFFSET_Y,
  'bottom-end': 0,
};

export const SnackbarPlayground = ({ platform, ...restProps }: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...restProps}
      platform={platform}
      isFixedComponent
      AppWrapper={AppRoot}
      propSets={[
        {
          placement: ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'],
        },
      ]}
    >
      {({ placement }: Pick<SnackbarProps, 'placement'>) => {
        const offsetY =
          platform === 'ios' || platform === 'android' ? offsetYByPlacement[placement!] : 0;
        return (
          <Snackbar placement={placement} action="Action" offsetY={offsetY} onClose={noop}>
            placement=&quot;{placement}&quot; offsetY=&#123;{offsetY}&#125;
          </Snackbar>
        );
      }}
    </ComponentPlayground>
  );
};

export const SnackbarModePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      isFixedComponent
      AppWrapper={AppRoot}
      propSets={[
        {
          mode: [undefined, 'dark'],
        },
      ]}
    >
      {({ mode }: Pick<SnackbarProps, 'mode'>) => (
        <Snackbar mode={mode} action={`Action (mode=${mode})`} onClose={noop}>
          Text message
        </Snackbar>
      )}
    </ComponentPlayground>
  );
};
