import * as React from 'react';
import { isEqual } from '@vkontakte/vkjs';
import { defaultFilterFn, type FilterFn } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import {
  transformValue,
  useChipsInput,
  type UseChipsInputProps,
} from '../ChipsInput/useChipsInput';
import {
  DEFAULT_INPUT_VALUE,
  DEFAULT_VALUE,
  getNewOptionDataDefault,
  getOptionLabelDefault,
  getOptionValueDefault,
} from '../ChipsInputBase/constants';
import type { ChipOption } from '../ChipsInputBase/types';
import { DEFAULT_EMPTY_TEXT, DEFAULT_SELECTED_BEHAVIOR, isNotServicePreset } from './constants';
import { Preset } from './types';

export interface UseChipsSelectProps<O extends ChipOption = ChipOption>
  extends UseChipsInputProps<O> {
  presets?: O[];
  /**
   * Возможность создавать чипы которых нет в списке:
   * - `true` – добавление по кнопке Enter;
   * - `<текст>` – помимо возможности добавления через Enter, в пункте меню появится кнопка с текстом.
   * Текст для пункта, создающего чипы при клике, также отвечает за то, будет ли показан этот пункт
   * (показывается после того как в списке не останется опций).
   */
  creatable?: boolean | string;
  /**
   * Текст, который показывается если список опций пуст
   */
  emptyText?: string;
  /**
   * Показывать или скрывать уже выбранные опции.
   */
  selectedBehavior?: 'hide' | 'highlight';
  filterFn?: false | FilterFn<O>;
}

export const useChipsSelect = <O extends ChipOption>({
  // common
  disabled,

  // option
  value: valueProp,
  defaultValue,
  onChange,
  getOptionLabel = getOptionLabelDefault,
  getOptionValue = getOptionValueDefault,
  getNewOptionData = getNewOptionDataDefault,

  // input
  inputValue: inputValueProp,
  defaultInputValue = DEFAULT_INPUT_VALUE,
  onInputChange: onInputChangeProp,

  // dropdown
  creatable = false,
  emptyText = DEFAULT_EMPTY_TEXT,
  filterFn = defaultFilterFn,
  selectedBehavior = DEFAULT_SELECTED_BEHAVIOR,
  presets: presetsProp = DEFAULT_VALUE,
}: UseChipsSelectProps<O>) => {
  const { value, inputValue, onInputChange, ...restChipsInputProps } = useChipsInput({
    // option
    value: valueProp,
    defaultValue,
    onChange,
    getOptionValue,
    getOptionLabel,
    getNewOptionData,

    // input
    inputValue: inputValueProp,
    defaultInputValue,
    onInputChange: onInputChangeProp,

    // other
    disabled,
  });

  // dropdown
  const [opened, setOpened] = React.useState(false);
  const [presets, setPresets] = React.useState<Array<Preset<O>>>(() =>
    opened
      ? transformPresets({
          value,
          getOptionValue,
          getOptionLabel,
          inputValue,
          emptyText,
          creatable,
          filterFn,
          presets: presetsProp,
          selectedBehavior,
        })
      : [],
  );
  const [focusedOptionIndex, setFocusedOptionIndex] = React.useState<number | null>(0);
  const [focusedOption, setFocusedOption] = React.useState<O | null>(null);

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onInputChange(event);

      if (!opened) {
        setOpened(true);
        setFocusedOptionIndex(0);
      }
    },
    [onInputChange, opened],
  );

  useIsomorphicLayoutEffect(
    function handleDropdownOpen() {
      if (!opened) {
        return;
      }

      setPresets((prevPresets) => {
        const nextPresets = transformPresets({
          value,
          getOptionValue,
          getOptionLabel,
          inputValue,
          emptyText,
          creatable,
          filterFn,
          presets: presetsProp,
          selectedBehavior,
        });

        if (isEqual(prevPresets, nextPresets)) {
          return prevPresets;
        }

        return nextPresets;
      });
    },
    [
      opened,
      value,
      getOptionLabel,
      getOptionValue,
      inputValue,
      presetsProp,
      creatable,
      selectedBehavior,
      filterFn,
    ],
  );

  return {
    ...restChipsInputProps,

    // options
    value,

    // input
    inputValue,
    onInputChange: handleInputChange,

    // dropdown states
    presets,
    opened,
    setOpened,
    focusedOption,
    focusedOptionIndex,
    setFocusedOption,
    setFocusedOptionIndex,
  };
};

function transformPresets<O extends ChipOption>({
  value,
  getOptionValue = getOptionValueDefault,
  getOptionLabel = getOptionLabelDefault,
  inputValue = DEFAULT_INPUT_VALUE,
  emptyText = DEFAULT_EMPTY_TEXT,
  creatable = false,
  filterFn = defaultFilterFn,
  presets: presetsProp = DEFAULT_VALUE,
  selectedBehavior = DEFAULT_SELECTED_BEHAVIOR,
}: Required<Pick<UseChipsSelectProps<O>, 'value'>> &
  Pick<
    UseChipsSelectProps<O>,
    | 'getOptionValue'
    | 'getOptionLabel'
    | 'inputValue'
    | 'emptyText'
    | 'creatable'
    | 'filterFn'
    | 'presets'
    | 'selectedBehavior'
  >) {
  const filteredPresetsProp = filterFn
    ? presetsProp.filter((option) => filterFn(inputValue, option, getOptionLabel))
    : presetsProp;

  if (filteredPresetsProp.length === 0) {
    if (inputValue !== DEFAULT_INPUT_VALUE && typeof creatable === 'string') {
      return [{ actionText: creatable }];
    }
    return [{ placeholder: emptyText }];
  }

  const parsedPresets = transformValue(filteredPresetsProp, getOptionValue, getOptionLabel);

  if (selectedBehavior === 'hide') {
    const selected = value.map((item) => item.value);
    return parsedPresets.filter((item) =>
      isNotServicePreset(item) ? !selected.includes(item.value) : false,
    );
  }
  return parsedPresets;
}
