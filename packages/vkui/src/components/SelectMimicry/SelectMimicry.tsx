import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAutoFocus } from '../../hooks/useAutoFocus';
import { useExternRef } from '../../hooks/useExternRef';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { HasAlign, HasRootRef } from '../../types';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormField, FormFieldProps } from '../FormField/FormField';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import styles from '../Select/Select.module.css';

const sizeYClassNames = {
  none: styles['Select--sizeY-none'],
  ['compact']: styles['Select--sizeY-compact'],
};

export interface SelectMimicryProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasAlign,
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
  autoFocus,
  ...restProps
}: SelectMimicryProps) => {
  const rootRef = useExternRef(getRootRef);

  const { sizeY = 'none' } = useAdaptivity();
  const title = children || placeholder;

  useAutoFocus(rootRef, autoFocus);

  return (
    <FormField
      {...restProps}
      tabIndex={disabled ? undefined : tabIndex}
      className={classNames(
        styles['Select'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        !children && styles['Select--empty'],
        multiline && styles['Select--multiline'],
        align === 'center' && styles['Select--align-center'],
        align === 'right' && styles['Select--align-right'],
        before && styles['Select--hasBefore'],
        className,
      )}
      getRootRef={rootRef}
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
