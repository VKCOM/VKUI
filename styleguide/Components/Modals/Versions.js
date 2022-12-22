import React from "react";
import { SimpleCell } from "@vkui";
import { useFetch } from "./useFetch";

export function Versions({ id }) {
  const { data, error } = useFetch(
    "https://vkcom.github.io/VKUI/versions.json"
  );

  return (
    <ModalPage id={id} header={<ModalPageHeader>Версии</ModalPageHeader>}>
      {error && <Div>Произошла ошибка</Div>}
      {!data && <PanelSpinner />}
      {data &&
        data.map((version) => (
          <SimpleCell
            key={version}
            href={`https://vkcom.github.io/VKUI/${version}${location.hash}`}
            target="_blank"
          >
            {version}
          </SimpleCell>
        ))}
    </ModalPage>
  );
}
