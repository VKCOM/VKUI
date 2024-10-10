import * as React from 'react';
import { Icon20MoonOutline, Icon20SunOutline } from '@vkontakte/icons';
import {
  Div,
  Link,
  ModalPage,
  ModalPageHeader,
  PanelSpinner,
  SimpleCell,
  VisuallyHidden,
} from '@vkui';
import { useLoadThemeNames } from '../../lib/theme';
import Blockquote from '../Blockquote';
import CodeRenderer from '../Code/CodeRenderer';
import { StyleGuideContext } from '../StyleGuide/StyleGuideRenderer';

export function Themes({ id }) {
  const { setContext, setActiveModal } = React.useContext(StyleGuideContext);
  const { isLoading, themeNames, error } = useLoadThemeNames();

  return (
    <ModalPage
      aria-busy={isLoading}
      aria-live="polite"
      id={id}
      header={<ModalPageHeader>Темы</ModalPageHeader>}
    >
      <Div>
        Ниже представлены все темы из{' '}
        <Link href="https://github.com/VKCOM/vkui-tokens" target="_blank">
          @vkontakte/vkui-tokens
        </Link>
        .
        <Blockquote>
          Узнать, как их подключить, можно на странице{' '}
          <Link href="#/Customize" onClick={() => setActiveModal(null)}>
            Кастомизация
          </Link>
          .
        </Blockquote>
      </Div>
      {error && <Div>Произошла ошибка</Div>}
      {isLoading && <PanelSpinner />}
      {themeNames.map(([themeName, { colorSchemeOptions, baseForPlatform }]) => (
        <SimpleCell
          key={themeName}
          badgeAfterTitle={
            <span style={{ display: 'flex', gap: 4 }} role="list">
              <VisuallyHidden>Поддерживает темы</VisuallyHidden>
              {colorSchemeOptions.map(({ value, url, disabled }) => {
                if (disabled) {
                  return null;
                }
                return value === 'dark' ? (
                  <span key="sun" role="listitem">
                    <VisuallyHidden>светлую</VisuallyHidden>
                    <Icon20MoonOutline display="inline" />
                  </span>
                ) : (
                  <span key="moon" role="listitem">
                    <VisuallyHidden>тёмную</VisuallyHidden>
                    <Icon20SunOutline display="inline" />
                  </span>
                );
              })}
            </span>
          }
          subtitle={
            baseForPlatform ? (
              <span>
                Используется по умолчанию для{' '}
                <CodeRenderer noWrap>{`platform="${baseForPlatform}"`}</CodeRenderer>
              </span>
            ) : undefined
          }
          onClick={() => {
            setContext({ themeName, colorSchemeOptions });
            setActiveModal(null);
          }}
        >
          {themeName}
        </SimpleCell>
      ))}
    </ModalPage>
  );
}
