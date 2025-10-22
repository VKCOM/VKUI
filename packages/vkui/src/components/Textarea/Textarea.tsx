'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useMergeProps } from '../../hooks/useMergeProps';
import { usePlatform } from '../../hooks/usePlatform';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { callMultiple } from '../../lib/callMultiple';
import { useDOM } from '../../lib/dom';
import { warnOnce } from '../../lib/warnOnce';
import type { HasAlign, HasDataAttribute, HasRootRef } from '../../types';
import { FormField, type FormFieldProps } from '../FormField/FormField';
import { UnstyledTextField } from '../UnstyledTextField/UnstyledTextField';
import { useResizeTextarea } from './useResizeTextarea';
import styles from './Textarea.module.css';

const warn = warnOnce('Textarea');

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onResize'>,
    HasRootRef<HTMLElement>,
    HasAlign,
    FormFieldProps {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ textArea: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLTextAreaElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `textArea`: свойства для прокидывания в поле ввода.
   */
  slotProps?: {
    root?: React.HTMLAttributes<HTMLElement> & HasRootRef<HTMLElement> & HasDataAttribute;
    textArea?: React.TextareaHTMLAttributes<HTMLTextAreaElement> &
      HasRootRef<HTMLTextAreaElement> &
      HasDataAttribute;
  };
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

/**
 * @see https://vkui.io/components/textarea
 */
export const Textarea = ({
  className: rootClassName,
  getRootRef,
  style,
  grow = true,
  onResize,
  getRef,
  rows = 2,
  maxHeight,
  status,
  align,
  mode,
  after,
  before,
  afterAlign,
  beforeAlign,

  slotProps,
  ...restProps
}: TextareaProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ textArea: { getRootRef: ... } }`');
  }

  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();
  const { window } = useDOM();

  const { className, ...rootProps } = useMergeProps(
    {
      className: rootClassName,
      getRootRef,
      style,
    },
    slotProps?.root,
  );

  const {
    onChange,
    getRootRef: getTextAreaRef,
    value,
    ...textAreaRest
  } = useMergeProps(
    {
      className: styles.el,
      getRootRef: getRef,
      ...restProps,
    },
    slotProps?.textArea,
  );

  const [refResizeTextarea, resize] = useResizeTextarea(onResize, grow);
  const elementRef = useExternRef(getTextAreaRef, refResizeTextarea);

  React.useEffect(resize, [resize, sizeY, platform, value]);
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
      disabled={textAreaRest.disabled}
      status={status}
      mode={mode}
      after={after}
      before={before}
      afterAlign={afterAlign}
      beforeAlign={beforeAlign}
      maxHeight={maxHeight}
      {...rootProps}
    >
      <UnstyledTextField
        value={value}
        as="textarea"
        rows={rows}
        getRootRef={elementRef}
        onChange={callMultiple(onChange, resize)}
        {...textAreaRest}
      />
    </FormField>
  );
};
