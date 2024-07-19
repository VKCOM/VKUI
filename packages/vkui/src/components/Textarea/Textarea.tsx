import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { callMultiple } from '../../lib/callMultiple';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { UnstyledTextField } from '../UnstyledTextField/UnstyledTextField';
import { useResizeTextarea } from './useResizeTextarea';
import styles from './Textarea.module.css';

const sizeYClassNames = {
  none: styles['Textarea--sizeY-none'],
  ['compact']: styles['Textarea--sizeY-compact'],
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
  ...restProps
}: TextareaProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  const [refResizeTextarea, resize] = useResizeTextarea(onResize, grow);
  const elementRef = useExternRef(getRef, refResizeTextarea);

  React.useEffect(resize, [resize, sizeY]);

  return (
    <FormField
      className={classNames(
        styles['Textarea'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        align === 'right' && styles['Textarea--align-right'],
        align === 'center' && styles['Textarea--align-center'],
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
        as="textarea"
        rows={rows}
        className={styles['Textarea__el']}
        onChange={callMultiple(onChange, resize)}
        getRootRef={elementRef}
      />
    </FormField>
  );
};
