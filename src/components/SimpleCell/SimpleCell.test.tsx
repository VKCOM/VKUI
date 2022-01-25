import { screen, render } from "@testing-library/react";
import { baselineComponent } from "../../testing/utils";
import { SizeType } from "../AdaptivityProvider/AdaptivityContext";
import SimpleCell from "./SimpleCell";
import AdaptivityProvider from "../AdaptivityProvider/AdaptivityProvider";

describe("SimpleCell", () => {
  baselineComponent(SimpleCell);

  it("[typography] indicator is a span regardless of sizeY", () => {
    const { rerender } = render(
      <SimpleCell sizeY={SizeType.REGULAR} indicator="Русский">
        Язык
      </SimpleCell>
    );
    expect(screen.getByText("Русский").tagName.toLowerCase()).toMatch("span");

    rerender(
      <SimpleCell sizeY={SizeType.COMPACT} indicator="English">
        Language
      </SimpleCell>
    );
    expect(screen.getByText("English").tagName.toLowerCase()).toMatch("span");
  });

  describe("Adaptivity", () => {
    it("Set SizeX to regular", () => {
      const innerWidth = window.innerWidth;

      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1600,
      });

      render(
        <AdaptivityProvider>
          <SimpleCell
            data-testid="simple-cell"
            sizeY={SizeType.REGULAR}
            indicator="Русский"
          >
            Язык
          </SimpleCell>
        </AdaptivityProvider>
      );
      expect(screen.getByTestId("simple-cell")).toHaveClass(
        " Tappable--sizeX-regular"
      );

      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: innerWidth,
      });
    });
  });
});
