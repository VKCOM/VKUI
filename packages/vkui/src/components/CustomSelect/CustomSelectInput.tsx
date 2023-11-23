import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { SizeType } from '../../lib/adaptivity';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { FormField, FormFieldProps } from '../FormField/FormField';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import { Text } from '../Typography/Text/Text';
import styles from './CustomSelectInput.module.css';

const sizeYClassNames = {
  none: styles['CustomSelectInput--sizeY-none'],
  [SizeType.COMPACT]: styles['CustomSelectInput--sizeY-compact'],
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
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
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
        <Text
          {...restProps}
          disabled={disabled && !fetching}
          readOnly={restProps.readOnly || (disabled && fetching)}
          Component="input"
          normalize={false}
          type="text"
          className={classNames(
            styles['CustomSelectInput__el'],
            (restProps.readOnly || (showLabelOrPlaceholder && !focusWithin)) &&
              styles['CustomSelectInput__el--cursor-pointer'],
          )}
          getRootRef={getRef}
          placeholder={children ? '' : placeholder}
        />
      </div>
    </FormField>
  );
};
