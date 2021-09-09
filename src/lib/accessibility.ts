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
  const { target, key } = e;
  const el = target as HTMLElement;
  const { tagName } = el;

  const role = el.getAttribute('role');

  const isValidKeyboardEventTarget: boolean = el.isContentEditable !== true
    && tagName !== 'INPUT'
    && tagName !== 'TEXTAREA'
    && (role === 'button' || role === 'link');

  return isValidKeyboardEventTarget && (
    // trigger buttons on Space
    (key === ' ' || key === 'Spacebar') && role === 'button'
    // trigger links and buttons on Enter
    // if this is NOT a native anchor element
    || !(tagName === 'A' && el.hasAttribute('href')) && key === 'Enter'
  );
}
