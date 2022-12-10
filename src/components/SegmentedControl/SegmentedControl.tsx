import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { generateRandomId } from '../../lib/utils';
import { warnOnce } from '../../lib/warnOnce';
import { SegmentedControlOption } from './SegmentedControlOption/SegmentedControlOption';
import { HasRootRef } from '../../types';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import styles from './SegmentedControl.module.css';

export type SegmentedControlValue = string | number | undefined;

export interface SegmentedControlOptionInterface
  extends Omit<React.HTMLAttributes<HTMLElement>, 'label'> {
  label: React.ReactChild;
  value: SegmentedControlValue;
}

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    HasRootRef<HTMLDivElement> {
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
  getRootRef,
  defaultValue = options[0]?.value,
  children,
  className,
  onChange: onChangeProp,
  value: valueProp,
  ...restProps
}: SegmentedControlProps) => {
  const [value, onChange] = useCustomEnsuredControl({
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
  });

  const { sizeY } = useAdaptivity();

  const [activeOptionIdx, updateActiveOptionIdx] = React.useState<number>(0);

  const nameRef = React.useRef<string>(name ?? generateRandomId());

  useIsomorphicLayoutEffect(() => {
    const _activeOptionIdx = options.findIndex((option) => option.value === value);

    if (_activeOptionIdx === -1 && process.env.NODE_ENV === 'development') {
      warn('defaultValue: такого значения нет среди опций!', 'error');
    }

    updateActiveOptionIdx(_activeOptionIdx);
  }, [value, options]);

  const translateX = `translateX(${100 * activeOptionIdx}%)`;

  return (
    <div
      {...restProps}
      className={classNamesString(
        styles['SegmentedControl'],
        getSizeYClassName(styles['SegmentedControl'], sizeY),
        styles[`SegmentedControl--size-${size}`],
        className,
      )}
      ref={getRootRef}
    >
      <div role="radiogroup" className={styles['SegmentedControl__in']}>
        {activeOptionIdx > -1 && (
          <div
            aria-hidden="true"
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
            className={classNamesString(styles['SegmentedControl__option'], optionClassName)}
            name={nameRef.current}
            checked={value === optionProps.value}
            onChange={() => onChange(optionProps.value)}
          >
            {label}
          </SegmentedControlOption>
        ))}
      </div>
    </div>
  );
};
