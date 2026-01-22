import { classNames } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import { generateConstantClassName, generateVariable, generateVariableClassName } from './helpers';
import { LAYOUT_PROPS, type LayoutPropKeys } from './layoutProps';
import type { LayoutProps } from './types';

const SYSTEM_PADDING_VERTICAL = 'var(--vkui--size_base_padding_vertical--regular)';
const SYSTEM_PADDING_HORIZONTAL = 'var(--vkui--size_base_padding_horizontal--regular)';

export type ComponentProps = Partial<LayoutProps> & {
  className?: string;
  style?: React.CSSProperties;
} & {
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

  if (outProps.padding === 'system') {
    outProps.paddingBlock = SYSTEM_PADDING_VERTICAL;
    outProps.paddingInline = SYSTEM_PADDING_HORIZONTAL;
    delete outProps.padding;
  }

  for (const key in LAYOUT_PROPS) {
    if (key in outProps && outProps[key] !== undefined) {
      const propDef = LAYOUT_PROPS[key as LayoutPropKeys];
      const value = outProps[key];
      const cssProperty = key.replace(/([A-Z])/g, '-$1').toLowerCase();

      if (value === 'system' && key.startsWith('padding')) {
        let systemValue: string;
        if (key === 'paddingBlock' || key === 'paddingBlockStart' || key === 'paddingBlockEnd') {
          systemValue = SYSTEM_PADDING_VERTICAL;
        } else if (
          key === 'paddingInline' ||
          key === 'paddingInlineStart' ||
          key === 'paddingInlineEnd'
        ) {
          systemValue = SYSTEM_PADDING_HORIZONTAL;
        } else {
          systemValue = value;
        }

        resolvedClassName = classNames(resolvedClassName, generateVariableClassName(cssProperty));
        resolvedStyle = mergeStyle(resolvedStyle, {
          [generateVariable(cssProperty)]: systemValue,
        });
      } else if (typeof value === 'string' && (propDef as string[]).includes(value)) {
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
