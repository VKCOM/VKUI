import * as React from 'react';
import { Icon16Chevron, Icon24ChevronCompactRight } from '@vkontakte/icons';

const iconSize = {
  small: Icon16Chevron,
  medium: Icon24ChevronCompactRight,
};

export interface ChevronProps extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> {
  size?: 'small' | 'medium';
}

export const Chevron = ({ size = 'medium', ...restProps }: ChevronProps) => {
  const Icon = iconSize[size];

  return <Icon {...restProps} />;
};
