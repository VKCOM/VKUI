import * as React from 'react';

export enum Keys {
  ENTER = 'Enter',
  SPACE = 'Space',
  TAB = 'Tab',
}

interface AccessibleKey {
  code: Keys;
  key: string[];
  keyCode: number;
}

const ACCESSIBLE_KEYS: AccessibleKey[] = [
  {
    code: Keys.ENTER,
    key: ['Enter'],
    keyCode: 13,
  },
  {
    code: Keys.SPACE,
    key: ['Space', 'Spacebar', ' '],
    keyCode: 32,
  },
  {
    code: Keys.TAB,
    key: ['Tab'],
    keyCode: 9,
  },
];

export function pressedKey(e: KeyboardEvent): Keys {
  return ACCESSIBLE_KEYS.find(({ key, keyCode }) => key.includes(e.key) || keyCode === e.keyCode)?.code || null;
}

export function shouldTriggerClickOnEnterOrSpace(e: KeyboardEvent | React.KeyboardEvent<HTMLElement>) {
  const el = e.target as HTMLElement;
  const { tagName } = el;

  const role = el.getAttribute('role');

  const isValidKeyboardEventTarget: boolean = el.isContentEditable !== true
    && tagName !== 'INPUT'
    && tagName !== 'TEXTAREA'
    && (role === 'button' || role === 'link');

  const isNativeAnchorEl = tagName === 'A' && el.hasAttribute('href');
  const keyPressed = pressedKey(e as KeyboardEvent);

  return isValidKeyboardEventTarget && (
    // trigger buttons on Space
    keyPressed === Keys.SPACE && role === 'button'
    ||
    // trigger non-native links and buttons on Enter
    keyPressed === Keys.ENTER && !isNativeAnchorEl
  );
}
