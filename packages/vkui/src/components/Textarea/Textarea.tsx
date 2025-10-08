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
import type { HasAlign, HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { FormField, type FormFieldProps } from '../FormField/FormField';
import { UnstyledTextField } from '../UnstyledTextField/UnstyledTextField';
import { useResizeTextarea } from './useResizeTextarea';
import styles from './Textarea.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onResize'>,
    HasRef<HTMLTextAreaElement>,
    HasRootRef<HTMLElement>,
    HasAlign,
    FormFieldProps {
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `textarea`: свойства для прокидывания в поле ввода.
   */
  slotsProps?: {
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
  onChange,
  align,
  mode,
  after,
  before,
  afterAlign,
  beforeAlign,
  value,

  slotsProps,
  ...restProps
}: TextareaProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();
  const { window } = useDOM();

  const [refResizeTextarea, resize] = useResizeTextarea(onResize, grow);
  const elementRef = useExternRef(getRef, refResizeTextarea);

  React.useEffect(resize, [resize, sizeY, platform, value]);
  useResizeObserver(window, resize);

  const { className, ...rootProps } = useMergeProps(
    {
      className: rootClassName,
      getRootRef,
      style,
    },
    slotsProps?.root,
  );

  const textAreaRest = useMergeProps(
    {
      className: styles.el,
      getRootRef: elementRef,
      onChange: callMultiple(onChange, resize),
      ...restProps,
    },
    slotsProps?.textArea,
  );

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
      <UnstyledTextField value={value} as="textarea" rows={rows} {...textAreaRest} />
    </FormField>
  );
};
