import { createContext, useContext } from 'react';

/** @private */
export type ModalContextInterface = string;

/** @private */
export const ModalContext = createContext<ModalContextInterface | null>(null);

/** @private */
export type UseModalContextResult =
  | { id: null; labelId?: undefined }
  | { id: string; labelId: string };

/** @private */
export const useModalContext = (): UseModalContextResult => {
  const id = useContext(ModalContext);
  return id === null ? { id } : { id, labelId: `${id}-label` };
};
