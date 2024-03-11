import * as React from 'react';
import { PlatformType } from './lib/platform';

export type AnyFunction = (...args: any[]) => any;

export type AlignType = 'left' | 'center' | 'right';

export interface HasChildren {
  children?: React.ReactNode;
}

export type HasDataAttribute = Record<
  `data-${string}`,
  string | number | boolean | undefined | null
>;

export interface HasRootRef<T> {
  getRootRef?: React.Ref<T>;
}

export interface HasRef<T> {
  getRef?: React.Ref<T>;
}

export interface HasComponent {
  Component?: React.ElementType;
}

export interface HasAlign {
  align?: AlignType;
}

export interface HasPlatform {
  /**
   * @ignore
   */
  platform?: PlatformType;
}

export interface Version {
  major: number;
  minor?: number;
  patch?: number;
}

/**
 * Тип содержит атрибуты, которые применяются только для `<a>`
 *
 * @see {@link https://developer.mozilla.org/ru/docs/Web/HTML/Element/A &lt;a&gt; - HTML | MDN}
 */
export type AnchorHTMLAttributesOnly = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof React.HTMLAttributes<HTMLAnchorElement>
>;

/**
 * Проверяет, является ли тип подтипом другого.
 *
 * В TS не реализовано.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/12936}
 */
export type Exact<A, B> = A extends B ? B : never;

/**
 * Для возможности указывать css custom properties
 */
export type CSSCustomProperties<T extends string | undefined = string> = Record<`--${string}`, T>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Nothing {}

/**
 * Автозаполнение для типов
 *
 * @example
 * LiteralUnion<'foo' | 'bar', string>
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/29729}
 */
export type LiteralUnion<Union, Type> = Union | (Type & Nothing);

export type HTMLAttributesWithRootRef<T> = React.HTMLAttributes<T> & HasRootRef<T>;

export type ValuesOfObject<T> = T[keyof T];

export type GetPropsWithFunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

export type PickOnlyFunctionProps<T> = Pick<T, GetPropsWithFunctionKeys<T>>;

/**
 * Даёт возможность поймать ошибку, если в компонент передаются лишние свойства.
 *
 * @example
 * // пример использования
 * const nativeProps: HasOnlyExpectedProps<typeof restProps, NativeSelectProps> = restProps;
 *
 * @example
 * // расширенный пример
 * type SelectProps {
 *   mode: string,
 *   multiline: boolean;
 *   selectType?: SelectType;
 * }
 *
 * type NativeSelectProps {
 *   selectType?: SelectType;
 * }
 *
 * const selectProps: SelectProps = {
 *   mode: "card",
 *   multiline: true,
 *   selectType: "default",
 * }
 *
 * // будет ошибка, так как multiline в NativeSelectProps нет
 * const {mode, ...restProps} = selectProps;
 * const nativeProps: HasOnlyExpectedProps<typeof restProps, NativeSelectProps> = restProps;
 *
 * // а вот так ошибки не будет, так как restProps больше не содержит multiline
 * const {mode, multiline, ...restProps} = selectProps;
 * const nativeProps: HasOnlyExpectedProps<typeof restProps, NativeSelectProps> = restProps;
 */
export type HasOnlyExpectedProps<Props, ExpectedProps> = {
  [K in keyof Props]: K extends keyof ExpectedProps ? ExpectedProps[K] : never;
};
