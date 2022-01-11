import * as React from "react";

export const FOCUSABLE_ELEMENTS_LIST = [
  "a[href]",
  "area[href]",
  'input:not([disabled]):not([hidden]):not([type="hidden"]):not([aria-hidden])',
  "select:not([disabled]):not([hidden]):not([aria-hidden])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "iframe",
  "audio",
  "video",
  "[contenteditable]",
  '[tabindex]:not([tabindex="-1"])',
];

export enum Keys {
  ENTER = "Enter",
  SPACE = "Space",
  TAB = "Tab",
  ESCAPE = "Escape",
}

interface AccessibleKey {
  code: Keys;
  key: string[];
  keyCode: number;
}

const ACCESSIBLE_KEYS: AccessibleKey[] = [
  {
    code: Keys.ENTER,
    key: ["Enter"],
    keyCode: 13,
  },
  {
    code: Keys.SPACE,
    key: ["Space", "Spacebar", " "],
    keyCode: 32,
  },
  {
    code: Keys.TAB,
    key: ["Tab"],
    keyCode: 9,
  },
  {
    code: Keys.ESCAPE,
    key: ["Escape"],
    keyCode: 27,
  },
];

export function pressedKey(
  e: KeyboardEvent | React.KeyboardEvent<HTMLElement>
) {
  return (
    ACCESSIBLE_KEYS.find(
      ({ key, keyCode }) => key.includes(e.key) || keyCode === e.keyCode
    )?.code || null
  );
}

export function shouldTriggerClickOnEnterOrSpace(
  e: KeyboardEvent | React.KeyboardEvent<HTMLElement>
) {
  const el = e.target as HTMLElement;
  const { tagName } = el;

  const role = el.getAttribute("role");

  const isValidKeyboardEventTarget: boolean =
    el.isContentEditable !== true &&
    tagName !== "INPUT" &&
    tagName !== "TEXTAREA" &&
    (role === "button" || role === "link");

  const isNativeAnchorEl = tagName === "A" && el.hasAttribute("href");
  const keyPressed = pressedKey(e);

  return (
    isValidKeyboardEventTarget &&
    // trigger buttons on Space
    ((keyPressed === Keys.SPACE && role === "button") ||
      // trigger non-native links and buttons on Enter
      (keyPressed === Keys.ENTER && !isNativeAnchorEl))
  );
}
