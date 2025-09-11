'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { callMultiple } from '../../lib/callMultiple';
import { useDOM } from '../../lib/dom';
import type { HasAlign, HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { FormField, type FormFieldOwnProps, type FormFieldProps } from '../FormField/FormField';
import {
  UnstyledTextField,
  type UnstyledTextFieldAsTextareaProps,
} from '../UnstyledTextField/UnstyledTextField';
import { useResizeTextarea } from './useResizeTextarea';
import styles from './Textarea.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

interface TextareaOwnProps {
  /**
   * Свойство управляющее автоматическим изменением высоты компонента.
   */
  grow?: boolean;
  /**
   * Обработчик, срабатывающий при изменении размера компонента.
   */
  onResize?: (el: HTMLTextAreaElement) => void;
  /**
   * Значение по умолчанию.
   */
  defaultValue?: string;
}

interface TextareaModernProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'defaultValue' | 'onChange'>,
    HasRootRef<HTMLElement>,
    HasAlign,
    FormFieldProps,
    TextareaOwnProps,
    Pick<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      'value' | 'onChange' | 'name' | 'disabled' | 'placeholder'
    > {
  /**
   *
   */
  slotsProps: {
    textarea: Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      'value' | 'onChange' | 'name' | 'disabled' | 'placeholder'
    > &
      HasRootRef<HTMLTextAreaElement> &
      HasDataAttribute;
  };
}

interface TextareaLegacyProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onResize' | 'defaultValue'>,
    HasRef<HTMLTextAreaElement>,
    HasRootRef<HTMLElement>,
    HasAlign,
    FormFieldProps,
    TextareaOwnProps {
  /**
   *
   */
  slotsProps?: undefined;
}

export type TextareaProps = TextareaModernProps | TextareaLegacyProps;

const useProps = (
  props: Omit<
    TextareaProps,
    | 'grow'
    | 'style'
    | 'onResize'
    | 'className'
    | 'getRootRef'
    | 'maxHeight'
    | 'status'
    | 'onChange'
    | 'align'
    | 'mode'
    | 'after'
    | 'before'
    | 'afterAlign'
    | 'beforeAlign'
  >,
): [FormFieldOwnProps, Omit<UnstyledTextFieldAsTextareaProps, 'as'>] => {
  return React.useMemo<[FormFieldOwnProps, Omit<UnstyledTextFieldAsTextareaProps, 'as'>]>(() => {
    if (props.slotsProps) {
      const {
        slotsProps: { textarea: userSlotsInputProps = {} },
        value,
        onChange,
        name,
        disabled,
        placeholder,
        ...rootProps
      } = props as TextareaModernProps;
      return [rootProps, { ...userSlotsInputProps, value, onChange, name, disabled, placeholder }];
    } else {
      const { getRef, rows = 2, ...inputProps } = props as TextareaLegacyProps;
      return [
        {},
        {
          ...inputProps,
          getRootRef: getRef,
          rows,
        },
      ];
    }
  }, [props]);
};

/**
 * @see https://vkui.io/components/textarea
 */
export const Textarea = ({
  grow = true,
  style,
  onResize,
  className,
  getRootRef,
  maxHeight,
  status,
  onChange,
  align,
  mode,
  after,
  before,
  afterAlign,
  beforeAlign,
  ...restProps
}: TextareaProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();
  const { window } = useDOM();

  const [formFieldProps, textAreaProps] = useProps(restProps);

  const [refResizeTextarea, resize] = useResizeTextarea(onResize, grow);
  const elementRef = useExternRef(textAreaProps.getRootRef, refResizeTextarea);

  React.useEffect(resize, [resize, sizeY, platform, textAreaProps.value]);
  useResizeObserver(window, resize);

  return (
    <FormField
      className={classNames(
        styles.host,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        align === 'right' && styles.alignRight,
        align === 'center' && styles.alignCenter,
        className,
      )}
      style={style}
      getRootRef={getRootRef}
      disabled={textAreaProps.disabled}
      status={status}
      mode={mode}
      after={after}
      before={before}
      afterAlign={afterAlign}
      beforeAlign={beforeAlign}
      maxHeight={maxHeight}
      {...formFieldProps}
    >
      <UnstyledTextField
        {...textAreaProps}
        as="textarea"
        className={styles.el}
        onChange={callMultiple(onChange, resize)}
        getRootRef={elementRef}
      />
    </FormField>
  );
};
