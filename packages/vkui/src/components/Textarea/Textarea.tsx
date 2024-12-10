'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { callMultiple } from '../../lib/callMultiple';
import { useDOM } from '../../lib/dom';
import type { HasAlign, HasRef, HasRootRef } from '../../types';
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
  grow?: boolean;
  onResize?: (el: HTMLTextAreaElement) => void;
  defaultValue?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Textarea
 */
export const Textarea = ({
  grow = true,
  style,
  onResize,
  className,
  getRootRef,
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
  ...restProps
}: TextareaProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();
  const { window } = useDOM();

  const [refResizeTextarea, resize] = useResizeTextarea(onResize, grow);
  const elementRef = useExternRef(getRef, refResizeTextarea);

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
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
      status={status}
      mode={mode}
      after={after}
      before={before}
      afterAlign={afterAlign}
      beforeAlign={beforeAlign}
      maxHeight={maxHeight}
    >
      <UnstyledTextField
        {...restProps}
        value={value}
        as="textarea"
        rows={rows}
        className={styles.el}
        onChange={callMultiple(onChange, resize)}
        getRootRef={elementRef}
      />
    </FormField>
  );
};
