import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import Caption from '../Typography/Caption/Caption';
import Text from '../Typography/Text/Text';
import { VKCOM } from '../../lib/platform';
import { hasReactNode } from '../../lib/utils';
import { HasPlatform } from '../../types';
import './Counter.css';

export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
   */
  mode?: 'secondary' | 'primary' | 'prominent';
  size?: 's' | 'm';
}

type CounterTypographyProps = Pick<CounterProps, 'size'> & HasPlatform & { Component?: React.ElementType };

const CounterTypography: React.FC<CounterTypographyProps> = ({ size, platform, ...restProps }) => {
  return size === 's'
    ? <Caption level="2" weight={platform === VKCOM ? 'medium' : 'regular'} {...restProps} />
    : <Text weight="medium" {...restProps} />;
};

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const { mode, size, children, ...restProps } = props;
  const platform = usePlatform();

  if (React.Children.count(children) === 0) {
    return null;
  }

  return (
    <span
      {...restProps}
      vkuiClass={classNames(
        getClassName('Counter', platform),
        `Counter--${mode}`,
        `Counter--s-${size}`,
      )}
    >
      {hasReactNode(children) && <CounterTypography platform={platform} size={size} vkuiClass="Counter__in">{children}</CounterTypography>}
    </span>
  );
};

Counter.defaultProps = {
  mode: 'secondary',
  size: 'm',
};

export default React.memo(Counter);
