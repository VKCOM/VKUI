import React, { HTMLAttributes, FunctionComponent } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

export interface BadgeProps extends HTMLAttributes<HTMLElement>, AdaptivityProps {
  mode: 'primary' | 'prominent';
};

const Badge: FunctionComponent<BadgeProps> = ({
  className,
  mode,
  sizeY,
  ...restProps
}: BadgeProps) => {
  const platform = usePlatform();

  return (
    <div
      className={classNames(
        getClassName('Badge', platform),
        `Badge--${mode}`,
        `Badge--sizeY-${sizeY}`,
        className,
      )}
      {...restProps}>
      <span className="Badge__dot"></span>
    </div>
  );
};

Badge.defaultProps = {
  mode: 'primary',
};

export default withAdaptivity(Badge, { sizeY: true });
