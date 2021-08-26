import { FC, HTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { Removable, RemovableProps } from '../Removable/Removable';
import { useAdaptivity, AdaptivityProps } from '../../hooks/useAdaptivity';
import './FormLayoutGroup.css';

export interface FormLayoutGroupProps extends HTMLAttributes<HTMLDivElement>, RemovableProps {
  mode?: 'vertical' | 'horizontal';
  /**
   * Только для режима horizontal. Дает возможность удалить всю группу `FormItem`.
   */
  removable?: boolean;
}

const FormLayoutGroup: FC<FormLayoutGroupProps> = ({
  children,
  mode = 'vertical',
  removable,
  removePlaceholder = 'Удалить',
  onRemove,
  sizeY: propsSizeY,
  ...restProps
}: FormLayoutGroupProps & Pick<AdaptivityProps, 'sizeY'>) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity({ sizeY: propsSizeY });
  const isRemovable = removable && mode === 'horizontal';

  return (
    <div
      vkuiClass={classNames(
        getClassName('FormLayoutGroup', platform),
        `FormLayoutGroup--sizeY-${sizeY}`,
        `FormLayoutGroup--${mode}`, {
          'FormLayoutGroup--removable': isRemovable,
        },
      )}
      {...restProps}>
      {isRemovable
        ? <Removable align="start" removePlaceholder={removePlaceholder} onRemove={onRemove}>{children}</Removable>
        : children
      }
    </div>
  );
};

export default FormLayoutGroup;
