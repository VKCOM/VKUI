import * as React from "react";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { classNames } from "../../lib/classNames";
import { Chip, ChipProps } from "../Chip/Chip";
import { noop } from "../../lib/utils";
import { useChipsInput } from "./useChipsInput";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { prefixClass } from "../../lib/prefixClass";
import { useExternRef } from "../../hooks/useExternRef";
import "./ChipsInput.css";

export type ChipsInputValue = string | number;

export interface ChipsInputOption {
  value?: ChipsInputValue;
  label?: string;
  [otherProp: string]: any;
}

export interface RenderChip<Option extends ChipsInputOption> extends ChipProps {
  label: string;
  option: Option;
  disabled: boolean;
}

export interface ChipsInputProps<Option extends ChipsInputOption>
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "value" | "onChange"
    >,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    FormFieldProps {
  value: Option[];
  inputValue?: string;
  onChange?: (o: Option[]) => void;
  onInputChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  getOptionValue?: (o?: Option) => ChipsInputValue;
  getOptionLabel?: (o?: Option) => string;
  getNewOptionData?: (v?: ChipsInputValue, l?: string) => Option;
  renderChip?: (props?: RenderChip<Option>) => React.ReactNode;
  inputAriaLabel?: string;
}

export const chipsInputDefaultProps: ChipsInputProps<any> = {
  type: "text",
  onChange: noop,
  onInputChange: noop,
  onKeyDown: noop,
  onBlur: noop,
  onFocus: noop,
  value: [],
  inputValue: "",
  inputAriaLabel: "Введите ваше значение...",
  getOptionValue: (option) => option.value,
  getOptionLabel: (option) => option.label,
  getNewOptionData: (_, label) => ({
    value: label,
    label,
  }),
  renderChip(props) {
    if (!props) {
      return null;
    }

    const { disabled, value, label, ...rest } = props;
    return (
      <Chip value={value} removable={!disabled} {...rest}>
        {label}
      </Chip>
    );
  },
};

const ChipsInput = <Option extends ChipsInputOption>(
  props: ChipsInputProps<Option>
) => {
  const propsWithDefault = { ...chipsInputDefaultProps, ...props };
  const {
    style,
    value,
    onChange,
    onInputChange,
    onKeyDown,
    onBlur,
    onFocus,
    children,
    className,
    inputValue,
    getRef,
    getRootRef,
    placeholder,
    getOptionValue,
    getOptionLabel,
    getNewOptionData,
    renderChip,
    after,
    inputAriaLabel,
    ...restProps
  } = propsWithDefault;
  const { sizeY } = useAdaptivity();

  const [focused, setFocused] = React.useState(false);
  const {
    fieldValue,
    addOptionFromInput,
    removeOption,
    selectedOptions,
    handleInputChange,
  } = useChipsInput(propsWithDefault);
  const inputRef = useExternRef(getRef);

  const isDisabled = restProps.disabled || restProps.readOnly;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    onKeyDown!(e);

    if (
      e.key === "Backspace" &&
      !e.defaultPrevented &&
      !fieldValue &&
      selectedOptions.length
    ) {
      removeOption(
        getOptionValue!(selectedOptions[selectedOptions.length - 1])
      );
      e.preventDefault();
    }

    if (e.key === "Enter" && !e.defaultPrevented && fieldValue) {
      addOptionFromInput();
      e.preventDefault();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (focused) {
      setFocused(false);
    }
    onBlur!(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!focused) {
      setFocused(true);
    }
    onFocus!(e);
  };

  const handleChipRemove = (
    _: React.MouseEvent | undefined,
    value: ChipsInputValue | undefined
  ) => {
    if (value !== undefined) {
      removeOption(value);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (inputRef?.current !== null && !focused) {
      inputRef.current.focus();
    }
  };

  return (
    <FormField
      getRootRef={getRootRef}
      vkuiClass={classNames("ChipsInput", `ChipsInput--sizeY-${sizeY}`, {
        "ChipsInput--focused": focused,
        "ChipsInput--withChips": !!selectedOptions.length,
      })}
      className={className}
      style={style}
      disabled={restProps.disabled}
      after={after}
      onClick={handleClick}
      role="application"
      aria-disabled={restProps.disabled}
      aria-readonly={restProps.readOnly}
    >
      <div vkuiClass="ChipsInput__container" role="presentation">
        {selectedOptions.map((option: Option) => {
          const value = getOptionValue!(option);
          const label = getOptionLabel!(option);

          return (
            <React.Fragment key={`${typeof value}-${value}`}>
              {renderChip!({
                option,
                value,
                label,
                onRemove: handleChipRemove,
                disabled: Boolean(restProps.disabled),
                className: prefixClass("ChipsInput__chip"),
              })}
            </React.Fragment>
          );
        })}
        <label
          vkuiClass="ChipsInput__input-container"
          aria-label={inputAriaLabel}
        >
          <input
            ref={inputRef}
            value={fieldValue}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-autocomplete="list"
            vkuiClass="ChipsInput__el"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={selectedOptions.length ? undefined : placeholder}
            {...restProps}
          />
        </label>
      </div>
    </FormField>
  );
};

// eslint-disable-next-line import/no-default-export
export default ChipsInput;
