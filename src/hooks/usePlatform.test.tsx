import { usePlatform } from "./usePlatform";
import ConfigProvider from "../components/ConfigProvider/ConfigProvider";
import { renderHook } from "@testing-library/react-hooks";
import * as React from "react";

describe(usePlatform, () => {
  it("returns ConfigProvider's platform", () => {
    const wrapper: React.FC = ({ children }) => (
      <ConfigProvider platform="ios">{children}</ConfigProvider>
    );

    const { result } = renderHook(() => usePlatform(), { wrapper });

    expect(result.current).toEqual("ios");
  });

  it("handles ConfigProvider's undefined platform", () => {
    const wrapper: React.FC = ({ children }) => (
      <ConfigProvider platform={undefined}>{children}</ConfigProvider>
    );

    const { result } = renderHook(() => usePlatform(), { wrapper });

    expect(result.current).toEqual("android");
  });

  it("handles ConfigProvider's no platform", () => {
    const wrapper: React.FC = ({ children }) => (
      <ConfigProvider>{children}</ConfigProvider>
    );

    const { result } = renderHook(() => usePlatform(), { wrapper });

    expect(result.current).toEqual("android");
  });

  it("handles no ConfigProvider", () => {
    const { result } = renderHook(() => usePlatform());

    expect(result.current).toEqual("android");
  });
});
