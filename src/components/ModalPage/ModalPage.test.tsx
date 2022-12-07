import * as React from "react";
import { baselineComponent } from "../../testing/utils";
import { ModalPage } from "./ModalPage";

describe("ModalPage", () => {
  baselineComponent((p) => <ModalPage nav="id" {...p} />);
});
