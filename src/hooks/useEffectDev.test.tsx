import { renderHook } from "@testing-library/react-hooks";
import { useEffectDev } from "./useEffectDev";

describe("useEffectDev", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV }; // Make a copy
  });
  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("Calls callback when in dev environment", () => {
    process.env.NODE_ENV = "development";
    const callback = jest.fn();

    renderHook(() => useEffectDev(callback, []));

    expect(callback).toHaveBeenCalled();
  });
  it("Doesn't call callback when isn't in dev environment", () => {
    process.env.NODE_ENV = "test";
    const callback = jest.fn();

    renderHook(() => useEffectDev(callback, []));

    expect(callback).not.toHaveBeenCalled();
  });
});
