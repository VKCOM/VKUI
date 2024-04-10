import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { type SizeTypeValues } from '../../../lib/adaptivity';
import { Tappable, type TappableProps } from '../../Tappable/Tappable';
import { Text } from '../../Typography/Text/Text';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import { PaginationProps } from '../Pagination';
import { getPageLabelDefault } from '../utils';
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

export const getTappablePropsFromPaginationPage = (opts: PaginationPageButtonOpts) => {
  const {
    isCurrent = false,
    getPageLabel = getPageLabelDefault,
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

  return {
    'className': classNames(pageClassNames, className),
    'activeMode': styles['PaginationPage--state-active'],
    'hoverMode': styles['PaginationPage--state-hover'],
    'focusVisibleMode': 'outside',
    'aria-current': isCurrent ? true : undefined,
    'disabled': disabled,
    'children': (
      <Text normalize={false}>
        <VisuallyHidden>{getPageLabel(isCurrent)} </VisuallyHidden>
        {children}
      </Text>
    ),
    'data-page': children,
    ...restProps,
  } satisfies TappableProps & { 'data-page': number };
};

export type CustomPaginationPageButtonProps = ReturnType<typeof getTappablePropsFromPaginationPage>;

export const PaginationPageButton: React.FC<PaginationPageButtonProps> = ({
  renderPageButton,
  ...restProps
}) => {
  const tappableProps = getTappablePropsFromPaginationPage(restProps);

  if (typeof renderPageButton === 'function') {
    return renderPageButton(tappableProps);
  }

  return <Tappable {...tappableProps} />;
};
