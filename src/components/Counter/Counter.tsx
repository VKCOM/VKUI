import React from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { HasChildren } from '../../types/props';

const baseClassName = getClassName('Counter');

export interface CounterProps extends HasChildren {
  /**
   * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
   */
  type?: 'secondary' | 'primary' | 'prominent'
}

const Counter: React.FunctionComponent<CounterProps> = (props: CounterProps) => {
  const { type, children } = props;

  return (
    <div className={classNames(baseClassName, `Counter--${type}`)}>
      <div className="Counter__in">
        {children}
      </div>
    </div>
  );
};

Counter.defaultProps = {
  type: 'secondary'
};

export default React.memo(Counter);
