import * as React from 'react';
import { ModalRoot } from '@vkui';
import { Themes } from '../Modals/Themes';
import { Versions } from '../Modals/Versions';
import { StyleGuideContext } from './StyleGuideRenderer';

export function StyleGuideModal(props) {
  const { setActiveModal } = React.useContext(StyleGuideContext);
  const onClose = () => setActiveModal(null);

  return (
    <ModalRoot {...props} onClose={onClose}>
      <Versions id="versions" />
      <Themes id="themes" />
    </ModalRoot>
  );
}
