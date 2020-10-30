import React, {
  ChangeEvent,
  ChangeEventHandler,
  FunctionComponent,
  ReactNode,
  TextareaHTMLAttributes,
  useRef,
  useState,
} from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';

export interface WriteBarProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /*
  * Иконка перед текстовым полем
  * */
  before?: ReactNode;
  /*
  * Иконка после текстового поля
  * */
  after?: ReactNode;
  /*
  * Изменять размер текстового поля также как это реализовано в мобильных клиентах
  * */
  grow?: boolean;
}

export const WriteBar: FunctionComponent<WriteBarProps> = (props: WriteBarProps) => {
  const platform = usePlatform();
  const textAreaRef = useRef();
  const [height, setHeight] = useState(platform === 'android' || platform === 'ios' ? 36 : 40);
  const resize = (el: HTMLTextAreaElement) => {
    const { scrollHeight } = el;
    if (el.value === '') {
      setHeight(platform === 'android' || platform === 'ios' ? 36 : 40);
      el.value = '';
    } else {
      setHeight(scrollHeight < 95 ? scrollHeight : 95);
    }
  };
  const onChange: ChangeEventHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (props.grow === undefined || props.grow) {
      resize(e.currentTarget);
    }
    if (props.onChange) {
      props.onChange(e);
    }
  };
  return (
    <div className={classNames(getClassName('WriteBar', platform), props.className)}>
      <div className="WriteBar--before">
        {props.before}
      </div>
      <div className="WriteBar--content">
        <textarea ref={textAreaRef} onChange={onChange} style={{ height: height }} {...props}
          className="WriteBar__input" />
      </div>
      <div className="WriteBar--after">
        {props.after}
      </div>
    </div>
  );
};
