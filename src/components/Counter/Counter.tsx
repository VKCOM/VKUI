import React, { HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import Caption from '../Typography/Caption/Caption';
import Text from '../Typography/Text/Text';
import { VKCOM } from '../../lib/platform';
import { hasReactNode } from '../../lib/utils';

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
  const captionWeight = platform === VKCOM ? 'medium' : 'regular';

  return (
    <div
      {...restProps}
      className={classNames(className,
        getClassName('Counter', platform),
        `Counter--${mode}`,
        `Counter--s-${size}`,
        className,
      )}
    >
      {hasReactNode(children)
        ? size === 's'
          ? <Caption level="2" weight={captionWeight} className="Counter__in">{children}</Caption>
          : <Text weight="medium" className="Counter__in">{children}</Text>
        : null
      }
    </div>
  );
};

Counter.defaultProps = {
  mode: 'secondary',
  size: 'm',
};

export default React.memo(Counter);
