import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  mode: 'new' | 'prominent';
}

export const Badge: React.FunctionComponent<BadgeProps> = ({
  mode,
  ...restProps
}: BadgeProps) => {
  const platform = usePlatform();

  return (
    <span
      vkuiClass={classNames(
        getClassName('Badge', platform),
        `Badge--${mode}`,
      )}
      {...restProps}>
    </span>
  );
};

Badge.defaultProps = {
  mode: 'new',
};
