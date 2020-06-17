import React from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { HasChildren } from '../../types';

const baseClassName = getClassName('Counter');

export interface CounterProps extends HasChildren {
  /**
   * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
   */
  mode?: 'secondary' | 'primary' | 'prominent';
  size?: 's' | 'm';
}

const Counter: React.FunctionComponent<CounterProps> = (props: CounterProps) => {
  const { mode, size, children } = props;

  return (
    <div className={classNames(baseClassName, `Counter--${mode}`, `Counter--s-${size}`)}>
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
