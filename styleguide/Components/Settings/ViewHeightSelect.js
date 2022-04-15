import React from "react";
import {
  MOBILE_LANDSCAPE_HEIGHT,
  MEDIUM_HEIGHT,
} from "@vkui/components/AdaptivityProvider/AdaptivityProvider";
import { Setting } from "../Setting/Setting";

export const SMALL_HEIGHT = 667;

export const ViewHeightSelect = ({ onChange, value }) => (
  <Setting
    label="Высота окна"
    onChange={onChange}
    value={value}
    options={[MOBILE_LANDSCAPE_HEIGHT, SMALL_HEIGHT, MEDIUM_HEIGHT]}
  />
);
