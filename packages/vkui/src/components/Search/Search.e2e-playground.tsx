import { Icon16Add } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import {
  AppDefaultWrapper,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { BREAKPOINTS } from '../../lib/adaptivity';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
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
          $direction: true,
        },
        {
          value: ['value'],
          icon: [<Icon16Add key="" />],
          $adaptivity: 'y',
        },
        {
          value: [
            withLabel(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ultrices purus id tempor',
              'Long value',
            ),
          ],
        },
        {
          noPadding: [true],
        },
        {
          onFindButtonClick: [noop],
          value: ['value'],
        },
        {
          placeholder: [
            withLabel(
              'Very very very very very very very very long placeholder',
              'Long placeholder',
            ),
          ],
        },
      ]}
    >
      {({ dir, ...props }: SearchProps) => (
        <div dir={dir}>
          <Search style={{ maxWidth: '320px' }} {...props} />
        </div>
      )}
    </ComponentPlayground>
  );
};

export const SearchTestFocusOnIOSPlayground = ({ colorScheme }: ComponentPlaygroundProps) => {
  return (
    <ConfigProvider platform="ios" colorScheme={colorScheme}>
      <AdaptivityProvider sizeY="regular">
        <AppDefaultWrapper
          disableDecorations
          style={{
            height: 'auto',
            width: BREAKPOINTS.MOBILE,
          }}
        >
          <Search after="after" />
        </AppDefaultWrapper>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
