import * as React from 'react';
import { Icon16Dropdown } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Subhead } from '../Typography/Subhead/Subhead';
import { TypographyProps } from '../Typography/Typography';
import styles from './SubnavigationButton.module.css';

const appearanceStyles = {
  accent: styles['SubnavigationButton--appearance-accent'],
  neutral: styles['SubnavigationButton--appearance-neutral'],
};

const modeStyles = {
  primary: styles['SubnavigationButton--mode-primary'],
  outline: styles['SubnavigationButton--mode-outline'],
  tertiary: styles['SubnavigationButton--mode-tertiary'],
};

const sizeStyles = {
  s: styles['SubnavigationButton--size-s'],
  m: styles['SubnavigationButton--size-m'],
  l: styles['SubnavigationButton--size-l'],
};

const sizeYClassNames = {
  none: styles['SubnavigationButton--sizeY-none'],
  [SizeType.COMPACT]: styles['SubnavigationButton--sizeY-compact'],
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

type SubnavigationButtonTypographyProps = TypographyProps &
  Pick<SubnavigationButtonProps, 'textLevel'>;

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
  const weight = selected ? '2' : '3';

  return (
    <Tappable
      {...restProps}
      hasActive={false}
      focusVisibleMode="outside"
      className={classNames(
        styles['SubnavigationButton'],
        sizeStyles[size],
        modeStyles[mode],
        appearanceStyles[appearance],
        selected && styles['SubnavigationButton--selected'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        className,
      )}
    >
      <span className={styles['SubnavigationButton__in']}>
        {before && <span className={styles['SubnavigationButton__before']}>{before}</span>}
        <SubnavigationButtonTypography
          textLevel={textLevel}
          weight={weight}
          selected={selected}
          className={styles['SubnavigationButton__label']}
          Component="span"
        >
          {children}
        </SubnavigationButtonTypography>
        {after && <span className={styles['SubnavigationButton__after']}>{after}</span>}
        {expandable && <Icon16Dropdown className={styles['SubnavigationButton__expandableIcon']} />}
      </span>
    </Tappable>
  );
};
