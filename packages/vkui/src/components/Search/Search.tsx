'use client';

import * as React from 'react';
import { Icon16Clear, Icon16SearchOutline, Icon24Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { useBooleanState } from '../../hooks/useBooleanState';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useExternRef } from '../../hooks/useExternRef';
import { useMergeProps } from '../../hooks/useMergeProps';
import { useNativeFormResetListener } from '../../hooks/useNativeFormResetListener';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import { touchEnabled } from '../../lib/touch';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef } from '../../types';
import { Button } from '../Button/Button';
import { IconButton, type IconButtonProps } from '../IconButton/IconButton';
import { RootComponent } from '../RootComponent/RootComponent';
import { Headline } from '../Typography/Headline/Headline';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Search.module.css';

const warn = warnOnce('Search');

export type RenderIconButtonFn = (
  icon: React.ReactNode,
  props?: Partial<IconButtonProps> & HasDataAttribute,
) => React.ReactElement;

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ input: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLInputElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в поле ввода.
   */
  slotProps?: {
    root?: React.HTMLAttributes<HTMLDivElement> & HasRootRef<HTMLDivElement> & HasDataAttribute;
    input?: React.InputHTMLAttributes<HTMLInputElement> &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
  };
  /**
   * Only iOS. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after?: React.ReactNode;
  /**
   * Контент, отображаемый перед полем ввода.
   */
  before?: React.ReactNode;
  /**
   * Иконка поиска. Может быть React-элементом или функцией, возвращающей элемент.
   */
  icon?: React.ReactNode | ((renderFn: RenderIconButtonFn) => React.ReactNode);
  /**
   * Обработчик нажатия на иконку поиска.
   */
  onIconClick?: React.PointerEventHandler<HTMLElement>;
  /**
   * Значение поля ввода по умолчанию.
   */
  defaultValue?: string;
  /**
   * Текст для скринридеров, описывающий иконку поиска.
   */
  iconLabel?: string;
  /**
   * Текст для скринридеров, описывающий кнопку очистки.
   */
  clearLabel?: string;
  /**
   * Передает атрибут `data-testid` для кнопки очистки.
   */
  clearButtonTestId?: string;
  /**
   * Удаляет отступы у компонента.
   */
  noPadding?: boolean;
  /**
   * Текст для кнопки Найти.
   */
  findButtonText?: string;
  /**
   * Обработчик, при нажатии на кнопку "Найти".
   */
  onFindButtonClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Передает атрибут `data-testid` для кнопки поиска.
   */
  findButtonTestId?: string;
  /**
   * Скрывает кнопку очистки.
   */
  hideClearButton?: boolean;
}

/**
 * @see https://vkui.io/components/search
 */
export const Search = ({
  className,
  getRootRef,
  style,
  placeholder: placeholderProp = 'Поиск',
  before = <Icon16SearchOutline />,
  after = 'Отмена',
  getRef,
  icon: iconProp,
  onIconClick,
  autoComplete: autoCompleteProp = 'off',
  iconLabel,
  clearLabel = 'Очистить',
  clearButtonTestId,
  noPadding,
  findButtonText = 'Найти',
  findButtonTestId,
  onFindButtonClick,
  hideClearButton,

  slotProps,
  ...inputProps
}: SearchProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`');
  }

  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';

  const rootRest = useMergeProps(
    {
      className,
      style,
      getRootRef,
    },
    slotProps?.root,
  );

  const {
    id,
    placeholder,
    onChange,
    autoComplete,
    getRootRef: getInputRef,
    onFocus: onInputFocus,
    onBlur: onInputBlur,
    ...inputRest
  } = useMergeProps(
    {
      getRootRef: getRef,
      placeholder: placeholderProp,
      autoComplete: autoCompleteProp,
      className: styles.nativeInput,
      ...inputProps,
    },
    slotProps?.input,
  );

  const inputRef = useExternRef(getInputRef);
  const {
    value: isFocused,
    setTrue: setFocusedTrue,
    setFalse: setFocusedFalse,
  } = useBooleanState(false);
  const generatedId = React.useId();
  const inputId = id ? id : `search-${generatedId}`;

  const [hasValue, setHasValue] = React.useState<boolean>(() =>
    Boolean(inputRest.value || inputRest.defaultValue),
  );
  const checkHasValue: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setHasValue(Boolean(e.currentTarget.value));

  const { sizeY = 'none' } = useAdaptivity();
  const { sizeY: adaptiveSizeY } = useAdaptivityConditionalRender();
  const platform = usePlatform();

  const hasAfter = platform === 'ios' && hasReactNode(after);

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocusedTrue();
    onInputFocus && onInputFocus(e);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocusedFalse();
    onInputBlur && onInputBlur(e);
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
    if (inputRest.value !== undefined) {
      setHasValue(Boolean(inputRest.value));
    }
  }, [inputRest.value]);

  useNativeFormResetListener(inputRef, () => {
    setHasValue(Boolean(inputRest.defaultValue));
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

  const showControls = Boolean(
    iconProp || !hideClearButton || (adaptiveSizeY.compact && onFindButtonClick),
  );

  return (
    <RootComponent
      baseClassName={classNames(
        'vkuiInternalSearch',
        styles.host,
        sizeY === 'none' && styles.sizeYNone,
        sizeY === 'compact' && styles.sizeYCompact,
        isFocused && styles.focused,
        hasValue && styles.hasValue,
        hasAfter && styles.hasAfter,
        iconProp && styles.hasIcon,
        inputRest.disabled && styles.disabled,
        !noPadding && styles.withPadding,
        isRtl && styles.rtl,
      )}
      {...rootRest}
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
            id={inputId}
            placeholder={placeholder}
            autoComplete={autoComplete}
            getRootRef={inputRef}
            onChange={callMultiple(onChange, checkHasValue)}
            onFocus={onFocus}
            onBlur={onBlur}
            {...inputRest}
          />
        </div>
        {showControls && (
          <div className={styles.controls}>
            {iconProp &&
              (typeof iconProp === 'function'
                ? iconProp(renderIconButton)
                : renderIconButton(iconProp))}
            {!hideClearButton && (
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
            )}
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
        )}
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
    </RootComponent>
  );
};
