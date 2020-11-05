import React, {
  ChangeEventHandler,
  FC,
  MutableRefObject,
  ReactNode,
  RefCallback,
  useEffect,
  useRef, useState,
  TextareaHTMLAttributes,
} from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode, isFunction, setRef } from '../../lib/utils';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { HasRootRef } from '../../types';

export interface WriteBarProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, HasRootRef<HTMLDivElement> {
  /**
   * Содержимое, отображаемое слево от поля ввода.
   */
  before?: ReactNode;
  /**
   * Содержимое, отображаемое поверх поля ввода (актуально для iOS)
   */
  inlineAfter?: ReactNode;
  /**
   * Содержимое, отображаемое справа от поля ввода
   */
  after?: ReactNode;

  getTextareaRef?: MutableRefObject<HTMLTextAreaElement> | RefCallback<HTMLTextAreaElement>;
  /**
   * Вызывается при смене высоты поля ввода
   */
  onHeightChange?: VoidFunction;

  children?: never;
}

export const WriteBar: FC<WriteBarProps> = (props) => {
  const platform = usePlatform();
  const {
    className,
    style,

    before,
    inlineAfter,
    after,

    value,
    onChange,
    placeholder,

    getRootRef,
    getTextareaRef,
    onHeightChange,
    ...restProps
  } = props;

  const isControlledOutside = value != null;

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaMinHeightRef = useRef<number | null>(null);

  const [inlineAfterWidth, setInlineAfterWidth] = useState(0);
  const inlineAfterElRef = useRef<HTMLDivElement | null>(null);

  const resize = () => {
    const textareaEl = textareaRef.current;
    if (!textareaEl) {
      return;
    }

    const { offsetHeight, scrollHeight } = textareaEl;
    const style = window.getComputedStyle(textareaEl);
    const paddingTop = parseInt(style.paddingTop);
    const paddingBottom = parseInt(style.paddingBottom);

    if (textareaMinHeightRef.current === null) {
      textareaMinHeightRef.current = offsetHeight;
    }

    let diff = paddingTop + paddingBottom + 10;

    if (scrollHeight + diff <= offsetHeight) {
      diff = 0;
    }

    textareaEl.style.height = '0px';

    const height = textareaEl.scrollHeight - diff / 4;
    textareaEl.style.height = String(Math.max(height, textareaMinHeightRef.current)) + 'px';

    if (isFunction(onHeightChange)) {
      onHeightChange();
    }
  };

  const onTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    if (isFunction(onChange)) {
      onChange(event);
    }

    if (!isControlledOutside) {
      resize();
    }
  };

  const getTextareaElRef = (element: HTMLTextAreaElement) => {
    textareaRef.current = element;
    setRef(element, getTextareaRef);
  };

  useEffect(() => {
    resize();
  }, [value]);

  useEffect(() => {
    const width = inlineAfterElRef.current ? inlineAfterElRef.current.offsetWidth : 0;
    if (width !== inlineAfterWidth) {
      setInlineAfterWidth(width);
    }
  }, [inlineAfter, inlineAfterElRef.current]);

  return (
    <div
      ref={getRootRef}
      className={classNames(getClassName('WriteBar', platform), className)}
      style={style}
    >
      <form className="WriteBar__form" onSubmit={(e) => e.preventDefault()}>
        {hasReactNode(before) &&
        <div className="WriteBar__before">
          {before}
        </div>
        }

        <div className="WriteBar__formIn">
          <textarea
            {...restProps}
            style={{
              paddingRight: inlineAfterWidth > 0 ? inlineAfterWidth : null,
            }}
            className="WriteBar__textarea"
            placeholder={placeholder}
            onChange={onTextareaChange}
            ref={getTextareaElRef}
            value={value}
          />

          {hasReactNode(inlineAfter) &&
          <div className="WriteBar__inlineAfter" ref={inlineAfterElRef}>
            {inlineAfter}
          </div>
          }
        </div>

        {hasReactNode(after) &&
        <div className="WriteBar__after">
          {after}
        </div>
        }
      </form>
    </div>
  );
};
