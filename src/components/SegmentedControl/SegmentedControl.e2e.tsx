import * as React from "react";
import {
  Icon24LogoFacebook,
  Icon24LogoGoogle,
  Icon24LogoVk,
} from "@vkontakte/icons";
import { describeScreenshotFuzz } from "../../testing/e2e";
import {
  SegmentedControl,
  SegmentedControlOptionInterface,
} from "./SegmentedControl";

type OptionFn = (label: string) => SegmentedControlOptionInterface;
const optionFn: OptionFn = (label: string) => ({ label, value: label });

describe("SegmentedControl", () => {
  describeScreenshotFuzz(SegmentedControl, [
    {
      options: [
        [optionFn("vk"), optionFn("ok")],
        [optionFn("vk"), optionFn("ok"), optionFn("fb")],
        [
          { label: <Icon24LogoVk />, value: "vk" },
          { label: <Icon24LogoFacebook />, value: "fb" },
          { label: <Icon24LogoGoogle />, value: "google" },
        ],
      ],
    },
    {
      options: [[optionFn("vk"), optionFn("ok")]],
      size: ["m", "l"],
      $adaptivity: "y",
    },
  ]);
});
