import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CalendarDay, CalendarDayProps } from "./CalendarDay";

const props: CalendarDayProps = {
  day: new Date("1970-01-01"),
  onChange: jest.fn(),
};

describe("CalendarDay", () => {
  it("calls callback with day on click", () => {
    const day = new Date("1970-01-01");
    const onChange = jest.fn();
    const { container } = render(<CalendarDay day={day} onChange={onChange} />);
    userEvent.click(container.getElementsByClassName("CalendarDay")[0]);

    expect(onChange).toHaveBeenCalledWith(day);
  });
  it("renders hidden div", () => {
    const { container } = render(<CalendarDay {...props} hidden />);

    expect(container.firstChild).toHaveClass("CalendarDay__hidden");
  });
});
