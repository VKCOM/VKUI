'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { useTabsNavigation } from '../../hooks/useTabsNavigation';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import type { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import {
  SegmentedControlOption,
  type SegmentedControlOptionProps,
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
  label: React.ReactNode;
  value: SegmentedControlValue;
}

export interface SegmentedControlProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange'> {
  options: SegmentedControlOptionInterface[];
  size?: 'm' | 'l';
  name?: string;
  onChange?: (value: SegmentedControlValue) => void;
  value?: SegmentedControlValue;
  defaultValue?: SegmentedControlValue;
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
  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';

  const [value, onChange] = useCustomEnsuredControl({
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
  });

  const { sizeY = 'none' } = useAdaptivity();

  const { tabsRef } = useTabsNavigation(role === 'tablist', isRtl);

  const actualIndex = options.findIndex((option) => option.value === value);

  useIsomorphicLayoutEffect(() => {
    if (actualIndex === -1 && process.env.NODE_ENV === 'development') {
      warn('defaultValue: такого значения нет среди опций!', 'error');
    }
  }, [actualIndex]);

  const sliderStyle: CSSCustomProperties = {
    '--vkui_internal--SegmentedControl_actual_index': String(actualIndex),
    '--vkui_internal--SegmentedControl_options': String(options.length),
  };

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        sizeY !== 'compact' && sizeYClassNames[sizeY],
        size === 'l' && styles.sizeL,
        isRtl && styles.rtl,
      )}
    >
      <div role={role} ref={tabsRef} className={styles.in}>
        {actualIndex > -1 && <div aria-hidden className={styles.slider} style={sliderStyle} />}
        {options.map(({ label, before, ...optionProps }) => {
          const selected = value === optionProps.value;
          const onSelect = () => onChange(optionProps.value);
          const optionRootProps: SegmentedControlOptionProps['rootProps'] =
            role === 'tablist'
              ? {
                  'role': 'tab',
                  'aria-selected': selected,
                  'onClick': onSelect,
                  'tabIndex': optionProps.tabIndex ?? (selected ? 0 : -1),
                  ...optionProps,
                }
              : undefined;

          const optionInputProps: SegmentedControlOptionProps['inputProps'] =
            role !== 'tablist'
              ? {
                  role: optionProps.role || (role === 'radiogroup' ? 'radio' : undefined),
                  checked: selected,
                  onChange: onSelect,
                  name: name ?? id,
                  ...optionProps,
                }
              : undefined;

          return (
            <SegmentedControlOption
              key={`${optionProps.value}`}
              before={before}
              rootProps={optionRootProps}
              inputProps={optionInputProps}
            >
              {label}
            </SegmentedControlOption>
          );
        })}
      </div>
    </RootComponent>
  );
};
