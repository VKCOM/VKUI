import { LayoutState } from "./types";
import { HasAlign } from "../../types";

interface CalcMin extends Partial<LayoutState> {
  isCenterWithCustomWidth: boolean;
  align: HasAlign["align"];
}

export const calcMin = ({
  containerWidth = 0,
  layerWidth = 0,
  slides = [],
  viewporOffsettWidth = 0,
  align,
  isCenterWithCustomWidth,
}: CalcMin) => {
  switch (align) {
    case "left":
      return containerWidth - layerWidth;
    case "right":
      return viewporOffsettWidth - layerWidth;
    case "center":
      if (isCenterWithCustomWidth && slides.length) {
        const { coordX, width } = slides[slides.length - 1];
        return viewporOffsettWidth / 2 - coordX - width / 2;
      } else {
        return (
          viewporOffsettWidth -
          (containerWidth - viewporOffsettWidth) / 2 -
          layerWidth
        );
      }
  }
  return undefined;
};

interface CalcMax extends Partial<LayoutState> {
  isCenterWithCustomWidth: boolean;
}

export const calcMax = ({
  slides = [],
  viewporOffsettWidth = 0,
  isCenterWithCustomWidth,
}: CalcMax) => {
  if (isCenterWithCustomWidth && slides.length) {
    const { width, coordX } = slides[0];
    return viewporOffsettWidth / 2 - coordX - width / 2;
  }
  return 0;
};
