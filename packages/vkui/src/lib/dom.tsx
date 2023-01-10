import * as React from 'react';
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
  window: canUseDOM ? window : undefined,
  document: canUseDOM ? document : undefined,
});
/* eslint-enable no-restricted-globals */

export const DOMContext = React.createContext<DOMContextInterface>(getDOM());

export const useDOM = () => {
  return React.useContext(DOMContext);
};

export function withDOM<Props>(
  Component: React.ComponentType<Props & DOMProps>,
): React.ComponentType<Props> {
  const WithDOM = (props: Props) => {
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
