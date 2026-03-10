import { ModalCard } from '../../../components/ModalCard/ModalCard';
import type { CustomModalProps, OpenModalCardProps } from '../types';

export const ModalCardWrapper = ({ modalProps }: CustomModalProps<OpenModalCardProps>) => {
  return <ModalCard {...modalProps} />;
};
