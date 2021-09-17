import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { FormField } from '../FormField/FormField';
import { HasRef, HasRootRef } from '../../types';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { getClassName } from '../../helpers/getClassName';
import { useEnsuredControl } from '../../hooks/useEnsuredControl';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import './Textarea.css';

export interface TextareaProps extends
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HasRef<HTMLTextAreaElement>,
  HasRootRef<HTMLElement>,
  AdaptivityProps {
  grow?: boolean;
  onResize?(el: HTMLTextAreaElement): void;
  defaultValue?: string;
}

const Textarea: React.FC<TextareaProps> = React.memo(({
  defaultValue,
  grow,
  style,
  onResize,
  className,
  getRootRef,
  getRef,
  sizeY,
  ...restProps
}) => {
  const [value, onChange] = useEnsuredControl(restProps, { defaultValue });
  const elementRef = useExternRef(getRef);
  const platform = usePlatform();

  // autosize input
  useIsomorphicLayoutEffect(() => {
    const el = elementRef.current;
    if (grow) {
      el.style.height = null;
      el.style.height = `${el.scrollHeight}px`;
      // TODO: call only when height changed?
      onResize && onResize(el);
    }
  }, [grow, value]);

  return (
    <FormField
      vkuiClass={classNames(getClassName('Textarea', platform), `Textarea--sizeY-${sizeY}`)}
      className={className}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
    >
      <textarea
        {...restProps}
        vkuiClass="Textarea__el"
        value={value}
        onChange={onChange}
        ref={elementRef}
      />
    </FormField>
  );
});

Textarea.defaultProps = {
  defaultValue: '',
  grow: true,
};

export default withAdaptivity(Textarea, { sizeY: true });
