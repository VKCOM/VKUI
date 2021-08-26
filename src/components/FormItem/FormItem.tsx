import { AllHTMLAttributes, ElementType, FC, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { hasReactNode } from '../../lib/utils';
import Subhead from '../Typography/Subhead/Subhead';
import Caption from '../Typography/Caption/Caption';
import { useAdaptivity, AdaptivityProps } from '../../hooks/useAdaptivity';
import { Removable, RemovableProps } from '../Removable/Removable';
import './FormItem.css';

export interface FormItemProps extends AllHTMLAttributes<HTMLElement>, RemovableProps {
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
  sizeY: propsSizeY,
  removable,
  onRemove,
  removePlaceholder = 'Удалить',
  ...restProps
}: FormItemProps & Pick<AdaptivityProps, 'sizeY'>) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity({ sizeY: propsSizeY });

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
        <Removable align="start" onRemove={onRemove} removePlaceholder={removePlaceholder}>
          {wrappedChildren}
        </Removable>
      ) : wrappedChildren}
    </Component>
  );
};
