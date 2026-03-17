'use client';

import * as React from 'react';
import { classNames, useColorScheme } from '@vkontakte/vkui';
import { JetBrains_Mono } from 'next/font/google';
import { LiveContext, LiveEditor, LiveProvider } from 'react-live';
import { Activity } from '../../Activity/Activity';
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
  subsets: ['latin', 'cyrillic'],
});

export interface PlaygroundProps extends PlaygroundPreviewProps {
  code: string;
  defaultExpanded?: boolean;
}

function getStorageKey(defaultCode: string): string {
  let hash = 0;
  for (let i = 0; i < defaultCode.length; i++) {
    hash = ((hash << 5) - hash + defaultCode.charCodeAt(i)) | 0;
  }
  return `playground:${window.location.pathname}:${hash}`;
}

function PersistentLiveEditor({
  onCodeChange,
  className,
}: {
  onCodeChange: (code: string) => void;
  className?: string;
}) {
  const { onChange: contextOnChange } = React.useContext(LiveContext);

  const handleChange = React.useCallback(
    (newCode: string) => {
      contextOnChange(newCode);
      onCodeChange(newCode);
    },
    [contextOnChange, onCodeChange],
  );

  return <LiveEditor className={className} onChange={handleChange} />;
}

export function Playground({
  code: defaultCode = '',
  defaultExpanded = false,
  ...restProps
}: PlaygroundProps) {
  const websiteColorScheme = useColorScheme();
  const [codeVisible, setCodeVisible] = React.useState(defaultExpanded);

  const storageKey = React.useMemo(() => getStorageKey(defaultCode), [defaultCode]);

  const [code, setCode] = React.useState(() => {
    try {
      return localStorage.getItem(storageKey) ?? defaultCode;
    } catch {
      return defaultCode;
    }
  });

  const isModified = code !== defaultCode;

  const handleCodeChange = React.useCallback(
    (newCode: string) => {
      setCode(newCode);
      try {
        if (newCode === defaultCode) {
          localStorage.removeItem(storageKey);
        } else {
          localStorage.setItem(storageKey, newCode);
        }
      } catch {}
    },
    [defaultCode, storageKey],
  );

  const handleReset = React.useCallback(() => {
    setCode(defaultCode);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  }, [defaultCode, storageKey]);

  return (
    <div className={classNames(styles.root, jetBrainsMono.className)}>
      <LiveProvider
        code={code}
        scope={scope}
        theme={websiteColorScheme === 'dark' ? darkTheme : lightTheme}
        transformCode={transformCode}
      >
        <PlaygroundPreview {...restProps} />
        <PlaygroundToolbar
          setCodeVisible={setCodeVisible}
          codeVisible={codeVisible}
          isModified={isModified}
          onReset={handleReset}
        />
        <Activity mode={codeVisible ? 'visible' : 'hidden'}>
          <div className={styles.codeBlock}>
            <PersistentLiveEditor className={styles.code} onCodeChange={handleCodeChange} />
          </div>
        </Activity>
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
