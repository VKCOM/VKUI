import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import type { HasAlign, HasRef, HasRootRef } from '../../types';
import { FormField, type FormFieldProps } from '../FormField/FormField';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './CustomSelectInput.module.css';

const sizeYClassNames = {
  none: styles['CustomSelectInput--sizeY-none'],
  compact: styles['CustomSelectInput--sizeY-compact'],
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
  selectedOptionLabel?: React.ReactElement | string;
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
  selectedOptionLabel,
  selectType = 'default',
  multiline,
  disabled,
  fetching,
  labelTextTestId,
  searchable,
  ...restInputProps
}: CustomSelectInputProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  const handleRootRef = useExternRef(getRootRef);

  const platform = usePlatform();

  const input = (
    <SelectTypography
      selectType={selectType}
      type="text"
      {...restInputProps}
      disabled={disabled && !fetching}
      readOnly={restInputProps.readOnly || !searchable || (disabled && fetching)}
      Component="input"
      normalize={false}
      className={styles['CustomSelectInput__input']}
      getRootRef={getRef}
    />
  );

  return (
    <FormField
      Component="div"
      style={style}
      className={classNames(
        styles['CustomSelectInput'],
        align === 'right' && styles['CustomSelectInput--align-right'],
        align === 'center' && styles['CustomSelectInput--align-center'],
        !selectedOptionLabel && styles['CustomSelectInput--empty'],
        multiline && styles['CustomSelectInput--multiline'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        before && styles['CustomSelectInput--hasBefore'],
        after && styles['CustomSelectInput--hasAfter'],
        className,
      )}
      getRootRef={handleRootRef}
      before={before}
      after={after}
      disabled={disabled}
      mode={getFormFieldModeFromSelectType(selectType)}
      status={status}
    >
      <div className={styles['CustomSelectInput__input-group']}>
        {/* Чтобы отключить autosuggestion в iOS, тултипы которого начинают всплывать даже когда input
         * в режиме readonly, мы оборачиваем инпут в VisuallyHidden.
         * Тултипы появляются при каждом клике на input.
         * смотри: https://github.com/VKCOM/VKUI/issues/6205
         *
         * Достаточно не дать пользователю кликнуть по инпуту.
         * Делаем это только для режима read-only. Потому что проблема именно в режиме read-only.
         * Обертка вокруг инпута обрабатывает клики и передаёт фокус, так что на взаимодействии с инпутом это никак не скажется.
         **/}
        {!searchable && platform === 'ios' ? <VisuallyHidden>{input}</VisuallyHidden> : input}
        <div
          className={classNames(styles['CustomSelectInput__label-wrapper'], className)}
          tabIndex={-1}
          aria-hidden
          data-testid={labelTextTestId}
        >
          <SelectTypography selectType={selectType} className={styles['CustomSelectInput__label']}>
            {selectedOptionLabel || restInputProps.placeholder}
          </SelectTypography>
        </div>
      </div>
    </FormField>
  );
};
