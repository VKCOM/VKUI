import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { RootComponent } from '../RootComponent/RootComponent';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import { Text } from '../Typography/Text/Text';
import styles from './SelectInput.module.css';

const sizeYClassNames = {
  none: styles['SelectInput--sizeY-none'],
  [SizeType.COMPACT]: styles['SelectInput--sizeY-compact'],
};

export interface SelectInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    Omit<FormFieldProps, 'mode'> {
  selectType?: SelectType;
  multiline?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SelectInput
 */
export const SelectInput = ({
  type = 'text',
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
  ...restProps
}: SelectInputProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  const title = children || placeholder;
  const showLabelOrPlaceholder = !Boolean(restProps.value);

  return (
    <FormField
      Component="div"
      style={style}
      className={classNames(
        styles['SelectInput'],
        align === 'right' && styles['SelectInput--align-right'],
        align === 'center' && styles['SelectInput--align-center'],
        !children && styles['SelectInput--empty'],
        multiline && styles['SelectInput--multiline'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        before && styles['SelectInput--hasBefore'],
        after && styles['SelectInput--hasAfter'],
        className,
      )}
      getRootRef={getRootRef}
      before={before}
      after={after}
      disabled={restProps.disabled}
      mode={getFormFieldModeFromSelectType(selectType)}
      status={status}
    >
      <div className={styles['SelectInput__input-group']}>
        <Text
          {...restProps}
          Component="input"
          normalize={false}
          type={type}
          className={styles['SelectInput__el']}
          getRootRef={getRef}
          placeholder={placeholder}
        />
        {showLabelOrPlaceholder && (
          <RootComponent
            Component="div"
            className={classNames(styles['SelectInput__container'], className)}
            tabIndex={-1}
            aria-hidden
          >
            <SelectTypography selectType={selectType} className={styles['SelectInput__title']}>
              {title}
            </SelectTypography>
          </RootComponent>
        )}
      </div>
    </FormField>
  );
};
