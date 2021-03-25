import React, { HTMLAttributes, FC, Children } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import Caption from '../Typography/Caption/Caption';
import Text from '../Typography/Text/Text';
import { VKCOM } from '../../lib/platform';
import { hasReactNode } from '../../lib/utils';

interface CounterTypographyProps extends HTMLAttributes<HTMLDivElement> {
  size: CounterProps['size'];
}

const CounterTypography: FC<CounterTypographyProps> = ({ size, children, ...restProps }: CounterTypographyProps) => {
  const platform = usePlatform();

  if (size === 's') {
    const weight = platform === VKCOM ? 'medium' : 'regular';

    return <Caption level="2" weight={weight} {...restProps}>{children}</Caption>;
  }

  return <Text weight="medium" {...restProps}>{children}</Text>;
};

export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
   */
  mode?: 'secondary' | 'primary' | 'prominent';
  size?: 's' | 'm';
}

const Counter: FC<CounterProps> = (props: CounterProps) => {
  const { mode, size, children, ...restProps } = props;
  const platform = usePlatform();

  if (Children.count(children) === 0) {
    return null;
  }

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName('Counter', platform),
        `Counter--${mode}`,
        `Counter--s-${size}`,
      )}
    >
      {hasReactNode(children) && <CounterTypography size={size} vkuiClass="Counter__in">{children}</CounterTypography>}
    </div>
  );
};

Counter.defaultProps = {
  mode: 'secondary',
  size: 'm',
};

export default React.memo(Counter);
