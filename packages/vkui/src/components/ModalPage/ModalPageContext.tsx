import { createContext } from 'react';

export interface ModalPageContextInterface {
  labelId?: string;
}

export const ModalPageContext: React.Context<ModalPageContextInterface> =
  createContext<ModalPageContextInterface>({});
