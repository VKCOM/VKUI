import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { baselineComponent } from "../../testing/utils";
import { ChipsInput, ChipsInputOption, ChipsInputProps } from "./ChipsInput";

const ChipsInputTest = (props: ChipsInputProps<ChipsInputOption>) => (
  <ChipsInput data-testid="chips-input" {...props} />
);

const chipsInputValue: ChipsInputOption[] = [
  { value: "red", label: "Красный" },
];
const redChip = () => screen.queryByText("Красный");
const getChipsInput = () => screen.getByTestId("chips-input");

describe("ChipsInput", () => {
  baselineComponent(ChipsInput);

  it("renders values passed to it", () => {
    render(<ChipsInputTest value={chipsInputValue} />);

    expect(redChip()).not.toBeNull();
  });

  it("adds chips", () => {
    let value;

    render(
      <ChipsInputTest
        value={[]}
        onChange={(changedValue) => (value = changedValue)}
      />
    );

    userEvent.type(getChipsInput(), "Красный{enter}");

    expect(value).toEqual([{ value: "Красный", label: "Красный" }]);
  });

  it("does not lose data when adding an already existing chip", () => {
    let value: ChipsInputOption[] | undefined = undefined;

    render(
      <ChipsInputTest
        value={[
          { value: "Красный", label: "Красный" },
          { value: "Синий", label: "Синий" },
        ]}
        onChange={(changedValue) => (value = changedValue)}
      />
    );

    userEvent.type(getChipsInput(), "Красный{enter}");

    expect(value).toEqual([
      { value: "Синий", label: "Синий" },
      { value: "Красный", label: "Красный" },
    ]);
  });

  it("removes chip on hitting backspace", () => {
    let value: ChipsInputOption[] | undefined = undefined;

    render(
      <ChipsInputTest
        value={chipsInputValue}
        onChange={(changedValue) => (value = changedValue)}
      />
    );

    userEvent.type(getChipsInput(), "{backspace}");

    expect(value).toEqual([]);
  });

  it("does not delete chips on hitting backspace in readonly mode", () => {
    let value: ChipsInputOption[] = [...chipsInputValue];

    render(
      <ChipsInputTest
        readOnly
        value={value}
        onChange={(changedValue) => (value = changedValue)}
      />
    );

    userEvent.type(getChipsInput(), "{backspace}");

    expect(value).toEqual(chipsInputValue);
  });

  it("focuses ChipsInput on surrounding container click", () => {
    render(<ChipsInputTest value={chipsInputValue} />);

    userEvent.click(screen.getByRole("application"));
    expect(getChipsInput()).toHaveFocus();
  });

  it("focuses ChipsInput on chip click", () => {
    render(<ChipsInputTest value={chipsInputValue} />);

    userEvent.click(redChip() as HTMLElement);
    expect(getChipsInput()).toHaveFocus();
  });
});
