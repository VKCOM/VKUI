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
          iconLink: "source-mock",
        }}
        onClose={noop}
      />
    );

    expect(
      screen.getByTestId("test").querySelector(".Avatar")
    ).toBeInTheDocument();
  });

  it("renders no Avatar if bannerData.iconLink isn't passed", () => {
    render(<PromoBanner data-testid="test" bannerData={{}} onClose={noop} />);

    expect(
      screen.getByTestId("test").querySelector(".Avatar")
    ).not.toBeInTheDocument();
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

    expect(screen.getByTestId("test")).not.toHaveTextContent("Press Me");
  });
});
