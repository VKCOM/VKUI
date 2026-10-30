import { useColorScheme } from '@vkontakte/vkui';
import { Editor } from 'react-live';
import { darkTheme, lightTheme } from './editorThemes';
import styles from './Playground.module.css';

export function LiveCodeEditor({
  code,
  onChange,
}: {
  code: string;
  onChange: (code: string) => void;
}) {
  const colorScheme = useColorScheme();
  return (
    <Editor
      code={code}
      onChange={onChange}
      language="tsx"
      theme={colorScheme === 'dark' ? darkTheme : lightTheme}
      className={styles.code}
    />
  );
}
