import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { baselineComponent, imgOnlyAttributes } from "../../testing/utils";
import { ImageBase, ImageBaseProps } from "./ImageBase";
import { Icon20GiftCircleFillRed as Icon20GiftCircleFillRedLib } from "@vkontakte/icons";

const TEST_LOCATORS = {
  HOST: {
    id: "image-base",
  },
  ICON: {
    id: "test-icon",
    get selector() {
      return `[data-testid="${this.id}"]`;
    },
  },
};

const ImageBaseTest = (props: ImageBaseProps) => (
  <ImageBase {...props} data-testid={TEST_LOCATORS.HOST.id} />
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

const imageBase = () => screen.getByTestId(TEST_LOCATORS.HOST.id);
const img = () => imageBase().querySelector("img");

describe("ImageBase", () => {
  baselineComponent(ImageBase);

  describe("Image", () => {
    it("Renders img if src is passed", () => {
      render(<ImageBaseTest src="#" />);

      expect(img()).toBeInTheDocument();
    });

    it("Does not render img if there is no src", () => {
      render(<ImageBaseTest />);

      expect(img()).not.toBeInTheDocument();
    });

    it("Show fallback icon if there is no src", () => {
      render(<ImageBaseTest FallbackIcon={Icon20GiftCircleFillRedTest} />);

      expect(
        imageBase().querySelector(TEST_LOCATORS.ICON.selector)
      ).toBeInTheDocument();
    });

    it("Show children instead fallback icon if there is no src", () => {
      const CHILDREN = "42";
      render(
        <ImageBaseTest FallbackIcon={Icon20GiftCircleFillRedTest}>
          {CHILDREN}
        </ImageBaseTest>
      );

      expect(imageBase()).toHaveTextContent(CHILDREN);
      expect(
        imageBase().querySelector(TEST_LOCATORS.ICON.selector)
      ).not.toBeInTheDocument();
    });

    it("Passes ref to img", () => {
      const refCallback = jest.fn();
      render(<ImageBaseTest src="#" getRef={refCallback} />);

      expect(refCallback).toBeCalled();
    });

    it("Passes all img attributes to img", () => {
      render(<ImageBaseTest {...imgOnlyAttributes} />);

      Object.keys(imgOnlyAttributes).forEach((attr) => {
        expect(img()).toHaveAttribute(attr);
      });
    });
  });

  describe("Badge", () => {
    it("Renders badge if passed", () => {
      render(<ImageBaseTest badge={{ Icon: Icon20GiftCircleFillRedTest }} />);

      expect(
        imageBase().querySelector(TEST_LOCATORS.ICON.selector)
      ).toBeInTheDocument();
    });

    it("Doesn't render badge if not passed", () => {
      render(<ImageBaseTest />);

      expect(
        imageBase().querySelector(TEST_LOCATORS.ICON.selector)
      ).not.toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    it("Renders overlay icon if passed", () => {
      render(<ImageBaseTest overlay={{ Icon: Icon20GiftCircleFillRedTest }} />);

      expect(
        imageBase().querySelector(TEST_LOCATORS.ICON.selector)
      ).toBeInTheDocument();
    });
  });
});
