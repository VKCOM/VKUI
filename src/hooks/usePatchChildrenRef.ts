import * as React from 'react';
import { useExternRef } from './useExternRef';

const isDOMTypeElement = (element: React.ReactElement): element is React.DOMElement<any, any> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

export const usePatchChildrenRef = (children: React.ReactNode): [React.MutableRefObject<HTMLElement>, React.ReactNode] => {
  const childRef = React.isValidElement(children) && (isDOMTypeElement(children) ? children.ref : children.props.getRootRef);
  const patchedRef = useExternRef<HTMLElement>(childRef);
  return [patchedRef, React.isValidElement(children) ? React.cloneElement(children, {
    [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
  }) : children];
};
