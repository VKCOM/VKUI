import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { withPlatform } from '../../hoc/withPlatform';
import { getClassName } from '../../helpers/getClassName';
import { Icon16SearchOutline, Icon16Clear, Icon24Cancel } from '@vkontakte/icons';
import { IOS, VKCOM } from '../../lib/platform';
import { HasPlatform, HasRef } from '../../types';
import Touch, { TouchEvent } from '../Touch/Touch';
import { VKUITouchEvent } from '../../lib/touch';
import { noop } from '../../lib/utils';
import Text from '../Typography/Text/Text';
import Title from '../Typography/Title/Title';
import Separator from '../Separator/Separator';
import { useExternRef } from '../../hooks/useExternRef';
import { useEnsuredControl } from '../../hooks/useEnsuredControl';
import './Search.css';

export type InputRef = (element: HTMLInputElement) => void;

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement>, HasPlatform {
  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after?: React.ReactNode;
  before?: React.ReactNode;
  icon?: React.ReactNode;
  onIconClick?: (e: VKUITouchEvent) => void;
  defaultValue?: string;
}

const Search: React.FC<SearchProps> = ({
  before,
  className,
  defaultValue,
  placeholder,
  after,
  getRef,
  platform,
  icon,
  onIconClick = noop,
  style,
  ...inputProps
}) => {
  const inputRef = useExternRef(getRef);
  const [isFocused, setFocused] = React.useState(false);
  const [value, onChange] = useEnsuredControl(inputProps, { defaultValue });

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    inputProps.onFocus && inputProps.onFocus(e);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    inputProps.onBlur && inputProps.onBlur(e);
  };

  const onCancel = () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(inputRef.current, '');

    const ev2 = new Event('input', { bubbles: true });
    inputRef.current.dispatchEvent(ev2);
  };

  const onIconClickStart = React.useCallback((e: TouchEvent) => onIconClick(e.originalEvent), [onIconClick]);

  const onIconCancelClickStart = React.useCallback((e: TouchEvent) => {
    e.originalEvent.preventDefault();
    inputRef.current.focus();
    onCancel();
  }, [onCancel]);

  return (
    <div
      vkuiClass={classNames(getClassName('Search', platform), {
        'Search--focused': isFocused,
        'Search--has-value': !!value,
        'Search--has-after': !!after,
        'Search--has-icon': !!icon,
      })}
      className={className}
      style={style}
    >
      <div vkuiClass="Search__in">
        <div vkuiClass="Search__width" />
        <label vkuiClass="Search__control">
          <input
            type="search"
            {...inputProps}
            ref={inputRef}
            vkuiClass="Search__input"
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
          {platform === IOS && after && <div vkuiClass="Search__after-width">{after}</div>}
          <div vkuiClass="Search__placeholder">
            <div vkuiClass="Search__placeholder-in">
              {before}
              {platform === VKCOM
                ? <Text vkuiClass="Search__placeholder-text" weight="regular">{placeholder}</Text>
                : <Title vkuiClass="Search__placeholder-text" level="3" weight="regular">{placeholder}</Title>
              }
            </div>
            {isFocused && platform === IOS && after && <div vkuiClass="Search__after-width">{after}</div>}
          </div>
        </label>
        <div vkuiClass="Search__after" onClick={onCancel}>
          <div vkuiClass="Search__icons">
            {icon &&
              <Touch onStart={onIconClickStart} vkuiClass="Search__icon">
                {icon}
              </Touch>
            }
            {!!value &&
              <Touch onStart={onIconCancelClickStart} vkuiClass="Search__icon">
                {platform === VKCOM
                  ? <Icon24Cancel />
                  : <Icon16Clear />
                }
              </Touch>
            }
          </div>
          {platform === IOS && after &&
            <div vkuiClass="Search__after-in">{after}</div>
          }
        </div>
      </div>
      {platform === VKCOM && <Separator vkuiClass="Search__separator" wide />}
    </div>
  );
};

Search.defaultProps = {
  autoComplete: 'off',
  defaultValue: '',
  placeholder: 'Поиск',
  after: 'Отмена',
  before: <Icon16SearchOutline />,
};

export default withPlatform(Search);
