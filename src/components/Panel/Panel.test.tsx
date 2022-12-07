import * as React from "react";
import { baselineComponent } from "../../testing/utils";
import { Panel } from "./Panel";

describe("Panel", () => {
  baselineComponent((p) => <Panel id="id" {...p} />);
});
