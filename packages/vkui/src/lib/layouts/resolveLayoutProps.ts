import { classNames } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import { generateConstantClassName, generateVariable, generateVariableClassName } from './helpers';
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
  let resolvedStyle: React.CSSProperties | undefined;

  for (const key in LAYOUT_PROPS) {
    if (key in outProps && outProps[key] !== undefined) {
      const propDef = LAYOUT_PROPS[key as LayoutPropKeys];
      const value = outProps[key];
      const cssProperty = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      if (typeof value === 'string' && (propDef as string[]).includes(value)) {
        resolvedClassName = classNames(
          resolvedClassName,
          generateConstantClassName(cssProperty, value),
        );
      } else if (key !== 'position' && !key.startsWith('overflow')) {
        resolvedClassName = classNames(resolvedClassName, generateVariableClassName(cssProperty));
        resolvedStyle = mergeStyle(resolvedStyle, {
          [generateVariable(cssProperty)]:
            typeof value === 'number' && key !== 'flexGrow' && key !== 'flexShrink'
              ? `${value}px`
              : value,
        });
      }
      delete outProps[key];
    }
  }

  outProps.className = classNames(resolvedClassName, outProps.className);
  outProps.style = mergeStyle(resolvedStyle, outProps.style);

  return outProps;
}
