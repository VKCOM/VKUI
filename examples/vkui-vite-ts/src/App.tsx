import { Icon24LightbulbOutline } from '@vkontakte/icons';
import {
  AppRoot,
  Caption,
  ColorSchemeProvider,
  FixedLayout,
  Flex,
  Headline,
  Link,
  Spacing,
  Title,
} from '@vkontakte/vkui';
import { useColorSchemeSwitcher } from './ColorSchemeSwitcher';
import styles from './App.module.css';

function Copyright() {
  return (
    <Caption>
      {'Авторские права © '}
      <Link color="inherit" href="https://vkcom.github.io/VKUI/">
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
      <Link href="https://vkcom.github.io/VKUI/">шаблоны</Link>
      {' в документации VKUI.'}
    </Headline>
  );
}

export default function App() {
  const [colorScheme, colorSchemeSwitcher] = useColorSchemeSwitcher();

  return (
    <ColorSchemeProvider value={colorScheme}>
      <AppRoot>
        <Flex direction="column" justify="center" className={styles.layout}>
          <FixedLayout vertical="top">
            <Flex justify="end" className={styles.header}>
              <Flex.Item>{colorSchemeSwitcher}</Flex.Item>
            </Flex>
          </FixedLayout>
          <Flex direction="column" justify="center" align="center">
            <Title level="1" Component="h1">
              VKUI Vite.js пример на TypeScript
            </Title>
            <Spacing />
            <ProTip />
            <Spacing size="s" />
            <Copyright />
          </Flex>
        </Flex>
      </AppRoot>
    </ColorSchemeProvider>
  );
}
