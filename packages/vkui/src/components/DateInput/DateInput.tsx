'use client';

import * as React from 'react';
import { Icon16Clear, Icon20CalendarOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { startOfDay, startOfMinute } from 'date-fns';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useDateInput } from '../../hooks/useDateInput';
import { useExternRef } from '../../hooks/useExternRef';
import { type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import { format, isMatch, parse } from '../../lib/date';
import type { PlacementWithAuto } from '../../lib/floating';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasRootRef } from '../../types';
import { Calendar, type CalendarProps, type CalendarTestsProps } from '../Calendar/Calendar';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { FormField, type FormFieldProps } from '../FormField/FormField';
import { IconButton } from '../IconButton/IconButton';
import { InputLike } from '../InputLike/InputLike';
import { InputLikeDivider } from '../InputLike/InputLikeDivider';
import { Popper } from '../Popper/Popper';
import { Text } from '../Typography/Text/Text';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { useDateInputValue } from './hooks';
import '../InputLike/InputLike.module.css'; // Reorder css
import styles from './DateInput.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export type DateInputPropsTestsProps = {
  /**
   * Передает атрибут `data-testid` для поля ввода дня.
   */
  dayFieldTestId?: string;
  /**
   * Передает атрибут `data-testid` для поля ввода месяца.
   */
  monthFieldTestId?: string;
  /**
   * Передает атрибут `data-testid` для поля ввода года.
   */
  yearFieldTestId?: string;
  /**
   * Передает атрибут `data-testid` для поля ввода часа.
   */
  hourFieldTestId?: string;
  /**
   * Передает атрибут `data-testid` для поля ввода минут.
   */
  minuteFieldTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки показа календаря.
   */
  showCalendarButtonTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки очистки даты.
   */
  clearButtonTestId?: string;
};

export interface DateInputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLDivElement>,
      'value' | 'defaultValue' | 'onChange' | 'size'
    >,
    Pick<
      CalendarProps,
      | 'disablePast'
      | 'disableFuture'
      | 'enableTime'
      | 'shouldDisableDate'
      | 'onChange'
      | 'value'
      | 'defaultValue'
      | 'doneButtonText'
      | 'DoneButton'
      | 'weekStartsOn'
      | 'disablePickers'
      | 'changeHoursLabel'
      | 'changeMinutesLabel'
      | 'prevMonthLabel'
      | 'nextMonthLabel'
      | 'changeMonthLabel'
      | 'changeYearLabel'
      | 'showNeighboringMonth'
      | 'size'
      | 'viewDate'
      | 'onHeaderChange'
      | 'onNextMonth'
      | 'onPrevMonth'
      | 'prevMonthIcon'
      | 'nextMonthIcon'
      | 'minDateTime'
      | 'maxDateTime'
      | 'renderDayContent'
    >,
    Pick<UseFocusTrapProps, 'restoreFocus'>,
    HasRootRef<HTMLDivElement>,
    Omit<FormFieldProps, 'maxHeight'>,
    DateInputPropsTestsProps {
  /**
   * Передает атрибуты `data-testid` для интерактивных элементов в календаре.
   */
  calendarTestsProps?: CalendarTestsProps;
  /**
   * Расположение календаря относительно поля ввода.
   */
  calendarPlacement?: PlacementWithAuto;
  /**
   * Автоматически закрывать календарь при изменениях.
   */
  closeOnChange?: boolean;
  /**
   * `aria-label` для календаря.
   */
  calendarLabel?: string;
  /**
   * Label для кнопки очистки. Делает доступным для ассистивных технологий.
   */
  clearFieldLabel?: string;
  /**
   * Label для кнопки открытия календаря. Делает доступным для ассистивных технологий.
   */
  showCalendarLabel?: string;
  /**
   * Отключение открытия календаря.
   */
  disableCalendar?: boolean;
  /**
   * Обработчик изменения состояния открытия календаря.
   */
  onCalendarOpenChanged?: (opened: boolean) => void;
  /**
   * `aria-label` для поля изменения дня.
   */
  changeDayLabel?: string;
  /**
   * Обработчик нажатия на кнопку `"Done"`. Используется совместно с флагом `enableTime`.
   */
  onApply?: (value?: Date) => void;
  /**
   * Функция для кастомного форматирования отображаемого значения даты.
   * Позволяет переопределить стандартное отображение даты и вернуть собственное представление.
   */
  renderCustomValue?: (date: Date | undefined) => React.ReactNode;
  /**
   * Часовой пояс для отображения даты.
   */
  timezone?: string;
  /**
   * Включает режим в котором DateInput доступен
   * для ассистивных технологий.
   * В этом режиме:
   * - календарь больше не открывает при фокусе на DateInput;
   * - иконка календаря видна всегда, чтобы пользователи
   * ассистивных технологий могли открыть календарь по клику на иконку;
   * - календарь при открытии получает фокус, клавиатурный
   * фокус зациклен и не выходит за пределы календаря пока календарь не закрыт.
   */
  accessible?: boolean /* TODO [>=v8] включить по умолчанию */;
  /**
   * Позволяет отключить захват фокуса при появлении календаря.
   */
  disableFocusTrap?: UseFocusTrapProps['disabled'];
}

const elementsConfig = (index: number) => {
  let length = 2;
  let min = 1;
  let max = 0;

  switch (index) {
    case 0:
      max = 31;
      break;
    case 1:
      max = 12;
      break;
    case 2:
      max = 2100;
      min = 1900;
      length = 4;
      break;
    case 3:
      max = 23;
      break;
    case 4:
      max = 59;
      break;
  }

  return { length, min, max };
};

const getInternalValue = (value: CalendarProps['value']) => {
  const newValue = ['', '', '', '', ''];
  if (value) {
    newValue[0] = String(value.getDate()).padStart(2, '0');
    newValue[1] = String(value.getMonth() + 1).padStart(2, '0');
    newValue[2] = String(value.getFullYear()).padStart(4, '0');
    newValue[3] = String(value.getHours()).padStart(2, '0');
    newValue[4] = String(value.getMinutes()).padStart(2, '0');
  }
  return newValue;
};

/**
 * @see https://vkcom.github.io/VKUI/#/DateInput
 */
export const DateInput = ({
  enableTime,
  shouldDisableDate,
  disableFuture,
  disablePast,
  minDateTime,
  maxDateTime,
  'value': valueProp,
  defaultValue,
  onChange,
  'calendarPlacement': calendarPlacementProp = 'bottom-start',
  style,
  className,
  doneButtonText,
  DoneButton,
  closeOnChange = true,
  disablePickers,
  getRootRef,
  name,
  autoFocus,
  disabled,
  onClick,
  onFocus,
  accessible,
  calendarLabel = 'Календарь',
  prevMonthLabel = 'Предыдущий месяц',
  nextMonthLabel = 'Следующий месяц',
  changeDayLabel = 'День',
  changeMonthLabel = 'Месяц',
  changeYearLabel = 'Год',
  changeHoursLabel = 'Час',
  changeMinutesLabel = 'Минута',
  clearFieldLabel = 'Очистить поле',
  showCalendarLabel = 'Показать календарь',
  showNeighboringMonth,
  size,
  viewDate,
  onHeaderChange,
  onNextMonth,
  onPrevMonth,
  prevMonthIcon,
  nextMonthIcon,
  disableCalendar = false,
  renderDayContent,
  onCalendarOpenChanged,
  calendarTestsProps,
  dayFieldTestId,
  monthFieldTestId,
  yearFieldTestId,
  hourFieldTestId,
  minuteFieldTestId,
  showCalendarButtonTestId,
  clearButtonTestId,
  id,
  onApply,
  renderCustomValue,
  timezone,
  restoreFocus,
  disableFocusTrap,
  'aria-label': ariaLabel = '',
  ...props
}: DateInputProps): React.ReactNode => {
  const daysRef = React.useRef<HTMLSpanElement>(null);
  const monthsRef = React.useRef<HTMLSpanElement>(null);
  const yearsRef = React.useRef<HTMLSpanElement>(null);
  const hoursRef = React.useRef<HTMLSpanElement>(null);
  const minutesRef = React.useRef<HTMLSpanElement>(null);

  const { value, updateValue, setInternalValue, getLastUpdatedValue, clearValue } =
    useDateInputValue({
      value: valueProp,
      defaultValue,
      onChange,
      timezone,
    });

  const maxElement = enableTime ? 4 : 2;

  const onInternalValueChange = React.useCallback(
    (internalValue: string[]) => {
      for (let i = 0; i <= maxElement; i += 1) {
        if (internalValue[i].length < elementsConfig(i).length) {
          return;
        }
      }

      let formattedValue = `${internalValue[0]}.${internalValue[1]}.${internalValue[2]}`;
      let mask = 'dd.MM.yyyy';
      if (enableTime) {
        formattedValue += ` ${internalValue[3]}:${internalValue[4]}`;
        mask += ' HH:mm';
      }

      if (isMatch(formattedValue, mask)) {
        const now = new Date();
        updateValue(
          parse(formattedValue, mask, value ?? (enableTime ? startOfMinute(now) : startOfDay(now))),
        );
      }
    },
    [enableTime, maxElement, updateValue, value],
  );

  const refs = React.useMemo(
    () => [daysRef, monthsRef, yearsRef, hoursRef, minutesRef],
    [daysRef, monthsRef, yearsRef, hoursRef, minutesRef],
  );

  const {
    rootRef,
    calendarRef,
    open,
    internalValue,
    handleKeyDown,
    setFocusedElement,
    handleFieldEnter,
    clear,
    removeFocusFromField,
    closeCalendar,
    toggleCalendar,
    openCalendar,
    handleRestoreFocus,
  } = useDateInput({
    maxElement,
    refs,
    autoFocus,
    disabled,
    elementsConfig,
    onClear: clearValue,
    onInternalValueChange,
    getInternalValue,
    value,
    onCalendarOpenChanged,
    accessible,
  });

  const { sizeY = 'none' } = useAdaptivity();

  const handleRootRef = useExternRef(rootRef, getRootRef);

  useIsomorphicLayoutEffect(
    function resetValueOnCloseCalendar() {
      if (!open) {
        setInternalValue(getLastUpdatedValue());
      }
    },
    [open, getLastUpdatedValue],
  );

  const onCalendarChange = React.useCallback(
    (value?: Date | undefined) => {
      if (!value) {
        return;
      }
      if (enableTime) {
        setInternalValue(value);
        return;
      }
      updateValue(value);
      if (closeOnChange) {
        removeFocusFromField();
      }
    },
    [enableTime, updateValue, closeOnChange, setInternalValue, removeFocusFromField],
  );

  const onDoneButtonClick = React.useCallback(() => {
    if (!value) {
      return;
    }
    const newValue = updateValue(value);
    onApply?.(newValue);
    removeFocusFromField();
  }, [onApply, removeFocusFromField, updateValue, value]);

  const customValue = React.useMemo(
    () => !open && renderCustomValue?.(value || undefined),
    [open, renderCustomValue, value],
  );

  // при переключении месяцев высота календаря может меняться,
  // чтобы календарь не прыгал при переключении месяцев каждый раз на
  // лучшую позицию мы запоминаем последнюю удачную, чтобы календарь оставался
  // на ней, пока помещается.
  const [calendarPlacement, setCalendarPlacement] =
    React.useState<PlacementWithAuto>(calendarPlacementProp);

  const { locale } = useConfigProvider();
  const currentDateLabel = value
    ? new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(value)
    : null;
  const currentDateLabelId = React.useId();
  const ariaLabelId = React.useId();

  const showCalendarOnInputAreaClick = React.useCallback(() => {
    handleFieldEnter();
    if (accessible) {
      openCalendar();
    }
  }, [handleFieldEnter, openCalendar, accessible]);

  return (
    <FormField
      style={style}
      className={classNames(sizeY !== 'regular' && sizeYClassNames[sizeY], className)}
      getRootRef={handleRootRef}
      role="group"
      aria-labelledby={`${ariaLabelId} ${currentDateLabelId}`}
      after={
        <React.Fragment>
          {!disableCalendar && (accessible || (!accessible && !value)) ? (
            <IconButton
              hoverMode="opacity"
              label={showCalendarLabel}
              onClick={toggleCalendar}
              data-testid={showCalendarButtonTestId}
            >
              <Icon20CalendarOutline />
            </IconButton>
          ) : null}
          {value ? (
            <IconButton
              hoverMode="opacity"
              label={clearFieldLabel}
              onClick={clear}
              data-testid={clearButtonTestId}
            >
              <Icon16Clear />
            </IconButton>
          ) : null}
        </React.Fragment>
      }
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <div className={styles.wrapper}>
        {ariaLabel && <VisuallyHidden id={ariaLabelId}>{ariaLabel}</VisuallyHidden>}
        {currentDateLabel && (
          <VisuallyHidden id={currentDateLabelId}>{currentDateLabel}</VisuallyHidden>
        )}
        <VisuallyHidden
          id={id}
          Component="input"
          readOnly
          aria-hidden
          tabIndex={-1}
          name={name}
          value={value ? format(value, enableTime ? "dd.MM.yyyy'T'HH:mm" : 'dd.MM.yyyy') : ''}
          onFocus={handleFieldEnter}
        />
        <Text
          className={classNames(styles.input, customValue && styles.hidden)}
          // Инцидент: в PR https://github.com/VKCOM/VKUI/pull/6649 стабильно ломается порядок стилей
          // из-за чего `.Typography--normalize` перебивает стили.
          normalize={false}
          Component="span" // для <span> нормализация не нужна
          onClick={showCalendarOnInputAreaClick}
        >
          <InputLike
            length={2}
            getRootRef={daysRef}
            index={0}
            onKeyDown={handleKeyDown}
            onElementSelect={setFocusedElement}
            value={internalValue[0]}
            label={changeDayLabel}
            data-testid={dayFieldTestId}
            role="spinbutton"
            aria-valuemin={1}
            aria-valuemax={31}
            aria-valuetext={internalValue[0]}
            aria-label={changeDayLabel}
          />
          <InputLikeDivider>.</InputLikeDivider>
          <InputLike
            length={2}
            getRootRef={monthsRef}
            index={1}
            onElementSelect={setFocusedElement}
            onKeyDown={handleKeyDown}
            value={internalValue[1]}
            label={changeMonthLabel}
            data-testid={monthFieldTestId}
            role="spinbutton"
            aria-valuemin={1}
            aria-valuemax={12}
            aria-valuetext={internalValue[1]}
            aria-label={changeMonthLabel}
          />
          <InputLikeDivider>.</InputLikeDivider>
          <InputLike
            length={4}
            getRootRef={yearsRef}
            index={2}
            onElementSelect={setFocusedElement}
            value={internalValue[2]}
            label={changeYearLabel}
            onKeyDown={handleKeyDown}
            data-testid={yearFieldTestId}
            role="spinbutton"
            aria-valuemin={1}
            aria-valuemax={275750}
            aria-valuetext={internalValue[2]}
            aria-label={changeYearLabel}
          />
          {enableTime && (
            <React.Fragment>
              <InputLikeDivider className={styles.inputTimeDivider}> </InputLikeDivider>
              <InputLike
                length={2}
                getRootRef={hoursRef}
                index={3}
                onElementSelect={setFocusedElement}
                value={internalValue[3]}
                label={changeHoursLabel}
                onKeyDown={handleKeyDown}
                data-testid={hourFieldTestId}
                role="spinbutton"
                aria-valuemin={1}
                aria-valuemax={24}
                aria-valuetext={internalValue[3]}
                aria-label={changeHoursLabel}
              />
              <InputLikeDivider>:</InputLikeDivider>
              <InputLike
                length={2}
                getRootRef={minutesRef}
                index={4}
                onElementSelect={setFocusedElement}
                value={internalValue[4]}
                label={changeMinutesLabel}
                onKeyDown={handleKeyDown}
                data-testid={minuteFieldTestId}
                role="spinbutton"
                aria-valuemin={1}
                aria-valuemax={59}
                aria-valuetext={internalValue[4]}
                aria-label={changeMinutesLabel}
              />
            </React.Fragment>
          )}
        </Text>
        {customValue && (
          <Text className={styles.customValue} aria-hidden>
            {customValue}
          </Text>
        )}
      </div>
      {open && !disableCalendar && (
        <Popper
          targetRef={rootRef}
          offsetByMainAxis={8}
          placement={calendarPlacement}
          onPlacementChange={setCalendarPlacement}
          autoUpdateOnTargetResize
        >
          <FocusTrap
            onClose={closeCalendar}
            disabled={disableFocusTrap ?? !accessible}
            restoreFocus={restoreFocus ?? (Boolean(accessible) && handleRestoreFocus)}
            captureEscapeKeyboardEvent={false}
          >
            <Calendar
              aria-label={calendarLabel}
              role="dialog"
              value={value}
              onChange={onCalendarChange}
              enableTime={enableTime}
              disablePast={disablePast}
              disableFuture={disableFuture}
              shouldDisableDate={shouldDisableDate}
              onDoneButtonClick={onDoneButtonClick}
              getRootRef={calendarRef}
              doneButtonText={doneButtonText}
              DoneButton={DoneButton}
              disablePickers={disablePickers}
              changeHoursLabel={changeHoursLabel}
              changeMinutesLabel={changeMinutesLabel}
              prevMonthLabel={prevMonthLabel}
              nextMonthLabel={nextMonthLabel}
              changeMonthLabel={changeMonthLabel}
              changeYearLabel={changeYearLabel}
              showNeighboringMonth={showNeighboringMonth}
              renderDayContent={renderDayContent}
              size={size}
              viewDate={viewDate}
              onHeaderChange={onHeaderChange}
              onNextMonth={onNextMonth}
              onPrevMonth={onPrevMonth}
              prevMonthIcon={prevMonthIcon}
              nextMonthIcon={nextMonthIcon}
              minDateTime={minDateTime}
              maxDateTime={maxDateTime}
              {...calendarTestsProps}
            />
          </FocusTrap>
        </Popper>
      )}
    </FormField>
  );
};
