'use client';

import * as React from 'react';
import {
  Icon20CheckBoxIndetermanate,
  Icon20CheckBoxOff,
  Icon20CheckBoxOn,
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityConditionalRender } from '../../../hooks/useAdaptivityConditionalRender';
import { useExternRef } from '../../../hooks/useExternRef';
import { useMergeProps } from '../../../hooks/useMergeProps';
import { usePlatform } from '../../../hooks/usePlatform';
import { warnOnce } from '../../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './CheckboxInput.module.css';

type VendorIconType = typeof Icon20CheckBoxOn;

export type CheckboxInputIconType =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | VendorIconType;

function setIndeterminate(el: HTMLInputElement, indeterminate: boolean) {
  el.indeterminate = indeterminate;
}

export interface CheckboxInputProps
  extends React.ComponentProps<'input'>,
    HasRootRef<HTMLDivElement> {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ input: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLInputElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в скрытый `input`.
   */
  slotProps?: {
    root?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> &
      HasRootRef<HTMLDivElement> &
      HasDataAttribute;
    input?: React.ComponentProps<'input'> & HasRootRef<HTMLInputElement> & HasDataAttribute;
  };
  /**
   * Неопределенное состояние чекбокса.
   */
  indeterminate?: boolean;
  /**
   * Неопределенное состояние чекбокса по умолчанию.
   */
  defaultIndeterminate?: boolean;
  /**
   * Иконка для включенного состояния в компактном режиме.
   */
  IconOnCompact?: CheckboxInputIconType;
  /**
   * Иконка для включенного состояния в обычном режиме.
   */
  IconOnRegular?: CheckboxInputIconType;
  /**
   * Иконка для выключенного состояния в компактном режиме.
   */
  IconOffCompact?: CheckboxInputIconType;
  /**
   * Иконка для выключенного состояния в обычном режиме.
   */
  IconOffRegular?: CheckboxInputIconType;
  /**
   * Иконка для неопределенного состояния.
   */
  IconIndeterminate?: CheckboxInputIconType;
}

const warn = warnOnce('Checkbox');

export function CheckboxInput({
  className,
  style,
  getRootRef,
  getRef,

  indeterminate,
  defaultIndeterminate,
  IconOnCompact = Icon20CheckBoxOn,
  IconOnRegular = Icon24CheckBoxOn,
  IconOffCompact = Icon20CheckBoxOff,
  IconOffRegular = Icon24CheckBoxOff,
  IconIndeterminate = Icon20CheckBoxIndetermanate,

  slotProps,
  ...restProps
}: CheckboxInputProps) {
  const rootRest = useMergeProps(
    {
      className,
      style,
      getRootRef,
    },
    slotProps?.root,
  );

  const {
    onChange,
    getRootRef: getInputRef,
    ...inputRest
  } = useMergeProps({ getRootRef: getRef, ...restProps }, slotProps?.input);

  const inputRef = useExternRef<HTMLInputElement>(getInputRef);

  const platform = usePlatform();
  const { sizeY: adaptiveSizeY } = useAdaptivityConditionalRender();

  React.useEffect(() => {
    const indeterminateValue = indeterminate === undefined ? defaultIndeterminate : indeterminate;

    if (inputRef.current) {
      setIndeterminate(inputRef.current, Boolean(indeterminateValue));
    }
  }, [defaultIndeterminate, indeterminate, inputRef]);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (
        defaultIndeterminate !== undefined &&
        indeterminate === undefined &&
        inputRest.checked === undefined &&
        inputRef.current
      ) {
        setIndeterminate(inputRef.current, false);
      }
      if (indeterminate !== undefined && inputRef.current) {
        setIndeterminate(inputRef.current, Boolean(indeterminate));
      }
      onChange && onChange(event);
    },
    [defaultIndeterminate, indeterminate, inputRest.checked, onChange, inputRef],
  );

  if (process.env.NODE_ENV === 'development') {
    /* istanbul ignore if: не проверяем в тестах */
    if (getRef) {
      warn('Свойство `getRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`');
    }

    if (defaultIndeterminate && inputRest.defaultChecked) {
      warn('defaultIndeterminate и defaultChecked не могут быть true одновременно', 'error');
    }

    if (indeterminate && inputRest.checked) {
      warn('indeterminate и checked не могут быть true одновременно', 'error');
    }

    if (inputRest.defaultChecked && inputRest.checked) {
      warn('defaultChecked и checked не могут быть true одновременно', 'error');
    }
  }

  return (
    <RootComponent baseClassName={styles.host} {...rootRest}>
      <VisuallyHidden
        Component="input"
        type="checkbox"
        onChange={handleChange}
        getRootRef={inputRef}
        baseClassName={styles.input}
        {...inputRest}
      />
      {platform === 'vkcom' ? (
        <IconOnCompact className={styles.iconOn} />
      ) : (
        <React.Fragment>
          {adaptiveSizeY.compact && (
            <IconOnCompact className={classNames(styles.iconOn, adaptiveSizeY.compact.className)} />
          )}
          {adaptiveSizeY.regular && (
            <IconOnRegular className={classNames(styles.iconOn, adaptiveSizeY.regular.className)} />
          )}
        </React.Fragment>
      )}
      {platform === 'vkcom' ? (
        <IconOffCompact className={styles.iconOff} />
      ) : (
        <React.Fragment>
          {adaptiveSizeY.compact && (
            <IconOffCompact
              className={classNames(styles.iconOff, adaptiveSizeY.compact.className)}
            />
          )}
          {adaptiveSizeY.regular && (
            <IconOffRegular
              className={classNames(styles.iconOff, adaptiveSizeY.regular.className)}
            />
          )}
        </React.Fragment>
      )}
      {platform === 'vkcom' ? (
        <IconIndeterminate width={20} height={20} className={styles.iconIndeterminate} />
      ) : (
        <React.Fragment>
          {adaptiveSizeY.compact && (
            <IconIndeterminate
              className={classNames(styles.iconIndeterminate, adaptiveSizeY.compact.className)}
              width={20}
              height={20}
            />
          )}
          {adaptiveSizeY.regular && (
            <IconIndeterminate
              className={classNames(styles.iconIndeterminate, adaptiveSizeY.regular.className)}
              width={24}
              height={24}
            />
          )}
        </React.Fragment>
      )}
    </RootComponent>
  );
}
