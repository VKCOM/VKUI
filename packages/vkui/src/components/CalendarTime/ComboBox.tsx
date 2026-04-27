'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { type Placement } from '@vkontakte/vkui-floating-ui/core';
import { useBooleanState } from '../../hooks/useBooleanState';
import { useExternRef } from '../../hooks/useExternRef';
import { callMultiple } from '../../lib/callMultiple';
import { CustomScrollView } from '../CustomScrollView/CustomScrollView';
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { Input, type InputProps } from '../Input/Input';
import { Popper } from '../Popper/Popper';
import styles from './CalendarTime.module.css';

type Label = {
  /**
   * Значение.
   */
  value: string;
  /**
   * Лейбл.
   */
  label: string;
  /**
   * Disabled состояние.
   */
  disabled?: boolean;
};

type OptionProps = {
  /**
   * Выбранное значение.
   */
  selectedValue: string | number | readonly string[] | undefined;
  /**
   * Опция.
   */
  option: Label;
  /**
   * Нажатие на элемент.
   */
  onClickOption?: ((value: string) => void) | undefined;
};

function Option({ option, onClickOption, selectedValue }: OptionProps) {
  const selected = selectedValue === option.value;

  return (
    <CustomSelectOption
      key={option.value}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      onClick={() => {
        onClickOption?.(option.value);
      }}
      selected={selected}
      disabled={option.disabled}
      textNoWrap
    >
      {option.label}
    </CustomSelectOption>
  );
}

type ComboBoxProps = InputProps & {
  // eslint-disable-next-line jsdoc/require-jsdoc
  readonly labels?: readonly Label[] | undefined;

  /**
   * Нажатие на элемент.
   */
  onClickOption?: ((value: string) => void) | undefined;
};

export function ComboBox({
  getRootRef,
  onBlur,
  onFocus,
  after,
  labels = [],
  defaultValue,
  slotProps,
  onClickOption,
  ...restProps
}: ComboBoxProps) {
  const ref = useExternRef(getRootRef);
  const inputRef = useExternRef(slotProps?.input?.getRootRef);

  const [focus, setFocus, setBlur] = useBooleanState(false);

  const [popperPlacement, setPopperPlacement] = React.useState<Placement>('bottom');

  const labelsElements = focus
    ? labels.map((option) => {
        return (
          <Option
            key={option.value}
            onClickOption={onClickOption}
            selectedValue={restProps.value}
            option={option}
          />
        );
      })
    : undefined;

  /**
   * При управлении стрелками необходима правильная очередность элементов в списке.
   */
  if (popperPlacement.includes('top')) {
    labelsElements?.reverse();
  }

  return (
    <>
      <Input
        getRootRef={ref}
        className={
          focus ? (popperPlacement.includes('top') ? styles.inputPopUp : styles.inputPopDown) : ''
        }
        type="text"
        onFocus={callMultiple(setFocus, onFocus)}
        onBlur={callMultiple(setBlur, onBlur)}
        onClick={() => inputRef.current?.focus()}
        after={after || (labels && <DropdownIcon opened={focus} />)}
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
            {labelsElements}
          </CustomScrollView>
        </Popper>
      )}
    </>
  );
}
