import React from "react";
import { Text, useAdaptivity, getSizeXClassName, classNames } from "@vkui";
import { TextTooltip } from "@vkui/unstable";
import { Icon16ErrorCircleOutline } from "@vkontakte/icons";
import TypeRenderer from "../Type/TypeRenderer";
import "./ComplexType.css";

export const ComplexTypeRenderer = ({ name, raw }) => {
  const { sizeX } = useAdaptivity();

  return (
    <React.Fragment>
      <TypeRenderer
        className={getSizeXClassName("ComplexTypeTypeRenderer", sizeX)}
      >
        {raw}
      </TypeRenderer>
      <TextTooltip
        className={classNames(
          "ComplexTypeDropdown",
          getSizeXClassName("ComplexTypeDropdown", sizeX)
        )}
        placement="right"
        text={raw}
      >
        <Text className="ComplexType">
          <span className="ComplexType__name">{name}</span>
          <Icon16ErrorCircleOutline className="ComplexType__icon" />
        </Text>
      </TextTooltip>
    </React.Fragment>
  );
};

export default ComplexTypeRenderer;
