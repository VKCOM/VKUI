import * as React from 'react';
import { getMergedSameEventsByProps } from '../helpers/getMergedSameEventsByProps';
import {
  isDOMTypeElement,
  isForwardRefElement,
  isValidNotReactFragmentElement,
} from '../lib/utils';
import type { HasRootRef } from '../types';
import { useExternRef } from './useExternRef';

type InjectProps<T> = Omit<React.HTMLAttributes<T>, keyof React.DOMAttributes<T>> &
  React.Attributes & {
    ref?: React.Ref<T>;
  };

type ExpectedReactElement<T> = React.ReactElement<HasRootRef<T> & React.DOMAttributes<T>>;

type ChildrenElement<T> =
  | ExpectedReactElement<T>
  | React.ReactText
  | React.ReactFragment
  | React.ReactPortal
  | boolean
  | null
  | undefined;

/**
 * Хук позволяет пропатчить переданный компонент так, чтобы можно было получить ссылку на его
 * DOM-элемент. Также есть возможность прокинуть дополнительные параметры.
 *
 * @param children
 * @param injectProps
 * @param externRef – полезен когда нужно прокинуть `ref` элементу выше.
 *
 * 👎 Без параметра `externRef`
 * ```ts
 * const { ref } = useSomeHook();
 * const [childRef, child] = usePatchChildren(children);
 * React.useLayoutEffect(() => {
 *   ref.current = childRef.current; // или ref.current(childRef.current)
 * }, [childRef]);
 * ```
 *
 * 👍 С параметром `externRef`
 * ```ts
 * const { ref } = useSomeHook();
 * const [childRef, child] = usePatchChildren(children, undefined, ref);
 * ```
 */
export const usePatchChildren = <ElementType extends HTMLElement = HTMLElement>(
  children?: ChildrenElement<ElementType>,
  injectProps?: InjectProps<ElementType>,
  externRef?: React.Ref<ElementType>,
): [React.MutableRefObject<ElementType | null>, ChildrenElement<ElementType> | undefined] => {
  const isValidElementResult = isValidNotReactFragmentElement(children);
  const isDOMTypeElementResult =
    isValidElementResult &&
    isDOMTypeElement<React.HTMLAttributes<ElementType>, ElementType>(children);

  const isForwardedRefElementResult =
    isValidElementResult &&
    isForwardRefElement<React.HTMLAttributes<ElementType>, ElementType>(children);

  const shouldUseRef = isDOMTypeElementResult || isForwardedRefElementResult;

  const childRef = useExternRef<ElementType>(
    shouldUseRef ? children.ref : isValidElementResult ? children.props.getRootRef : undefined,
    externRef,
  );

  const mergedEventsByInjectProps = getMergedSameEventsByProps(
    injectProps ? injectProps : {},
    isValidElementResult ? children.props : {},
  );

  const props = shouldUseRef
    ? { ref: childRef, ...injectProps, ...mergedEventsByInjectProps }
    : isValidElementResult
      ? { getRootRef: childRef, ...injectProps, ...mergedEventsByInjectProps }
      : undefined;

  return [childRef, isValidElementResult ? React.cloneElement(children, props) : children];
};
