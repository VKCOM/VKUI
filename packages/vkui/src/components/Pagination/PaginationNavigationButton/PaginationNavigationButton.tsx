/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { Button, type ButtonProps } from '../../Button/Button';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';

export interface PaginationNavigationButtonOpts {
  'type': 'prev' | 'next';
  'style': 'icon' | 'caption' | 'both';
  'caption': React.ReactNode;
  'Icon': React.ComponentType;
  'a11yLabel': React.ReactNode;
  'disabled'?: boolean;
  'onClick': (event: React.MouseEvent<HTMLElement>) => void;
  'data-page': number | undefined;
  'data-testid': string | undefined;
}

export interface PaginationNavigationButtonProps extends PaginationNavigationButtonOpts {
  renderNavigationButton?: (props: CustomPaginationNavigationButton) => React.ReactNode;
}

/**
 * @private
 */
const getButtonPropsFromPaginationNavigationButton = (
  opts: PaginationNavigationButtonOpts,
): ButtonProps & { 'data-page': number | undefined; 'data-testid': string | undefined } => {
  const icon: React.ReactElement | null =
    opts.style !== 'caption' ? (
      <>
        <VisuallyHidden>{opts.a11yLabel}</VisuallyHidden>
        <opts.Icon />
      </>
    ) : null;
  const caption: React.ReactElement | null =
    opts.style === 'caption' ? (
      <>
        <VisuallyHidden>{opts.a11yLabel}</VisuallyHidden>
        <span aria-hidden="true">{opts.caption}</span>
      </>
    ) : opts.style !== 'icon' ? (
      <span aria-hidden="true">{opts.caption}</span>
    ) : null;

  return {
    'size': 'l',
    'before': opts.type === 'prev' ? icon : null,
    'after': opts.type === 'next' ? icon : null,
    'appearance': opts.style === 'caption' ? 'neutral' : 'accent',
    'mode': 'tertiary',
    'disabled': opts.disabled,
    'onClick': opts.onClick,
    'children': caption,
    'data-page': opts['data-page'],
    'data-testid': opts['data-testid'],
  } satisfies ButtonProps & { 'data-page': number | undefined; 'data-testid': string | undefined };
};

/**
 * @private
 */
export type CustomPaginationNavigationButton = ReturnType<
  typeof getButtonPropsFromPaginationNavigationButton
>;

/**
 * @private
 */
export const PaginationNavigationButton = ({
  renderNavigationButton,
  ...restProps
}: PaginationNavigationButtonProps): React.ReactNode => {
  const buttonProps = getButtonPropsFromPaginationNavigationButton(restProps);

  if (typeof renderNavigationButton === 'function') {
    return renderNavigationButton(buttonProps);
  }

  return <Button {...buttonProps} />;
};
