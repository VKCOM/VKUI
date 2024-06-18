export interface ModalPageContextInterface {
  labelId?: string;
}

export const ModalPageContext = React.createContext<ModalPageContextInterface>({});
