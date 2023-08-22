import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { useId } from '../../hooks/useId';
import { SizeType } from '../../lib/adaptivity';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { SegmentedControlOption } from './SegmentedControlOption/SegmentedControlOption';
import styles from './SegmentedControl.module.css';

const sizeYClassNames = {
  none: styles['SegmentedControl--sizeY-none'],
  [SizeType.REGULAR]: styles['SegmentedControl--sizeY-regular'],
};

export type SegmentedControlValue = string | number | undefined;

export interface SegmentedControlOptionInterface
  extends Omit<React.HTMLAttributes<HTMLElement>, 'label'> {
  label: React.ReactChild;
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
  ...restProps
}: SegmentedControlProps) => {
  const id = useId();

  const [value, onChange] = useCustomEnsuredControl({
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
  });

  const { sizeY = 'none' } = useAdaptivity();

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
        styles['SegmentedControl'],
        sizeY !== SizeType.COMPACT && sizeYClassNames[sizeY],
        size === 'l' && styles['SegmentedControl--size-l'],
      )}
    >
      <div role="radiogroup" className={styles['SegmentedControl__in']}>
        {actualIndex > -1 && (
          <div
            aria-hidden
            className={styles['SegmentedControl__slider']}
            style={{
              width: `${100 / options.length}%`,
              transform: translateX,
              WebkitTransform: translateX,
            }}
          />
        )}
        {options.map(({ label, className: optionClassName, ...optionProps }) => (
          <SegmentedControlOption
            key={`${optionProps.value}`}
            {...optionProps}
            className={classNames(styles['SegmentedControl__option'], optionClassName)}
            name={name ?? id}
            checked={value === optionProps.value}
            onChange={() => onChange(optionProps.value)}
          >
            {label}
          </SegmentedControlOption>
        ))}
      </div>
    </RootComponent>
  );
};
