import { render } from "@testing-library/react";
import React from "react";
import { baselineComponent } from "../../testing/utils";
import { ConfigProvider } from "../ConfigProvider/ConfigProvider";
import {
  ConfigProviderContextInterface,
  useConfigProvider,
} from "../ConfigProvider/ConfigProviderContext";
import { LocaleProvider } from "./LocaleProvider";

describe("LocaleProvider", () => {
  baselineComponent<any>(LocaleProvider, { forward: false });

  describe("override config context", () => {
    let config: ConfigProviderContextInterface | undefined;
    const ReadConfig = () => {
      config = useConfigProvider();
      return null;
    };

    render(
      <ConfigProvider locale="ru">
        <LocaleProvider value="en">
          <ReadConfig />
        </LocaleProvider>
      </ConfigProvider>
    );

    expect(config).toEqual(expect.objectContaining({ locale: "en" }));
  });
});
