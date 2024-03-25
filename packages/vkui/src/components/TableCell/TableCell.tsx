import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { TableContext, TableSectionContext } from '../Table/TableContext';
import { DEFAULT_TABLE_PADDING } from '../Table/constants';
import type { TableContextProps, TableSectionContextProps } from '../Table/types';
import styles from './TableCell.module.css';

export type TableCellBaseProps = React.ThHTMLAttributes<HTMLTableCellElement> &
  React.TdHTMLAttributes<HTMLTableCellElement>;

export interface TableCellProps extends TableCellBaseProps, HasRootRef<HTMLTableCellElement> {
  noPadding?: boolean;
  /**
   * Переключить ячейку в режим заголовка (тег `<th>`).
   *
   * > Note: при оборачивании в [TableHeader](https://vkcom.github.io/VKUI/#/TableHeader) заголовок
   * > автоматически становится `asHeader={true}`.
   */
  asHeader?: boolean;
}

export const TableCell = ({
  asHeader,
  scope: scopeProp,
  align = 'left',
  noPadding,
  style: styleProp,
  className,
  children,
  ...restProps
}: TableCellProps) => {
  const { padding = DEFAULT_TABLE_PADDING, enableZebraStripes } = React.useContext(TableContext);
  const [paddingClassName, style] = resolvePaddingProps(padding, styleProp, noPadding);

  const tableSectionContext = React.useContext(TableSectionContext);
  const { contextSectionType, Component, scope, classNamesByContext } =
    resolvePropsByTableSectionContext(asHeader ? 'th' : 'td', scopeProp, tableSectionContext);

  return (
    <RootComponent
      Component={Component}
      baseClassName={styles.TableCell}
      style={style}
      className={classNames(
        className,
        paddingClassName,
        enableZebraStripes && contextSectionType === null && styles['TableCell--zebra-stripes'],
        ...classNamesByContext,
      )}
      scope={scope}
      // @ts-expect-error: TS2322 Нужно править типы RootComponent, сейчас зашито React.AllHTMLAttributes
      align={align}
      {...restProps}
    >
      {children}
    </RootComponent>
  );
};

const paddingClassNames = {
  xs: styles['TableCell--padding-xs'],
  s: styles['TableCell--padding-s'],
  m: styles['TableCell--padding-m'],
  l: styles['TableCell--padding-l'],
};

function resolvePaddingProps(
  padding: TableContextProps['padding'],
  style?: React.CSSProperties,
  noPadding?: boolean,
): [undefined | string, undefined | React.CSSProperties] {
  if (!noPadding && padding) {
    if (paddingClassNames.hasOwnProperty(padding)) {
      return [paddingClassNames[padding], style];
    } else if (style && style.padding === undefined) {
      style.padding = padding;
    }
  }

  return [undefined, style];
}

function resolvePropsByTableSectionContext(
  Component: 'th' | 'td',
  scopeProp: string | undefined,
  tableSectionTypeProps: TableSectionContextProps | undefined,
) {
  const defaultProps = {
    contextSectionType: null,
    Component,
    // у <td> отсутствует атрибут `scope` (см. https://html.spec.whatwg.org/multipage/tables.html#the-td-element)
    scope: Component === 'td' ? undefined : scopeProp,
    classNamesByContext: [],
  };

  if (!tableSectionTypeProps) {
    return defaultProps;
  }

  switch (tableSectionTypeProps.type) {
    case 'header':
    case 'footer': {
      /* Навешиваем sticky тут, т.к. он работает нормально только на ячейках (см. https://caniuse.com/?search=sticky). */
      const classNamesByContext = tableSectionTypeProps.isSticky
        ? [styles['TableCell--sticky']]
        : [];

      if (tableSectionTypeProps.type === 'header') {
        classNamesByContext.push(styles['TableCell--section-header']);
        return {
          contextSectionType: 'header',
          Component: 'th' as const,
          scope: scopeProp ? scopeProp : 'col',
          classNamesByContext,
        };
      }

      classNamesByContext.push(styles['TableCell--section-footer']);
      return {
        contextSectionType: 'footer',
        Component: defaultProps.Component,
        scope: defaultProps.scope,
        classNamesByContext,
      };
    }
    default:
      return defaultProps;
  }
}
