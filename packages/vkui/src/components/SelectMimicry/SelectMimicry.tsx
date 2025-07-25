'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAutoFocus } from '../../hooks/useAutoFocus';
import { useExternRef } from '../../hooks/useExternRef';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import type { HasAlign, HasRootRef } from '../../types';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormField, type FormFieldProps } from '../FormField/FormField';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import styles from '../Select/Select.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface SelectMimicryProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasAlign,
    Pick<FormFieldProps, 'before' | 'after' | 'status'> {
  /**
   * Включает многострочный режим отображения.
   */
  multiline?: boolean;
  /**
   * Блокировка взаимодействия с компонентом.
   */
  disabled?: boolean;
  /**
   * Тип селекта, влияющий на внешний вид компонента.
   */
  selectType?: SelectType;
}

/**
 * @see https://vkui.io/components/select-mimicry
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
}: SelectMimicryProps): React.ReactNode => {
  const rootRef = useExternRef(getRootRef);

  const { sizeY = 'none' } = useAdaptivity();
  const title = children || placeholder;

  useAutoFocus(rootRef, autoFocus);

  return (
    <FormField
      {...restProps}
      tabIndex={disabled ? undefined : tabIndex}
      className={classNames(
        styles.host,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        !children && styles.empty,
        multiline && styles.multiline,
        align === 'center' && styles.alignCenter,
        align === 'right' && styles.alignRight,
        before && styles.hasBefore,
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
      <div className={styles.container}>
        <SelectTypography selectType={selectType} className={styles.title}>
          {title}
        </SelectTypography>
      </div>
    </FormField>
  );
};
