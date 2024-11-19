'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { useTabsNavigation } from '../../hooks/useTabsNavigation';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import {
  SegmentedControlOption,
  type SegmentedControlRadioProps,
  type SegmentedControlTabProps,
} from './SegmentedControlOption/SegmentedControlOption';
import styles from './SegmentedControl.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  regular: styles.sizeYRegular,
};

export type SegmentedControlValue = string | number | undefined;

export interface SegmentedControlOptionInterface
  extends Omit<React.HTMLAttributes<HTMLElement>, 'label'> {
  /**
   * Вставляет элемент перед основным контентом.
   * Рекомендуется использовать только иконки с размером 20
   */
  before?: React.ReactNode;
  label: React.ReactChild;
  value: SegmentedControlValue;
}

export interface SegmentedControlProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange' | 'role'> {
  options: SegmentedControlOptionInterface[];
  size?: 'm' | 'l';
  name?: string;
  onChange?: (value: SegmentedControlValue) => void;
  value?: SegmentedControlValue;
  defaultValue?: SegmentedControlValue;
  role?: 'tablist' | 'radiogroup';
}

const warn = warnOnce('SegmentedControl');

/**
 * @see https://vkcom.github.io/VKUI/#/SegmentedControl
 */
export const SegmentedControl = ({
  size = 'l',
  name,
  options,
  defaultValue = options[0]?.value,
  children,
  onChange: onChangeProp,
  value: valueProp,
  role = 'radiogroup',
  ...restProps
}: SegmentedControlProps): React.ReactNode => {
  const id = React.useId();

  const [value, onChange] = useCustomEnsuredControl({
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
  });

  const { sizeY = 'none' } = useAdaptivity();

  const { tabsRef } = useTabsNavigation(role === 'tablist');

  const actualIndex = options.findIndex((option) => option.value === value);

  useIsomorphicLayoutEffect(() => {
    if (actualIndex === -1 && process.env.NODE_ENV === 'development') {
      warn('defaultValue: такого значения нет среди опций!', 'error');
    }
  }, [actualIndex]);

  const translateX = `translateX(${100 * actualIndex}%)`;

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        sizeY !== 'compact' && sizeYClassNames[sizeY],
        size === 'l' && styles.sizeL,
      )}
    >
      <div role={role === 'tablist' ? 'tablist' : 'radiogroup'} ref={tabsRef} className={styles.in}>
        {actualIndex > -1 && (
          <div
            aria-hidden
            className={styles.slider}
            style={{
              width: `${100 / options.length}%`,
              transform: translateX,
            }}
          />
        )}
        {options.map(({ label, ...optionProps }) => {
          const selected = value === optionProps.value;
          const onSelect = () => onChange(optionProps.value);
          const roleOptionProps: SegmentedControlTabProps | SegmentedControlRadioProps =
            role === 'tablist'
              ? {
                  'role': 'tab',
                  'aria-selected': selected,
                  'onClick': onSelect,
                }
              : {
                  role: 'radio',
                  checked: selected,
                  onChange: onSelect,
                  name: name ?? id,
                };

          return (
            <SegmentedControlOption
              key={`${optionProps.value}`}
              {...optionProps}
              {...roleOptionProps}
            >
              {label}
            </SegmentedControlOption>
          );
        })}
      </div>
    </RootComponent>
  );
};
