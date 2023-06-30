import React from 'react';
import { Button } from '../components/Button/Button';
import { ModalRoot } from '../components/ModalRoot/ModalRootAdaptive';
import { Placeholder } from '../components/Placeholder/Placeholder';
import { SplitCol } from '../components/SplitCol/SplitCol';
import { SplitLayout } from '../components/SplitLayout/SplitLayout';

export const ModalWrapper = ({
  children,
  modalId,
}: {
  children: React.ReactElement | Iterable<React.ReactElement>;
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
