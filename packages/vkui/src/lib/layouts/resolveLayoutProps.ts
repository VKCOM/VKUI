import { classNames } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import type { CSSCustomProperties } from '../../types';
import { LAYOUT_PROPS, type LayoutPropKeys } from './layoutProps';

export type ComponentProps = {
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
};

/**
 * Превращает layout свойства в нужные значения className/style
 * @param props - все пропы компонента
 * @returns измененные свойства
 */
export function resolveLayoutProps<T extends ComponentProps>(
  props: T & { className?: string; style?: React.CSSProperties },
) {
  const outProps = { ...props };
  let resolvedClassName: string | undefined;
  let resolvedStyle: React.CSSProperties & CSSCustomProperties;

  for (const key in LAYOUT_PROPS) {
    if (key in outProps && outProps[key] !== undefined) {
      const propDef = LAYOUT_PROPS[key as LayoutPropKeys];
      const value = outProps[key];
      // @ts-expect-error: TS1224 Fix types
      if (typeof value === 'string' && propDef.values.includes(value)) {
        const shortValue = value.substring(0, 3);
        resolvedClassName = classNames(resolvedClassName, `${propDef.className}--${shortValue}`);
      } else if ('variable' in propDef) {
        resolvedClassName = classNames(resolvedClassName, propDef.className);
        // @ts-expect-error: TS1224 Fix mergeStyle props?
        resolvedStyle = mergeStyle(resolvedStyle, {
          [propDef.variable]:
            typeof value === 'number' && key !== 'flexGrow' && key !== 'flexShrink'
              ? `${value}px`
              : value,
        });
      }
      delete outProps[key];
    }
  }

  outProps.className = classNames(resolvedClassName, outProps.className);
  // @ts-expect-error: TS1224 Fix mergeStyle props?
  outProps.style = mergeStyle(resolvedStyle, outProps.style);

  return outProps;
}
