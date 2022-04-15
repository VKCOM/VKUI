import * as React from "react";
import { CustomSelectDropdown } from "./CustomSelectDropdown";
import { render } from "@testing-library/react";

describe("CustomSelectDropdown", () => {
  it("Displays only spinner if fetching: true", () => {
    render(
      <CustomSelectDropdown
        targetRef={React.createRef()}
        scrollBoxRef={React.createRef()}
        fetching
      >
        <div className="test-content">test</div>
      </CustomSelectDropdown>
    );
    expect(
      document.querySelector(".CustomSelectDropdown__fetching")
    ).not.toBeNull();
  });

  it("Displays children if fetching: false", () => {
    render(
      <CustomSelectDropdown
        targetRef={React.createRef()}
        scrollBoxRef={React.createRef()}
      >
        <div className="test-content">test</div>
      </CustomSelectDropdown>
    );
    expect(document.querySelector(".test-content")).not.toBeNull();
  });
});
