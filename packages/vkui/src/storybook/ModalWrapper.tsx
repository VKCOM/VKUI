import React from 'react';
import { ModalRoot } from '../components/ModalRoot/ModalRootAdaptive';
import { SplitLayout } from '../components/SplitLayout/SplitLayout';
import { SplitCol } from '../components/SplitCol/SplitCol';
import { Button } from '../components/Button/Button';
import { Placeholder } from '../components/Placeholder/Placeholder';

export const ModalWrapper = ({
  children,
  modalId,
}: {
  children: React.ReactNode;
  modalId: string;
}) => {
  const [activeModal, setActiveModal] = React.useState<string | null>(modalId);

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
      {children}
    </ModalRoot>
  );

  return (
    <SplitLayout modal={modal}>
      <SplitCol>
        <Placeholder stretched>
          <Button onClick={() => setActiveModal(modalId)}>Открыть</Button>
        </Placeholder>
      </SplitCol>
    </SplitLayout>
  );
};
