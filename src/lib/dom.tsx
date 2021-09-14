import { createContext, useContext, ComponentType, FC } from 'react';
import { canUseDOM } from '@vkontakte/vkjs';
export { canUseDOM, canUseEventListeners, onDOMLoaded } from '@vkontakte/vkjs';

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

/* eslint-disable no-restricted-globals */
export const getDOM = () => ({
  window: canUseDOM ? window : null,
  document: canUseDOM ? document : null,
});
/* eslint-enable no-restricted-globals */

export const DOMContext = createContext<DOMContextInterface>(getDOM());

export const useDOM = () => {
  return useContext(DOMContext);
};

export function withDOM<Props>(Component: ComponentType<Props & DOMProps>) {
  const WithDOM: FC<Props> = (props: Props) => {
    const dom = useDOM();
    return <Component {...props} {...dom} />;
  };
  return WithDOM;
}

export function blurActiveElement(document: Document | undefined) {
  if (document && document.activeElement) {
    (document.activeElement as HTMLElement).blur();
  }
}
