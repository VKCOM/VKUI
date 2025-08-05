import * as React from 'react';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import { Spinner, type SpinnerProps } from '../Spinner/Spinner';

export interface PanelSpinnerProps extends SpinnerProps {
  /**
   * Высота компонента.
   */
  height?: number;
}

/**
 * @see https://vkui.io/components/panel#panel-spinner
 */
// eslint-disable-next-line react/display-name -- используется defineComponentDisplayNames
export const PanelSpinner = React.memo(
  ({ height = 96, style, ...restProps }: PanelSpinnerProps) => (
    <Spinner size="m" {...restProps} style={{ height, ...style }} />
  ),
);

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(PanelSpinner, 'PanelSpinner');
}
