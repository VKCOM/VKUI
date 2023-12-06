import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAutoFocus } from '../../hooks/useAutoFocus';
import { useExternRef } from '../../hooks/useExternRef';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { HasAlign, HTMLAttributesWithRootRef } from '../../types';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormField, FormFieldProps } from '../FormField/FormField';
import type { SelectType } from '../SelectConditionalRender/SelectConditionalRender';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import styles from '../SelectConditionalRenderRender/SelectConditionalRenderRender.module.css';

const sizeYClassNames = {
  none: styles['SelectConditionalRenderRender--sizeY-none'],
  compact: styles['SelectConditionalRenderRender--sizeY-compact'],
};

export interface SelectMimicryProps
  extends HTMLAttributesWithRootRef<HTMLElement>,
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
        styles['SelectConditionalRenderRender'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        !children && styles['SelectConditionalRenderRender--empty'],
        multiline && styles['SelectConditionalRenderRender--multiline'],
        align === 'center' && styles['SelectConditionalRenderRender--align-center'],
        align === 'right' && styles['SelectConditionalRenderRender--align-right'],
        before && styles['SelectConditionalRenderRender--hasBefore'],
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
      <div className={styles['SelectConditionalRenderRender__container']}>
        <SelectTypography
          selectType={selectType}
          className={styles['SelectConditionalRenderRender__title']}
        >
          {title}
        </SelectTypography>
      </div>
    </FormField>
  );
};
