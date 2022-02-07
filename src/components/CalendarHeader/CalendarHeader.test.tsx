import { render } from "@testing-library/react";
import { CalendarHeader, getYears } from "./CalendarHeader";

describe("CalendarHeader", () => {
  it("displays prev month button", () => {
    const viewDate = new Date("1970-01-01");
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={viewDate} onChange={onChange} prevMonth />
    );

    expect(
      container.getElementsByClassName("CalendarHeader__nav-icon-prev")[0]
    ).toBeTruthy();
  });
  it("displays next month button", () => {
    const viewDate = new Date("1970-01-01");
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={viewDate} onChange={onChange} nextMonth />
    );

    expect(
      container.getElementsByClassName("CalendarHeader__nav-icon-next")[0]
    ).toBeTruthy();
  });
  describe("getYears", () => {
    it("returns years options", () => {
      const result = getYears(2000, 5);

      expect(result).toEqual([
        {
          label: "1995",
          value: 1995,
        },
        {
          label: "1996",
          value: 1996,
        },
        {
          label: "1997",
          value: 1997,
        },
        {
          label: "1998",
          value: 1998,
        },
        {
          label: "1999",
          value: 1999,
        },
        {
          label: "2000",
          value: 2000,
        },
        {
          label: "2001",
          value: 2001,
        },
        {
          label: "2002",
          value: 2002,
        },
        {
          label: "2003",
          value: 2003,
        },
        {
          label: "2004",
          value: 2004,
        },
        {
          label: "2005",
          value: 2005,
        },
      ]);
    });
  });
});
