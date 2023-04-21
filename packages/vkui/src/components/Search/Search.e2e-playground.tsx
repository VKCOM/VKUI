import * as React from 'react';
import { Icon16Add } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { BREAKPOINTS, SizeType } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Search, type SearchProps } from './Search';

export const SearchPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          value: [undefined, 'value'],
          icon: [undefined, <Icon16Add key="" />],
        },
        {
          value: ['value'],
          icon: [<Icon16Add key="" />],
          $adaptivity: 'y',
        },
      ]}
    >
      {(props: SearchProps) => <Search style={{ maxWidth: '320px' }} {...props} />}
    </ComponentPlayground>
  );
};

export const SearchTestFocusOnIOSPlayground = ({ appearance }: ComponentPlaygroundProps) => {
  return (
    <ConfigProvider platform={Platform.IOS} appearance={appearance}>
      <AdaptivityProvider sizeY={SizeType.REGULAR}>
        <AppRoot
          mode="embedded"
          style={{
            height: 'auto',
            position: 'absolute',
            width: BREAKPOINTS.MOBILE,
            background: 'var(--vkui--color_background_content)',
          }}
        >
          <Search after="after" />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
