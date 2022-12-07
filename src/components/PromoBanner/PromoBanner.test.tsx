import React from "react";
import { render, screen } from "@testing-library/react";
import { noop } from "../../lib/utils";
import { baselineComponent } from "../../testing/utils";
import { PromoBanner } from "./PromoBanner";

describe("PromoBanner", () => {
  baselineComponent(PromoBanner);

  it("renders by default", () => {
    render(<PromoBanner data-testid="test" bannerData={{}} onClose={noop} />);

    expect(screen.getByTestId("test")).toBeVisible();
  });

  it("renders Avatar if bannerData.iconLink is passed", () => {
    render(
      <PromoBanner
        data-testid="test"
        bannerData={{
          iconLink: "#",
        }}
        onClose={noop}
      />
    );

    const container = screen.getByTestId("test");
    const avatar = screen.queryByTestId("avatar");

    expect(container).toContainElement(avatar);
  });

  it("renders no Avatar if bannerData.iconLink isn't passed", () => {
    render(<PromoBanner data-testid="test" bannerData={{}} onClose={noop} />);

    const container = screen.getByTestId("test");
    const avatar = screen.queryByTestId("avatar");

    expect(container).not.toContainElement(avatar);
  });

  it("renders Button if bannerData.ctaText is passed", () => {
    render(
      <PromoBanner
        data-testid="test"
        bannerData={{ ctaText: "Press Me" }}
        onClose={noop}
      />
    );

    expect(screen.getByTestId("test")).toHaveTextContent("Press Me");
  });

  it("renders no Button if bannerData.ctaText isn't passed", () => {
    render(<PromoBanner data-testid="test" bannerData={{}} onClose={noop} />);

    const container = screen.getByTestId("test");
    const button = screen.queryByTestId("button-ctaText");

    expect(container).not.toContainElement(button);
  });
});
