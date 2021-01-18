import React, { HTMLAttributes, FunctionComponent } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';
import { hasReactNode } from '../../lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLElement>, AdaptivityProps {}

const Badge: FunctionComponent<BadgeProps> = ({
  children,
  className,
  sizeY,
  ...restProps
}: BadgeProps) => {
  const platform = usePlatform();

  return (
    <div
      className={classNames(
        getClassName('Badge', platform),
        `Badge--sizeY-${sizeY}`,
        className,
      )}
      {...restProps}>
      {hasReactNode(children) ? children : <span className="Badge__new"></span>}
    </div>
  );
};

export default withAdaptivity(Badge, { sizeY: true });
