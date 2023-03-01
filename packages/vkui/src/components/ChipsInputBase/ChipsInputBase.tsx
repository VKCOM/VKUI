import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useChipsInput } from '../../hooks/useChipsInput';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { Keys, pressedKey } from '../../lib/accessibility';
import { SizeType } from '../../lib/adaptivity';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';
import { Chip, ChipOption, ChipValue, RenderChip } from '../Chip/Chip';
import styles from './ChipsInputBase.module.css';

export interface ChipsInputBaseProps<Option extends ChipOption>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign {
  value: Option[];
  inputValue?: string;
  onChange?: (o: Option[]) => void;
  onInputChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  getOptionValue?: (o?: Option) => ChipValue;
  getOptionLabel?: (o?: Option) => string;
  getNewOptionData?: (v?: ChipValue, l?: string) => Option;
  renderChip?: (props?: RenderChip<Option>) => React.ReactNode;
  inputAriaLabel?: string;
  /**
   * Добавляет значение в список на событие `onBlur`
   */
  addOnBlur?: boolean;
}

export const chipsInputDefaultProps: ChipsInputBaseProps<any> = {
  onChange: noop,
  onInputChange: noop,
  onKeyDown: noop,
  onBlur: noop,
  onFocus: noop,
  value: [],
  inputValue: '',
  inputAriaLabel: 'Введите ваше значение...',
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

    const { disabled, value, label, ...restProps } = props;
    return (
      <Chip value={value} removable={!disabled} {...restProps}>
        {label}
      </Chip>
    );
  },
  addOnBlur: false,
};

export const ChipsInputBase = <Option extends ChipOption>(props: ChipsInputBaseProps<Option>) => {
  const propsWithDefault = { ...chipsInputDefaultProps, ...props };
  const {
    style,
    className,
    getRootRef,
    value,
    onChange,
    onInputChange,
    onKeyDown,
    children,
    inputValue,
    getRef,
    placeholder,
    getOptionValue,
    getOptionLabel,
    getNewOptionData,
    renderChip,
    inputAriaLabel,
    addOnBlur,
    ...restProps
  } = propsWithDefault;
  const { document } = useDOM();
  const { sizeY } = useAdaptivity();

  const [focusableChipNodes, setFocusableChipNodes] = React.useState<HTMLElement[] | null>(null);

  const { keyboardInput } = React.useContext(AppRootContext);

  const { fieldValue, addOptionFromInput, removeOption, selectedOptions, handleInputChange } =
    useChipsInput(propsWithDefault);
  const rootRef = useExternRef(getRootRef);
  const inputRef = useExternRef(getRef);

  const isDisabled = restProps.disabled || restProps.readOnly;

  // - [x] use rowing tabIndex technique
  const rowTabIndex = (idx: number, focusByIdx = false) => {
    if (focusableChipNodes?.length) {
      focusableChipNodes.map((node, currentIdx) => {
        node.tabIndex = currentIdx !== idx ? -1 : 0;
        return node;
      });

      if (focusByIdx) {
        focusableChipNodes[idx].focus();
      }
    }
  };

  const focusInput = () => {
    if (inputRef?.current && document?.activeElement !== inputRef?.current) {
      inputRef.current.focus();
    }
  };

  useIsomorphicLayoutEffect(() => {
    rowTabIndex(0);
  }, [keyboardInput]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    onKeyDown!(e);

    if (!e.defaultPrevented) {
      const PRESSED_KEY = pressedKey(e);

      if (PRESSED_KEY === Keys.BACKSPACE && !fieldValue && selectedOptions.length) {
        removeOption(getOptionValue!(selectedOptions[selectedOptions.length - 1]));
        e.preventDefault();
      }

      if (PRESSED_KEY === Keys.ENTER && fieldValue) {
        addOptionFromInput();
        e.preventDefault();
      }
    }
  };

  // HANDLE CHIP REMOVAL

  const handleChipRemove = (
    _: React.MouseEvent | React.KeyboardEvent | undefined,
    value: ChipValue | undefined,
  ) => {
    if (value !== undefined) {
      removeOption(value);
    }
  };

  // TRAP FOCUS ON CHIPS

  useIsomorphicLayoutEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const nodes: HTMLElement[] = [];
    Array.prototype.forEach.call(
      // eslint-disable-next-line no-restricted-properties
      rootRef.current.querySelectorAll('[data-focusable]'),
      (node: HTMLElement) => {
        nodes.push(node);
      },
    );

    setFocusableChipNodes(nodes);
  }, [selectedOptions, rootRef.current]);

  useIsomorphicLayoutEffect(() => {
    if (keyboardInput) {
      if (focusableChipNodes?.length) {
        rowTabIndex(0, true);
      } else {
        focusInput();
      }
    }
  }, [focusableChipNodes]);

  const handleDocumentKeydown = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement;

    if (focusableChipNodes?.includes(target)) {
      const lastIdx = focusableChipNodes.length - 1;
      const currentIdx = focusableChipNodes.findIndex((node) => node === target);

      const rowTabIndexOnPressingAccessibleKey = (idx: number) => {
        e.preventDefault();
        rowTabIndex(idx, true);
        return false;
      };

      switch (pressedKey(e)) {
        case Keys.TAB:
          rowTabIndex(0, true);
          return false;

        case Keys.HOME:
        case Keys.PAGE_UP:
          return rowTabIndexOnPressingAccessibleKey(0);

        case Keys.END:
        case Keys.PAGE_DOWN:
          return rowTabIndexOnPressingAccessibleKey(lastIdx);

        case Keys.ARROW_RIGHT:
        case Keys.ARROW_UP:
          const nextIdx = currentIdx < lastIdx ? currentIdx + 1 : 0;
          return rowTabIndexOnPressingAccessibleKey(nextIdx);

        case Keys.ARROW_LEFT:
        case Keys.ARROW_DOWN:
          const prevIdx = currentIdx > 0 ? currentIdx - 1 : lastIdx;
          return rowTabIndexOnPressingAccessibleKey(prevIdx);

        default:
          break;
      }
    }

    return true;
  };
  useGlobalEventListener(document, 'keydown', handleDocumentKeydown, {
    capture: true,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    focusInput();
  };

  return (
    <div
      onClick={handleClick}
      role="grid"
      aria-disabled={restProps.disabled}
      aria-readonly={restProps.readOnly}
      aria-busy="true"
      aria-live="polite"
      style={style}
      className={classNames(
        styles['ChipsInputBase'],
        sizeY === SizeType.COMPACT && styles['ChipsInputBase--sizeY-compact'],
        !selectedOptions.length && styles['ChipsInputBase--hasPlaceholder'],
        className,
      )}
      ref={rootRef}
    >
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
              className: styles['ChipsInputBase__chip'],
            })}
          </React.Fragment>
        );
      })}
      <label className={styles['ChipsInputBase__label']} aria-label={inputAriaLabel}>
        <input
          type="text"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          aria-autocomplete="list"
          className={styles['ChipsInputBase__el']}
          {...restProps}
          ref={inputRef}
          value={fieldValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={selectedOptions.length ? undefined : placeholder}
        />
      </label>
    </div>
  );
};
