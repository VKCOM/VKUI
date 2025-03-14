'use client';

import * as React from 'react';
import { Icon16Clear, Icon16SearchOutline, Icon24Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { useBooleanState } from '../../hooks/useBooleanState';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useExternRef } from '../../hooks/useExternRef';
import { useNativeFormResetListener } from '../../hooks/useNativeFormResetListener';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import { touchEnabled } from '../../lib/touch';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasRef, HasRootRef } from '../../types';
import { Button } from '../Button/Button';
import { IconButton, type IconButtonProps } from '../IconButton/IconButton';
import { Headline } from '../Typography/Headline/Headline';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Search.module.css';

export type RenderIconButtonFn = (
  icon: React.ReactNode,
  props?: Partial<IconButtonProps>,
) => React.ReactNode;

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLInputElement> {
  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after?: React.ReactNode;
  before?: React.ReactNode;
  icon?: React.ReactNode | ((renderFn: RenderIconButtonFn) => React.ReactNode);
  onIconClick?: React.PointerEventHandler<HTMLElement>;
  defaultValue?: string;
  iconLabel?: string;
  clearLabel?: string;
  /**
   * Передает атрибут `data-testid` для кнопки очистки
   */
  clearButtonTestId?: string;
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
  /**
   * Передает атрибут `data-testid` для кнопки поиска
   */
  findButtonTestId?: string;
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
  icon: iconProp,
  onIconClick,
  style,
  autoComplete = 'off',
  onChange,
  iconLabel,
  clearLabel = 'Очистить',
  clearButtonTestId,
  noPadding,
  getRootRef,
  findButtonText = 'Найти',
  findButtonTestId,
  onFindButtonClick,
  ...inputProps
}: SearchProps): React.ReactNode => {
  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';
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

  const hasAfter = platform === 'ios' && hasReactNode(after);

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
    (e) => onIconClick?.(e),
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

  useIsomorphicLayoutEffect(() => {
    if (inputProps.value !== undefined) {
      setHasValue(Boolean(inputProps.value));
    }
  }, [inputProps.value]);

  useNativeFormResetListener(inputRef, () => {
    setHasValue(Boolean(inputProps.defaultValue));
  });

  const renderIconButton: RenderIconButtonFn = (icon, props = {}) => (
    <IconButton
      hoverMode="opacity"
      onPointerDown={onIconClickStart}
      className={styles.icon}
      onFocus={setFocusedTrue}
      onBlur={setFocusedFalse}
      onClick={noop}
      {...props}
    >
      <VisuallyHidden>{iconLabel}</VisuallyHidden>
      {icon}
    </IconButton>
  );

  return (
    <div
      className={classNames(
        'vkuiInternalSearch',
        styles.host,
        sizeY === 'none' && styles.sizeYNone,
        sizeY === 'compact' && styles.sizeYCompact,
        isFocused && styles.focused,
        hasValue && styles.hasValue,
        hasAfter && styles.hasAfter,
        iconProp && styles.hasIcon,
        inputProps.disabled && styles.disabled,
        !noPadding && styles.withPadding,
        isRtl && styles.rtl,
        className,
      )}
      ref={getRootRef}
      style={style}
    >
      <div className={styles.field}>
        <label htmlFor={inputId} className={styles.label}>
          {placeholder}
        </label>
        <div className={styles.input}>
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
            className={styles.nativeInput}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={callMultiple(onChange, checkHasValue)}
          />
        </div>
        <div className={styles.controls}>
          {iconProp &&
            (typeof iconProp === 'function'
              ? iconProp(renderIconButton)
              : renderIconButton(iconProp))}
          <IconButton
            hoverMode="opacity"
            onPointerDown={onIconCancelClickStart}
            onClick={onCancel}
            className={styles.icon}
            tabIndex={hasValue ? undefined : -1}
            disabled={inputProps.disabled}
            data-testid={clearButtonTestId}
          >
            <VisuallyHidden>{clearLabel}</VisuallyHidden>
            {platform === 'ios' ? <Icon16Clear /> : <Icon24Cancel />}
          </IconButton>
          {adaptiveSizeY.compact && onFindButtonClick && (
            <Button
              mode="primary"
              size="m"
              className={classNames(styles.findButton, adaptiveSizeY.compact.className)}
              focusVisibleMode="inside"
              onClick={onFindButtonClick}
              tabIndex={hasValue ? undefined : -1}
              data-testid={findButtonTestId}
            >
              {findButtonText}
            </Button>
          )}
        </div>
      </div>
      {hasAfter && (
        <div className={styles.after}>
          <Button
            mode="tertiary"
            size="m"
            focusVisibleMode="inside"
            hoverMode="opacity"
            activeMode="opacity"
            onClick={onCancel}
            onFocus={setFocusedTrue}
            onBlur={setFocusedFalse}
          >
            <span className={styles.afterTextClip}>{after}</span>
          </Button>
        </div>
      )}
    </div>
  );
};
