'use client';

import * as React from 'react';
import { type Placement } from '@floating-ui/utils';
import { classNames } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { useBooleanArrayState } from '../../hooks/useBooleanState';
import { useEnsuredControl } from '../../hooks/useEnsuredControl';
import { useExternRef } from '../../hooks/useExternRef';
import { Keys, pressedKey } from '../../lib/accessibility';
import { callMultiple } from '../../lib/callMultiple';
import { setHours, setMinutes } from '../../lib/date';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Button, type ButtonProps } from '../Button/Button';
import { CustomScrollView } from '../CustomScrollView/CustomScrollView';
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { Input, type InputProps } from '../Input/Input';
import { Popper } from '../Popper/Popper';
import styles from './CalendarTime.module.css';

interface ComboBoxProps extends InputProps {
  // eslint-disable-next-line jsdoc/require-jsdoc
  labels?: Array<{
    value: string;
    label: string;
  }>;
}

function ComboBox({
  getRootRef,
  onBlur,
  onFocus,
  after,
  labels,
  value,
  defaultValue,
  onChange,
  slotProps,
  ...restProps
}: ComboBoxProps) {
  const ref = useExternRef(getRootRef);
  const inputRef = useExternRef(slotProps?.input?.getRootRef);

  const [inputValue, setInputChange] = useEnsuredControl({
    disabled: restProps.disabled,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
  });

  const [focus, setFocus, setBlur] = useBooleanArrayState(false);

  const [popperPlacement, setPopperPlacement] = React.useState<Placement>('bottom');

  return (
    <>
      <Input
        value={inputValue}
        onChange={setInputChange}
        getRootRef={ref}
        className={
          focus ? (popperPlacement.includes('top') ? styles.inputPopUp : styles.inputPopDown) : ''
        }
        type="text"
        onFocus={callMultiple(setFocus, onFocus)}
        onBlur={callMultiple(setBlur, onBlur)}
        after={
          after ||
          (labels && <DropdownIcon opened={focus} onClick={() => inputRef.current?.focus()} />)
        }
        slotProps={{
          ...slotProps,
          input: {
            ...slotProps?.input,
            getRootRef: inputRef,
          },
        }}
        {...restProps}
      />

      {focus && labels && (
        <Popper
          targetRef={ref}
          placement={popperPlacement}
          onPlacementChange={setPopperPlacement}
          className={classNames(
            styles.popper,
            popperPlacement.includes('top') ? styles.popperTop : styles.popperBottom,
          )}
          sameWidth
          autoUpdateOnTargetResize
          flipMiddlewareFallbackAxisSideDirection="none"
          offsetByMainAxis={0}
        >
          <CustomScrollView tabIndex={-1} className={styles.customScroll}>
            {labels.map((option) => {
              return (
                <CustomSelectOption
                  key={option.value}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    // eslint-disable-next-line react-compiler/react-compiler
                    inputRef.current!.value = option.value;
                    inputRef.current!.dispatchEvent(new Event('input'));
                    inputRef.current!.dispatchEvent(new Event('change'));
                  }}
                  selected={value === option.value}
                >
                  {option.label}
                </CustomSelectOption>
              );
            })}
          </CustomScrollView>
        </Popper>
      )}
    </>
  );
}

export type CalendarTimeTestsProps = {
  /**
   * Передает атрибут `data-testid` для дропдауна выбора часа в календаре.
   */
  hoursTestId?: string;
  /**
   * Передает атрибут `data-testid` для дропдауна выбора минут в календаре.
   */
  minutesTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки "Готово" в календаре.
   */
  doneButtonTestId?: string;
};

export type CalendarDoneButtonProps = {
  /**
   * Кастомное отображение кнопки `"Done"`.
   */
  DoneButton?: React.ComponentType<ButtonProps>;
  /**
   * Текст отображаемый в кнопке `"Done"`.
   */
  doneButtonText?: string;
  /**
   * Управление отображением кнопки `"Done"`.
   */
  doneButtonShow?: boolean;
  /**
   * Блокировка взаимодействия с кнопкой "Done".
   */
  doneButtonDisabled?: boolean;
  /**
   * Обработки нажатия на кнопку `"Done"`.
   */
  onDoneButtonClick?: () => void;
};

export interface CalendarTimeProps extends CalendarTimeTestsProps, CalendarDoneButtonProps {
  /**
   * Отображаемая дата.
   */
  value: Date;
  /**
   * Текст выпадающего списка с выбором часов. Делает его доступным для ассистивных технологий.
   */
  changeHoursLabel?: string;
  /**
   * Текст выпадающего списка с выбором минут. Делает его доступным для ассистивных технологий.
   */
  changeMinutesLabel?: string;
  /**
   * Обработчик изменения времени.
   */
  onChange?: (value: Date) => void;
  /**
   * Функция для проверки блокировки выбора даты и времени.
   */
  isDayDisabled?: (day: Date, withTime?: boolean) => boolean;
}

function generateLabels(
  min: number,
  max: number,
): Array<{
  value: string;
  label: string;
}> {
  const array = new Array(Math.ceil(max - min));

  for (let i = min; i <= max; i += 1) {
    const value = String(i).padStart(2, '0');

    array[i - min] = { value, label: value };
  }

  return array;
}

const hours = generateLabels(0, 23);

const minutes = generateLabels(0, 59);

export const CalendarTime = ({
  value,
  // onChange,
  onDoneButtonClick,
  changeHoursLabel,
  changeMinutesLabel,
  isDayDisabled,
  doneButtonText = 'Готово',
  doneButtonDisabled = false,
  doneButtonShow = true,
  minutesTestId,
  hoursTestId,
  doneButtonTestId,
  DoneButton,
}: CalendarTimeProps): React.ReactNode => {
  const hoursInputRef = React.useRef<HTMLInputElement | null>(null);
  const minutesInputRef = React.useRef<HTMLInputElement | null>(null);
  const doneButtonRef = React.useRef<HTMLButtonElement | null>(null);

  const localHours = isDayDisabled
    ? hours.map((hour) => {
        return { ...hour, disabled: isDayDisabled(setHours(value, Number(hour.value)), true) };
      })
    : hours;

  const localMinutes = isDayDisabled
    ? minutes.map((minute) => {
        return {
          ...minute,
          disabled: isDayDisabled(setMinutes(value, Number(minute.value)), true),
        };
      })
    : minutes;

  const onPickerKeyDown = (e: React.KeyboardEvent) => {
    const key = pressedKey(e);
    /* Мы хотим иметь возможность быстро, по Enter перемещаться между
     * селектами с часами и минутами, также как мы это делаем по нажатию на Tab */
    if (key !== Keys.ENTER) {
      return;
    }

    const steps = [hoursInputRef, minutesInputRef, doneButtonRef].filter((ref) =>
      Boolean(ref.current),
    );
    const currentStepIndex = steps.findIndex((step) => step.current === e.target);
    const nextStepIndex = currentStepIndex + 1;
    if (nextStepIndex >= steps.length) {
      return;
    }
    const nextStep = steps[nextStepIndex];

    if (nextStep.current) {
      e.preventDefault();
      nextStep.current?.focus();
    }
  };

  const renderDoneButton = () => {
    const ButtonComponent = DoneButton ?? Button;
    return (
      <ButtonComponent
        mode="secondary"
        onClick={onDoneButtonClick}
        size="l"
        getRootRef={doneButtonRef}
        onKeyDown={onPickerKeyDown}
        disabled={doneButtonDisabled}
        data-testid={doneButtonTestId}
      >
        {doneButtonText}
      </ButtonComponent>
    );
  };

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.padStart(2, '0');
  };

  const onNumberInput = (event: React.ChangeEvent<HTMLInputElement>, maxValue: number) => {
    const inputValue = /\d\d?/.exec(event.target.value)?.[0] || '';
    if (event.target.value !== inputValue) {
      event.target.value = inputValue;
    }

    const inputValueNumber = Number(inputValue);
    if (isNaN(inputValueNumber)) {
      return;
    }

    const resultValueNumber = clamp(inputValueNumber, 0, maxValue);

    if (inputValueNumber !== resultValueNumber) {
      event.target.value = resultValueNumber.toString();
    }
  };

  const onHoursInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNumberInput(event, 23);

    if (event.target.value.length > 1) {
      minutesInputRef.current?.focus();
    }
  };

  const onMinutesInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNumberInput(event, 59);
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, maxValue: number) => {
    switch (event.key) {
      case Keys.ARROW_UP:
        // @ts-expect-error: TS2339 почему-то у таргета нет value
        event.target.value = Math.min(Number(event.target.value) + 1, maxValue)
          .toString()
          .padStart(2, '0');

        break;
      case Keys.ARROW_DOWN:
        // @ts-expect-error: TS2339 почему-то у таргета нет value
        event.target.value = Math.max(Number(event.target.value) - 1, 0)
          .toString()
          .padStart(2, '0');

        break;
    }
  };

  const onHoursKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onInputKeyDown(event, 23);
  };

  const onMinutesKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onInputKeyDown(event, 59);
  };

  return (
    <div className={classNames(styles.host, !doneButtonShow && styles.host__withoutDone)}>
      <AdaptivityProvider sizeY="compact">
        <div className={styles.picker}>
          <ComboBox
            slotProps={{
              input: {
                getRootRef: hoursInputRef,
              },
            }}
            labels={localHours}
            onInput={onHoursInput}
            onFocus={onFocus}
            onBlur={onBlur}
            aria-label={changeHoursLabel}
            onKeyDown={onHoursKeyDown}
            data-testid={hoursTestId}
          />
        </div>
        <div className={styles.divider}>:</div>
        <div className={styles.picker}>
          <ComboBox
            slotProps={{
              input: {
                getRootRef: minutesInputRef,
              },
            }}
            labels={localMinutes}
            onInput={onMinutesInput}
            onFocus={onFocus}
            onBlur={onBlur}
            aria-label={changeMinutesLabel}
            onKeyDown={onMinutesKeyDown}
            data-testid={minutesTestId}
          />
        </div>
      </AdaptivityProvider>
      {doneButtonShow && (
        <div className={styles.button}>
          <AdaptivityProvider sizeY="compact">{renderDoneButton()}</AdaptivityProvider>
        </div>
      )}
    </div>
  );
};
