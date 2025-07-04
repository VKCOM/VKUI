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
import { darkTheme, lightTheme } from './editorThemes';
import { scope } from './scope';
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
  const [codeVisible, setCodeVisible] = React.useState(defaultExpanded);

  return (
    <div className={classNames(styles.root, jetBrainsMono.className)}>
      <LiveProvider
        code={defaultCode}
        scope={scope}
        theme={websiteColorScheme === 'dark' ? darkTheme : lightTheme}
        transformCode={transformCode}
      >
        <PlaygroundPreview {...restProps} />
        <PlaygroundToolbar setCodeVisible={setCodeVisible} codeVisible={codeVisible} />
        {codeVisible && (
          <div className={styles.code}>
            <LiveEditor style={{ whiteSpace: 'nowrap' }} />
          </div>
        )}
      </LiveProvider>
    </div>
  );
}

const IMPORT_REGEXP = /^import\s+(?:{[\s\S]*?}|\S+)\s+from\s+['"][^'"]+['"];?$\n?/gm;
const JSX_START_REGEXP = /^</;

function transformCode(code: string) {
  code = code.replace(IMPORT_REGEXP, '');

  if (!!code.trim().match(JSX_START_REGEXP)) {
    return `<React.Fragment>\n${code}\n</React.Fragment>;`;
  }

  return `() => { ${code} }`;
}
