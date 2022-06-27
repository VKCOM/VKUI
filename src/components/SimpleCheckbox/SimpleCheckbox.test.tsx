import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { baselineComponent } from "../../testing/utils";

import { SimpleCheckbox } from "./SimpleCheckbox";

describe("SimpleCheckbox", () => {
  baselineComponent(SimpleCheckbox);

  describe("determinated mode", () => {
    describe("works controlled", () => {
      const CheckboxController = () => {
        const [checked, setChecked] = useState(false);
        return (
          <SimpleCheckbox
            data-testid="simple-checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        );
      };

      it("respects outer value", () => {
        const { rerender } = render(
          <SimpleCheckbox data-testid="simple-checkbox" checked />
        );
        expect(screen.getByRole("checkbox")).toBeChecked();
        rerender(
          <SimpleCheckbox data-testid="simple-checkbox" checked={false} />
        );
        expect(screen.getByRole("checkbox")).not.toBeChecked();
      });

      it("handles change", () => {
        render(<CheckboxController />);
        expect(screen.getByRole("checkbox")).not.toBeChecked();
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByRole("checkbox")).toBeChecked();
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByRole("checkbox")).not.toBeChecked();
      });

      it("does not change without onChange", () => {
        render(<SimpleCheckbox data-testid="simple-checkbox" checked />);
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByRole("checkbox")).toBeChecked();
      });
    });

    describe("works uncontrolled", () => {
      it("uses defaultValue", () => {
        render(<SimpleCheckbox data-testid="simple-checkbox" defaultChecked />);
        expect(screen.getByTestId("simple-checkbox")).toBeChecked();
      });

      it("manages value", () => {
        render(<SimpleCheckbox data-testid="simple-checkbox" />);
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByTestId("simple-checkbox")).toBeChecked();
      });

      it("handles onChange", () => {
        let checked = false;
        render(
          <SimpleCheckbox
            data-testid="simple-checkbox"
            onChange={(e) => (checked = e.target.checked)}
          />
        );
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByTestId("simple-checkbox")).toBeChecked();
        expect(checked).toBe(true);
      });
    });
  });

  describe("indeterminated", () => {
    describe("works controlled", () => {
      const CheckboxController = () => {
        const [state, setState] = useState<number>(0);
        return (
          <SimpleCheckbox
            data-testid="simple-checkbox"
            indeterminate={state % 3 === 1}
            checked={state % 3 === 2}
            onChange={() => setState(state + 1)}
          />
        );
      };

      it("respects outer value", () => {
        const { rerender } = render(
          <SimpleCheckbox
            data-testid="simple-checkbox"
            checked={false}
            indeterminate
          />
        );
        expect(screen.getByRole("checkbox")).not.toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          true
        );
        rerender(
          <SimpleCheckbox
            data-testid="simple-checkbox"
            checked={false}
            indeterminate={false}
          />
        );
        expect(screen.getByRole("checkbox")).not.toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          false
        );
      });

      it("value overrides defaultValue", () => {
        render(
          <SimpleCheckbox
            data-testid="simple-checkbox"
            defaultIndeterminate
            indeterminate={false}
          />
        );
        expect(screen.getByRole("checkbox")).not.toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          false
        );
      });

      it("handles change", () => {
        render(<CheckboxController />);
        expect(screen.getByRole("checkbox")).not.toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          false
        );
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByRole("checkbox")).not.toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          true
        );
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByRole("checkbox")).toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          false
        );
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByRole("checkbox")).not.toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          false
        );
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByRole("checkbox")).not.toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          true
        );
      });

      it("does not change without onChange", () => {
        render(
          <SimpleCheckbox
            data-testid="simple-checkbox"
            indeterminate
            checked={false}
          />
        );
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByRole("checkbox")).not.toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          true
        );
      });
    });

    describe("works uncontrolled", () => {
      it("uses defaultValue", () => {
        render(
          <SimpleCheckbox data-testid="simple-checkbox" defaultIndeterminate />
        );
        expect(screen.getByTestId("simple-checkbox")).not.toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          true
        );
      });

      it("manages value", () => {
        render(
          <SimpleCheckbox data-testid="simple-checkbox" defaultIndeterminate />
        );
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByTestId("simple-checkbox")).toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          false
        );
      });

      it("handles onChange", () => {
        let checked = false;
        render(
          <SimpleCheckbox
            data-testid="simple-checkbox"
            defaultIndeterminate
            onChange={(e) => (checked = e.target.checked)}
          />
        );
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          true
        );
        expect(screen.getByTestId("simple-checkbox")).not.toBeChecked();
        expect(checked).toBe(false);
        userEvent.click(screen.getByTestId("simple-checkbox"));
        expect(screen.getByTestId("simple-checkbox")).toBeChecked();
        expect(screen.getByTestId("simple-checkbox")).toHaveProperty(
          "indeterminate",
          false
        );
        expect(checked).toBe(true);
      });
    });
  });
});
