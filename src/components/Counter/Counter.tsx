import { Children, ElementType, FC, HTMLAttributes, memo } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import Caption from '../Typography/Caption/Caption';
import Text from '../Typography/Text/Text';
import { VKCOM } from '../../lib/platform';
import { hasReactNode } from '../../lib/utils';
import { HasPlatform } from '../../types';

export interface CounterProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
   */
  mode?: 'secondary' | 'primary' | 'prominent';
  size?: 's' | 'm';
}

type CounterTypographyProps = Pick<CounterProps, 'size'> & HasPlatform & { Component?: ElementType };

const CounterTypography: FC<CounterTypographyProps> = ({ size, platform, ...restProps }) => {
  return size === 's'
    ? <Caption level="2" weight={platform === VKCOM ? 'medium' : 'regular'} {...restProps} />
    : <Text weight="medium" {...restProps} />;
};

const Counter: FC<CounterProps> = (props: CounterProps) => {
  const { mode, size, children, ...restProps } = props;
  const platform = usePlatform();

  if (Children.count(children) === 0) {
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

export default memo(Counter);
