'use client';

import { ModalCard } from '../../components/ModalCard/ModalCard';
import { ModalPage } from '../../components/ModalPage/ModalPage';
import { ModalRoot } from '../../components/ModalRoot/ModalRoot';
import { type ModalRootProps } from '../../components/ModalRoot/types';
import { type ModalRootItem } from './types';

type ContextHolderProps = Omit<ModalRootProps, 'activeModal' | 'children'> & {
  modals: ModalRootItem[];
  activeModal: string | null;
};

export function ContextHolder({ modals, ...modalRootProps }: ContextHolderProps) {
  return (
    <ModalRoot {...modalRootProps}>
      {modals.map((modalData) => {
        switch (modalData.type) {
          case 'custom-page':
          case 'custom-card':
            const Modal = modalData.component;
            return (
              <Modal
                key={modalData.id}
                id={modalData.id}
                modalProps={modalData.modalProps}
                {...modalData.additionalProps}
                update={modalData.update}
                close={modalData.close}
              />
            );
          case 'card':
            return <ModalCard key={modalData.id} {...modalData} />;
          case 'page':
            return <ModalPage key={modalData.id} {...modalData} />;
        }
      })}
    </ModalRoot>
  );
}
