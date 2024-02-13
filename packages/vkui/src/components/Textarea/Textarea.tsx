import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { callMultiple } from '../../lib/callMultiple';
import { HasRef, HasRootRef } from '../../types';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { Text } from '../Typography/Text/Text';
import styles from './Textarea.module.css';

const sizeYClassNames = {
  none: styles['Textarea--sizeY-none'],
  ['compact']: styles['Textarea--sizeY-compact'],
};

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onResize'>,
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
  ...restProps
}: TextareaProps) => {
  const currentScrollHeight = React.useRef<number>();
  const elementRef = useExternRef(getRef);
  const { sizeY = 'none' } = useAdaptivity();

  const autosizeInput = () => {
    const el = elementRef.current;

    if (grow && el?.offsetParent) {
      el.style.height = '';
      el.style.height = `${el.scrollHeight}px`;

      if (el.scrollHeight !== currentScrollHeight.current && onResize) {
        onResize(el);
        currentScrollHeight.current = el.scrollHeight;
      }
    }
  };

  React.useEffect(autosizeInput, [grow, sizeY, elementRef, onResize]);

  return (
    <FormField
      className={classNames(
        styles['Textarea'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        className,
      )}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
      status={status}
    >
      <Text
        {...restProps}
        Component="textarea"
        normalize={false}
        style={{ maxHeight }}
        rows={rows}
        className={styles['Textarea__el']}
        onChange={callMultiple(onChange, autosizeInput)}
        getRootRef={elementRef}
      />
    </FormField>
  );
};
