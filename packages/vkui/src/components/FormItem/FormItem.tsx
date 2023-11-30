import * as React from 'react';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { HasComponent, HasRootRef } from '../../types';
import { Removable, RemovableProps } from '../Removable/Removable';
import { RootComponent } from '../RootComponent/RootComponent';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './FormItem.module.css';

const sizeYClassNames = {
  none: classNames(styles['FormItem--sizeY-none'], 'vkuiInternalFormItem--sizeY-none'),
  ['compact']: classNames(styles['FormItem--sizeY-compact'], 'vkuiInternalFormItem--sizeY-compact'),
};

const stylesStatus = {
  error: classNames(styles['FormItem--status-error'], 'vkuiInternalFormItem--status-error'),
  valid: classNames(styles['FormItem--status-valid'], 'vkuiInternalFormItem--status-valid'),
};

export interface FormItemProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent,
    RemovableProps {
  top?: React.ReactNode;
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
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormItem
 */
export const FormItem = ({
  children,
  top,
  topComponent: topComponentProp,
  bottom,
  status = 'default',
  removable,
  onRemove = noop,
  removePlaceholder = 'Удалить',
  getRootRef,
  htmlFor,
  bottomId,
  noPadding,
  ...restProps
}: FormItemProps) => {
  const rootEl = useExternRef(getRootRef);
  const { sizeY = 'none' } = useAdaptivity();

  const topComponent = topComponentProp || (htmlFor && 'label') || 'span';
  const wrappedChildren = (
    <React.Fragment>
      {hasReactNode(top) && (
        <Subhead className={styles['FormItem__top']} Component={topComponent} htmlFor={htmlFor}>
          {top}
        </Subhead>
      )}
      {children}
      {hasReactNode(bottom) && (
        <Footnote
          className={styles['FormItem__bottom']}
          id={bottomId}
          role={status === 'error' ? 'alert' : undefined}
        >
          {bottom}
        </Footnote>
      )}
    </React.Fragment>
  );

  return (
    <RootComponent
      {...restProps}
      getRootRef={rootEl}
      baseClassName={classNames(
        styles['FormItem'],
        !noPadding && styles['FormItem--withPadding'],
        'vkuiInternalFormItem',
        status !== 'default' && stylesStatus[status],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        hasReactNode(top) &&
          classNames(styles['FormItem--withTop'], 'vkuiInternalFormItem--withTop'),
        removable && classNames(styles['FormItem--removable'], 'vkuiInternalFormItem--removable'),
      )}
    >
      {removable ? (
        <Removable
          align="start"
          onRemove={(e) => {
            if (rootEl?.current) {
              onRemove(e, rootEl.current);
            }
          }}
          removePlaceholder={removePlaceholder}
          indent={removable === 'indent'}
        >
          <div
            className={classNames(styles['FormItem__removable'], 'vkuiInternalFormItem__removable')}
          >
            {wrappedChildren}
          </div>
        </Removable>
      ) : (
        wrappedChildren
      )}
    </RootComponent>
  );
};
