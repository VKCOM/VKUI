import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Icon16SearchOutline, Icon16Clear, Icon24Cancel } from '@vkontakte/icons';
import { Platform } from '../../lib/platform';
import { HasRef } from '../../types';
import { Touch, TouchEvent } from '../Touch/Touch';
import { VKUITouchEvent } from '../../lib/touch';
import { Title } from '../Typography/Title/Title';
import { Headline } from '../Typography/Headline/Headline';
import { useExternRef } from '../../hooks/useExternRef';
import { useEnsuredControl } from '../../hooks/useEnsuredControl';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import styles from './Search.module.css';

const SearchPlaceholderTypography = ({
  children,
  ...restProps
}: React.HTMLAttributes<HTMLElement>) => {
  const platform = usePlatform();

  switch (platform) {
    case Platform.IOS:
      return (
        <Title {...restProps} level="3" weight="3">
          {children}
        </Title>
      );
    default:
      return (
        <Headline {...restProps} weight="3">
          {children}
        </Headline>
      );
  }
};

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
  ...inputProps
}: SearchProps) => {
  const inputRef = useExternRef(getRef);
  const [isFocused, setFocused] = React.useState(false);
  const [value, onChange] = useEnsuredControl({
    defaultValue,
    onChange: onChangeProp,
    value: valueProp,
  });
  const { sizeY } = useAdaptivity();
  const platform = usePlatform();

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    inputProps.onFocus && inputProps.onFocus(e);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
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
      onCancel();
    },
    [inputRef, onCancel],
  );

  return (
    <div
      className={classNames(
        styles['Search'],
        platform === Platform.IOS && styles['Search--ios'],
        getSizeYClassName(styles['Search'], sizeY),
        isFocused && styles['Search--focused'],
        value && styles['Search--has-value'],
        after && styles['Search--has-after'],
        icon && styles['Search--has-icon'],
        className,
      )}
      style={style}
    >
      <div className={styles['Search__in']}>
        <div className={styles['Search__width']} />
        <label className={styles['Search__control']}>
          <input
            type="search"
            {...inputProps}
            autoComplete={autoComplete}
            ref={inputRef}
            className={styles['Search__input']}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
          {platform === Platform.IOS && after && (
            <div className={styles['Search__after-width']}>{after}</div>
          )}
          <div className={styles['Search__placeholder']}>
            <div className={styles['Search__placeholder-in']}>
              {before}
              <SearchPlaceholderTypography className={styles['Search__placeholder-text']}>
                {placeholder}
              </SearchPlaceholderTypography>
            </div>
            {isFocused && platform === Platform.IOS && after && (
              <div className={styles['Search__after-width']}>{after}</div>
            )}
          </div>
        </label>
        <div className={styles['Search__after']} onClick={onCancel}>
          <div className={styles['Search__icons']}>
            {icon && (
              <Touch onStart={onIconClickStart} className={styles['Search__icon']}>
                {icon}
              </Touch>
            )}
            {!!value && (
              <Touch onStart={onIconCancelClickStart} className={styles['Search__icon']}>
                {platform === Platform.IOS ? <Icon16Clear /> : <Icon24Cancel />}
              </Touch>
            )}
          </div>
          {platform === Platform.IOS && after && (
            <div className={styles['Search__after-in']}>{after}</div>
          )}
        </div>
      </div>
    </div>
  );
};
