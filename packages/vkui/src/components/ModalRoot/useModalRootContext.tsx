import * as React from 'react';
import { ModalRootContext, type ModalRootContextInterface } from './ModalRootContext';

export const useModalRootContext = (): ModalRootContextInterface =>
  React.useContext(ModalRootContext);
