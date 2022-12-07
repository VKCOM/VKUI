import * as React from "react";
import { screen, render } from "@testing-library/react";
import { SizeType } from "../../lib/adaptivity";
import { type AdaptivityProps } from "../AdaptivityProvider/AdaptivityContext";
import { baselineComponent } from "../../testing/utils";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";
import { Banner, BannerProps } from "./Banner";

const BannerTest = ({
  sizeY = SizeType.REGULAR,
  ...props
}: Pick<AdaptivityProps, "sizeY"> & BannerProps) => (
  <AdaptivityProvider sizeY={sizeY}>
    <Banner {...props} />
  </AdaptivityProvider>
);

const getTagNameByText = (text: string) =>
  screen.getByText(text).tagName.toLowerCase();

describe("Banner", () => {
  baselineComponent(Banner);

  it("[typography] header is span regardless of sizeY", () => {
    const { rerender } = render(<BannerTest header="Большой концерт" />);
    expect(getTagNameByText("Большой концерт")).toMatch("span");

    rerender(
      <BannerTest sizeY={SizeType.COMPACT} header="Маленький концерт" />
    );
    expect(getTagNameByText("Маленький концерт")).toMatch("span");
  });

  it("[typography] subheader is a span regardless of sizeY", () => {
    const { rerender } = render(<BannerTest subheader="Большой концерт" />);
    expect(getTagNameByText("Большой концерт")).toMatch("span");

    rerender(
      <BannerTest sizeY={SizeType.COMPACT} subheader="Маленький концерт" />
    );
    expect(getTagNameByText("Маленький концерт")).toMatch("span");
  });
});
