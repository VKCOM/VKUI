import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { useExternRef } from "../../hooks/useExternRef";
import { hasReactNode, isFunction } from "../../lib/utils";
import { getClassName } from "../../helpers/getClassName";
import { HasRef, HasRootRef } from "../../types";
import "./WriteBar.css";

export interface WriteBarProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLTextAreaElement> {
  /**
   * Содержимое, отображаемое слева от поля ввода.
   */
  before?: React.ReactNode;
  /**
   * Содержимое, отображаемое поверх поля ввода (актуально для iOS)
   */
  inlineAfter?: React.ReactNode;
  /**
   * Содержимое, отображаемое справа от поля ввода
   */
  after?: React.ReactNode;
  /**
   * Вызывается при смене высоты поля ввода
   */
  onHeightChange?: VoidFunction;

  children?: never;
}

/**
 * @see https://vkcom.github.io/VKUI/#/WriteBar
 */
export const WriteBar: React.FC<WriteBarProps> = (props: WriteBarProps) => {
  const platform = usePlatform();
  const {
    className,
    style,

    before,
    inlineAfter,
    after,

    value,
    onChange,

    getRootRef,
    getRef,
    onHeightChange,
    ...restProps
  } = props;

  const isControlledOutside = value != null;

  const textareaRef = useExternRef(getRef);
  const currentScrollHeight = React.useRef<number>();

  const resize = React.useCallback(() => {
    const textareaEl = textareaRef.current;
    if (!textareaEl) {
      return;
    }

    if (textareaEl.offsetParent) {
      textareaEl.style.height = "";
      textareaEl.style.height = `${textareaEl.scrollHeight}px`;

      if (
        textareaEl.scrollHeight !== currentScrollHeight.current &&
        onHeightChange
      ) {
        onHeightChange();
        currentScrollHeight.current = textareaEl.scrollHeight;
      }
    }
  }, [onHeightChange, textareaRef]);

  const onTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    if (isFunction(onChange)) {
      onChange(event);
    }

    if (!isControlledOutside) {
      resize();
    }
  };

  React.useEffect(() => {
    resize();
  }, [resize, value]);

  return (
    <div
      ref={getRootRef}
      vkuiClass={getClassName("WriteBar", platform)}
      className={className}
      style={style}
    >
      <form vkuiClass="WriteBar__form" onSubmit={(e) => e.preventDefault()}>
        {hasReactNode(before) && (
          <div vkuiClass="WriteBar__before">{before}</div>
        )}

        <div vkuiClass="WriteBar__formIn">
          <textarea
            {...restProps}
            vkuiClass="WriteBar__textarea"
            onChange={onTextareaChange}
            ref={textareaRef}
            value={value}
          />

          {hasReactNode(inlineAfter) && (
            <div vkuiClass="WriteBar__inlineAfter">{inlineAfter}</div>
          )}
        </div>

        {hasReactNode(after) && <div vkuiClass="WriteBar__after">{after}</div>}
      </form>
    </div>
  );
};
