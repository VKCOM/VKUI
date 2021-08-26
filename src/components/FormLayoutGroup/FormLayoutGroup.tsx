import { FunctionComponent, HTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { Removable, RemovableProps } from '../Removable/Removable';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import './FormLayoutGroup.css';

export interface FormLayoutGroupProps extends HTMLAttributes<HTMLDivElement>, RemovableProps {
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
  ...restProps
}: FormLayoutGroupProps & Pick<AdaptivityProps, 'sizeY'>) => {
  const platform = usePlatform();
  const isRemovable = removable && mode === 'horizontal';

  return (
    <div
      vkuiClass={classNames(
        getClassName('FormLayoutGroup', platform),
        `FormLayoutGroup--sizeY-${sizeY}`,
        `FormLayoutGroup--${mode}`,
      )}
      {...restProps}>
      {isRemovable
        ? <Removable align="start" removePlaceholder={removePlaceholder} onRemove={onRemove}>{children}</Removable>
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
