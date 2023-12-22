import * as React from 'react';
import { Icon16Dropdown } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { HasChildren, HasComponent } from '../../types';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './SubnavigationButton.module.css';

const appearanceStyles = {
  accent: styles.hostAppearanceAccent,
  neutral: styles.hostAppearanceNeutral,
};

const modeStyles = {
  primary: styles.hostModePrimary,
  outline: styles.hostModeOutline,
  tertiary: styles.hostModeTertiary,
};

const sizeStyles = {
  s: styles.hostSizeS,
  m: styles.hostSizeM,
  l: styles.hostSizeL,
};

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  ['compact']: styles.hostSizeYCompact,
};

export interface SubnavigationButtonProps extends Omit<TappableProps, 'size'> {
  mode?: 'primary' | 'outline' | 'tertiary';
  appearance?: 'accent' | 'neutral';
  size?: 's' | 'm' | 'l';
  selected?: boolean;
  /**
   * Размер шрифта. Этим свойством рекомендуется пользоваться, чтобы отрегулировать размер шрифта у кнопок в `<SubnavigationBar mode="fixed" />`
   */
  textLevel?: '1' | '2' | '3';
  /**
   * Рекомендуется использовать только иконки с размером 24
   */
  before?: React.ReactNode;
  /**
   * Рекомендуется использовать только `<Counter size="s" />` или `<Badge />`
   */
  after?: React.ReactNode;
  expandable?: boolean;
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
 * @see https://vkcom.github.io/VKUI/#/SubnavigationButton
 */
export const SubnavigationButton = ({
  mode = 'primary',
  appearance = 'accent',
  size = 'm',
  selected,
  textLevel = '1',
  before,
  after,
  expandable,
  children,
  className,
  ...restProps
}: SubnavigationButtonProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Tappable
      {...restProps}
      hasActive={false}
      focusVisibleMode="outside"
      className={classNames(
        styles.host,
        sizeStyles[size],
        modeStyles[mode],
        appearanceStyles[appearance],
        selected && styles.hostSelected,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        className,
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
        {expandable && <Icon16Dropdown className={styles.expandableIcon} />}
      </span>
    </Tappable>
  );
};
