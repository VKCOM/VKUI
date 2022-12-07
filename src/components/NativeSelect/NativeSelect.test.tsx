import { baselineComponent } from "../../testing/utils";
import { NativeSelect } from "./NativeSelect";
import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("NativeSelect", () => {
  baselineComponent(NativeSelect);

  it("works correctly with value and onChange", () => {
    const SelectController = () => {
      const [value, setValue] = useState("0");
      return (
        <NativeSelect
          data-testid="target"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="0">Mike</option>
          <option value="1">Josh</option>
        </NativeSelect>
      );
    };

    render(<SelectController />);

    expect(screen.getByTestId<HTMLSelectElement>("target").value).toBe("0");
    userEvent.selectOptions(screen.getByTestId("target"), ["1"]);
    expect(screen.getByTestId<HTMLSelectElement>("target").value).toBe("1");
  });

  it("works correctly with pinned value", () => {
    render(
      <NativeSelect data-testid="target" value="0">
        <option value="0">Mike</option>
        <option value="1">Josh</option>
      </NativeSelect>
    );

    expect(screen.getByTestId<HTMLSelectElement>("target").value).toBe("0");
    userEvent.selectOptions(screen.getByTestId("target"), ["1"]);
    expect(screen.getByTestId<HTMLSelectElement>("target").value).toBe("0");
  });

  it("accept defaultValue", () => {
    render(
      <NativeSelect data-testid="target" defaultValue={1}>
        <option value="0">Mike</option>
        <option value="1">Josh</option>
      </NativeSelect>
    );

    expect(screen.getByTestId<HTMLSelectElement>("target").value).toBe("1");
  });
});
