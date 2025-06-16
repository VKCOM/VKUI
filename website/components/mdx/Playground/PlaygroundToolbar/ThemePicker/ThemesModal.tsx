import * as React from 'react';
import { Icon20MoonOutline, Icon20SunOutline, Icon28ErrorCircleOutline } from '@vkontakte/icons';
import {
  Div,
  Flex,
  FormStatus,
  Link,
  ModalPage,
  ModalPageHeader,
  PanelSpinner,
  SimpleCell,
  Snackbar,
  VisuallyHidden,
} from '@vkontakte/vkui';
import { Callout, Code } from '@vkontakte/vkui-docs-theme';
import { PlaygroundStoreContext } from '@/providers/playgroundStoreProvider';
import { loadTheme } from '../../vkuiThemes/helpers';
import { type ThemeDefinitionProps } from '../../vkuiThemes/types';
import { useLoadThemeNames } from '../../vkuiThemes/useLoadThemeNames';

interface ThemesModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function ThemesModal({ open, setOpen }: ThemesModalProps) {
  const store = React.useContext(PlaygroundStoreContext);
  const { themeNames, isLoading, error } = useLoadThemeNames();
  const [snackbar, setSnackbar] = React.useState<React.ReactElement | null>(null);

  const handleThemeSelect = async (
    themeName: ThemeDefinitionProps['themeName'],
    colorSchemeOptions: ThemeDefinitionProps['colorSchemeOptions'],
  ) => {
    setOpen(false);
    if (store) {
      const { updateThemeData, updatePlaygroundLoading, colorScheme, updateColorScheme } =
        store.getState();

      updatePlaygroundLoading(true);
      try {
        await loadTheme(themeName, colorSchemeOptions);

        const currentColorSchemeDisabled = colorSchemeOptions.find(
          ({ value, disabled }) => value === colorScheme && disabled,
        );

        if (currentColorSchemeDisabled) {
          const foundEnabledAppearance = colorSchemeOptions.find(({ disabled }) => !disabled);

          if (foundEnabledAppearance) {
            updateColorScheme(foundEnabledAppearance.value);
          }
        }

        updateThemeData(themeName, colorSchemeOptions);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(error);
        setSnackbar(
          <Snackbar
            onClose={() => setSnackbar(null)}
            before={<Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />}
          >
            {`Не удалось загрузить токены для темы ${themeName}`}
          </Snackbar>,
        );
      } finally {
        updatePlaygroundLoading(false);
      }
    }
  };

  return (
    <>
      {snackbar}
      <ModalPage
        open={open}
        aria-live="polite"
        id="themes-modal"
        header={<ModalPageHeader>Темы</ModalPageHeader>}
        onClose={() => setOpen(false)}
        height="640px"
      >
        <Div>
          Ниже представлены все темы из{' '}
          <Link href="https://github.com/VKCOM/vkui-tokens" target="_blank" rel="noreferrer">
            @vkontakte/vkui-tokens&nbsp;↗
          </Link>
          . <br /> Выберите любую из них, чтобы посмотреть, как компонент будет отображаться.
          <Callout>
            <span>
              Узнать, как подключить тему в своём приложении, можно на странице{' '}
              <Link href="/overview/themes" onClick={() => setOpen(false)}>
                Кастомизация
              </Link>
              .
            </span>
          </Callout>
        </Div>
        {error && (
          <Div>
            <FormStatus mode="error">Произошла ошибка</FormStatus>
          </Div>
        )}
        {isLoading && <PanelSpinner />}
        {themeNames.map(([themeName, { colorSchemeOptions, baseForPlatform }]) => (
          <SimpleCell
            key={themeName}
            badgeAfterTitle={
              <Flex Component="span" gap="s" role="list">
                <VisuallyHidden>Поддерживает темы</VisuallyHidden>
                {colorSchemeOptions.map(({ value, disabled }) => {
                  const Icon = value === 'dark' ? Icon20MoonOutline : Icon20SunOutline;
                  if (disabled) {
                    return null;
                  }
                  return (
                    <span key={value} role="listitem">
                      <VisuallyHidden>{value === 'dark' ? 'светлую' : 'тёмную'}</VisuallyHidden>
                      <Icon display="inline" />
                    </span>
                  );
                })}
              </Flex>
            }
            subtitle={
              baseForPlatform ? (
                <span>
                  Используется по умолчанию для <Code>{`platform="${baseForPlatform}"`}</Code>
                </span>
              ) : undefined
            }
            onClick={() => {
              void handleThemeSelect(themeName, colorSchemeOptions);
            }}
          >
            {themeName}
          </SimpleCell>
        ))}
      </ModalPage>
    </>
  );
}
