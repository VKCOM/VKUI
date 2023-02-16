import * as React from 'react';
import { Icon16Clear, Icon20CalendarOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useDateInput } from '../../hooks/useDateInput';
import { useExternRef } from '../../hooks/useExternRef';
import { SizeType } from '../../lib/adaptivity';
import { callMultiple } from '../../lib/callMultiple';
import { format, isAfter, isMatch, parse } from '../../lib/date';
import type { PlacementWithAuto } from '../../lib/floating';
import { HasRootRef } from '../../types';
import { CalendarRange, CalendarRangeProps } from '../CalendarRange/CalendarRange';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { IconButton } from '../IconButton/IconButton';
import { InputLike } from '../InputLike/InputLike';
import { InputLikeDivider } from '../InputLike/InputLikeDivider';
import { Popper } from '../Popper/Popper';
import styles from './DateRangeInput.module.css';
import dateInputStyles from '../DateInput/DateInput.module.css';

const sizeYClassNames = {
  none: styles['DateRangeInput--sizeY-none'],
  [SizeType.COMPACT]: styles['DateRangeInput--sizeY-compact'],
};

export interface DateRangeInputProps
  extends Omit<React.InputHTMLAttributes<HTMLDivElement>, 'value' | 'onChange'>,
    Pick<
      CalendarRangeProps,
      | 'disablePast'
      | 'disableFuture'
      | 'shouldDisableDate'
      | 'onChange'
      | 'value'
      | 'weekStartsOn'
      | 'disablePickers'
      | 'prevMonthAriaLabel'
      | 'nextMonthAriaLabel'
      | 'changeMonthAriaLabel'
      | 'changeYearAriaLabel'
      | 'changeDayAriaLabel'
      | 'prevMonthIcon'
      | 'nextMonthIcon'
    >,
    HasRootRef<HTMLDivElement>,
    FormFieldProps {
  calendarPlacement?: PlacementWithAuto;
  closeOnChange?: boolean;
  clearFieldAriaLabel?: string;
  showCalendarAriaLabel?: string;
  changeStartDayAriaLabel?: string;
  changeStartMonthAriaLabel?: string;
  changeStartYearAriaLabel?: string;
  changeEndDayAriaLabel?: string;
  changeEndMonthAriaLabel?: string;
  changeEndYearAriaLabel?: string;
  disableCalendar?: boolean;
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

/**
 * @see https://vkcom.github.io/VKUI/#/DateRangeInput
 */
export const DateRangeInput = ({
  shouldDisableDate,
  disableFuture,
  disablePast,
  value,
  onChange,
  calendarPlacement = 'bottom-start',
  style,
  className,
  closeOnChange = true,
  disablePickers,
  getRootRef,
  name,
  autoFocus,
  disabled,
  onClick,
  onFocus,
  prevMonthAriaLabel,
  nextMonthAriaLabel,
  changeDayAriaLabel,
  changeMonthAriaLabel,
  changeYearAriaLabel,
  changeStartDayAriaLabel = 'Изменить день начала',
  changeStartMonthAriaLabel = 'Изменить месяц начала',
  changeStartYearAriaLabel = 'Изменить год начала',
  changeEndDayAriaLabel = 'Изменить день окончания',
  changeEndMonthAriaLabel = 'Изменить месяц окончания',
  changeEndYearAriaLabel = 'Изменить год окончания',
  clearFieldAriaLabel = 'Очистить поле',
  showCalendarAriaLabel = 'Показать календарь',
  prevMonthIcon,
  nextMonthIcon,
  disableCalendar = false,
  ...props
}: DateRangeInputProps) => {
  const daysStartRef = React.useRef<HTMLSpanElement>(null);
  const monthsStartRef = React.useRef<HTMLSpanElement>(null);
  const yearsStartRef = React.useRef<HTMLSpanElement>(null);
  const daysEndRef = React.useRef<HTMLSpanElement>(null);
  const monthsEndRef = React.useRef<HTMLSpanElement>(null);
  const yearsEndRef = React.useRef<HTMLSpanElement>(null);

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
        onChange?.([start, end]);
      }
    },
    [onChange, value],
  );

  const refs = React.useMemo(
    () => [daysStartRef, monthsStartRef, yearsStartRef, daysEndRef, monthsEndRef, yearsEndRef],
    [daysStartRef, monthsStartRef, yearsStartRef, daysEndRef, monthsEndRef, yearsEndRef],
  );

  const {
    rootRef,
    calendarRef,
    open,
    openCalendar,
    closeCalendar,
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
    disabled,
    elementsConfig,
    onChange,
    onInternalValueChange,
    getInternalValue,
    value,
  });

  const { sizeY = 'none' } = useAdaptivity();

  const handleRootRef = useExternRef(rootRef, getRootRef);

  const onCalendarChange = React.useCallback(
    (newValue?: Array<Date | null> | undefined) => {
      onChange?.(newValue);
      if (closeOnChange && newValue?.[1] && newValue[1] !== value?.[1]) {
        removeFocusFromField();
      }
    },
    [onChange, closeOnChange, value, removeFocusFromField],
  );

  return (
    <FormField
      style={style}
      className={classNames(
        styles['DateRangeInput'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        className,
      )}
      getRootRef={handleRootRef}
      after={
        value ? (
          <IconButton hoverMode="opacity" aria-label={clearFieldAriaLabel} onClick={clear}>
            <Icon16Clear />
          </IconButton>
        ) : (
          <IconButton hoverMode="opacity" aria-label={showCalendarAriaLabel} onClick={openCalendar}>
            <Icon20CalendarOutline />
          </IconButton>
        )
      }
      disabled={disabled}
      onClick={callMultiple(handleFieldEnter, onClick)}
      onFocus={callMultiple(handleFieldEnter, onFocus)}
      {...props}
    >
      <input
        type="hidden"
        name={name}
        value={
          value
            ? `${value[0] ? format(value[0], 'DD.MM.YYYY') : ''} - ${
                value[1] ? format(value[1], 'DD.MM.YYYY') : ''
              }`
            : ''
        }
      />
      <span className={dateInputStyles['DateInput__input']} onKeyDown={handleKeyDown}>
        <InputLike
          length={2}
          getRootRef={daysStartRef}
          index={0}
          onElementSelect={setFocusedElement}
          value={internalValue[0]}
          aria-label={changeStartDayAriaLabel}
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={2}
          getRootRef={monthsStartRef}
          index={1}
          onElementSelect={setFocusedElement}
          value={internalValue[1]}
          aria-label={changeStartMonthAriaLabel}
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={4}
          getRootRef={yearsStartRef}
          index={2}
          onElementSelect={setFocusedElement}
          value={internalValue[2]}
          aria-label={changeStartYearAriaLabel}
        />
        <InputLikeDivider>{' — '}</InputLikeDivider>
        <InputLike
          length={2}
          getRootRef={daysEndRef}
          index={3}
          onElementSelect={setFocusedElement}
          value={internalValue[3]}
          aria-label={changeEndDayAriaLabel}
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={2}
          getRootRef={monthsEndRef}
          index={4}
          onElementSelect={setFocusedElement}
          value={internalValue[4]}
          aria-label={changeEndMonthAriaLabel}
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={4}
          getRootRef={yearsEndRef}
          index={5}
          onElementSelect={setFocusedElement}
          value={internalValue[5]}
          aria-label={changeEndYearAriaLabel}
        />
      </span>
      {open && !disableCalendar && (
        <Popper targetRef={rootRef} offsetDistance={8} placement={calendarPlacement}>
          <CalendarRange
            value={value}
            onChange={onCalendarChange}
            disablePast={disablePast}
            disableFuture={disableFuture}
            shouldDisableDate={shouldDisableDate}
            onClose={closeCalendar}
            getRootRef={calendarRef}
            disablePickers={disablePickers}
            prevMonthAriaLabel={prevMonthAriaLabel}
            nextMonthAriaLabel={nextMonthAriaLabel}
            changeMonthAriaLabel={changeMonthAriaLabel}
            changeYearAriaLabel={changeYearAriaLabel}
            changeDayAriaLabel={changeDayAriaLabel}
            prevMonthIcon={prevMonthIcon}
            nextMonthIcon={nextMonthIcon}
          />
        </Popper>
      )}
    </FormField>
  );
};
