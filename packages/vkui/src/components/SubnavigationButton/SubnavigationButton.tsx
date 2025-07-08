'use client';

import * as React from 'react';
import { Icon16Dropdown } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import type { HasChildren, HasComponent } from '../../types';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './SubnavigationButton.module.css';

const appearanceStyles = {
  accent: styles.appearanceAccent,
  neutral: styles.appearanceNeutral,
};

const modeStyles = {
  primary: styles.modePrimary,
  outline: styles.modeOutline,
  tertiary: styles.modeTertiary,
};

const sizeStyles = {
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
};

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface SubnavigationButtonProps extends Omit<TappableOmitProps, 'size'> {
  /**
   * Стиль отображения кнопки.
   */
  mode?: 'primary' | 'outline' | 'tertiary';
  /**
   * Тип внешнего вида кнопки.
   */
  appearance?: 'accent' | 'neutral';
  /**
   * Размер кнопки.
   */
  size?: 's' | 'm' | 'l';
  /**
   * Выбранное состояние.
   */
  selected?: boolean;
  /**
   * Размер шрифта. Этим свойством рекомендуется пользоваться, чтобы отрегулировать размер шрифта у кнопок в `<SubnavigationBar fixed />`.
   */
  textLevel?: '1' | '2' | '3';
  /**
   * Рекомендуется использовать только иконки с размером 24.
   */
  before?: React.ReactNode;
  /**
   * Рекомендуется использовать только `<Counter size="s" />` или `<Badge />`.
   */
  after?: React.ReactNode;
  /**
   * Нужно ли отображать иконку `"chevron"`.
   */
  chevron?: boolean;
}

type SubnavigationButtonTypographyProps = Pick<
  SubnavigationButtonProps,
  'textLevel' | 'className'
> &
  HasComponent &
  HasChildren;

const SubnavigationButtonTypography = ({
  textLevel,
  ...restProps
}: SubnavigationButtonTypographyProps) => {
  if (textLevel === '1') {
    return <Subhead {...restProps} />;
  }

  return <Caption level={textLevel === '2' ? '1' : '2'} {...restProps} />;
};

/**
 * @see https://vkui.io/components/subnavigation-bar#subnavigation-button
 */
export const SubnavigationButton = ({
  mode = 'primary',
  appearance = 'accent',
  size = 'm',
  selected,
  textLevel = '1',
  before,
  after,
  chevron,
  children,
  ...restProps
}: SubnavigationButtonProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Tappable
      hasActive={false}
      focusVisibleMode="outside"
      {...restProps}
      baseClassName={classNames(
        styles.host,
        sizeStyles[size],
        modeStyles[mode],
        appearanceStyles[appearance],
        selected && styles.selected,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        restProps.disabled && styles.disabled,
      )}
    >
      <span className={styles.in}>
        {before && <span className={styles.before}>{before}</span>}
        <SubnavigationButtonTypography
          textLevel={textLevel}
          className={styles.label}
          Component="span"
        >
          {children}
        </SubnavigationButtonTypography>
        {after && <span className={styles.after}>{after}</span>}
        {chevron && <Icon16Dropdown className={styles.chevronIcon} />}
      </span>
    </Tappable>
  );
};
