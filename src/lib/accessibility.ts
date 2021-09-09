import { KeyboardEvent } from 'react';

export enum KeyCode {
  ENTER = 'Enter',
  SPACE = 'Space',
  TAB = 'Tab',
}

interface AccessibleKey {
  code: KeyCode;
  key: string[];
  keyCode: number;
}

export const ACCESSIBLE_KEYS: AccessibleKey[] = [
  {
    code: KeyCode.ENTER,
    key: ['Enter'],
    keyCode: 13,
  },
  {
    code: KeyCode.SPACE,
    key: ['Space', 'Spacebar', ' '],
    keyCode: 32,
  },
  {
    code: KeyCode.TAB,
    key: ['Tab'],
    keyCode: 9,
  },
];

export function pressedKey(e: KeyboardEvent): KeyCode {
  return ACCESSIBLE_KEYS.find(({ key, keyCode }) => key.includes(e.key) || keyCode === e.keyCode)?.code || null;
}

export function shouldTriggerClickOnEnterOrSpace(e: KeyboardEvent<HTMLElement>) {
  const el = e.target as HTMLElement;
  const { tagName } = el;

  const role = el.getAttribute('role');

  const isValidKeyboardEventTarget: boolean = el.isContentEditable !== true
    && tagName !== 'INPUT'
    && tagName !== 'TEXTAREA'
    && (role === 'button' || role === 'link');

  const isNativeAnchorEl = tagName === 'A' && el.hasAttribute('href');

  return isValidKeyboardEventTarget && (
    // trigger buttons on Space
    pressedKey(e) === KeyCode.SPACE && role === 'button'
    ||
    // trigger non-native links and buttons on Enter
    pressedKey(e) === KeyCode.ENTER && !isNativeAnchorEl
  );
}
