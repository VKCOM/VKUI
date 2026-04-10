import * as React from 'react';
import { Icon20ArrowRightLeftCornersOutline, Icon20BracketsSlashOutline } from '@vkontakte/icons';
import { AdaptivityProvider, Button, Flex } from '@vkontakte/vkui';
import { CodeSandboxIcon, StackBlitzIcon } from '@vkontakte/vkui-docs-theme';
import { openInCodeSandbox } from '../externalSandbox/codesandbox';
import { openInStackBlitz } from '../externalSandbox/stackblitz';
import { ColorSchemePicker } from './ColorSchemePicker';
import { PlatformPicker } from './PlatformPicker/PlatformPicker';
import { ThemePicker } from './ThemePicker/ThemePicker';
import styles from './PlaygroundToolbar.module.css';

interface PlaygroundToolbarProps {
  code: string;
  codeVisible: boolean;
  setCodeVisible: (codeVisible: boolean) => void;
}

export function PlaygroundToolbar({ code, codeVisible, setCodeVisible }: PlaygroundToolbarProps) {
  const CodeExpandedIcon = codeVisible
    ? Icon20ArrowRightLeftCornersOutline
    : Icon20BracketsSlashOutline;

  return (
    <Flex align="center" gap="s" className={styles.root}>
      <AdaptivityProvider density="compact">
        <PlatformPicker className={styles.platformPicker} />
      </AdaptivityProvider>
      <AdaptivityProvider density="regular">
        <ThemePicker className={styles.themePicker} />
        <ColorSchemePicker />
        <Button
          size="s"
          mode="secondary"
          appearance="neutral"
          onClick={() => void openInStackBlitz(code)}
          before={<StackBlitzIcon />}
          aria-label="Открыть в StackBlitz"
        />
        <Button
          size="s"
          mode="secondary"
          appearance="neutral"
          onClick={() => void openInCodeSandbox(code)}
          before={<CodeSandboxIcon />}
          aria-label="Открыть в CodeSandbox"
        />
        <Button
          size="s"
          mode="secondary"
          appearance="neutral"
          onClick={() => setCodeVisible(!codeVisible)}
          before={<CodeExpandedIcon {...(codeVisible && { className: styles.rotateIcon })} />}
          aria-label={codeVisible ? 'Свернуть блок с кодом' : 'Развернуть блок с кодом'}
        />
      </AdaptivityProvider>
    </Flex>
  );
}
