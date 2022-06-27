import { screen, render } from "@testing-library/react";
import { withAdaptivity } from "./withAdaptivity";

describe("withAdaptivity", () => {
  it("Doesn't set sizeX if not passed in config", () => {
    const Component = withAdaptivity(
      ({ sizeX }) => <div data-testid="component" data-sizex={sizeX} />,
      {}
    );

    render(<Component />);
    expect(screen.getByTestId("component").dataset.sizex).toEqual(undefined);
  });
});
