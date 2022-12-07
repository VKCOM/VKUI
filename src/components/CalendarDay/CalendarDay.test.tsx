import * as React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CalendarDay, CalendarDayProps } from "./CalendarDay";

const day = new Date("1970-01-01");
const onChange = jest.fn();

const CalendarDayTest = (
  testProps: Omit<CalendarDayProps, "day" | "onChange">
) => <CalendarDay day={day} onChange={onChange} {...testProps} />;

describe("CalendarDay", () => {
  it("calls callback with day on click", () => {
    render(<CalendarDayTest />);
    userEvent.click(screen.getByText("1"));

    expect(onChange).toHaveBeenCalledWith(day);
  });
  it("renders hidden div", () => {
    render(<CalendarDayTest hidden />);

    expect(
      document.querySelector(".vkuiCalendarDay__hidden")
    ).toBeInTheDocument();
  });
});
