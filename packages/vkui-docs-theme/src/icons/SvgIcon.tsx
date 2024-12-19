import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './SvgIcon.module.css';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  verticalAlign?: 'middle';
  color?: 'medium' | 'primary';
}

const colorClassNames = {
  medium: styles.colorMedium,
  primary: styles.colorPrimary,
};

export const SvgIcon = ({
  color,
  children,
  width = 24,
  height = 24,
  verticalAlign,
  ...restProps
}: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden
      fill="none"
      className={classNames(
        styles.icon,
        verticalAlign === 'middle' && styles.verticalAlignMiddle,
        color && colorClassNames[color],
      )}
      {...restProps}
    >
      {children}
    </svg>
  );
};
