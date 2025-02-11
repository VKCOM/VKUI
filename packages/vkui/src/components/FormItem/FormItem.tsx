'use client';

import * as React from 'react';
import { classNames, hasReactNode, isPrimitiveReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import type { HasComponent, HasRootRef } from '../../types';
import { Removable, type RemovableProps } from '../Removable/Removable';
import { RootComponent } from '../RootComponent/RootComponent';
import { Footnote } from '../Typography/Footnote/Footnote';
import { FormItemTop } from './FormItemTop/FormItemTop';
import { FormItemTopAside } from './FormItemTop/FormItemTopAside';
import { FormItemTopLabel } from './FormItemTop/FormItemTopLabel';
import { FormItemContext } from './context';
import styles from './FormItem.module.css';

const sizeYClassNames = {
  none: classNames(styles.sizeYNone, 'vkuiInternalFormItem--sizeY-none'),
  compact: classNames(styles.sizeYCompact, 'vkuiInternalFormItem--sizeY-compact'),
};

const stylesStatus = {
  error: classNames(styles.statusError, 'vkuiInternalFormItem--status-error'),
  valid: classNames(styles.statusValid, 'vkuiInternalFormItem--status-valid'),
};

export interface FormItemProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent,
    RemovableProps {
  top?: React.ReactNode;
  topId?: string;
  /**
   * Многострочный вывод заголовка. По умолчанию текст не переносится при переполнении.
   */
  topMultiline?: boolean;
  /**
   * Позволяет поменять тег используемый для top
   * Если оставить пустым, то тег top будет span.
   * Если оставить пустым и использовать htmlFor, то тег top будет label.
   */
  topComponent?: React.ElementType;
  bottom?: React.ReactNode;
  /**
   * Передаётся при использовании `bottom`.
   *
   * Должен совпадать с `aria-describedby`, который передаётся в компонент, отвечающий за пользовательский ввод.
   */
  bottomId?: string;
  status?: 'default' | 'error' | 'valid';
  /**
   * Дает возможность удалить `FormItem`. Рекомендуется использовать только для `Input` или `Select`.
   *
   * Режим `indent` предназначен для визуального отступа
   */
  removable?: boolean | 'indent';
  /**
   * Удаляет внешние отступы вокруг компонента
   * @since 5.8.0
   */
  noPadding?: boolean;
  /**
   * Помечает поле обязательным
   */
  required?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormItem
 */
export const FormItem: React.FC<FormItemProps> & {
  Top: typeof FormItemTop;
  TopLabel: typeof FormItemTopLabel;
  TopAside: typeof FormItemTopAside;
} = ({
  children,
  top,
  topId,
  topMultiline = false,
  topComponent: topComponentProp,
  bottom,
  status = 'default',
  removable,
  onRemove,
  removePlaceholder = 'Удалить',
  getRootRef,
  htmlFor,
  bottomId,
  noPadding,
  required = false,
  ...restProps
}: FormItemProps) => {
  const rootEl = useExternRef(getRootRef);
  const { sizeY = 'none' } = useAdaptivity();

  const wrappedChildren = (
    <React.Fragment>
      {isPrimitiveReactNode(top) ? (
        <FormItemTop>
          <FormItemTopLabel htmlFor={htmlFor} Component={topComponentProp} id={topId}>
            {top}
          </FormItemTopLabel>
        </FormItemTop>
      ) : hasReactNode(top) ? (
        top
      ) : null}
      {children}
      {hasReactNode(bottom) && (
        <Footnote
          className={styles.bottom}
          id={bottomId}
          role={status === 'error' ? 'alert' : undefined}
        >
          {bottom}
        </Footnote>
      )}
    </React.Fragment>
  );

  const context = React.useMemo(() => ({ required, topMultiline }), [required, topMultiline]);

  return (
    <RootComponent
      {...restProps}
      getRootRef={rootEl}
      baseClassName={classNames(
        styles.host,
        !noPadding && styles.withPadding,
        'vkuiInternalFormItem',
        status !== 'default' && stylesStatus[status],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        hasReactNode(top) && classNames(styles.withTop, 'vkuiInternalFormItem--withTop'),
        removable && classNames(styles.withRemovable, 'vkuiInternalFormItem--removable'),
      )}
    >
      <FormItemContext.Provider value={context}>
        {removable ? (
          <Removable
            align="start"
            onRemove={(e) => {
              if (rootEl?.current) {
                onRemove?.(e, rootEl.current);
              }
            }}
            removePlaceholder={removePlaceholder}
            indent={removable === 'indent'}
            noPadding={noPadding}
          >
            <div className={classNames(styles.removable, 'vkuiInternalFormItem__removable')}>
              {wrappedChildren}
            </div>
          </Removable>
        ) : (
          wrappedChildren
        )}
      </FormItemContext.Provider>
    </RootComponent>
  );
};

FormItem.displayName = 'FormItem';

FormItem.Top = FormItemTop;
FormItem.Top.displayName = 'FormItem.Top';

FormItem.TopLabel = FormItemTopLabel;
FormItem.TopLabel.displayName = 'FormItem.TopLabel';

FormItem.TopAside = FormItemTopAside;
FormItem.TopAside.displayName = 'FormItem.TopAside';
