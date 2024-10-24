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
import { usePlatform } from '../../../hooks/usePlatform';
import { warnOnce } from '../../../lib/warnOnce';
import type { HasRef, HasRootRef } from '../../../types';
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
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLInputElement> {
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
  IconOnCompact?: CheckboxInputIconType;
  IconOnRegular?: CheckboxInputIconType;
  IconOffCompact?: CheckboxInputIconType;
  IconOffRegular?: CheckboxInputIconType;
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
  onChange,
  IconOnCompact = Icon20CheckBoxOn,
  IconOnRegular = Icon24CheckBoxOn,
  IconOffCompact = Icon20CheckBoxOff,
  IconOffRegular = Icon24CheckBoxOff,
  IconIndeterminate = Icon20CheckBoxIndetermanate,
  ...restProps
}: CheckboxInputProps) {
  const inputRef = useExternRef(getRef);
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
        restProps.checked === undefined &&
        inputRef.current
      ) {
        setIndeterminate(inputRef.current, false);
      }
      if (indeterminate !== undefined && inputRef.current) {
        setIndeterminate(inputRef.current, Boolean(indeterminate));
      }
      onChange && onChange(event);
    },
    [defaultIndeterminate, indeterminate, restProps.checked, onChange, inputRef],
  );

  if (process.env.NODE_ENV === 'development') {
    if (defaultIndeterminate && restProps.defaultChecked) {
      warn('defaultIndeterminate и defaultChecked не могут быть true одновременно', 'error');
    }

    if (indeterminate && restProps.checked) {
      warn('indeterminate и checked не могут быть true одновременно', 'error');
    }

    if (restProps.defaultChecked && restProps.checked) {
      warn('defaultChecked и checked не могут быть true одновременно', 'error');
    }
  }

  return (
    <RootComponent
      baseClassName={styles.host}
      className={className}
      style={style}
      getRootRef={getRootRef}
    >
      <VisuallyHidden
        {...restProps}
        Component="input"
        type="checkbox"
        onChange={handleChange}
        className={styles.input}
        getRootRef={inputRef}
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
