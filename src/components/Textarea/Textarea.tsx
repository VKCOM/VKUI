import * as React from "react";
import { classNames } from "../../lib/classNames";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasRef, HasRootRef } from "../../types";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import { useEnsuredControl } from "../../hooks/useEnsuredControl";
import { useExternRef } from "../../hooks/useExternRef";
import "./Textarea.css";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HasRef<HTMLTextAreaElement>,
    HasRootRef<HTMLElement>,
    AdaptivityProps,
    Pick<React.CSSProperties, "maxHeight">,
    Pick<FormFieldProps, "status"> {
  grow?: boolean;
  onResize?(el: HTMLTextAreaElement): void;
  defaultValue?: string;
}

const TextareaComponent = ({
  defaultValue = "",
  grow = true,
  style,
  onResize,
  className,
  getRootRef,
  getRef,
  sizeY,
  rows = 2,
  maxHeight,
  status,
  ...restProps
}: TextareaProps) => {
  const [value, onChange] = useEnsuredControl(restProps, { defaultValue });
  const currentScrollHeight = React.useRef<number>();
  const elementRef = useExternRef(getRef);

  // autosize input
  React.useEffect(() => {
    const el = elementRef.current;

    if (grow && el?.offsetParent) {
      el.style.height = "";
      el.style.height = `${el.scrollHeight}px`;

      if (el.scrollHeight !== currentScrollHeight.current && onResize) {
        onResize(el);
        currentScrollHeight.current = el.scrollHeight;
      }
    }
  }, [grow, value, sizeY, elementRef, onResize]);

  return (
    <FormField
      vkuiClass={classNames(
        "Textarea",
        // TODO. v5.0.0 Новая адаптивность
        `Textarea--sizeY-${sizeY}`
      )}
      className={className}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
      status={status}
    >
      <textarea
        {...restProps}
        style={{ maxHeight }}
        rows={rows}
        vkuiClass="Textarea__el"
        value={value}
        onChange={onChange}
        ref={elementRef}
      />
    </FormField>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Textarea
 */
export const Textarea = withAdaptivity(TextareaComponent, { sizeY: true });

Textarea.displayName = "Textarea";
