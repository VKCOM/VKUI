/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';
import { Insets } from '@vkontakte/vk-bridge';
import { PlatformType } from './lib/platform';

export type AnyFunction = (...args: any[]) => any;

export type AlignType = 'left' | 'center' | 'right';

export interface HasChildren {
  children?: React.ReactNode;
}

export interface HasRootRef<T> {
  getRootRef?: React.Ref<T>;
}

export interface HasRef<T> {
  getRef?: React.Ref<T>;
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

export interface HasInsets {
  /**
   * @ignore
   */
  insets?: Partial<Insets>;
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
 * Типы для полиморфных компонентов, чей рутовый элемент
 * может поменяться через `Component={Component}`.
 *
 * Спасибо MUI за вдохновение.
 */

export interface HasComponent<T extends React.ElementType = React.ElementType> {
  /**
   * Подменяет рутовый элемент компонента.
   */
  Component?: T;
}

type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

interface ComponentTypeMap {
  props: {};
  defaultComponent: React.ElementType;
}

type ComponentProps<M extends ComponentTypeMap> = M['props'];

type HasComponentTypeMap<C extends React.ElementType, P = {}> = {
  props: P;
  defaultComponent: C;
};

type PolymorphicComponentProps<
  M extends ComponentTypeMap,
  C extends React.ElementType,
> = ComponentProps<M> &
  DistributiveOmit<React.ComponentPropsWithoutRef<C>, keyof ComponentProps<M>> &
  HasChildren &
  HasComponent<C>;

type DefaultComponentProps<M extends ComponentTypeMap> = ComponentProps<M> &
  DistributiveOmit<React.ComponentPropsWithoutRef<M['defaultComponent']>, keyof ComponentProps<M>> &
  HasChildren &
  HasComponent;

export type HasComponentProps<C extends React.ElementType, P extends {} = {}> =
  | (PolymorphicComponentProps<HasComponentTypeMap<C, DistributiveOmit<P, keyof HasComponent>>, C> &
      DistributiveOmit<P, keyof HasComponent>)
  | (DefaultComponentProps<HasComponentTypeMap<C, DistributiveOmit<P, keyof HasComponent>>> &
      DistributiveOmit<P, keyof HasComponent>);
