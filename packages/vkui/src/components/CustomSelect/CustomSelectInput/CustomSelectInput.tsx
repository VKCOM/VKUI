'use client';
/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useExternRef } from '../../../hooks/useExternRef';
import { useFocusWithin } from '../../../hooks/useFocusWithin';
import { usePlatform } from '../../../hooks/usePlatform';
import { getFormFieldModeFromSelectType } from '../../../lib/select';
import type { HasAlign, HasRef, HasRootRef } from '../../../types';
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
  align = 'left',
  getRef,
  className,
  getRootRef,
  style,
  before,
  after,
  status,
  children,
  placeholder,
  selectType = 'default',
  multiline,
  disabled,
  fetching,
  labelTextTestId,
  searchable,
  accessible,
  ...restProps
}: CustomSelectInputProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  const title = children || placeholder;
  const showLabelOrPlaceholder = !Boolean(restProps.value);

  const handleRootRef = useExternRef(getRootRef);
  const focusWithin = useFocusWithin(handleRootRef);

  const inputReadonly = restProps.readOnly || (disabled && fetching);

  const input = (
    <Text
      type="text"
      {...restProps}
      disabled={disabled && !fetching}
      readOnly={inputReadonly}
      Component="input"
      normalize={false}
      className={classNames(
        styles.el,
        (restProps.readOnly || (showLabelOrPlaceholder && !focusWithin)) && styles.elCursorPointer,
      )}
      getRootRef={getRef}
      placeholder={children ? '' : placeholder}
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
        restProps.value && styles.hasInputValue,
        className,
      )}
      getRootRef={handleRootRef}
      before={before}
      after={after}
      disabled={disabled}
      mode={getFormFieldModeFromSelectType(selectType)}
      status={status}
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
        {restProps.readOnly && platform === 'ios' ? (
          <VisuallyHidden>{input}</VisuallyHidden>
        ) : (
          input
        )}
      </div>
    </FormField>
  );
};
