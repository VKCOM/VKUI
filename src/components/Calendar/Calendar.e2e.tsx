import ru from "date-fns/locale/ru";
import ar from "date-fns/locale/ar";
import { Calendar, CalendarProps } from "./Calendar";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("Calendar", () => {
  describeScreenshotFuzz(
    (props: CalendarProps) => <Calendar {...props} />,
    [
      {
        value: [new Date("1970-05-05")],
        shouldDisableDate: [undefined, () => true],
      },
      {
        value: [new Date("1970-05-05")],
        locale: [ru, ar],
      },
      {
        value: [new Date("1970-05-05")],
        enableTime: [true, false],
        doneButtonText: [undefined, "Done"],
      },
    ]
  );
});
