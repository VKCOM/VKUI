import React from "react";
import { ModalRoot } from "@vkui";
import { StyleGuideContext } from "../StyleGuide/StyleGuideRenderer";
import { Versions } from "../Modals/Versions";
import { Platforms } from "../Modals/Platforms";

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
