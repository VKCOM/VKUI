import * as React from "react";
import { Headline } from "../Typography/Headline/Headline";
import { usePlatform } from "../../hooks/usePlatform";
import { useExternRef } from "../../hooks/useExternRef";
import { hasReactNode, isFunction } from "../../lib/utils";
import { classNamesString } from "../../lib/classNames";
import { Platform } from "../../lib/platform";
import { HasRef, HasRootRef } from "../../types";
import styles from "./WriteBar.module.css";

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
  /**
   * Добавляет тень вокруг поля ввода
   */
  shadow?: boolean;

  children?: never;
}

/**
 * @see https://vkcom.github.io/VKUI/#/WriteBar
 */
export const WriteBar = ({
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
  shadow = false,
  ...restProps
}: WriteBarProps) => {
  const platform = usePlatform();

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
      className={classNamesString(
        styles["WriteBar"],
        platform === Platform.IOS && styles["WriteBar--ios"],
        shadow && styles["WriteBar--shadow"],
        className
      )}
      style={style}
    >
      <div className={styles["WriteBar__form"]}>
        {hasReactNode(before) && (
          <div className={styles["WriteBar__before"]}>{before}</div>
        )}

        <div className={styles["WriteBar__formIn"]}>
          <Headline
            {...restProps}
            Component="textarea"
            className={styles["WriteBar__textarea"]}
            onChange={onTextareaChange}
            getRootRef={textareaRef}
            value={value}
          />
          {hasReactNode(inlineAfter) && (
            <div className={styles["WriteBar__inlineAfter"]}>{inlineAfter}</div>
          )}
        </div>

        {hasReactNode(after) && (
          <div className={styles["WriteBar__after"]}>{after}</div>
        )}
      </div>
    </div>
  );
};
