import * as React from 'react';
import { Icon24Cancel, Icon24Chevron, Icon24Dismiss, Icon24DismissDark } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import type { HTMLAttributesWithRootRef } from '../../types';
import { IconButton } from '../IconButton/IconButton';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Text } from '../Typography/Text/Text';
import { Title } from '../Typography/Title/Title';
import styles from './Banner.module.css';

export interface BannerProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Тип баннера.
   */
  mode?: 'tint' | 'image';
  size?: 's' | 'm';
  /**
   * Тип действия в правой части баннера.
   *
   * - `dismiss` – отображается иконка крестика, при клике на неё сработает свойство `onDismiss`.
   * - `expand` – отображается иконка шеврона, которая подразумевает, что при клике на баннер можно куда-то перейти.
   */
  asideMode?: 'dismiss' | 'expand';
  /**
   * Срабатывает при клике на иконку крестика при `asideMode="dismiss"`.
   */
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Текст кнопки закрытия. Делает ее доступной для ассистивных технологий
   */
  dismissLabel?: string;
  /**
   * Содержимое, отображаемое в левой части баннера.
   */
  before?: React.ReactNode;
  /**
   * Заголовок.
   */
  header?: React.ReactNode;
  /**
   * Подзаголовок.
   */
  subhead?: React.ReactNode;
  /**
   * Текст баннера.
   */
  text?: React.ReactNode;
  /**
   * При использовании `mode="image"`.
   *
   * - `light` – в качестве фона используется светлое изображение, цвет текста в баннере будет тёмным.
   * - `dark` – в качестве фона используется тёмное изображение, цвет текста будет светлым.
   */
  imageTheme?: 'light' | 'dark';
  /**
   * При использовании `mode="image"`.
   *
   * Элемент, который нужно стилизовать цветом и/или фоном. Этот элемент будет растянут на 100% ширины и высоты баннера.
   */
  background?: React.ReactNode;
  /**
   * Кнопки-действия. Принимает [`Button`](https://vkcom.github.io/VKUI/#/Button).
   *
   * - В режиме `tint` или `image` со светлым фоном используйте только с параметрами:
   *    - `mode="primary"`
   *    - `mode="secondary"`
   * - В режиме `image` с тёмным фоном используйте с параметрами:
   *    - `appearance="overlay"`.
   *
   * Для набора кнопок используйте [`ButtonGroup`](https://vkcom.github.io/VKUI/#/ButtonGroup) с параметрами:
   *
   * - `gap="m" mode="horizontal" stretched`
   * - `gap="m" mode="vertical" stretched`
   */
  actions?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Banner
 */
export const Banner = ({
  mode = 'tint',
  imageTheme = 'dark',
  size = 's',
  before,
  asideMode,
  header,
  subhead,
  text,
  children,
  background,
  actions,
  onDismiss,
  dismissLabel = 'Скрыть',
  ...restProps
}: BannerProps): React.ReactNode => {
  const platform = usePlatform();

  const HeaderTypography = size === 'm' ? Title : Headline;
  const SubheadTypography = size === 'm' ? Text : Subhead;

  const IconDismissIOS = mode === 'image' ? Icon24DismissDark : Icon24Dismiss;

  const content = (
    <>
      {mode === 'image' && background && (
        <div aria-hidden className={styles.bg}>
          {background}
        </div>
      )}

      {before && <div className={styles.before}>{before}</div>}

      <div className={styles.content}>
        {hasReactNode(header) && (
          <HeaderTypography Component="div" weight="2" level={size === 'm' ? '2' : '1'}>
            {header}
          </HeaderTypography>
        )}
        {hasReactNode(subhead) && (
          <SubheadTypography Component="div" className={styles.subhead}>
            {subhead}
          </SubheadTypography>
        )}
        {hasReactNode(text) && (
          <Text Component="div" className={styles.text}>
            {text}
          </Text>
        )}
        {hasReactNode(actions) && React.Children.count(actions) > 0 && (
          <div className={styles.actions}>{actions}</div>
        )}
      </div>
    </>
  );

  return (
    <RootComponent
      Component="section"
      {...restProps}
      baseClassName={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        mode === 'image' && styles.modeImage,
        size === 'm' && styles.sizeM,
        mode === 'image' && imageTheme === 'dark' && styles.inverted,
      )}
    >
      {asideMode === 'expand' ? (
        <Tappable
          className={styles.in}
          activeMode={platform === 'ios' ? 'opacity' : 'background'}
          onClick={noop}
        >
          {content}

          <div className={styles.aside}>
            <Icon24Chevron className={styles.expand} />
          </div>
        </Tappable>
      ) : (
        <div className={styles.in}>
          {content}

          {asideMode === 'dismiss' && (
            <div className={styles.aside}>
              <IconButton
                label={dismissLabel}
                className={styles.dismiss}
                onClick={onDismiss}
                hoverMode="opacity"
                hasActive={false}
              >
                {platform === 'ios' ? <IconDismissIOS /> : <Icon24Cancel />}
              </IconButton>
            </div>
          )}
        </div>
      )}
    </RootComponent>
  );
};
