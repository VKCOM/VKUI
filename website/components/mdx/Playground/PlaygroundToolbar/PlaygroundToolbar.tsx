import * as React from 'react';
import {
  Icon20ArrowLeftRightCornersOutline,
  Icon20ArrowRightLeftCornersOutline,
} from '@vkontakte/icons';
import { AdaptivityProvider, Button, Flex } from '@vkontakte/vkui';
import { ColorSchemePicker } from './ColorSchemePicker';
import { CopyCodeButton } from './CopyCodeButton';
import { PlatformPicker } from './PlatformPicker/PlatformPicker';
import { ThemePicker } from './ThemePicker/ThemePicker';
import styles from './PlaygroundToolbar.module.css';

interface PlaygroundToolbarProps {
  codeVisible: boolean;
  setCodeVisible: (codeVisible: boolean) => void;
}

export function PlaygroundToolbar({ codeVisible, setCodeVisible }: PlaygroundToolbarProps) {
  const CodeExpandedIcon = codeVisible
    ? Icon20ArrowRightLeftCornersOutline
    : Icon20ArrowLeftRightCornersOutline;

  return (
    <Flex align="center" gap="s" className={styles.root}>
      <AdaptivityProvider sizeY="compact">
        <PlatformPicker className={styles.platformPicker} />
      </AdaptivityProvider>
      <AdaptivityProvider sizeY="regular">
        <ThemePicker className={styles.themePicker} />
        <ColorSchemePicker />
        <CopyCodeButton />
        <Button
          size="s"
          mode="secondary"
          appearance="neutral"
          onClick={() => setCodeVisible(!codeVisible)}
          before={<CodeExpandedIcon className={styles.rotateIcon} />}
        />
      </AdaptivityProvider>
    </Flex>
  );
}
