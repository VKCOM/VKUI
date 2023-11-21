import * as React from 'react';
import { getMergedSameEventsByProps } from '../helpers/getMergedSameEventsByProps';
import { isDOMTypeElement, isValidNotReactFragmentElement } from '../lib/utils';
import { warnOnce } from '../lib/warnOnce';
import type { HasRootRef } from '../types';
import { useEffectDev } from './useEffectDev';
import { useExternRef } from './useExternRef';

const warn = warnOnce('usePatchChildrenRef');

type InjectProps<T> = Omit<React.HTMLAttributes<T>, keyof React.DOMAttributes<T>> & {
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

export const usePatchChildrenRef = <ElementType extends HTMLElement = HTMLElement>(
  children?: ChildrenElement<ElementType>,
  injectProps?: InjectProps<ElementType>,
  refHook?: React.Ref<ElementType>,
): [React.MutableRefObject<ElementType | null>, ChildrenElement<ElementType> | undefined] => {
  const isValidElementResult = isValidNotReactFragmentElement(children);
  const isDOMTypeElementResult =
    isValidElementResult &&
    isDOMTypeElement<React.HTMLAttributes<ElementType>, ElementType>(children);

  const childRef = useExternRef<ElementType>(
    isDOMTypeElementResult
      ? children.ref
      : isValidElementResult
      ? children.props.getRootRef
      : undefined,
    refHook,
  );

  const mergedEventsByInjectProps = getMergedSameEventsByProps(
    injectProps ? injectProps : {},
    isValidElementResult ? children.props : {},
  );

  const props = isDOMTypeElementResult
    ? { ref: childRef, ...injectProps, ...mergedEventsByInjectProps }
    : isValidElementResult
    ? { getRootRef: childRef, ...injectProps, ...mergedEventsByInjectProps }
    : undefined;

  useEffectDev(() => {
    if (!childRef.current) {
      warn(
        'Кажется, в children передан компонент, который не поддерживает свойство getRootRef. Мы не можем получить ссылку на корневой dom-элемент этого компонента',
        'error',
      );
    }
  }, [isValidElementResult ? children.type : null, childRef]);

  return [childRef, isValidElementResult ? React.cloneElement(children, props) : children];
};
