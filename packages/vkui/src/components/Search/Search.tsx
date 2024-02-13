import * as React from 'react';
import { Icon16Clear, Icon16SearchOutline, Icon24Cancel } from '@vkontakte/icons';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { useBooleanState } from '../../hooks/useBooleanState';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import { touchEnabled } from '../../lib/touch';
import { HasRef, HasRootRef } from '../../types';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { Headline } from '../Typography/Headline/Headline';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Search.module.css';

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLInputElement> {
  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after?: React.ReactNode;
  before?: React.ReactNode;
  icon?: React.ReactNode;
  onIconClick?: React.PointerEventHandler<HTMLElement>;
  defaultValue?: string;
  iconLabel?: string;
  clearLabel?: string;
  /**
   * Удаляет отступы у компонента
   */
  noPadding?: boolean;
  /**
   * Текст для кнопки Найти
   */
  findButtonText?: string;
  /**
   * Коллбэк для кнопки Найти
   */
  onFindButtonClick?: React.MouseEventHandler<HTMLElement>;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Search
 */
export const Search = ({
  id: idProp,
  before = <Icon16SearchOutline />,
  className,
  placeholder = 'Поиск',
  after = 'Отмена',
  getRef,
  icon,
  onIconClick = noop,
  style,
  autoComplete = 'off',
  onChange,
  iconLabel,
  clearLabel = 'Очистить',
  noPadding,
  getRootRef,
  findButtonText = 'Найти',
  onFindButtonClick,
  ...inputProps
}: SearchProps) => {
  const inputRef = useExternRef(getRef);
  const {
    value: isFocused,
    setTrue: setFocusedTrue,
    setFalse: setFocusedFalse,
  } = useBooleanState(false);
  const generatedId = React.useId();
  const inputId = idProp ? idProp : `search-${generatedId}`;

  const [hasValue, setHasValue] = React.useState<boolean>(() =>
    Boolean(inputProps.value || inputProps.defaultValue),
  );
  const checkHasValue: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setHasValue(Boolean(e.currentTarget.value));

  const { sizeY = 'none' } = useAdaptivity();
  const { sizeY: adaptiveSizeY } = useAdaptivityConditionalRender();
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

  const onIconClickStart: React.PointerEventHandler<HTMLElement> = React.useCallback(
    (e) => onIconClick(e),
    [onIconClick],
  );

  const onIconCancelClickStart: React.PointerEventHandler<HTMLElement> = React.useCallback(
    (e) => {
      e.preventDefault();
      inputRef.current?.focus();
      if (touchEnabled()) {
        onCancel();
      }
    },
    [inputRef, onCancel],
  );

  return (
    <div
      className={classNames(
        'vkuiInternalSearch',
        styles['Search'],
        sizeY === 'none' && styles['Search--sizeY-none'],
        sizeY === 'compact' && styles['Search--sizeY-compact'],
        isFocused && styles['Search--focused'],
        hasValue && styles['Search--has-value'],
        after && styles['Search--has-after'],
        icon && styles['Search--has-icon'],
        inputProps.disabled && styles['Search--disabled'],
        !noPadding && styles['Search--withPadding'],
        className,
      )}
      ref={getRootRef}
      style={style}
    >
      <div className={styles['Search__field']}>
        <label htmlFor={inputId} className={styles['Search__label']}>
          {placeholder}
        </label>
        <div className={styles['Search__input']}>
          {before}
          <Headline
            Component="input"
            type="search"
            level="1"
            weight="3"
            {...inputProps}
            id={inputId}
            placeholder={placeholder}
            autoComplete={autoComplete}
            getRootRef={inputRef}
            className={styles['Search__nativeInput']}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={callMultiple(onChange, checkHasValue)}
          />
        </div>
        <div className={styles['Search__controls']}>
          {icon && (
            <IconButton
              hoverMode="opacity"
              onPointerDown={onIconClickStart}
              className={styles['Search__icon']}
              onFocus={setFocusedTrue}
              onBlur={setFocusedFalse}
              onClick={noop}
            >
              <VisuallyHidden>{iconLabel}</VisuallyHidden>
              {icon}
            </IconButton>
          )}
          <IconButton
            hoverMode="opacity"
            onPointerDown={onIconCancelClickStart}
            onClick={onCancel}
            className={styles['Search__icon']}
            tabIndex={hasValue ? undefined : -1}
          >
            <VisuallyHidden>{clearLabel}</VisuallyHidden>
            {platform === 'ios' ? <Icon16Clear /> : <Icon24Cancel />}
          </IconButton>
          {adaptiveSizeY.compact && onFindButtonClick && (
            <Button
              mode="primary"
              size="m"
              className={classNames(styles['Search__findButton'], adaptiveSizeY.compact.className)}
              focusVisibleMode="inside"
              onClick={onFindButtonClick}
              tabIndex={hasValue ? undefined : -1}
            >
              {findButtonText}
            </Button>
          )}
        </div>
      </div>
      {platform === 'ios' && after && (
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
