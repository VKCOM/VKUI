import * as React from 'react';
import { ModalRootContext, ModalRootContextInterface } from './ModalRootContext';

export const useModalRootContext = (): ModalRootContextInterface =>
  React.useContext(ModalRootContext);
