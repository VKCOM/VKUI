import { screen, render } from "@testing-library/react";
import { baselineComponent } from "../../testing/utils";
import { SizeType } from "../AdaptivityProvider/AdaptivityContext";
import { SimpleCell } from "./SimpleCell";

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
});
