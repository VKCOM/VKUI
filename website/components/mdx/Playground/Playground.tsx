'use client';

import * as React from 'react';
import { classNames, useColorScheme } from '@vkontakte/vkui';
import { JetBrains_Mono } from 'next/font/google';
import { LiveEditor, LiveProvider } from 'react-live';
import {
  PlaygroundPreview,
  type PlaygroundPreviewProps,
} from './PlaygroundPreview/PlaygroundPreview';
import { PlaygroundToolbar } from './PlaygroundToolbar/PlaygroundToolbar';
import {
  initialState,
  PlaygroundContext,
  type PlaygroundContextProps,
  type PlaygroundContextStateProps,
} from './context';
import { darkTheme, lightTheme } from './editorThemes';
import { scope } from './scope';
import { resolveThemeProps } from './vkuiThemes/helpers';
import { useThemeLoader } from './vkuiThemes/useThemeLoader';
import styles from './Playground.module.css';

// eslint-disable-next-line new-cap
const jetBrainsMono = JetBrains_Mono({
  subsets: ['cyrillic'],
});

export interface PlaygroundProps extends PlaygroundPreviewProps {
  code: string;
  defaultExpanded?: boolean;
}

export function Playground({
  code: defaultCode = '',
  defaultExpanded = false,
  ...restProps
}: PlaygroundProps) {
  const websiteColorScheme = useColorScheme();
  const [state, setState] = React.useState<PlaygroundContextStateProps>(() => {
    return {
      ...initialState,
      colorScheme: websiteColorScheme,
    };
  });
  const { playgroundLoading, loadTheme } = useThemeLoader();

  const [codeVisible, setCodeVisible] = React.useState(defaultExpanded);

  const toggleCodeVisibility = () => {
    setCodeVisible((current) => !current);
  };

  const setContext = React.useCallback(
    async (data: Partial<PlaygroundContextProps>) => {
      const newState = {
        ...state,
        ...data,
        ...resolveThemeProps(state, data),
      };
      if (newState.themeName !== state.themeName) {
        await loadTheme(newState.themeName, newState.colorSchemeOptions);
      }
      setState(newState);
    },
    [state],
  );

  React.useLayoutEffect(() => {
    void setContext({ colorScheme: websiteColorScheme });
  }, [websiteColorScheme]);

  const context: PlaygroundContextProps = React.useMemo(
    () => ({
      ...state,
      setContext,
      isLoading: playgroundLoading,
    }),
    [state, playgroundLoading, setContext],
  );

  return (
    <PlaygroundContext value={context}>
      <div className={classNames(styles.root, jetBrainsMono.className)}>
        <LiveProvider
          code={defaultCode}
          scope={scope}
          theme={websiteColorScheme === 'dark' ? darkTheme : lightTheme}
          transformCode={transformCode}
        >
          <PlaygroundPreview {...restProps} />
          <PlaygroundToolbar
            onToggleCodeVisibility={toggleCodeVisibility}
            codeVisible={codeVisible}
          />
          {codeVisible && (
            <div className={styles.code}>
              <LiveEditor />
            </div>
          )}
        </LiveProvider>
      </div>
    </PlaygroundContext>
  );
}

function transformCode(code: string) {
  if (!!code.trim().match(/^</)) {
    return `<React.Fragment>\n${code}\n</React.Fragment>;`;
  }

  return `() => { ${code} }`;
}
