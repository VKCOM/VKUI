import { Icon20ArrowRightLeftCornersOutline, Icon20BracketsSlashOutline } from '@vkontakte/icons';
import { AdaptivityProvider, Button, Flex } from '@vkontakte/vkui';
import { ColorSchemePicker } from './ColorSchemePicker';
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
    : Icon20BracketsSlashOutline;

  return (
    <Flex align="center" gap="s" className={styles.root}>
      <AdaptivityProvider sizeY="compact">
        <PlatformPicker className={styles.platformPicker} />
      </AdaptivityProvider>
      <AdaptivityProvider sizeY="regular">
        <ThemePicker className={styles.themePicker} />
        <ColorSchemePicker />
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
