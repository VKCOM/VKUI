import * as React from 'react';
import { Icon20ArrowRightLeftCornersOutline, Icon20BracketsSlashOutline } from '@vkontakte/icons';
import { AdaptivityProvider, Button, Flex } from '@vkontakte/vkui';
import { LiveContext } from 'react-live';
import { openInCodeSandbox } from '../externalSandbox/codesandbox';
import { openInStackBlitz } from '../externalSandbox/stackblitz';
import { ColorSchemePicker } from './ColorSchemePicker';
import { PlatformPicker } from './PlatformPicker/PlatformPicker';
import { ThemePicker } from './ThemePicker/ThemePicker';
import styles from './PlaygroundToolbar.module.css';

interface PlaygroundToolbarProps {
  codeVisible: boolean;
  setCodeVisible: (codeVisible: boolean) => void;
}

function StackBlitzIcon() {
  return (
    <svg
      aria-hidden
      display="block"
      className="vkuiIcon vkuiIcon--20 vkuiIcon--w-20 vkuiIcon--h-20"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      style={{ width: 20, height: 20 }}
    >
      <path d="M5.5 3h9l-4 5h3.5L5.5 17l2-5.5H4.5l5-8.5z" />
    </svg>
  );
}

function CodeSandboxIcon() {
  return (
    <svg
      aria-hidden
      display="block"
      className="vkuiIcon vkuiIcon--20 vkuiIcon--w-20 vkuiIcon--h-20"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      style={{ width: 20, height: 20 }}
    >
      <path d="M10 2.5 16.5 6.3v7.4L10 17.5 3.5 13.7V6.3L10 2.5Zm0 1.6L5.3 6.8v6.4l4.7 2.7 4.7-2.7V6.8L10 4.1Zm0 .9 3.3 1.9L10 8.8 6.7 6.9 10 5Zm-4.1 3 3.3 1.9v3.8l-3.3-1.9V8Zm8.2 0v3.8l-3.3 1.9V9.9l3.3-1.9Z" />
    </svg>
  );
}

export function PlaygroundToolbar({ codeVisible, setCodeVisible }: PlaygroundToolbarProps) {
  const { code } = React.useContext(LiveContext);

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
