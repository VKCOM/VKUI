import * as React from 'react';
import { Icon24LightbulbOutline } from '@vkontakte/icons';
import {
  AppRoot,
  Caption,
  ColorSchemeProvider,
  Flex,
  Headline,
  Link,
  Spacing,
  Title,
  useColorScheme,
} from '@vkontakte/vkui';
import { useColorSchemeSwitcher } from './ColorSchemeSwitcher';
import styles from './styles.module.css';

function Copyright() {
  return (
    <Caption>
      {'Copyright © '}
      <Link color="inherit" href="https://vkcom.github.io/VKUI/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Caption>
  );
}

function ProTip() {
  return (
    <Headline inline>
      <Icon24LightbulbOutline className={styles.tipIcon} />
      {'Pro tip: See more '}
      <Link href="https://vkcom.github.io/VKUI/">templates</Link>
      {' in the VKUI documentation.'}
    </Headline>
  );
}

export default function App() {
  const colorScheme = useColorScheme();
  const [resolvedColorScheme, colorSchemeSwitcher] = useColorSchemeSwitcher(colorScheme);

  return (
    <ColorSchemeProvider value={resolvedColorScheme}>
      <AppRoot>
        <Flex direction="column" className={styles.layout}>
          <Flex justify="end" className={styles.header}>
            <Flex.Item flexBasis={100}>{colorSchemeSwitcher}</Flex.Item>
          </Flex>
          <Flex direction="column" justify="center" align="center" className={styles.main}>
            <Title level="1" Component="h1">
              VKUI Vite.js example in TypeScript
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
