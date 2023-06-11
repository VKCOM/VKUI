import * as React from 'react';
import { Icon16Dropdown } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import { HasChildren, HasComponent } from '../../types';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './SubnavigationButton.module.css';

const sizeYClassNames = {
  none: styles['SubnavigationButton--sizeY-none'],
  [SizeType.COMPACT]: styles['SubnavigationButton--sizeY-compact'],
};

export interface SubnavigationButtonProps extends Omit<TappableProps, 'size'> {
  mode?: 'primary' | 'outline' | 'tertiary';
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
      Component="li"
      focusVisibleMode="outside"
      className={classNames(
        styles['SubnavigationButton'],
        {
          s: styles['SubnavigationButton--size-s'],
          m: styles['SubnavigationButton--size-m'],
          l: styles['SubnavigationButton--size-l'],
        }[size],
        {
          primary: styles['SubnavigationButton--mode-primary'],
          outline: styles['SubnavigationButton--mode-outline'],
          tertiary: styles['SubnavigationButton--mode-tertiary'],
        }[mode],
        selected && styles['SubnavigationButton--selected'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        className,
      )}
    >
      <span className={styles['SubnavigationButton__in']}>
        {before && <span className={styles['SubnavigationButton__before']}>{before}</span>}
        <SubnavigationButtonTypography
          textLevel={textLevel}
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
