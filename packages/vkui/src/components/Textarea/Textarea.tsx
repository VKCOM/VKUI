import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useEnsuredControl } from '../../hooks/useEnsuredControl';
import { useExternRef } from '../../hooks/useExternRef';
import { SizeType } from '../../lib/adaptivity';
import { HasRef, HasRootRef } from '../../types';
import { FormField, FormFieldProps } from '../FormField/FormField';
import styles from './Textarea.module.css';

const sizeYClassNames = {
  none: styles['Textarea--sizeY-none'],
  [SizeType.COMPACT]: styles['Textarea--sizeY-compact'],
  [SizeType.REGULAR]: null,
};

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HasRef<HTMLTextAreaElement>,
    HasRootRef<HTMLElement>,
    Pick<React.CSSProperties, 'maxHeight'>,
    Pick<FormFieldProps, 'status'> {
  grow?: boolean;
  onResize?(el: HTMLTextAreaElement): void;
  defaultValue?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Textarea
 */
export const Textarea = ({
  defaultValue = '',
  grow = true,
  style,
  onResize,
  className,
  getRootRef,
  getRef,
  rows = 2,
  maxHeight,
  status,
  onChange: onChangeProp,
  value: valueProp,
  ...restProps
}: TextareaProps) => {
  const [value, onChange] = useEnsuredControl({
    defaultValue,
    onChange: onChangeProp,
    value: valueProp,
  });
  const currentScrollHeight = React.useRef<number>();
  const elementRef = useExternRef(getRef);
  const { sizeY = 'none' } = useAdaptivity();

  // autosize input
  React.useEffect(() => {
    const el = elementRef.current;

    if (grow && el?.offsetParent) {
      el.style.height = '';
      el.style.height = `${el.scrollHeight}px`;

      if (el.scrollHeight !== currentScrollHeight.current && onResize) {
        onResize(el);
        currentScrollHeight.current = el.scrollHeight;
      }
    }
  }, [grow, value, sizeY, elementRef, onResize]);

  return (
    <FormField
      className={classNames(styles['Textarea'], sizeYClassNames[sizeY], className)}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
      status={status}
    >
      <textarea
        {...restProps}
        style={{ maxHeight }}
        rows={rows}
        className={styles['Textarea__el']}
        value={value}
        onChange={onChange}
        ref={elementRef}
      />
    </FormField>
  );
};
