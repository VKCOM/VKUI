'use client';

import * as React from 'react';
import { classNames, PanelSpinner } from '@vkontakte/vkui';
import dynamic from 'next/dynamic';
import { JetBrains_Mono } from 'next/font/google';
import { CompiledPreview } from './CompiledPreview';
import {
  PlaygroundPreview,
  type PlaygroundPreviewProps,
} from './PlaygroundPreview/PlaygroundPreview';
import { PlaygroundToolbar } from './PlaygroundToolbar/PlaygroundToolbar';
import styles from './Playground.module.css';

// eslint-disable-next-line new-cap
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
});

const LiveCodeEditor = dynamic(
  () =>
    Promise.all([import('./LiveCodeEditor'), import('./EditedPreview')]).then(
      ([mod]) => mod.LiveCodeEditor,
    ),
  {
    ssr: false,
    loading: () => <PanelSpinner visibilityDelay={250} />,
  },
);
const EditedPreview = dynamic(() => import('./EditedPreview').then((mod) => mod.EditedPreview), {
  ssr: false,
  loading: () => <PanelSpinner visibilityDelay={250} />,
});

export interface PlaygroundProps extends PlaygroundPreviewProps {
  hide?: boolean;
  code: string;
  previewId: string;
  defaultExpanded?: boolean | undefined;
}

export function Playground({
  code: defaultCode = '',
  defaultExpanded = false,
  previewId,
  ...restProps
}: PlaygroundProps) {
  const [codeVisible, setCodeVisible] = React.useState(defaultExpanded);
  const [currentCode, setCurrentCode] = React.useState(defaultCode);
  const [editorRequested, setEditorRequested] = React.useState(defaultExpanded);

  const setExpanded = (expanded: boolean) => {
    if (expanded) {
      setEditorRequested(true);
    }
    setCodeVisible(expanded);
  };

  return (
    <div className={classNames(styles.root, jetBrainsMono.className)}>
      <PlaygroundPreview {...restProps}>
        {currentCode === defaultCode ? (
          <CompiledPreview previewId={previewId} />
        ) : (
          <EditedPreview code={currentCode} />
        )}
      </PlaygroundPreview>
      <PlaygroundToolbar
        setCodeVisible={setExpanded}
        codeVisible={codeVisible}
        code={currentCode}
      />
      {editorRequested && (
        <div hidden={!codeVisible}>
          <div className={styles.codeBlock}>
            <LiveCodeEditor code={defaultCode} onChange={setCurrentCode} />
          </div>
        </div>
      )}
    </div>
  );
}
