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
    Omit<FormFieldProps, 'mode'> {
  selectType?: SelectType;
  multiline?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CustomSelectInput
 */
export const CustomSelectInput = ({
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
}: CustomSelectInputProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  const title = children || placeholder;
  const showLabelOrPlaceholder = !Boolean(restProps.value);

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
      getRootRef={getRootRef}
      before={before}
      after={after}
      disabled={restProps.disabled}
      mode={getFormFieldModeFromSelectType(selectType)}
      status={status}
    >
      <div className={styles['CustomSelectInput__input-group']}>
        <RootComponent
          Component="div"
          className={classNames(styles['CustomSelectInput__container'], className)}
          tabIndex={-1}
          aria-hidden
        >
          <SelectTypography selectType={selectType} className={styles['CustomSelectInput__title']}>
            {showLabelOrPlaceholder && title}
          </SelectTypography>
        </RootComponent>
        <Text
          {...restProps}
          Component="input"
          normalize={false}
          type={type}
          className={styles['CustomSelectInput__el']}
          getRootRef={getRef}
          placeholder={placeholder}
        />
      </div>
    </FormField>
  );
};
