import * as React from 'react';
import {
  Icon20ArrowLeftRightCornersOutline,
  Icon20ArrowRightLeftCornersOutline,
  Icon20CopyOutline,
  Icon20MoonOutline,
  Icon20SunOutline,
} from '@vkontakte/icons';
import { copyTextToClipboard } from '@vkontakte/vkjs';
import { Button, ButtonGroup, Flex } from '@vkontakte/vkui';
import { LiveContext } from 'react-live';
import { usePlaygroundContext } from '../context';
import { PlatformPicker } from './PlatformPicker/PlatformPicker';
import { ThemePicker } from './ThemePicker/ThemePicker';
import styles from './PlaygroundToolbar.module.css';

interface PlaygroundToolbarProps {
  codeVisible: boolean;
  onToggleCodeVisibility: () => void;
}

export function PlaygroundToolbar({ codeVisible, onToggleCodeVisibility }: PlaygroundToolbarProps) {
  const { colorScheme, setContext, colorSchemeOptions } = usePlaygroundContext();
  const { newCode } = React.useContext(LiveContext);

  const ColorSchemeIcon = colorScheme === 'light' ? Icon20SunOutline : Icon20MoonOutline;
  const CodeExpandedIcon = codeVisible
    ? Icon20ArrowRightLeftCornersOutline
    : Icon20ArrowLeftRightCornersOutline;

  // disable color scheme picker for special themes
  const colorSchemeDisabled = colorSchemeOptions.some((scheme) => scheme.disabled);

  return (
    <Flex justify="space-between" className={styles.root}>
      <PlatformPicker className={styles.platformPicker} />
      <ButtonGroup gap="s">
        <ThemePicker />
        <Button
          size="s"
          mode="secondary"
          appearance="neutral"
          before={<ColorSchemeIcon />}
          onClick={() =>
            void setContext({ colorScheme: colorScheme === 'light' ? 'dark' : 'light' })
          }
          disabled={colorSchemeDisabled}
          title={colorSchemeDisabled ? `Поддерживается только схема ${colorScheme}` : undefined}
        />
        <Button
          size="s"
          mode="secondary"
          appearance="neutral"
          onClick={() => {
            void copyTextToClipboard(newCode || '');
          }}
          before={<Icon20CopyOutline />}
        />
        <Button
          size="s"
          mode="secondary"
          appearance="neutral"
          onClick={onToggleCodeVisibility}
          before={<CodeExpandedIcon className={styles.rotateIcon} />}
        />
      </ButtonGroup>
    </Flex>
  );
}
