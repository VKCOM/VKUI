import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './Component.module.css';
import stylesIOS from './ComponentIOS.module.css';

const headerLevelClassName = {
  1: styles['Component__header--level-1'],
  2: styles['Component__header--level-2'],
};

export const Component = ({
  headerLevel = 1,
  mode = 'plain',
  appearance = 'light',
  gradientColor = 'blue',
  platform,
  disabled,
  children,
}) => {
  const headerClassName = classNames(styles.Component__header, headerLevelClassName[headerLevel]);

  return (
    <div
      className={classNames(
        styles.Component,
        disabled && styles['Component--disabled'],
        platform === 'ios' && stylesIOS['Component--ios'],
        styles[`Component--mode-${mode}`],
        styles[`Component--gradient-${appearance}-${gradientColor}`],
      )}
    >
      <h2 className={headerClassName}>{children}</h2>
    </div>
  );
};
