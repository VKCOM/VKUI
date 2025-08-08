import { type ChangeEvent } from 'react';
import * as React from 'react';
import { useStateWithPrev } from '../../../hooks/useStateWithPrev';
import {
  type NativeSelectValue,
  NOT_SELECTED,
  remapFromNativeValueToSelectValue,
  remapFromSelectValueToNativeValue,
  type SelectValue,
} from '../../NativeSelect/NativeSelect';
import { type SelectProps } from '../CustomSelect';

/* eslint-disable jsdoc/require-jsdoc */
type UseSelectedOptionControllerProps = Pick<SelectProps, 'value' | 'defaultValue'> & {
  isControlledOutside: boolean;
  allowClearButton: boolean;
  onChange?: (e: ChangeEvent<HTMLSelectElement>, newValue: SelectValue) => void;
};
/* eslint-enable jsdoc/require-jsdoc */

export function useSelectedOptionController({
  value,
  defaultValue,
  isControlledOutside,
  allowClearButton,
  onChange,
}: UseSelectedOptionControllerProps) {
  const [[nativeSelectValue, prevNativeSelectValue], setNativeSelectValue] =
    useStateWithPrev<NativeSelectValue>(() => {
      if (value !== undefined) {
        return remapFromSelectValueToNativeValue(value);
      }
      if (defaultValue !== undefined) {
        return remapFromSelectValueToNativeValue(defaultValue);
      }
      return NOT_SELECTED.NATIVE;
    });
  const nativeSelectValueRef = React.useRef<NativeSelectValue>(nativeSelectValue);

  const [selectedOptionValue, setSelectedOptionValue] = React.useState<SelectValue>(() =>
    remapFromNativeValueToSelectValue(nativeSelectValue),
  );

  const _setNativeSelectValue = React.useCallback(
    (newValue: NativeSelectValue) => {
      setNativeSelectValue(newValue);
      nativeSelectValueRef.current = newValue;
    },
    [setNativeSelectValue],
  );

  React.useEffect(
    function syncNativeSelectValueWithPropValue() {
      if (value !== undefined) {
        _setNativeSelectValue(remapFromSelectValueToNativeValue(value));
      }
    },
    [value, _setNativeSelectValue],
  );

  React.useEffect(
    function syncNativeSelectValueWithSelectedOptionValue() {
      const remappedSelectedValue = remapFromSelectValueToNativeValue(selectedOptionValue);
      if (nativeSelectValueRef.current !== remappedSelectedValue) {
        setNativeSelectValue(remappedSelectedValue);
      }
    },
    [selectedOptionValue, setNativeSelectValue],
  );

  const onNativeSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    // для ситуаций, когда в опциях value это string а value/defaultValue это number
    // и наоборот, приводим значение nativeSelectValue из стейта к строке.
    // ведь nativeSelect всегда возвращает string в onChange, а пользователь
    // может использовать number для опций
    //
    // native select всегда возвращает string в качестве value в onChange
    // Когда селект контролируемый, то пользователь, в onChange может сохранить в свой стейт строку (например '3'), хотя
    // в качестве value опции может использовать число (3),
    // тогда строчное значение value ('3') из стейта пользователя
    // будет передано в CustomSelect, и после синхронизации nativeSelectValue (3) и props.value ('3') и после клика на уже выбранную опцию (3),
    // когда nativeSelectValue обновится на значение опции (число 3),
    // сравнение nativeSelectValue (3) и prevNativeSelectValue ('3') может не сработать лишь из-за того, что они в разных типах.
    const convertedNativeSelectValue =
      typeof nativeSelectValue === 'number' &&
      (typeof value === 'string' || typeof prevNativeSelectValue === 'string')
        ? String(nativeSelectValue)
        : nativeSelectValue;

    const isCalledWithSameControlledOptionValue =
      isControlledOutside &&
      value === remapFromNativeValueToSelectValue(convertedNativeSelectValue);

    const isNativeValueChanged =
      convertedNativeSelectValue !== prevNativeSelectValue && prevNativeSelectValue !== undefined;

    const isTriggeredByClearButton =
      allowClearButton &&
      // Проверяем, что новое значение NOT_SELECTED.NATIVE
      nativeSelectValue === NOT_SELECTED.NATIVE &&
      // Проверяем, что предыдущее значение не undefined(кейс с первой отрисовкой, когда предыдущего значения не было)
      prevNativeSelectValue !== undefined &&
      // Проверяем, что предыдущее значение не NOT_SELECTED.NATIVE(если до этого было уже сброшенное значение)
      prevNativeSelectValue !== NOT_SELECTED.NATIVE;

    const shouldCallOnChange =
      !isCalledWithSameControlledOptionValue && (isNativeValueChanged || isTriggeredByClearButton);

    if (!shouldCallOnChange) {
      return;
    }

    const remappedNativeValue = remapFromNativeValueToSelectValue(e.currentTarget.value);

    if (e.target.value === NOT_SELECTED.NATIVE) {
      e.target.value = '';
    }
    if (e.currentTarget.value === NOT_SELECTED.NATIVE) {
      e.currentTarget.value = '';
    }

    onChange?.(e, remappedNativeValue);
  };

  return {
    selectedOptionValue,
    setSelectedOptionValue,
    nativeSelectValue,
    setNativeSelectValue: _setNativeSelectValue,
    onNativeSelectChange,
  };
}
