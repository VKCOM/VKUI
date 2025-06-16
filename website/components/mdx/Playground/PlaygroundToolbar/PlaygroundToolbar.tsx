import * as React from 'react';
import {
  Icon20ArrowLeftRightCornersOutline,
  Icon20ArrowRightLeftCornersOutline,
} from '@vkontakte/icons';
import { AdaptivityProvider, Button, ButtonGroup, Flex } from '@vkontakte/vkui';
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
    <Flex justify="space-between" align="center" className={styles.root}>
      <AdaptivityProvider sizeY="compact">
        <PlatformPicker className={styles.platformPicker} />
      </AdaptivityProvider>
      <AdaptivityProvider sizeY="regular">
        <ButtonGroup gap="s">
          <ThemePicker />
          <ColorSchemePicker />
          <CopyCodeButton />
          <Button
            size="s"
            mode="secondary"
            appearance="neutral"
            onClick={() => setCodeVisible(!codeVisible)}
            before={<CodeExpandedIcon className={styles.rotateIcon} />}
          />
        </ButtonGroup>
      </AdaptivityProvider>
    </Flex>
  );
}
