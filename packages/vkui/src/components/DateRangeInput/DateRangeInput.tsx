'use client';

import * as React from 'react';
import { Icon16Clear, Icon20CalendarOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { isAfter } from 'date-fns';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useDateInput } from '../../hooks/useDateInput';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { useExternRef } from '../../hooks/useExternRef';
import { type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import { format, isMatch, parse } from '../../lib/date';
import type { PlacementWithAuto } from '../../lib/floating';
import type { HasRootRef } from '../../types';
import {
  CalendarRange,
  type CalendarRangeProps,
  type CalendarRangeTestsProps,
  type DateRangeType,
} from '../CalendarRange/CalendarRange';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { FormField, type FormFieldProps } from '../FormField/FormField';
import { IconButton } from '../IconButton/IconButton';
import { InputLikeDivider } from '../InputLike/InputLikeDivider';
import { NumberInputLike } from '../NumberInputLike/NumberInputLike';
import { Popper } from '../Popper/Popper';
import { Text } from '../Typography/Text/Text';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './DateRangeInput.module.css';
import dateInputStyles from '../DateInput/DateInput.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

type DateTestsProps = {
  /**
   * Передает атрибут `data-testid` для поля ввода дня.
   */
  day?: string;
  /**
   * Передает атрибут `data-testid` для поля ввода месяца.
   */
  month?: string;
  /**
   * Передает атрибут `data-testid` для поля ввода года.
   */
  year?: string;
};

export type DateRangeInputTestsProps = {
  /**
   * Передает атрибуты `data-testid` для полей ввода начальной даты.
   */
  startDateTestsProps?: DateTestsProps;
  /**
   * Передает атрибуты `data-testid` для полей ввода конечной даты.
   */
  endDateTestsProps?: DateTestsProps;
  /**
   * Передает атрибут `data-testid` для кнопки показа календаря.
   */
  showCalendarButtonTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки очистки даты.
   */
  clearButtonTestId?: string;
};

export interface DateRangeInputProps
  extends Omit<React.InputHTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'>,
    Pick<
      CalendarRangeProps,
      | 'disablePast'
      | 'disableFuture'
      | 'shouldDisableDate'
      | 'onChange'
      | 'value'
      | 'defaultValue'
      | 'weekStartsOn'
      | 'disablePickers'
      | 'prevMonthLabel'
      | 'nextMonthLabel'
      | 'changeMonthLabel'
      | 'changeYearLabel'
      | 'changeDayLabel'
      | 'prevMonthIcon'
      | 'nextMonthIcon'
      | 'renderDayContent'
    >,
    Pick<UseFocusTrapProps, 'restoreFocus'>,
    HasRootRef<HTMLDivElement>,
    Omit<FormFieldProps, 'maxHeight'>,
    DateRangeInputTestsProps {
  /**
   * Передает атрибуты `data-testid` для интерактивных элементов в календаре.
   */
  calendarTestsProps?: CalendarRangeTestsProps;
  /**
   * Расположение календаря относительно поля ввода.
   */
  calendarPlacement?: PlacementWithAuto;
  /**
   * Автоматически закрывать календарь при изменениях.
   */
  closeOnChange?: boolean;
  /**
   * Обработчик изменения состояния открытия календаря.
   */
  onCalendarOpenChanged?: (opened: boolean) => void;
  /**
   * Label для календаря.
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
   * Label для ввода дня начальной даты. Делает доступным для ассистивных технологий.
   */
  changeStartDayLabel?: string;
  /**
   * Label для ввода месяца начальной даты. Делает доступным для ассистивных технологий.
   */
  changeStartMonthLabel?: string;
  /**
   * Label для ввода года начальной даты. Делает доступным для ассистивных технологий.
   */
  changeStartYearLabel?: string;
  /**
   * Label для ввода дня конечной даты. Делает доступным для ассистивных технологий.
   */
  changeEndDayLabel?: string;
  /**
   * Label для ввода месяца конечной даты. Делает доступным для ассистивных технологий.
   */
  changeEndMonthLabel?: string;
  /**
   * Label для ввода года конечной даты. Делает доступным для ассистивных технологий.
   */
  changeEndYearLabel?: string;
  /**
   * Отключение открытия календаря.
   */
  disableCalendar?: boolean;
  /**
   * Позволяет отключить захват фокуса при появлении календаря.
   */
  disableFocusTrap?: UseFocusTrapProps['disabled'];
  /**
   * Включает режим в котором DateRangeInput доступен
   * для ассистивных технологий.
   * В этом режиме:
   * - календарь больше не открывает при фокусе на DateRangeInput;
   * - иконка календаря видна всегда, чтобы пользователи
   * ассистивных технологий могли открыть календарь по клику на иконку;
   * - календарь при открытии получает фокус, клавиатурный
   * фокус зациклен и не выходит за пределы календаря пока календарь не закрыт.
   */
  accessible?: boolean; // TODO [>=8]: включить по умолчанию.
}

const elementsConfig = (index: number) => {
  let length = 2;
  let min = 1;
  let max = 0;

  switch (index) {
    case 0:
    case 3:
      max = 31;
      break;
    case 1:
    case 4:
      max = 12;
      break;
    case 2:
    case 5:
      max = 2100;
      min = 1900;
      length = 4;
      break;
  }

  return { length, min, max };
};

const getInternalValue = (value: CalendarRangeProps['value']) => {
  const newValue = ['', '', '', '', '', ''];
  if (value?.[0]) {
    newValue[0] = String(value[0].getDate()).padStart(2, '0');
    newValue[1] = String(value[0].getMonth() + 1).padStart(2, '0');
    newValue[2] = String(value[0].getFullYear()).padStart(4, '0');
  }
  if (value?.[1]) {
    newValue[3] = String(value[1].getDate()).padStart(2, '0');
    newValue[4] = String(value[1].getMonth() + 1).padStart(2, '0');
    newValue[5] = String(value[1].getFullYear()).padStart(4, '0');
  }
  return newValue;
};

const CALENDAR_MUTATION_OBSERVER_OPTIONS: MutationObserverInit = {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['tabindex'],
};

/**
 * @see https://vkui.io/components/date-range-input
 */
export const DateRangeInput = ({
  shouldDisableDate,
  disableFuture,
  disablePast,
  'value': valueProp,
  defaultValue,
  onChange,
  'calendarPlacement': calendarPlacementProp = 'bottom-start',
  style,
  className,
  closeOnChange = true,
  disablePickers,
  getRootRef,
  name,
  autoFocus,
  disabled,
  disableFocusTrap,
  restoreFocus,
  calendarLabel = 'Календарь',
  prevMonthLabel = 'Предыдущий месяц',
  nextMonthLabel = 'Следующий месяц',
  changeMonthLabel = 'Месяц',
  changeYearLabel = 'Год',
  changeStartDayLabel = 'День начала',
  changeStartMonthLabel = 'Месяц начала',
  changeStartYearLabel = 'Год начала',
  changeEndDayLabel = 'День окончания',
  changeEndMonthLabel = 'Месяц окончания',
  changeEndYearLabel = 'Год окончания',
  clearFieldLabel = 'Очистить поле',
  showCalendarLabel = 'Показать календарь',
  'aria-label': ariaLabel = '',
  prevMonthIcon,
  nextMonthIcon,
  onCalendarOpenChanged,
  renderDayContent,
  calendarTestsProps,
  startDateTestsProps,
  endDateTestsProps,
  clearButtonTestId,
  showCalendarButtonTestId,
  id,
  accessible,
  readOnly,
  'disableCalendar': disableCalendarProp = false,
  ...props
}: DateRangeInputProps): React.ReactNode => {
  const daysStartRef = React.useRef<HTMLSpanElement>(null);
  const monthsStartRef = React.useRef<HTMLSpanElement>(null);
  const yearsStartRef = React.useRef<HTMLSpanElement>(null);
  const daysEndRef = React.useRef<HTMLSpanElement>(null);
  const monthsEndRef = React.useRef<HTMLSpanElement>(null);
  const yearsEndRef = React.useRef<HTMLSpanElement>(null);

  const disableCalendar = readOnly ? true : disableCalendarProp;

  const _onChange = React.useCallback(
    (newValue: DateRangeType | null | undefined) => onChange?.(newValue || undefined),
    [onChange],
  );

  const [value, updateValue] = useCustomEnsuredControl<DateRangeType | null | undefined>({
    value: valueProp,
    defaultValue,
    onChange: _onChange,
  });

  const onInternalValueChange = React.useCallback(
    (internalValue: string[]) => {
      let isStartValid = true;
      let isEndValid = true;
      for (let i = 0; i <= 2; i += 1) {
        if (internalValue[i].length < elementsConfig(i).length) {
          isStartValid = false;
        }
      }
      for (let i = 3; i <= 5; i += 1) {
        if (internalValue[i].length < elementsConfig(i).length) {
          isEndValid = false;
        }
      }
      const formattedStartValue = `${internalValue[0]}.${internalValue[1]}.${internalValue[2]}`;
      const formattedEndValue = `${internalValue[3]}.${internalValue[4]}.${internalValue[5]}`;
      const mask = 'dd.MM.yyyy';

      if (!isMatch(formattedStartValue, mask)) {
        isStartValid = false;
      }
      if (!isMatch(formattedEndValue, mask)) {
        isEndValid = false;
      }

      if (!isStartValid && !isEndValid) {
        return;
      }

      const valueExists = Array.isArray(value);
      const now = new Date();
      const start = isStartValid
        ? parse(formattedStartValue, mask, (valueExists && value?.[0]) || now)
        : null;
      const end = isEndValid
        ? parse(formattedEndValue, mask, (valueExists && value?.[1]) || now)
        : null;
      if (start && end && isAfter(end, start)) {
        updateValue([start, end]);
      }
    },
    [updateValue, value],
  );

  const refs = React.useMemo(
    () => [daysStartRef, monthsStartRef, yearsStartRef, daysEndRef, monthsEndRef, yearsEndRef],
    [daysStartRef, monthsStartRef, yearsStartRef, daysEndRef, monthsEndRef, yearsEndRef],
  );

  const onClear = React.useCallback(() => updateValue(undefined), [updateValue]);

  const {
    rootRef,
    calendarRef,
    open,
    openCalendar,
    closeCalendar,
    toggleCalendar,
    internalValue,
    handleKeyDown,
    setFocusedElement,
    handleFieldEnter,
    clear,
    removeFocusFromField,
  } = useDateInput({
    maxElement: 5,
    refs,
    autoFocus,
    disabled: disabled || readOnly,
    elementsConfig,
    onClear,
    onInternalValueChange,
    getInternalValue,
    value,
    onCalendarOpenChanged,
    accessible,
  });

  const { sizeY = 'none' } = useAdaptivity();

  const handleRootRef = useExternRef(rootRef, getRootRef);

  const onCalendarChange = React.useCallback(
    (newValue: DateRangeType | undefined) => {
      updateValue(newValue);
      if (closeOnChange && newValue?.[1] && newValue[1] !== value?.[1]) {
        removeFocusFromField();
      }
    },
    [updateValue, closeOnChange, value, removeFocusFromField],
  );

  // при переключении месяцев высота календаря может меняться,
  // чтобы календарь не прыгал при переключении месяцев каждый раз на
  // лучшую позицию мы запоминаем последнюю удачную, чтобы календарь оставался
  // на ней, пока помещается.
  const [calendarPlacement, setCalendarPlacement] =
    React.useState<PlacementWithAuto>(calendarPlacementProp);

  const { locale } = useConfigProvider();
  const currentDateLabel = React.useMemo(() => {
    if (!value) {
      return null;
    }
    const [startDate, endDate] = value;
    if (!startDate || !endDate) {
      return null;
    }
    return [
      new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(startDate),
      new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(endDate),
    ].join(' - ');
  }, [locale, value]);

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
        <>
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
          {value && !readOnly ? (
            <IconButton
              hoverMode="opacity"
              label={clearFieldLabel}
              onClick={clear}
              data-testid={clearButtonTestId}
            >
              <Icon16Clear />
            </IconButton>
          ) : null}
        </>
      }
      disabled={disabled}
      {...props}
    >
      <div className={dateInputStyles.wrapper}>
        {ariaLabel && <VisuallyHidden id={ariaLabelId}>{ariaLabel}</VisuallyHidden>}
        {currentDateLabel && (
          <VisuallyHidden id={currentDateLabelId}>{currentDateLabel}</VisuallyHidden>
        )}
        <VisuallyHidden
          id={id}
          Component="input"
          readOnly
          aria-hidden
          name={name}
          tabIndex={readOnly ? 0 : -1}
          value={
            value
              ? `${value[0] ? format(value[0], 'dd.MM.yyyy') : ''} - ${
                  value[1] ? format(value[1], 'dd.MM.yyyy') : ''
                }`
              : ''
          }
          onFocus={handleFieldEnter}
        />
        <Text className={dateInputStyles.input} onClick={showCalendarOnInputAreaClick}>
          <NumberInputLike
            value={internalValue[0]}
            minValue={1}
            maxValue={31}
            onKeyDown={readOnly ? undefined : handleKeyDown}
            length={2}
            getRootRef={daysStartRef}
            index={0}
            readOnly={readOnly}
            onElementSelect={setFocusedElement}
            label={changeStartDayLabel}
            data-testid={startDateTestsProps?.day}
          />
          <InputLikeDivider>.</InputLikeDivider>
          <NumberInputLike
            value={internalValue[1]}
            minValue={1}
            maxValue={12}
            onKeyDown={handleKeyDown}
            length={2}
            getRootRef={monthsStartRef}
            index={1}
            onElementSelect={setFocusedElement}
            readOnly={readOnly}
            label={changeStartMonthLabel}
            data-testid={startDateTestsProps?.month}
          />
          <InputLikeDivider>.</InputLikeDivider>
          <NumberInputLike
            value={internalValue[2]}
            minValue={1}
            maxValue={275750}
            onKeyDown={handleKeyDown}
            length={4}
            getRootRef={yearsStartRef}
            index={2}
            onElementSelect={setFocusedElement}
            readOnly={readOnly}
            label={changeStartYearLabel}
            data-testid={startDateTestsProps?.year}
          />
          <InputLikeDivider>{' — '}</InputLikeDivider>
          <NumberInputLike
            value={internalValue[3]}
            minValue={1}
            maxValue={31}
            onKeyDown={handleKeyDown}
            length={2}
            getRootRef={daysEndRef}
            index={3}
            onElementSelect={setFocusedElement}
            readOnly={readOnly}
            label={changeEndDayLabel}
            data-testid={endDateTestsProps?.day}
          />
          <InputLikeDivider>.</InputLikeDivider>
          <NumberInputLike
            value={internalValue[4]}
            minValue={1}
            maxValue={12}
            onKeyDown={handleKeyDown}
            length={2}
            getRootRef={monthsEndRef}
            index={4}
            onElementSelect={setFocusedElement}
            readOnly={readOnly}
            label={changeEndMonthLabel}
            data-testid={endDateTestsProps?.month}
          />
          <InputLikeDivider>.</InputLikeDivider>
          <NumberInputLike
            value={internalValue[5]}
            minValue={1}
            maxValue={275750}
            onKeyDown={handleKeyDown}
            length={4}
            getRootRef={yearsEndRef}
            index={5}
            onElementSelect={setFocusedElement}
            readOnly={readOnly}
            label={changeEndYearLabel}
            data-testid={endDateTestsProps?.year}
          />
        </Text>
      </div>
      {open && !disableCalendar && (
        <Popper
          targetRef={rootRef}
          offsetByMainAxis={8}
          placement={calendarPlacement}
          onPlacementChange={setCalendarPlacement}
        >
          <FocusTrap
            onClose={closeCalendar}
            disabled={disableFocusTrap ?? !accessible}
            restoreFocus={restoreFocus ?? Boolean(accessible)}
            captureEscapeKeyboardEvent={false}
            mutationObserverOptions={CALENDAR_MUTATION_OBSERVER_OPTIONS}
          >
            <CalendarRange
              value={value}
              role="dialog"
              onChange={onCalendarChange}
              aria-label={calendarLabel}
              disablePast={disablePast}
              disableFuture={disableFuture}
              shouldDisableDate={shouldDisableDate}
              getRootRef={calendarRef}
              disablePickers={disablePickers}
              prevMonthLabel={prevMonthLabel}
              nextMonthLabel={nextMonthLabel}
              changeMonthLabel={changeMonthLabel}
              changeYearLabel={changeYearLabel}
              prevMonthIcon={prevMonthIcon}
              nextMonthIcon={nextMonthIcon}
              renderDayContent={renderDayContent}
              {...calendarTestsProps}
            />
          </FocusTrap>
        </Popper>
      )}
    </FormField>
  );
};
