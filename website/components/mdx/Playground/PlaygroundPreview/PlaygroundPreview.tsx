import * as React from 'react';
import { classNames, ConfigProvider, Flex, type FlexProps, PanelSpinner } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { LiveContext, LiveError, LivePreview } from 'react-live';
import { usePlaygroundContext } from '../context';
import { makeTokenClassName } from '../vkuiThemes/helpers';
import styles from './PlaygroundPreview.module.css';

function DefaultWrapper({
  direction = 'row',
  children,
  align = 'center',
  justify = 'center',
  className,
}: React.PropsWithChildren<Pick<FlexProps, 'direction' | 'align' | 'justify' | 'className'>>) {
  return (
    <Flex gap="m" direction={direction} align={align} justify={justify} className={className}>
      {children}
    </Flex>
  );
}

export interface PlaygroundPreviewProps extends Pick<FlexProps, 'direction' | 'align' | 'justify'> {
  className?: string;
  Wrapper?: React.ComponentType;
}

export function PlaygroundPreview({
  className,
  Wrapper = DefaultWrapper,
  direction,
  align,
  justify,
}: PlaygroundPreviewProps) {
  const { error } = React.useContext(LiveContext);
  const mounted = useMounted();
  const { platform, colorScheme, themeName, isLoading } = usePlaygroundContext();

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
      {isLoading && <PanelSpinner />}
      {mounted && !isLoading && (
        <ConfigProvider
          platform={platform}
          colorScheme={colorScheme}
          tokensClassNames={{
            light: makeTokenClassName(themeName, 'light'),
            dark: makeTokenClassName(themeName, 'dark'),
          }}
        >
          {/* @ts-expect-error: TS2769 props passing throw */}
          <LivePreview direction={direction} align={align} justify={justify} Component={Wrapper} />
        </ConfigProvider>
      )}
    </div>
  );
}
