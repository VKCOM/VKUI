import { setTimeEqual } from "./CalendarDays";

describe("CalendarDays", () => {
  describe("setTimeEqual", () => {
    it("sets time to date", () => {
      const to = new Date("2021-01-01T17:35:00.000Z");
      const from = new Date("2022-02-02T10:11:12.123Z");
      const result = setTimeEqual(to, from);
      console.log(to);
      console.log(from);
      console.log(result);

      expect(result.toISOString()).toEqual("2021-01-01T10:11:12.123Z");
    });
  });
});
