import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getPlatformClassName } from '../../helpers/getPlatformClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { HasAlign, HasRootRef } from '../../types';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormField, FormFieldProps } from '../FormField/FormField';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import styles from '../Select/Select.module.css';

const sizeYClassNames = {
  none: styles['Select--sizeY-none'],
  [SizeType.COMPACT]: styles['Select--sizeY-compact'],
  [SizeType.REGULAR]: null,
};

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
  const { sizeY = 'none' } = useAdaptivity();
  const title = children || placeholder;

  return (
    <FormField
      {...restProps}
      tabIndex={disabled ? undefined : tabIndex}
      className={classNames(
        styles['Select'],
        getPlatformClassName(styles['Select'], platform),
        sizeYClassNames[sizeY],
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
