import { FunctionComponent, HTMLAttributes } from 'react';
import { HasRootRef } from '../../types';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { Removable, RemovableProps } from '../Removable/Removable';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import './FormLayoutGroup.css';

export interface FormLayoutGroupProps extends HTMLAttributes<HTMLDivElement>, RemovableProps, HasRootRef<HTMLDivElement> {
  mode?: 'vertical' | 'horizontal';
  /**
   * Только для режима horizontal. Дает возможность удалить всю группу `FormItem`.
   */
  removable?: boolean;
}

const FormLayoutGroup: FunctionComponent<FormLayoutGroupProps> = withAdaptivity(({
  children,
  mode,
  removable,
  removePlaceholder,
  onRemove,
  sizeY,
  getRootRef,
  ...restProps
}: FormLayoutGroupProps & Pick<AdaptivityProps, 'sizeY'>) => {
  const platform = usePlatform();
  const isRemovable = removable && mode === 'horizontal';
  const rootEl = useExternRef(getRootRef);

  return (
    <div
      vkuiClass={classNames(
        getClassName('FormLayoutGroup', platform),
        `FormLayoutGroup--sizeY-${sizeY}`,
        `FormLayoutGroup--${mode}`,
      )}
      {...restProps}>
      {isRemovable
        ? <Removable align="start" removePlaceholder={removePlaceholder} onRemove={(e) => onRemove(e, rootEl?.current)}>{children}</Removable>
        : children
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
