import React, { HTMLAttributes, FunctionComponent } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';

export interface BadgeProps extends HTMLAttributes<HTMLElement> {
  mode: 'new' | 'prominent';
};

export const Badge: FunctionComponent<BadgeProps> = ({
  className,
  mode,
  ...restProps
}: BadgeProps) => {
  const platform = usePlatform();

  return (
    <div
      className={classNames(
        getClassName('Badge', platform),
        `Badge--${mode}`,
        className,
      )}
      {...restProps}>
    </div>
  );
};

Badge.defaultProps = {
  mode: 'new',
};
