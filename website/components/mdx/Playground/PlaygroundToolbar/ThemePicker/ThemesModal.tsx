import * as React from 'react';
import { Icon20MoonOutline, Icon20SunOutline } from '@vkontakte/icons';
import {
  Div,
  Flex,
  FormStatus,
  Link,
  ModalPage,
  ModalPageHeader,
  PanelSpinner,
  SimpleCell,
  VisuallyHidden,
} from '@vkontakte/vkui';
import { Callout, Code } from '@vkontakte/vkui-docs-theme';
import { usePlaygroundContext } from '../../context';
import { useLoadThemeNames } from '../../vkuiThemes/useLoadThemeNames';

interface ThemesModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function ThemesModal({ open, setOpen }: ThemesModalProps) {
  const { themeNames, isLoading, error } = useLoadThemeNames();
  const { setContext } = usePlaygroundContext();

  return (
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
            void setContext({ themeName, colorSchemeOptions });
            setOpen(false);
          }}
        >
          {themeName}
        </SimpleCell>
      ))}
    </ModalPage>
  );
}
