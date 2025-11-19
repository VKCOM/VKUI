import * as React from 'react';
import {
  AppRoot,
  classNames,
  ConfigProvider,
  Flex,
  type FlexProps,
  PanelSpinner,
} from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { LiveContext, LiveError, LivePreview } from 'react-live';
import { usePlaygroundStore } from '@/providers/playgroundStoreProvider';
import { useResolvedColorScheme } from '../hooks/useResolvedColorScheme';
import { makeTokenClassName } from '../vkuiThemes/helpers';
import styles from './PlaygroundPreview.module.css';

function DefaultWrapper({
  direction = 'row',
  children,
  align = 'center',
  justify = 'center',
  className,
  ...restProps
}: React.PropsWithChildren<Pick<FlexProps, 'direction' | 'align' | 'justify' | 'className'>>) {
  return (
    <Flex
      gap="m"
      direction={direction}
      align={align}
      justify={justify}
      className={classNames(className, styles.wrapper)}
      {...restProps}
    >
      {children}
    </Flex>
  );
}

export interface PlaygroundPreviewProps extends Pick<FlexProps, 'direction' | 'align' | 'justify'> {
  enableSnackbarsController?: boolean;
  className?: string;
  Wrapper?: React.ComponentType;
}

export function PlaygroundPreview({
  className,
  Wrapper = DefaultWrapper,
  enableSnackbarsController,
  ...restProps
}: PlaygroundPreviewProps) {
  const { error } = React.useContext(LiveContext);
  const mounted = useMounted();
  const colorScheme = useResolvedColorScheme();
  const { platform, themeName, playgroundLoading } = usePlaygroundStore((store) => store);

  return (
    <div
      className={classNames(
        styles.root,
        colorScheme === 'dark' && styles.rootDark,
        error && styles.error,
        className,
      )}
    >
      {error && <LiveError />}
      {playgroundLoading && <PanelSpinner />}
      {mounted && !playgroundLoading && (
        <AppRoot
          style={{ height: '100%', width: '100%' }}
          mode="partial"
          scroll="contain"
          enableSnackbarsController={enableSnackbarsController}
        >
          <ConfigProvider
            platform={platform}
            colorScheme={colorScheme}
            tokensClassNames={{
              light: makeTokenClassName(themeName, 'light'),
              dark: makeTokenClassName(themeName, 'dark'),
            }}
          >
            <LivePreview Component={Wrapper} {...restProps} />
          </ConfigProvider>
        </AppRoot>
      )}
    </div>
  );
}
