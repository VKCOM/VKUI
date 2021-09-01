import { AllHTMLAttributes, ElementType, FC, ReactNode } from 'react';
import { HasRootRef } from '../../types';
import { classNames } from '../../lib/classNames';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { hasReactNode } from '../../lib/utils';
import Subhead from '../Typography/Subhead/Subhead';
import Caption from '../Typography/Caption/Caption';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { Removable, RemovableProps } from '../Removable/Removable';
import './FormItem.css';

export interface FormItemProps extends AllHTMLAttributes<HTMLElement>, RemovableProps, HasRootRef<HTMLElement> {
  top?: ReactNode;
  bottom?: ReactNode;
  status?: 'default' | 'error' | 'valid';
  Component?: ElementType;
  /**
   * Дает возможность удалить `FormItem`. Рекомендуется использовать только для `Input` или `Select`.
   */
  removable?: boolean;
}

export const FormItem: FC<FormItemProps> = ({
  children,
  top,
  bottom,
  status = 'default',
  Component = 'div',
  removable,
  onRemove,
  removePlaceholder = 'Удалить',
  getRootRef,
  ...restProps
}: FormItemProps) => {
  const platform = usePlatform();
  const rootEl = useExternRef(getRootRef);
  const { sizeY } = useAdaptivity();

  const wrappedChildren = (
    <div vkuiClass="FormItem__content">
      {hasReactNode(top) && <Subhead weight="regular" vkuiClass="FormItem__top">{top}</Subhead>}
      {children}
      {hasReactNode(bottom) && <Caption level="1" weight="regular" vkuiClass="FormItem__bottom">{bottom}</Caption>}
    </div>
  );

  return (
    <Component
      {...restProps}
      ref={rootEl}
      vkuiClass={classNames(
        getClassName('FormItem', platform),
        `FormItem--${status}`,
        `FormItem--sizeY-${sizeY}`,
        {
          'FormItem--withTop': hasReactNode(top),
          'FormItem--removable': removable,
        },
      )}
    >
      {removable ? (
        <Removable align="start" onRemove={(e) => onRemove(e, rootEl?.current)} removePlaceholder={removePlaceholder}>
          {wrappedChildren}
        </Removable>
      ) : wrappedChildren}
    </Component>
  );
};
