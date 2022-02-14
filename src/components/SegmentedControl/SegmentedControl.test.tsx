import { fireEvent, render, screen } from "@testing-library/react";
import { baselineComponent } from "../../testing/utils";
import {
  SegmentedControl,
  SegmentedControlOptionInterface,
  SegmentedControlProps,
} from "./SegmentedControl";

const options: SegmentedControlOptionInterface[] = [
  { label: "vk", value: "vk" },
  { label: "ok", value: "ok" },
  { label: "fb", value: "fb" },
];

const SegmentedControlTest = (
  props: Omit<SegmentedControlProps, "name" | "options">
) => (
  <SegmentedControl
    data-testid="ctrl"
    {...props}
    name="test"
    options={options}
  />
);
const ctrl = () => screen.getByTestId("ctrl");
const option = (idx = 0) => ctrl().querySelectorAll("input[type='radio']")[idx];

describe("SegmentedControl", () => {
  baselineComponent((props) => (
    <SegmentedControl options={[]} name="" {...props} />
  ));

  it("uses the first option value as initial", () => {
    render(<SegmentedControlTest />);
    expect(option(0)).toBeChecked();
  });

  it("sets initial value if value is passed", () => {
    const initialValue = "fb";
    const optionIdx = options.findIndex(
      (option) => option.value === initialValue
    );

    render(<SegmentedControlTest value={initialValue} />);
    expect(option(optionIdx)).toBeChecked();
  });

  it("uses passed onChange", () => {
    const onChange = jest.fn();

    render(<SegmentedControlTest onChange={onChange} value="fb" />);

    fireEvent.click(option(0));

    expect(onChange).toHaveBeenCalled();
    expect(option(0)).toBeChecked();
  });
});
