import * as React from 'react';

export interface ModalPageContextInterface {
  labelId?: string;
}

export const ModalPageContext = React.createContext<ModalPageContextInterface>({});
