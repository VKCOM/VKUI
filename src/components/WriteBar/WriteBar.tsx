import {
  ChangeEventHandler,
  FC,
  ReactNode,
  useEffect,
  useRef,
  TextareaHTMLAttributes,
} from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { useExternRef } from '../../hooks/useExternRef';
import { hasReactNode, isFunction } from '../../lib/utils';
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

  const textareaRef = useExternRef(getRef);
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

  useEffect(() => {
    resize();
  }, [value]);

  return (
    <div
      ref={getRootRef}
      vkuiClass={getClassName('WriteBar', platform)}
      className={className}
      style={style}
    >
      <form vkuiClass="WriteBar__form" onSubmit={(e) => e.preventDefault()}>
        {hasReactNode(before) &&
        <div vkuiClass="WriteBar__before">
          {before}
        </div>
        }

        <div vkuiClass="WriteBar__formIn">
          <textarea
            {...restProps}
            vkuiClass="WriteBar__textarea"
            onChange={onTextareaChange}
            ref={textareaRef}
            value={value}
          />

          {hasReactNode(inlineAfter) &&
          <div vkuiClass="WriteBar__inlineAfter">
            {inlineAfter}
          </div>
          }
        </div>

        {hasReactNode(after) &&
        <div vkuiClass="WriteBar__after">
          {after}
        </div>
        }
      </form>
    </div>
  );
};
