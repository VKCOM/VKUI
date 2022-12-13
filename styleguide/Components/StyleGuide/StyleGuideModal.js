import React from "react";
import { ModalRoot, SimpleCell, Div } from "@vkui";
import { StyleGuideContext } from "../StyleGuide/StyleGuideRenderer";

const versions = [];

fetch("https://vkcom.github.io/VKUI/versions.json")
  .then((response) => response.json())
  .then((data) => {
    versions.push(...data);
  })
  .catch(console.error);

function Versions({ id }) {
  return (
    <ModalPage id={id} header={<ModalPageHeader>Версии</ModalPageHeader>}>
      <Div>
        {versions.map((version) => (
          <SimpleCell
            key={version}
            href={`https://vkcom.github.io/VKUI/${version}${location.hash}`}
            target="_blank"
          >
            {version}
          </SimpleCell>
        ))}
      </Div>
    </ModalPage>
  );
}

export function StyleGuideModal(props) {
  const { setActiveModal } = React.useContext(StyleGuideContext);
  const onClose = () => setActiveModal(null);

  return (
    <ModalRoot {...props} onClose={onClose}>
      <Versions id="versions" />
    </ModalRoot>
  );
}
