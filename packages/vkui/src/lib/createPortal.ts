import * as ReactDOM from 'react-dom';
import { getDocumentBody } from './dom';

export const createPortal = <T extends Element | DocumentFragment | null>(
  children: React.ReactNode,
  container?: T,
  key?: null | string,
): React.ReactPortal => {
  const resolvedContainer = container ? container : getDocumentBody();
  return resolvedContainer && ReactDOM.createPortal(children, resolvedContainer, key);
};
