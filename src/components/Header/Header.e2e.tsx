import * as React from "react";
import { Header, HeaderProps } from "./Header";
import { Link } from "../Link/Link";
import { Counter } from "../Counter/Counter";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("Header", () => {
  describeScreenshotFuzz(
    ({ children, ...restProps }: HeaderProps) => (
      <Header {...restProps}>{!!children ? children : "Плейлисты"}</Header>
    ),
    [
      {
        mode: ["primary", "secondary", "tertiary"],
        children: ["Кто может оставлять записи на моей странице"],
        multiline: [undefined, true],
      },
      {
        mode: ["primary"],
        aside: [<Link key="link">Показать все</Link>],
      },
      {
        mode: ["primary", "secondary"],
        subtitle: ["SOHN — Conrad"],
      },
      {
        mode: ["primary"],
        indicator: [
          12,
          <Counter key="counter" size="s" mode="prominent">
            3
          </Counter>,
        ],
      },
      {
        mode: ["primary"],
        subtitle: ["SOHN — Conrad"],
        aside: [<Link key="link">Показать все</Link>],
        indicator: [12],
      },
      {
        mode: ["secondary", "tertiary"],
        indicator: [
          12,
          <Counter key="counter" size="s" mode="prominent">
            3
          </Counter>,
        ],
      },
    ]
  );
});
