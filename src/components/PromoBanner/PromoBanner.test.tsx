import { render, screen } from "@testing-library/react";
import { baselineComponent } from "../../testing/utils";
import { PromoBanner } from "./PromoBanner";

describe("PromoBanner", () => {
  baselineComponent(PromoBanner);

  it("renders by default", () => {
    render(
      <PromoBanner
        data-testid="test"
        bannerData={{}}
        onClose={() => {
          return;
        }}
      />
    );

    expect(screen.getByTestId("test").tagName.toLowerCase()).toBe("div");
  });

  it("renders Avatar if bannerData.iconLink is passed", () => {
    render(
      <PromoBanner
        data-testid="test"
        bannerData={{
          iconLink: "source-mock",
        }}
        onClose={() => {
          return;
        }}
      />
    );

    expect(
      screen.getByTestId("test").querySelector(".Avatar")
    ).toBeInTheDocument();
  });

  it("renders no Avatar if bannerData.iconLink isn't passed", () => {
    render(
      <PromoBanner
        data-testid="test"
        bannerData={{}}
        onClose={() => {
          return;
        }}
      />
    );

    expect(
      screen.getByTestId("test").querySelector(".Avatar")
    ).not.toBeInTheDocument();
  });

  it("renders Button if bannerData.ctaText is provided", () => {
    render(
      <PromoBanner
        data-testid="test"
        bannerData={{ ctaText: "Press Me" }}
        onClose={() => {
          return;
        }}
      />
    );

    expect(screen.getByText(/Press Me/i)).toBeInTheDocument();
  });

  it("renders no Button if bannerData.ctaText is not provided", () => {
    render(
      <PromoBanner
        data-testid="test"
        bannerData={{}}
        onClose={() => {
          return;
        }}
      />
    );

    expect(
      screen.getByTestId("test").querySelector(".Button")
    ).not.toBeInTheDocument();
  });
});
