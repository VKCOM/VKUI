import * as React from 'react';
import { Icon16Chevron, Icon24ChevronCompactRight } from '@vkontakte/icons';

const iconSize = {
  s: Icon16Chevron,
  m: Icon24ChevronCompactRight,
};

export interface ChevronProps extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> {
  size?: 's' | 'm';
}

export const Chevron = ({ size = 'm', ...restProps }: ChevronProps) => {
  const Icon = iconSize[size];

  return <Icon {...restProps} />;
};
