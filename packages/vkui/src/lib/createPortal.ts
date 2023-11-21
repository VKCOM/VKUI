import * as ReactDOM from 'react-dom';
import { getDocumentBody } from './dom';

export const createPortal = (
  children: React.ReactNode,
  container?: Element | DocumentFragment,
  key?: null | string,
) => {
  const resolvedContainer = container ? container : getDocumentBody();
  return resolvedContainer && ReactDOM.createPortal(children, resolvedContainer, key);
};
