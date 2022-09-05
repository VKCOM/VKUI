import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { baselineComponent } from "../../testing/utils";
import { Avatar, AvatarProps } from "./Avatar";
import { Icon20GiftCircleFillRed as Icon20GiftCircleFillRedLib } from "@vkontakte/icons";
import styles from "./Avatar.module.css";

const TEST_LOCATORS = {
  HOST: {
    id: "avatar",
  },
  ICON: {
    id: "test-icon",
    get selector() {
      return `[data-testid="${this.id}"]`;
    },
  },
};

const AvatarTest = (props: AvatarProps) => (
  <Avatar {...props} data-testid={TEST_LOCATORS.HOST.id} />
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

const avatar = () => screen.getByTestId(TEST_LOCATORS.HOST.id);

describe("Avatar", () => {
  baselineComponent(Avatar);

  describe("Badge", () => {
    it("Renders badge if passed", () => {
      render(<AvatarTest badge={Icon20GiftCircleFillRedTest} />);

      expect(
        avatar().querySelector(TEST_LOCATORS.ICON.selector)
      ).toBeInTheDocument();
    });

    it("Doesn't render badge if not passed", () => {
      render(<AvatarTest />);

      expect(
        avatar().querySelector(TEST_LOCATORS.ICON.selector)
      ).not.toBeInTheDocument();
    });

    it("Adds shifted class if size < 96", () => {
      render(<AvatarTest badge={Icon20GiftCircleFillRedTest} size={88} />);

      expect(
        avatar().querySelector(`.${styles["Avatar__badge--shifted"]}`)
      ).toBeInTheDocument();
    });

    it("Renders online badge if passed", () => {
      render(<AvatarTest badge="online" />);

      expect(
        avatar().querySelector(`.${styles["Avatar__badge--online"]}`)
      ).toBeInTheDocument();
    });

    it("Renders online mobile badge if passed", () => {
      render(<AvatarTest badge="online-mobile" />);

      expect(
        avatar().querySelector(`.${styles["Avatar__badge--online-mobile"]}`)
      ).toBeInTheDocument();
    });
  });
});
