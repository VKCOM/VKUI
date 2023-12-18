import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { usePlatform } from '../../hooks/usePlatform';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { FormField, FormFieldProps } from '../FormField/FormField';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import { Text } from '../Typography/Text/Text';
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
    Omit<FormFieldProps, 'mode' | 'type'> {
  selectType?: SelectType;
  multiline?: boolean;
  labelTextTestId?: string;
  fetching?: boolean;
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
  ...restProps
}: CustomSelectInputProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  const title = children || placeholder;
  const showLabelOrPlaceholder = !Boolean(restProps.value);

  const handleRootRef = useExternRef(getRootRef);
  const focusWithin = useFocusWithin(handleRootRef);

  const input = (
    <Text
      type="text"
      {...restProps}
      disabled={disabled && !fetching}
      readOnly={restProps.readOnly || (disabled && fetching)}
      Component="input"
      normalize={false}
      className={classNames(
        styles['CustomSelectInput__el'],
        (restProps.readOnly || (showLabelOrPlaceholder && !focusWithin)) &&
          styles['CustomSelectInput__el--cursor-pointer'],
      )}
      getRootRef={getRef}
      placeholder={children ? '' : placeholder}
    />
  );

  const platform = usePlatform();
  return (
    <FormField
      Component="div"
      style={style}
      className={classNames(
        styles['CustomSelectInput'],
        align === 'right' && styles['CustomSelectInput--align-right'],
        align === 'center' && styles['CustomSelectInput--align-center'],
        !children && styles['CustomSelectInput--empty'],
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
        <div
          className={classNames(styles['CustomSelectInput__container'], className)}
          tabIndex={-1}
          aria-hidden
          data-testid={labelTextTestId}
        >
          <SelectTypography selectType={selectType} className={styles['CustomSelectInput__title']}>
            {showLabelOrPlaceholder && title}
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
