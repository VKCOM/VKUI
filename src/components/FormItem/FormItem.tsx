import React, { AllHTMLAttributes, ElementType, FC, ReactNode, MouseEvent } from 'react';
import { classNames } from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { hasReactNode } from '../../lib/utils';
import Subhead from '../Typography/Subhead/Subhead';
import Caption from '../Typography/Caption/Caption';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';
import { Removable, RemovePlaceholderProps } from '../Removable/Removable';

export interface FormItemProps extends AllHTMLAttributes<HTMLElement>, RemovePlaceholderProps {
  top?: ReactNode;
  bottom?: ReactNode;
  status?: 'default' | 'error' | 'valid';
  Component?: ElementType;
  /**
   * Дает возможность удалить `FormItem`. Рекомендуется использовать только для `Input` или `Select`.
   */
  removable?: boolean;
  /**
   * Коллбэк срабатывает при клике на контрол удаления.
   */
  onRemove?: (e: MouseEvent) => void;
}

export const FormItem: FC<FormItemProps> = withAdaptivity((props: FormItemProps & Pick<AdaptivityProps, 'sizeY'>) => {
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

  const wrappedChildren = (
    <>
      {hasReactNode(top) && <Subhead weight="regular" className="FormItem__top">{top}</Subhead>}
      {children}
      {hasReactNode(bottom) && <Caption level="1" weight="regular" className="FormItem__bottom">{bottom}</Caption>}
    </>
  );

  return (
    <Component
      {...restProps}
      className={classNames(
        getClassName('FormItem', platform),
        `FormItem--${status}`,
        `FormItem--sizeY-${sizeY}`,
        className,
      )}
    >
      {removable
        ? <Removable align="start" paddedTop={hasReactNode(top)} onRemove={onRemove} removePlaceholder={removePlaceholder}>{wrappedChildren}</Removable>
        : wrappedChildren
      }
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
