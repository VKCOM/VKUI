'use client';

import * as React from 'react';
import { Button } from '../components/Button/Button';
import { ModalRoot } from '../components/ModalRoot/ModalRoot';
import { Placeholder } from '../components/Placeholder/Placeholder';

export const ModalWrapper = ({
  children,
  modalId,
}: {
  children: React.ReactElement | Iterable<React.ReactElement>;
  modalId: string | null;
}) => {
  const [activeModal, setActiveModal] = React.useState<string | null>(modalId);

  return (
    <React.Fragment>
      <Placeholder stretched>
        <Button onClick={() => setActiveModal(modalId)}>Открыть</Button>
      </Placeholder>

      <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
        {children}
      </ModalRoot>
    </React.Fragment>
  );
};
