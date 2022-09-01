import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { baselineComponent } from "../../testing/utils";
import { Image, ImageProps } from "./Image";
import { Icon20GiftCircleFillRed as Icon20GiftCircleFillRedLib } from "@vkontakte/icons";
import styles from "./Image.module.css";

const TEST_LOCATORS = {
  HOST: {
    id: "image",
  },
  ICON: {
    id: "test-icon",
    get selector() {
      return `[data-testid="${this.id}"]`;
    },
  },
};

const ImageTest = (props: ImageProps) => (
  <Image {...props} data-testid={TEST_LOCATORS.HOST.id} />
);

const Icon20GiftCircleFillRedTest = (
  props: React.ComponentProps<typeof Icon20GiftCircleFillRedLib>
) => {
  return (
    <Icon20GiftCircleFillRedLib
      {...props}
      data-testid={TEST_LOCATORS.ICON.id}
    />
  );
};

const image = () => screen.getByTestId(TEST_LOCATORS.HOST.id);

describe("Image", () => {
  baselineComponent(Image);

  describe("Badge", () => {
    it("Renders badge if passed", () => {
      render(<ImageTest badge={Icon20GiftCircleFillRedTest} />);

      expect(
        image().querySelector(TEST_LOCATORS.ICON.selector)
      ).toBeInTheDocument();
    });

    it("Doesn't render badge if not passed", () => {
      render(<ImageTest />);

      expect(
        image().querySelector(TEST_LOCATORS.ICON.selector)
      ).not.toBeInTheDocument();
    });

    it("Adds shifted class if size < 96", () => {
      render(<ImageTest badge={Icon20GiftCircleFillRedTest} size={88} />);

      expect(
        image().querySelector(`.${styles["Image__badge--shifted"]}`)
      ).toBeInTheDocument();
    });
  });
});
