'use client';
/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useExternRef } from '../../../hooks/useExternRef';
import { useFocusWithin } from '../../../hooks/useFocusWithin';
import { useMergeProps } from '../../../hooks/useMergeProps';
import { usePlatform } from '../../../hooks/usePlatform';
import { getFormFieldModeFromSelectType } from '../../../lib/select';
import type { HasAlign, HasDataAttribute, HasRef, HasRootRef } from '../../../types';
import { FormField, type FormFieldProps } from '../../FormField/FormField';
import type { SelectType } from '../../Select/Select';
import { SelectTypography } from '../../SelectTypography/SelectTypography';
import { Text } from '../../Typography/Text/Text';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './CustomSelectInput.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface CustomSelectInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    Omit<FormFieldProps, 'mode' | 'type' | 'maxHeight'> {
  slotProps?: {
    input?: React.InputHTMLAttributes<HTMLInputElement> &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
    root?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> &
      HasRootRef<HTMLDivElement> &
      HasDataAttribute;
  };
  selectType?: SelectType;
  multiline?: boolean;
  labelTextTestId?: string;
  fetching?: boolean;
  searchable?: boolean;
  accessible?: boolean;
}

/**
 * @since 5.10.0
 * @private
 */
export const CustomSelectInput = ({
  style: rootStyle,
  className: rootClassName,
  getRootRef: rootGetRootRef,
  align = 'left',
  getRef,
  before,
  after,
  status,
  children,
  placeholder,
  selectType = 'default',
  multiline,
  fetching,
  labelTextTestId,
  searchable,
  accessible,

  slotProps,
  ...restProps
}: CustomSelectInputProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  const { style, className, getRootRef, ...rootRest } = useMergeProps(
    {
      style: rootStyle,
      className: rootClassName,
      getRootRef: rootGetRootRef,
    },
    slotProps?.root,
  );

  const {
    className: inputClassName,
    value,
    readOnly,
    disabled,
    ...inputProps
  } = useMergeProps(
    {
      getRootRef: getRef,
      ...restProps,
    },
    slotProps?.input,
  );

  const title = children || placeholder;
  const showLabelOrPlaceholder = !Boolean(value);

  const handleRootRef = useExternRef(getRootRef);
  const focusWithin = useFocusWithin(handleRootRef);

  const inputReadonly = readOnly || (disabled && fetching);

  const input = (
    <Text
      type="text"
      disabled={disabled && !fetching}
      readOnly={inputReadonly}
      Component="input"
      normalize={false}
      placeholder={children ? '' : placeholder}
      className={classNames(
        styles.el,
        (readOnly || (showLabelOrPlaceholder && !focusWithin)) && styles.elCursorPointer,
        inputClassName,
      )}
      value={value}
      {...inputProps}
    />
  );

  const inputHidden = React.useMemo(() => {
    if (accessible) {
      if (!searchable) {
        return true;
      }
      return !focusWithin || (inputReadonly && !fetching);
    } else {
      return false;
    }
  }, [accessible, fetching, focusWithin, inputReadonly, searchable]);

  const labelHidden = showLabelOrPlaceholder ? false : !inputHidden;

  const platform = usePlatform();
  return (
    <FormField
      Component="div"
      style={style}
      className={classNames(
        styles.host,
        align === 'right' && styles.alignRight,
        align === 'center' && styles.alignCenter,
        !children && styles.empty,
        multiline && styles.multiline,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        before && styles.hasBefore,
        after && styles.hasAfter,
        inputHidden && styles.inputHidden,
        labelHidden && styles.labelHidden,
        accessible && styles.accessible,
        value && styles.hasInputValue,
        className,
      )}
      getRootRef={handleRootRef}
      before={before}
      after={after}
      disabled={disabled}
      mode={getFormFieldModeFromSelectType(selectType)}
      status={status}
      {...rootRest}
    >
      <div className={styles.inputGroup}>
        <div
          className={classNames(styles.container, className)}
          tabIndex={-1}
          aria-hidden
          data-testid={labelTextTestId}
        >
          <SelectTypography selectType={selectType} className={styles.title}>
            {title}
          </SelectTypography>
        </div>
        {/* Чтобы отключить autosuggestion в iOS, тултипы которого начинают всплывать даже когда input
         * в режиме readonly, мы оборачиваем инпут в VisuallyHidden.
         * Тултипы появляются при каждом клике на input.
         * смотри: https://github.com/VKCOM/VKUI/issues/6205
         *
         * Достаточно не дать пользователю кликнуть по инпуту.
         * Делаем это только для режима read-only. Потому что проблема именно в режиме read-only.
         * Обертка вокруг инпута обрабатывает клики и передаёт фокус, так что на взаимодействии с инпутом это никак не скажется.
         **/}
        {readOnly && platform === 'ios' ? <VisuallyHidden>{input}</VisuallyHidden> : input}
      </div>
    </FormField>
  );
};
