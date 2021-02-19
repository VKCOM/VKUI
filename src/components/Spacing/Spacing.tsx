import React, { FC, HTMLAttributes } from 'react';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';

export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Высота спэйсинга
   */
  size?: number;
  /**
   * Настройка положения сепаратора:
   * <br />separator=false (default) - без сепаратора
   * <br />separator=true | separator='center' - сепаратор располагается по середине
   * <br />separator='top'
   * <br />separator='bottom'
   */
  separator?: boolean | 'top' | 'bottom' | 'center';
}

export const Spacing: FC<SpacingProps> = ({ size, separator, className, style, ...restProps }: SpacingProps) => {
  const platfrom = usePlatform();
  const styles = {
    height: size,
    ...style,
  };

  return (
    <div
      {...restProps}
      className={classNames(getClassName('Spacing', platfrom), className, {
        'Spacing--separator': !!separator,
        'Spacing--separator-center':
          separator === true || separator === 'center',
        'Spacing--separator-top': separator === 'top',
        'Spacing--separator-bottom': separator === 'bottom',
      })}
      style={styles}
    />
  );
};

Spacing.defaultProps = {
  size: 8,
};

export default Spacing;
