import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { HasAlign, HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { getPlatformClassName } from '../../helpers/getPlatformClassName';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { SelectType, SelectTypography } from '../Select/Select';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { getSizeXClassName } from '../../helpers/getSizeXClassName';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import styles from '../Select/Select.module.css';

export interface SelectMimicryProps
  extends React.HTMLAttributes<HTMLElement>,
    HasAlign,
    HasRootRef<HTMLElement>,
    Pick<FormFieldProps, 'before' | 'after' | 'status'> {
  multiline?: boolean;
  disabled?: boolean;
  selectType?: SelectType;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SelectMimicry
 */
export const SelectMimicry = ({
  tabIndex = 0,
  placeholder,
  children,
  align,
  getRootRef,
  multiline,
  disabled,
  onClick,
  before,
  after = <DropdownIcon />,
  selectType = 'default',
  status,
  className,
  ...restProps
}: SelectMimicryProps) => {
  const platform = usePlatform();
  const { sizeX, sizeY } = useAdaptivity();
  const title = children || placeholder;

  return (
    <FormField
      {...restProps}
      tabIndex={disabled ? undefined : tabIndex}
      className={classNames(
        styles['Select'],
        getPlatformClassName(styles['Select'], platform),
        getSizeXClassName(styles['Select'], sizeX),
        getSizeYClassName(styles['Select'], sizeY),
        multiline && styles['Select--multiline'],
        align && styles[`Select--align-${align}`],
        before && styles['Select--hasBefore'],
        after && styles['Select--hasAfter'],
        className,
      )}
      getRootRef={getRootRef}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      before={before}
      after={after}
      mode={getFormFieldModeFromSelectType(selectType)}
      status={status}
    >
      <div className={styles['Select__container']}>
        <SelectTypography selectType={selectType} className={styles['Select__title']}>
          {title}
        </SelectTypography>
      </div>
    </FormField>
  );
};
