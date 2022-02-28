import { PaginationProps, Pagination } from "./Pagination";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("Pagination", () => {
  describeScreenshotFuzz(
    (props: PaginationProps) => <Pagination {...props} />,
    [
      {
        currentPage: [4],
        totalPages: [123],
        siblingCount: [0],
        disabled: [undefined, true],
        $adaptivity: "y",
      },
      {
        currentPage: [1],
        totalPages: [3],
        prevButtonIcon: [null],
        prevButtonText: ["Prev"],
        nextButtonText: ["Next"],
        nextButtonIcon: [null],
        $adaptivity: "y",
      },
    ]
  );
});
