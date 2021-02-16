import {
  ChangeEventHandler,
  FC,
  ReactNode,
  useEffect,
  useRef,
  TextareaHTMLAttributes,
} from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode, isFunction, setRef } from '../../lib/utils';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { HasRef, HasRootRef } from '../../types';

export interface WriteBarProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLTextAreaElement> {
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
  /**
   * Вызывается при смене высоты поля ввода
   */
  onHeightChange?: VoidFunction;

  children?: never;
}

export const WriteBar: FC<WriteBarProps> = (props: WriteBarProps) => {
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

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaMinHeightRef = useRef<number | null>(null);

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
    setRef(element, getRef);
  };

  useEffect(() => {
    resize();
  }, [value]);

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
            className="WriteBar__textarea"
            onChange={onTextareaChange}
            ref={getTextareaElRef}
            value={value}
          />

          {hasReactNode(inlineAfter) &&
          <div className="WriteBar__inlineAfter">
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
