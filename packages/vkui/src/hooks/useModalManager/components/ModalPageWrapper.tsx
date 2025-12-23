import { ModalPage } from '../../../components/ModalPage/ModalPage';
import { type CustomModalProps, type OpenModalPageProps } from '../types';

export const ModalPageWrapper = ({ modalProps }: CustomModalProps<OpenModalPageProps>) => {
  return <ModalPage {...modalProps} />;
};
