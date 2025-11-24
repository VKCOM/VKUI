import { Icon24LightbulbOutline } from '@vkontakte/icons';
import {
  AppRoot,
  Caption,
  ColorSchemeProvider,
  FixedLayout,
  Flex,
  Headline,
  Link,
  Title,
} from '@vkontakte/vkui';
import { useColorSchemeSwitcher } from './ColorSchemeSwitcher';
import styles from './App.module.css';

function Copyright() {
  return (
    <Caption>
      {'Авторские права © '}
      <Link color="inherit" href="https://vkui.io/">
        Ваш сайт
      </Link>{' '}
      {new Date().getFullYear()}.
    </Caption>
  );
}

function ProTip() {
  return (
    <Headline inline>
      <Icon24LightbulbOutline className={styles.tipIcon} />
      {'Совет: посмотрите другие '}
      <Link href="https://github.com/VKCOM/VKUI/tree/master/examples">шаблоны</Link>
      {' в документации VKUI.'}
    </Headline>
  );
}

export default function App() {
  const [colorScheme, colorSchemeSwitcher] = useColorSchemeSwitcher();

  return (
    <ColorSchemeProvider value={colorScheme}>
      <AppRoot disableSettingVKUIClassesInRuntime>
        <Flex direction="column" justify="center" className={styles.layout}>
          <FixedLayout vertical="top">
            <Flex justify="end" className={styles.header}>
              {colorSchemeSwitcher}
            </Flex>
          </FixedLayout>
          <Flex direction="column" justify="center" align="center" gap={16}>
            <Title level="1" Component="h1">
              VKUI Vite.js пример на TypeScript
            </Title>
            <ProTip />
            <Copyright />
          </Flex>
        </Flex>
      </AppRoot>
    </ColorSchemeProvider>
  );
}
