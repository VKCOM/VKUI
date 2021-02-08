import React, { FunctionComponent, HTMLAttributes, MouseEvent, useEffect, useRef, useState } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { Removable, RemovePlaceholderProps } from '../Removable/Removable';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

export interface FormLayoutGroupProps extends HTMLAttributes<HTMLDivElement>, RemovePlaceholderProps {
  mode?: 'vertical' | 'horizontal';
  /**
   * Только для режима horizontal. Дает возможность удалить всю группу `FormItem`.
   */
  removable?: boolean;
  /**
   * Коллбэк срабатывает при клике на контрол удаления.
   */
  onRemove?: (e: MouseEvent) => void;
}

const FormLayoutGroup: FunctionComponent<FormLayoutGroupProps> = withAdaptivity(({
  children,
  className,
  mode,
  removable,
  removePlaceholder,
  onRemove,
  sizeY,
  ...restProps
}: FormLayoutGroupProps & Pick<AdaptivityProps, 'sizeY'>) => {
  const platform = usePlatform();
  const isRemovable = removable && mode === 'horizontal';
  const [paddedTop, togglePaddedTop] = useState<boolean>(false);
  const childrenRef = useRef<HTMLDivElement>(null);

  const wrappedChildren = <div ref={childrenRef} className="FormLayoutGroup__children">{children}</div>;

  useEffect(() => {
    if (isRemovable) {
      const hasChildWithTop = childrenRef?.current?.querySelector('.FormItem__top') !== null;

      togglePaddedTop(hasChildWithTop);
    }
  }, [childrenRef, isRemovable]);

  return (
    <div
      className={classNames(
        getClassName('FormLayoutGroup', platform),
        `FormLayoutGroup--sizeY-${sizeY}`,
        `FormLayoutGroup--${mode}`,
        className,
      )}
      {...restProps}>
      {isRemovable
        ? <Removable align="start" paddedTop={paddedTop} removePlaceholder={removePlaceholder} onRemove={onRemove}>{wrappedChildren}</Removable>
        : wrappedChildren
      }
    </div>
  );
}, {
  sizeY: true,
});

FormLayoutGroup.defaultProps = {
  mode: 'vertical',
  removePlaceholder: 'Удалить',
};

export default FormLayoutGroup;
