import React, { HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';

export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
   */
  mode?: 'secondary' | 'primary' | 'prominent';
  size?: 's' | 'm';
}

const Counter: React.FunctionComponent<CounterProps> = (props: CounterProps) => {
  const { mode, size, children, className, ...restProps } = props;

  const platform = usePlatform();
  const baseClassName = getClassName('Counter', platform);

  return (
    <div
      {...restProps}
      className={classNames(className, baseClassName, `Counter--${mode}`, `Counter--s-${size}`)}
    >
      <div className="Counter__in">
        {children}
      </div>
    </div>
  );
};

Counter.defaultProps = {
  mode: 'secondary',
  size: 'm',
};

export default React.memo(Counter);
