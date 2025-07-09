'use client';

import * as React from 'react';
import { Icon24Cancel, Icon24Chevron, Icon24Dismiss, Icon24DismissDark } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { IconButton } from '../IconButton/IconButton';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Text } from '../Typography/Text/Text';
import { Title } from '../Typography/Title/Title';
import styles from './Banner.module.css';

export interface BannerProps extends Omit<TappableOmitProps, 'title' | 'size'> {
  /**
   * Тип баннера.
   */
  mode?: 'tint' | 'image';
  /**
   * Размер баннера.
   */
  size?: 's' | 'm';
  /**
   * Тип действия в правой части баннера.
   *
   * - `dismiss` – отображается иконка крестика, при нажатии на неё сработает свойство `onDismiss`.
   * - `chevron` – отображается иконка шеврона, которая подразумевает, что при нажатии на баннер можно куда-то перейти.
   */
  after?: 'dismiss' | 'chevron' | React.ReactNode;
  /**
   * Срабатывает при нажатии на иконку крестика при `after="dismiss"`.
   */
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Текст кнопки закрытия. Делает ее доступной для ассистивных технологий.
   */
  dismissLabel?: string;
  /**
   * Содержимое, отображаемое в левой части баннера.
   */
  before?: React.ReactNode;
  /**
   * Заголовок.
   */
  title?: React.ReactNode;
  /**
   * Подзаголовок.
   */
  subtitle?: React.ReactNode;
  /**
   * Дополнительный подзаголовок баннера.
   */
  extraSubtitle?: React.ReactNode;
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
   * Кнопки-действия. Принимает [`Button`](https://vkui.io/components/button).
   *
   * - В режиме `tint` или `image` со светлым фоном используйте только с параметрами:
   *    - `mode="primary"`
   *    - `mode="secondary"`
   * - В режиме `image` с тёмным фоном используйте с параметрами:
   *    - `appearance="overlay"`.
   *
   * Для набора кнопок используйте [`ButtonGroup`](https://vkui.io/components/button-group) с параметрами:
   *
   * - `gap="m" mode="horizontal" stretched`
   * - `gap="m" mode="vertical" stretched`.
   */
  actions?: React.ReactNode;
}

/**
 * @see https://vkui.io/components/banner
 */
export const Banner = ({
  mode = 'tint',
  imageTheme = 'dark',
  size = 's',
  before,
  after: afterProp,
  title,
  subtitle,
  extraSubtitle,
  children,
  background,
  actions,
  onDismiss,
  dismissLabel = 'Скрыть',
  Component,
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
        {hasReactNode(title) && (
          <HeaderTypography Component="div" weight="2" level={size === 'm' ? '2' : '1'}>
            {title}
          </HeaderTypography>
        )}
        {hasReactNode(subtitle) && (
          <SubheadTypography Component="div" className={styles.subtitle}>
            {subtitle}
          </SubheadTypography>
        )}
        {hasReactNode(extraSubtitle) && (
          <Text Component="div" className={styles.extraSubtitle}>
            {extraSubtitle}
          </Text>
        )}
        {hasReactNode(actions) && React.Children.count(actions) > 0 && (
          <div className={styles.actions}>{actions}</div>
        )}
      </div>
    </>
  );

  const afterMap: Record<string, React.ReactNode> = {
    chevron: <Icon24Chevron className={styles.chevron} />,
    dismiss: (
      <IconButton
        label={dismissLabel}
        className={styles.dismiss}
        onClick={onDismiss}
        hoverMode="opacity"
        hasActive={false}
      >
        {platform === 'ios' ? <IconDismissIOS /> : <Icon24Cancel />}
      </IconButton>
    ),
  };

  const after = afterProp && (
    <div className={styles.after}>
      {typeof afterProp === 'string' ? afterMap[afterProp] : afterProp}
    </div>
  );

  const isClickable = restProps.onClick || restProps.onClickCapture || restProps.href;

  return (
    <Tappable
      Component={Component || (!isClickable ? 'section' : undefined)}
      activeMode={platform === 'ios' ? 'opacity' : 'background'}
      baseClassName={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        mode === 'image' && styles.modeImage,
        size === 'm' && styles.sizeM,
        mode === 'image' && imageTheme === 'dark' && styles.inverted,
      )}
      {...restProps}
    >
      {content}
      {after}
    </Tappable>
  );
};
