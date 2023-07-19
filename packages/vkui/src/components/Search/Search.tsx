import * as React from 'react';
import { Icon16Clear, Icon16SearchOutline, Icon24Cancel } from '@vkontakte/icons';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useBooleanState } from '../../hooks/useBooleanState';
import { useEnsuredControl } from '../../hooks/useEnsuredControl';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { VKUITouchEvent } from '../../lib/touch';
import { HasRef } from '../../types';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { TouchEvent } from '../Touch/Touch';
import { Headline } from '../Typography/Headline/Headline';
import styles from './Search.module.css';

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement> {
  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after?: React.ReactNode;
  before?: React.ReactNode;
  icon?: React.ReactNode;
  onIconClick?: (e: VKUITouchEvent) => void;
  defaultValue?: string;
  iconAriaLabel?: string;
  clearAriaLabel?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Search
 */
export const Search = ({
  before = <Icon16SearchOutline />,
  className,
  defaultValue = '',
  placeholder = 'Поиск',
  after = 'Отмена',
  getRef,
  icon,
  onIconClick = noop,
  style,
  autoComplete = 'off',
  onChange: onChangeProp,
  value: valueProp,
  iconAriaLabel,
  clearAriaLabel = 'Очистить',
  ...inputProps
}: SearchProps) => {
  const inputRef = useExternRef(getRef);
  const {
    value: isFocused,
    setTrue: setFocusedTrue,
    setFalse: setFocusedFalse,
  } = useBooleanState(false);

  const [value, onChange] = useEnsuredControl({
    defaultValue,
    onChange: onChangeProp,
    value: valueProp,
  });
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocusedTrue();
    inputProps.onFocus && inputProps.onFocus(e);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocusedFalse();
    inputProps.onBlur && inputProps.onBlur(e);
  };

  const onCancel = React.useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )?.set;
    nativeInputValueSetter?.call(inputRef.current, '');

    const ev2 = new Event('input', { bubbles: true });
    inputRef.current?.dispatchEvent(ev2);
  }, [inputRef]);

  const onIconClickStart = React.useCallback(
    (e: TouchEvent) => onIconClick(e.originalEvent),
    [onIconClick],
  );

  const onIconCancelClickStart = React.useCallback(
    (e: TouchEvent) => {
      e.originalEvent.preventDefault();
      inputRef.current?.focus();
    },
    [inputRef],
  );

  return (
    <div
      className={classNames(
        'vkuiInternalSearch',
        styles['Search'],
        sizeY === 'none' && styles['Search--sizeY-none'],
        sizeY === SizeType.COMPACT && styles['Search--sizeY-compact'],
        isFocused && styles['Search--focused'],
        value && styles['Search--has-value'],
        after && styles['Search--has-after'],
        icon && styles['Search--has-icon'],
        inputProps.disabled && styles['Search--disabled'],
        className,
      )}
      style={style}
    >
      <div className={styles['Search__field']}>
        <label className={styles['Search__control']}>
          {before}
          <Headline
            Component="input"
            type="search"
            level="1"
            weight="3"
            {...inputProps}
            placeholder={placeholder}
            autoComplete={autoComplete}
            getRootRef={inputRef}
            className={styles['Search__input']}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        </label>
        <div className={styles['Search__icons']}>
          {icon && (
            <IconButton
              hoverMode="opacity"
              onStart={onIconClickStart}
              className={styles['Search__icon']}
              onFocus={setFocusedTrue}
              onBlur={setFocusedFalse}
              aria-label={iconAriaLabel}
            >
              {icon}
            </IconButton>
          )}
          {!!value && (
            <IconButton
              hoverMode="opacity"
              onStart={onIconCancelClickStart}
              onClick={onCancel}
              className={styles['Search__icon']}
              aria-label={clearAriaLabel}
            >
              {platform === Platform.IOS ? <Icon16Clear /> : <Icon24Cancel />}
            </IconButton>
          )}
        </div>
      </div>
      {platform === Platform.IOS && after && (
        <Button
          mode="tertiary"
          size="m"
          className={styles['Search__after']}
          focusVisibleMode="inside"
          onClick={onCancel}
          onFocus={setFocusedTrue}
          onBlur={setFocusedFalse}
        >
          <span className={styles['Search__afterText']}>{after}</span>
        </Button>
      )}
    </div>
  );
};
