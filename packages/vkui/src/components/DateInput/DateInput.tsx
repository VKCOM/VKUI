import * as React from 'react';
import { Icon16Clear, Icon20CalendarOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useDateInput } from '../../hooks/useDateInput';
import { useExternRef } from '../../hooks/useExternRef';
import { callMultiple } from '../../lib/callMultiple';
import { format, isMatch, parse } from '../../lib/date';
import type { PlacementWithAuto } from '../../lib/floating';
import { HasRootRef } from '../../types';
import { Calendar, CalendarProps } from '../Calendar/Calendar';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { IconButton } from '../IconButton/IconButton';
import { InputLike } from '../InputLike/InputLike';
import { InputLikeDivider } from '../InputLike/InputLikeDivider';
import { Popper } from '../Popper/Popper';
import { Text } from '../Typography/Text/Text';
import '../InputLike/InputLike.module.css'; // Reorder css
import styles from './DateInput.module.css';

const sizeYClassNames = {
  none: styles['DateInput--sizeY-none'],
  ['compact']: styles['DateInput--sizeY-compact'],
};

export interface DateInputProps
  extends Omit<React.InputHTMLAttributes<HTMLDivElement>, 'value' | 'onChange' | 'size'>,
    Pick<
      CalendarProps,
      | 'disablePast'
      | 'disableFuture'
      | 'enableTime'
      | 'shouldDisableDate'
      | 'onChange'
      | 'value'
      | 'doneButtonText'
      | 'weekStartsOn'
      | 'disablePickers'
      | 'changeHoursLabel'
      | 'changeMinutesLabel'
      | 'prevMonthLabel'
      | 'nextMonthLabel'
      | 'changeMonthLabel'
      | 'changeYearLabel'
      | 'changeDayLabel'
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
    >,
    HasRootRef<HTMLDivElement>,
    FormFieldProps {
  calendarPlacement?: PlacementWithAuto;
  closeOnChange?: boolean;
  clearFieldLabel?: string;
  showCalendarLabel?: string;
  disableCalendar?: boolean;
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
  value,
  onChange,
  calendarPlacement = 'bottom-start',
  style,
  className,
  doneButtonText,
  closeOnChange = true,
  disablePickers,
  getRootRef,
  name,
  autoFocus,
  disabled,
  onClick,
  onFocus,
  prevMonthLabel = 'Предыдущий месяц',
  nextMonthLabel = 'Следующий месяц',
  showNeighboringMonth,
  size,
  changeMonthLabel = 'Изменить месяц',
  changeYearLabel = 'Изменить год',
  changeDayLabel = 'Изменить день',
  changeHoursLabel = 'Изменить час',
  changeMinutesLabel = 'Изменить минуту',
  clearFieldLabel = 'Очистить поле',
  showCalendarLabel = 'Показать календарь',
  viewDate,
  onHeaderChange,
  onNextMonth,
  onPrevMonth,
  prevMonthIcon,
  nextMonthIcon,
  disableCalendar = false,
  ...props
}: DateInputProps) => {
  const daysRef = React.useRef<HTMLSpanElement>(null);
  const monthsRef = React.useRef<HTMLSpanElement>(null);
  const yearsRef = React.useRef<HTMLSpanElement>(null);
  const hoursRef = React.useRef<HTMLSpanElement>(null);
  const minutesRef = React.useRef<HTMLSpanElement>(null);

  const maxElement = enableTime ? 4 : 2;

  const onInternalValueChange = React.useCallback(
    (internalValue: string[]) => {
      for (let i = 0; i <= maxElement; i += 1) {
        if (internalValue[i].length < elementsConfig(i).length) {
          return;
        }
      }

      let formattedValue = `${internalValue[0]}.${internalValue[1]}.${internalValue[2]}`;
      let mask = 'DD.MM.YYYY';
      if (enableTime) {
        formattedValue += ` ${internalValue[3]}:${internalValue[4]}`;
        mask += ' HH:mm';
      }

      if (isMatch(formattedValue, mask)) {
        onChange?.(parse(formattedValue, mask, value ?? new Date()));
      }
    },
    [enableTime, maxElement, onChange, value],
  );

  const refs = React.useMemo(
    () => [daysRef, monthsRef, yearsRef, hoursRef, minutesRef],
    [daysRef, monthsRef, yearsRef, hoursRef, minutesRef],
  );

  const {
    rootRef,
    calendarRef,
    open,
    openCalendar,
    internalValue,
    handleKeyDown,
    setFocusedElement,
    handleFieldEnter,
    clear,
    removeFocusFromField,
  } = useDateInput({
    maxElement,
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
    (value?: Date | undefined) => {
      onChange?.(value);
      if (closeOnChange && !enableTime) {
        removeFocusFromField();
      }
    },
    [onChange, removeFocusFromField, closeOnChange, enableTime],
  );

  return (
    <FormField
      style={style}
      className={classNames(sizeY !== 'regular' && sizeYClassNames[sizeY], className)}
      getRootRef={handleRootRef}
      after={
        value ? (
          <IconButton hoverMode="opacity" label={clearFieldLabel} onClick={clear}>
            <Icon16Clear />
          </IconButton>
        ) : (
          <IconButton hoverMode="opacity" label={showCalendarLabel} onClick={openCalendar}>
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
        value={value ? format(value, enableTime ? 'DD.MM.YYYYTHH:mm' : 'DD.MM.YYYY') : ''}
      />
      <Text className={styles['DateInput__input']} onKeyDown={handleKeyDown}>
        <InputLike
          length={2}
          getRootRef={daysRef}
          index={0}
          onElementSelect={setFocusedElement}
          value={internalValue[0]}
          label={changeDayLabel}
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={2}
          getRootRef={monthsRef}
          index={1}
          onElementSelect={setFocusedElement}
          value={internalValue[1]}
          label={changeMonthLabel}
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={4}
          getRootRef={yearsRef}
          index={2}
          onElementSelect={setFocusedElement}
          value={internalValue[2]}
          label={changeYearLabel}
        />
        {enableTime && (
          <React.Fragment>
            <InputLikeDivider className={styles['DateInput__input--time-divider']}>
              {' '}
            </InputLikeDivider>
            <InputLike
              length={2}
              getRootRef={hoursRef}
              index={3}
              onElementSelect={setFocusedElement}
              value={internalValue[3]}
              label={changeHoursLabel}
            />
            <InputLikeDivider>:</InputLikeDivider>
            <InputLike
              length={2}
              getRootRef={minutesRef}
              index={4}
              onElementSelect={setFocusedElement}
              value={internalValue[4]}
              label={changeMinutesLabel}
            />
          </React.Fragment>
        )}
      </Text>
      {open && !disableCalendar && (
        <Popper
          targetRef={rootRef}
          offsetByMainAxis={8}
          placement={calendarPlacement}
          autoUpdateOnTargetResize
        >
          <Calendar
            value={value}
            onChange={onCalendarChange}
            enableTime={enableTime}
            disablePast={disablePast}
            disableFuture={disableFuture}
            shouldDisableDate={shouldDisableDate}
            onClose={removeFocusFromField}
            getRootRef={calendarRef}
            doneButtonText={doneButtonText}
            disablePickers={disablePickers}
            changeHoursLabel={changeHoursLabel}
            changeMinutesLabel={changeMinutesLabel}
            prevMonthLabel={prevMonthLabel}
            nextMonthLabel={nextMonthLabel}
            changeMonthLabel={changeMonthLabel}
            changeYearLabel={changeYearLabel}
            changeDayLabel={changeDayLabel}
            showNeighboringMonth={showNeighboringMonth}
            size={size}
            viewDate={viewDate}
            onHeaderChange={onHeaderChange}
            onNextMonth={onNextMonth}
            onPrevMonth={onPrevMonth}
            prevMonthIcon={prevMonthIcon}
            nextMonthIcon={nextMonthIcon}
            minDateTime={minDateTime}
            maxDateTime={maxDateTime}
          />
        </Popper>
      )}
    </FormField>
  );
};
