import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useObjectMemo } from '../../hooks/useObjectMemo';
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
  none: classNames(styles['FormItem--sizeY-none'], 'vkuiInternalFormItem--sizeY-none'),
  compact: classNames(styles['FormItem--sizeY-compact'], 'vkuiInternalFormItem--sizeY-compact'),
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
  /**
   * Позволяет полностью заменить шапку поля пользовательским компонентом.
   *
   * @since 6.1.0
   *
   * TODO [>=7]: удалить и использовать top - оно будет принимать либо строку, либо подкомпонент
   */
  topNode?: React.ReactNode;
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
  topMultiline,
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
  topNode,
  required = false,
  ...restProps
}: FormItemProps) => {
  const rootEl = useExternRef(getRootRef);
  const { sizeY = 'none' } = useAdaptivity();

  const wrappedChildren = (
    <React.Fragment>
      {hasReactNode(topNode) ? (
        topNode
      ) : hasReactNode(top) ? (
        <FormItemTop>
          <FormItemTopLabel
            htmlFor={htmlFor}
            Component={topComponentProp}
            multiline={topMultiline}
            id={topId}
          >
            {top}
          </FormItemTopLabel>
        </FormItemTop>
      ) : null}
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

  const context = useObjectMemo({ required, topMultiline });

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
          >
            <div
              className={classNames(
                styles['FormItem__removable'],
                'vkuiInternalFormItem__removable',
              )}
            >
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
