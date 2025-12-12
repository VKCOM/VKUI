import { classNames } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import { COMPONENTS_PROPS } from './componentProps';
import { calculateGap, type GapsProp } from './gaps';
import { generateConstantClassName, generateVariable, generateVariableClassName } from './helpers';
import { LAYOUT_PROPS } from './layoutProps';
import type { PropDescriptor } from './types';

export type ComponentProps = {
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
};

function transformValue<T>(value: T, key: string) {
  if (
    typeof value === 'number' &&
    key !== 'flexGrow' &&
    key !== 'flexShrink' &&
    key !== 'columns'
  ) {
    return `${value}px`;
  }
  if (typeof value === 'string' && value.startsWith('--')) {
    return `var(${value})`;
  }
  return value;
}

function hasValues<T>(x: any): x is { values: readonly T[] } {
  return x && 'values' in x && Array.isArray(x.values);
}

function processValue(
  key: string,
  cssProperty: string,
  propDescriptor: PropDescriptor,
  value: unknown,
  breakpoint?: string,
): { className: ComponentProps['className']; style: ComponentProps['style'] } {
  let className;
  let style;
  const predefined = Array.isArray(propDescriptor)
    ? propDescriptor
    : hasValues(propDescriptor)
      ? propDescriptor.values
      : [];

  if (typeof value === 'string' && predefined && predefined.includes(value)) {
    const preparedValue =
      (cssProperty === 'align' || cssProperty === 'justify') &&
      (value === 'end' || value === 'start')
        ? `flex-${value}`
        : value;
    className = generateConstantClassName(cssProperty, preparedValue, breakpoint);
  } else if (key === 'noWrap') {
    className = generateVariableClassName(cssProperty, breakpoint);
  } else if (key !== 'position' && !key.startsWith('overflow')) {
    className = generateVariableClassName(cssProperty, breakpoint);
    style = {
      [generateVariable(
        ('propName' in propDescriptor && propDescriptor.propName) || cssProperty,
        breakpoint,
      )]: transformValue(value, key),
    };
  }

  return { className, style };
}

const PROCESSED_PROPS = { ...LAYOUT_PROPS, ...COMPONENTS_PROPS };

/**
 * Превращает layout свойства в нужные значения className/style
 * @param props - все пропы компонента
 * @returns измененные свойства
 */
export function resolveLayoutProps<T extends ComponentProps>(
  props: T & { className?: string; style?: React.CSSProperties },
): { className?: string; style?: React.CSSProperties } {
  const outProps = { ...props };
  let resolvedClassName: string | undefined;
  let resolvedStyle: React.CSSProperties | undefined;

  for (const [key, value] of Object.entries(outProps)) {
    const propDescriptor = PROCESSED_PROPS[key as keyof typeof PROCESSED_PROPS];
    if (propDescriptor && value !== undefined) {
      const cssProperty =
        'class' in propDescriptor
          ? propDescriptor.class!
          : key.replace(/([A-Z])/g, '-$1').toLowerCase();

      // Process value with adaptive keys
      if (typeof value === 'object' && !Array.isArray(value)) {
        const adaptiveValue = value as Partial<Record<string, unknown>>;
        for (const breakpoint in adaptiveValue) {
          if (adaptiveValue.hasOwnProperty(breakpoint)) {
            const breakpointValue = adaptiveValue[breakpoint];
            if (breakpointValue !== undefined) {
              if (key === 'gap') {
                const [rowGap, columnGap] = calculateGap(breakpointValue as any);
                [
                  ['row_', rowGap],
                  ['column_', columnGap],
                ].forEach(([prefix, gap]) => {
                  if (gap !== undefined) {
                    let processed = processValue(
                      key,
                      prefix + cssProperty,
                      propDescriptor,
                      gap,
                      breakpoint,
                    );
                    resolvedClassName = classNames(resolvedClassName, processed.className);
                    resolvedStyle = mergeStyle(resolvedStyle, processed.style);
                  }
                });
              } else {
                const processed = processValue(
                  key,
                  cssProperty,
                  propDescriptor,
                  breakpointValue,
                  breakpoint,
                );
                resolvedClassName = classNames(resolvedClassName, processed.className);
                resolvedStyle = mergeStyle(resolvedStyle, processed.style);
              }
            }
          }
        }
      } else {
        // Process regular (non-adaptive) value
        if (key === 'gap') {
          const [rowGap, columnGap] = calculateGap(value as GapsProp);
          [
            ['row_', rowGap],
            ['column_', columnGap],
          ].forEach(([prefix, gap]) => {
            if (gap !== undefined) {
              let processed = processValue(key, prefix + cssProperty, propDescriptor, gap);
              resolvedClassName = classNames(resolvedClassName, processed.className);
              resolvedStyle = mergeStyle(resolvedStyle, processed.style);
            }
          });
        } else {
          let processed = processValue(key, cssProperty, propDescriptor, value);
          resolvedClassName = classNames(resolvedClassName, processed.className);
          resolvedStyle = mergeStyle(resolvedStyle, processed.style);
        }
      }
      delete outProps[key];
    }
  }

  outProps.className = classNames(resolvedClassName, outProps.className);
  outProps.style = mergeStyle(resolvedStyle, outProps.style);

  return outProps;
}
