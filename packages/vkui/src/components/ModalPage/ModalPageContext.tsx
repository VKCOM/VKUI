import { createContext } from 'react';

export interface ModalPageContextInterface {
  labelId?: string;
}

export const ModalPageContext = createContext<ModalPageContextInterface>({});
