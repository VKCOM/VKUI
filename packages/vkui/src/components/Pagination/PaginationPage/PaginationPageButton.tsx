/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { type SizeTypeValues } from '../../../lib/adaptivity';
import { Tappable, type TappableOmitProps } from '../../Tappable/Tappable';
import { Text } from '../../Typography/Text/Text';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import type { PaginationProps } from '../Pagination';
import { getPaginationPageClassNames } from './usePaginationPageClasses';
import styles from './PaginationPage.module.css';

export interface PaginationPageButtonOpts
  extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled' | 'className'>,
    Pick<PaginationProps, 'getPageLabel'> {
  isCurrent?: boolean;
  sizeY?: SizeTypeValues;
  children: number;
}

export interface PaginationPageButtonProps extends PaginationPageButtonOpts {
  renderPageButton?: (props: CustomPaginationPageButtonProps) => React.ReactNode;
}

const getTappablePropsFromPaginationPage = (
  opts: PaginationPageButtonOpts,
): TappableOmitProps & { 'data-page': number } => {
  const {
    isCurrent = false,
    getPageLabel,
    children,
    className,
    disabled,
    sizeY,
    ...restProps
  } = opts;

  const pageClassNames = getPaginationPageClassNames({
    isCurrent,
    disabled,
    sizeY,
  });

  const pageLabel = getPageLabel?.(isCurrent);
  return {
    'className': classNames(pageClassNames, className),
    'activeMode': styles.stateActive,
    'hoverMode': styles.stateHover,
    'focusVisibleMode': 'outside',
    'aria-current': isCurrent ? true : undefined,
    'disabled': disabled,
    'children': (
      <Text normalize={false}>
        {pageLabel && <VisuallyHidden>{pageLabel} </VisuallyHidden>}
        {children}
      </Text>
    ),
    'data-page': children,
    ...restProps,
  };
};

export type CustomPaginationPageButtonProps = ReturnType<typeof getTappablePropsFromPaginationPage>;

export const PaginationPageButton = ({
  renderPageButton,
  ...restProps
}: PaginationPageButtonProps): React.ReactNode => {
  const tappableProps = getTappablePropsFromPaginationPage(restProps);

  if (typeof renderPageButton === 'function') {
    return renderPageButton(tappableProps);
  }

  return <Tappable {...tappableProps} />;
};
