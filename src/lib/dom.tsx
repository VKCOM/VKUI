import { createContext, useContext, ComponentType } from 'react';
import { canUseDOM } from '@vkontakte/vkjs/lib/dom';
export { canUseDOM, canUseEventListeners, onDOMLoaded } from '@vkontakte/vkjs/lib/dom';

export interface DOMContextInterface {
  /**
   * @ignore
   */
  window?: Window;
  /**
   * @ignore
   */
  document?: Document;
}

export type DOMProps = DOMContextInterface;

export const getDOM = () => ({
  window: canUseDOM ? window : null,
  document: canUseDOM ? document : null,
});

export const DOMContext = createContext<DOMContextInterface>(getDOM());

export const useDOM = () => {
  const dom = useContext(DOMContext);
  return {
    window: dom.window || (canUseDOM ? window : null),
    document: dom.document || (canUseDOM ? document : null),
  };
};

export function withDOM<Props>(Component: ComponentType<Props & DOMProps>): ComponentType<Props> {
  function WithDOM(props: Props) {
    const dom = useDOM();
    return <Component {...props} {...dom} />;
  };
  return WithDOM;
}
