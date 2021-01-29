import React, { AllHTMLAttributes, ElementType, FC, ReactNode, MouseEvent } from 'react';
import { classNames } from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { hasReactNode } from '../../lib/utils';
import Subhead from '../Typography/Subhead/Subhead';
import Caption from '../Typography/Caption/Caption';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';
import { Removable } from '../Removable/Removable';

export interface FormItemProps extends AllHTMLAttributes<HTMLElement> {
  top?: ReactNode;
  bottom?: ReactNode;
  status?: 'default' | 'error' | 'valid';
  Component?: ElementType;
  /**
   * Для удаляемых `<Input/>`, `<Select/>`.
   */
  removable?: boolean;
  /**
   * Коллбэк срабатывает при клике на контрол удаления.
   */
  onRemove?(e: MouseEvent): void;
  /**
   * iOS only. Текст в выезжаеющей кнопке для удаления ячейки.
   */
  removePlaceholder?: ReactNode;
}

export const FormItem: FC<FormItemProps & AdaptivityProps> = withAdaptivity((props: FormItemProps & AdaptivityProps) => {
  const {
    className,
    children,
    top,
    bottom,
    status,
    Component,
    sizeY,
    removable,
    onRemove,
    removePlaceholder,
    ...restProps
  } = props;
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      className={classNames(
        getClassName('FormItem', platform),
        `FormItem--${status}`,
        `FormItem--sizeY-${sizeY}`, {
          'FormItem--removable': removable,
        },
        className,
      )}
    >
      {hasReactNode(top) && <Subhead weight="regular" className="FormItem__top">{top}</Subhead>}

      {removable
        ? <Removable onRemove={onRemove} removePlaceholder={removePlaceholder}>{children}</Removable>
        : children
      }

      {hasReactNode(bottom) && <Caption level="1" weight="regular" className="FormItem__bottom">{bottom}</Caption>}
    </Component>
  );
}, {
  sizeY: true,
});

FormItem.defaultProps = {
  status: 'default',
  Component: 'div',
  removePlaceholder: 'Удалить',
};
