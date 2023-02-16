import * as React from 'react';
import { warnOnce } from '../lib/warnOnce';
import { useEffectDev } from './useEffectDev';
import { useExternRef } from './useExternRef';

type ChildrenElement<T> = React.ReactElement<{ getRootRef?: React.Ref<T> }>;

const isDOMTypeElement = (element: React.ReactElement): element is React.DOMElement<any, any> => {
  return typeof element.type === 'string';
};

const warn = warnOnce('usePatchChildrenRef');

export const usePatchChildrenRef = <T = HTMLElement>(
  children?: ChildrenElement<T>,
): [React.MutableRefObject<T | null>, ChildrenElement<T> | undefined] => {
  const childRef =
    React.isValidElement(children) &&
    (isDOMTypeElement(children) ? (children.ref as React.Ref<T>) : children.props.getRootRef);
  const patchedRef = useExternRef<T>(childRef);

  useEffectDev(() => {
    if (!patchedRef.current) {
      warn(
        'Кажется, в children передан компонент, который не поддерживает свойство getRootRef. Мы не можем получить ссылку на корневой dom-элемент этого компонента',
        'error',
      );
    }
  }, [children?.type, patchedRef]);

  return [
    patchedRef,
    React.isValidElement(children)
      ? React.cloneElement(children, {
          [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
        })
      : children,
  ];
};
