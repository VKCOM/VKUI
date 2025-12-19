'use client';

import * as React from 'react';
import { Button } from '../components/Button/Button';
import { Placeholder } from '../components/Placeholder/Placeholder';
import {
  type CustomModalProps,
  type OpenModalCardProps,
  type OpenModalPageProps,
  useModalManager,
} from '../hooks/useModalManager';

export const ModalWrapper = <T extends OpenModalCardProps | OpenModalPageProps>({
  type,
  customModal,
}: {
  type: T extends OpenModalCardProps ? 'card' : 'page';
  customModal: React.ComponentType<CustomModalProps<T>>;
}) => {
  const [modalsApi, modalsHolder] = useModalManager();

  return (
    <React.Fragment>
      <Placeholder stretched>
        <Button
          onClick={() =>
            type === 'card'
              ? modalsApi.openCustomModalCard(
                  customModal as unknown as React.ComponentType<
                    CustomModalProps<OpenModalCardProps>
                  >,
                )
              : modalsApi.openCustomModalPage(
                  customModal as unknown as React.ComponentType<
                    CustomModalProps<OpenModalPageProps>
                  >,
                )
          }
        >
          Открыть
        </Button>
      </Placeholder>
      {modalsHolder}
    </React.Fragment>
  );
};
