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

function setIndeterminate(el: HTMLInputElement, indeterminate: boolean) {
  el.indeterminate = indeterminate;
}

export interface CheckboxInputProps
  extends React.ComponentProps<'input'>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLInputElement> {
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
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
      baseClassName={styles['CheckboxInput']}
      className={className}
      style={style}
      getRootRef={getRootRef}
    >
      <VisuallyHidden
        {...restProps}
        Component="input"
        type="checkbox"
        onChange={handleChange}
        className={styles['CheckboxInput__input']}
        getRootRef={inputRef}
      />
      {platform === 'vkcom' ? (
        <Icon20CheckBoxOn className={styles['CheckboxInput__icon--on']} />
      ) : (
        <React.Fragment>
          {adaptiveSizeY.compact && (
            <Icon20CheckBoxOn
              className={classNames(
                styles['CheckboxInput__icon--on'],
                adaptiveSizeY.compact.className,
              )}
            />
          )}
          {adaptiveSizeY.regular && (
            <Icon24CheckBoxOn
              className={classNames(
                styles['CheckboxInput__icon--on'],
                adaptiveSizeY.regular.className,
              )}
            />
          )}
        </React.Fragment>
      )}
      {platform === 'vkcom' ? (
        <Icon20CheckBoxOff className={styles['CheckboxInput__icon--off']} />
      ) : (
        <React.Fragment>
          {adaptiveSizeY.compact && (
            <Icon20CheckBoxOff
              className={classNames(
                styles['CheckboxInput__icon--off'],
                adaptiveSizeY.compact.className,
              )}
            />
          )}
          {adaptiveSizeY.regular && (
            <Icon24CheckBoxOff
              className={classNames(
                styles['CheckboxInput__icon--off'],
                adaptiveSizeY.regular.className,
              )}
            />
          )}
        </React.Fragment>
      )}
      {platform === 'vkcom' ? (
        <Icon20CheckBoxIndetermanate
          width={20}
          height={20}
          className={styles['CheckboxInput__icon--indeterminate']}
        />
      ) : (
        <React.Fragment>
          {adaptiveSizeY.compact && (
            <Icon20CheckBoxIndetermanate
              className={classNames(
                styles['CheckboxInput__icon--indeterminate'],
                adaptiveSizeY.compact.className,
              )}
              width={20}
              height={20}
            />
          )}
          {adaptiveSizeY.regular && (
            <Icon20CheckBoxIndetermanate
              className={classNames(
                styles['CheckboxInput__icon--indeterminate'],
                adaptiveSizeY.regular.className,
              )}
              width={24}
              height={24}
            />
          )}
        </React.Fragment>
      )}
    </RootComponent>
  );
}
