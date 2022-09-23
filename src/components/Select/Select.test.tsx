import * as React from "react";
import { baselineComponent } from "../../testing/utils";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";
import { Select } from "./Select";

describe("Select", () => {
  baselineComponent((props) => (
    <AdaptivityProvider hasMouse>
      <Select options={[]} {...props} />
    </AdaptivityProvider>
  ));
});
