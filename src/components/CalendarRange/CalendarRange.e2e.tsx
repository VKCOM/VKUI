import ru from "date-fns/locale/ru";
import ar from "date-fns/locale/ar";
import { CalendarRange, CalendarRangeProps } from "./CalendarRange";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("CalendarRange", () => {
  describeScreenshotFuzz(
    (props: CalendarRangeProps) => <CalendarRange {...props} />,
    [
      {
        value: [[new Date("1970-05-05"), new Date("1970-06-05")]],
        disablePast: [true, false],
        disableFuture: [true, false],
      },
      {
        value: [[new Date("1970-05-05"), new Date("1970-06-05")]],
        locale: [ru, ar],
      },
      {
        value: [[new Date("1970-05-05"), new Date("1970-06-05")]],
      },
    ]
  );
});
