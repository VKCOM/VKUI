import { baselineComponent, imgOnlyAttributes } from "../../testing/utils";
import { render, screen } from "@testing-library/react";
import { Avatar, AvatarProps } from "./Avatar";
import { Icon20GiftCircleFillRed } from "@vkontakte/icons";

const AvatarTest = (props: AvatarProps) => (
  <Avatar {...props} data-testid="avatar" />
);

const avatar = () => screen.getByTestId("avatar");
const img = () => avatar().querySelector("img");

describe("Avatar", () => {
  baselineComponent(Avatar);

  describe("Image", () => {
    it("Renders img if src is passed", () => {
      render(<AvatarTest src="#" />);

      expect(img()).toBeInTheDocument();
    });

    it("does not render img if there is no src", () => {
      render(<AvatarTest />);

      expect(img()).not.toBeInTheDocument();
    });

    it("Passes ref to img", () => {
      const refCallback = jest.fn();
      render(<AvatarTest src="#" getRef={refCallback} />);

      expect(refCallback).toBeCalled();
    });

    it("Passes all img attributes to img", () => {
      render(<AvatarTest src="#" {...imgOnlyAttributes} />);

      Object.keys(imgOnlyAttributes).forEach((attr) => {
        expect(img()).toHaveAttribute(attr);
      });
    });
  });

  describe("Badge", () => {
    it("Renders badge if passed", () => {
      render(
        <AvatarTest
          badge={<Icon20GiftCircleFillRed className="test-badge" />}
        />
      );

      expect(avatar().querySelector(".test-badge")).toBeInTheDocument();
    });

    it("Doesn't render badge if not passed", () => {
      render(<AvatarTest />);

      expect(avatar().querySelector(".Avatar__badge")).not.toBeInTheDocument();
    });

    it("Adds large class if size >= 96", () => {
      render(<AvatarTest badge={<Icon20GiftCircleFillRed />} size={96} />);

      expect(
        avatar().querySelector(".Avatar__badge--large")
      ).toBeInTheDocument();
    });

    it("Doesn\t render badge shadow if passed online badge", () => {
      render(<AvatarTest badge="online" size={96} />);

      expect(
        avatar().querySelector(".Avatar__badge--shadow")
      ).not.toBeInTheDocument();
    });

    it("Doesn\t render badge shadow if passed online badge", () => {
      render(<AvatarTest badge="online" size={96} />);

      expect(
        avatar().querySelector(".Avatar__badge--shadow")
      ).not.toBeInTheDocument();
    });

    it("Renders online badge if passed", () => {
      render(<AvatarTest badge="online" />);

      expect(
        avatar().querySelector(".Avatar__badge-online")
      ).toBeInTheDocument();
    });

    it("Renders online mobile badge if passed", () => {
      render(<AvatarTest badge="online-mobile" />);

      expect(
        avatar().querySelector(".Avatar__badge-online-mobile")
      ).toBeInTheDocument();
    });
  });

  describe("Overlay", () => {
    it("Renders overlay icon if passed", () => {
      render(<AvatarTest overlayIcon={<Icon20GiftCircleFillRed />} />);

      expect(avatar().querySelector(".Avatar__overlay")).toBeInTheDocument();
    });
  });
});
