import React, { createContext, useContext, ComponentType } from 'react';
import { canUseDOM } from '@vkontakte/vkjs/lib/dom';
export { canUseDOM, canUseEventListeners, onDOMLoaded } from '@vkontakte/vkjs/lib/dom';

export interface DOMContextInterface {
  window: Window;
  document: Document;
}

export const DOMContext = createContext<DOMContextInterface>({
  window: canUseDOM ? window : null,
  document: canUseDOM ? document : null,
});

export const useDOM = () => {
  const dom = useContext(DOMContext);
  return {
    window: dom.window || canUseDOM && window,
    document: dom.document || canUseDOM && document,
  };
};

export const withDOM = <P extends DOMContextInterface>(Component: ComponentType<P>) => (props: Omit<P, keyof DOMContextInterface>) => {
  const dom = useDOM();
  return <Component {...props as P} {...dom} />;
};
