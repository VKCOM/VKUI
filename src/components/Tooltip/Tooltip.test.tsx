import * as React from "react";
import { HtmlHTMLAttributes, ReactElement, Fragment } from "react";
import { baselineComponent, waitForPopper } from "../../testing/utils";
import { render, screen } from "@testing-library/react";
import { Tooltip } from "./Tooltip";
import { HasRootRef } from "../../types";
import { TooltipContainer } from "./TooltipContainer";
import userEvent from "@testing-library/user-event";

const renderTooltip = async (jsx: ReactElement) => {
  render(<TooltipContainer>{jsx}</TooltipContainer>);
  await waitForPopper();
};
const RootRef = ({
  getRootRef,
  ...props
}: HasRootRef<HTMLDivElement> & HtmlHTMLAttributes<HTMLDivElement>) => (
  <div ref={getRootRef} {...props} />
);

describe("Tooltip", () => {
  baselineComponent(
    (props) => (
      <TooltipContainer>
        <Tooltip isShown {...props}>
          <div />
        </Tooltip>
      </TooltipContainer>
    ),
    { forward: false }
  );

  it("renders tooltip when isShown=true", async () => {
    await renderTooltip(
      <Tooltip isShown text="text">
        <div />
      </Tooltip>
    );
    expect(screen.getByText("text")).toBeTruthy();
  });

  it("supports child with getRootRef", async () => {
    await renderTooltip(
      <Tooltip isShown text="text">
        <RootRef />
      </Tooltip>
    );
    expect(screen.getByText("text")).toBeTruthy();
  });

  it("does not create extra markup when isShown=false", () => {
    render(
      <TooltipContainer data-testid="container">
        <Tooltip isShown={false} text="text">
          <div data-testid="xxx" />
        </Tooltip>
      </TooltipContainer>
    );
    expect(screen.queryByText("text")).toBeFalsy();
    const container = screen.getByTestId("container");
    expect(container.childElementCount).toBe(1);
    expect(container.firstElementChild).toBe(screen.getByTestId("xxx"));
  });

  describe("calls onClose", () => {
    it("on outer click", async () => {
      const onClose = jest.fn();
      await renderTooltip(
        <Tooltip onClose={onClose} isShown>
          <div />
        </Tooltip>
      );
      userEvent.click(document.body);
      expect(onClose).toHaveBeenCalled();
    });
    it("on tooltip click", async () => {
      const onClose = jest.fn();
      await renderTooltip(
        <Tooltip onClose={onClose} isShown text="text">
          <div />
        </Tooltip>
      );
      userEvent.click(screen.getByText("text"));
      expect(onClose).toHaveBeenCalled();
    });
  });

  it("does not explode when children does not accept ref", () => {
    expect(() => render(<Tooltip isShown {...({} as any)} />)).not.toThrow();
    expect(() =>
      render(<Tooltip isShown>{"text" as any}</Tooltip>)
    ).not.toThrow();
    expect(() =>
      render(
        <Tooltip isShown>{[<div key="1" />, <div key="2" />] as any}</Tooltip>
      )
    ).not.toThrow();
    expect(() =>
      render(
        <Tooltip isShown>
          <Fragment>
            text
            <div />
          </Fragment>
        </Tooltip>
      )
    ).not.toThrow();
  });

  describe("preserves child ref", () => {
    it("on DOM child", async () => {
      const ref = jest.fn();
      await renderTooltip(
        <Tooltip>
          <div ref={ref} data-testid="xxx" />
        </Tooltip>
      );
      expect(ref).toHaveBeenCalledWith(screen.getByTestId("xxx"));
    });
    it("on VKUI child", async () => {
      const ref = jest.fn();
      await renderTooltip(
        <Tooltip>
          <RootRef getRootRef={ref} data-testid="xxx" />
        </Tooltip>
      );
      expect(ref).toHaveBeenCalledWith(screen.getByTestId("xxx"));
    });
  });
});
