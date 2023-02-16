import React from 'react';
import { ModalRoot } from '@vkui';
import { Platforms } from '../Modals/Platforms';
import { Versions } from '../Modals/Versions';
import { StyleGuideContext } from './StyleGuideRenderer';

export function StyleGuideModal(props) {
  const { setActiveModal } = React.useContext(StyleGuideContext);
  const onClose = () => setActiveModal(null);

  return (
    <ModalRoot {...props} onClose={onClose}>
      <Versions id="versions" />
      <Platforms id="platforms" />
    </ModalRoot>
  );
}
