import * as React from 'react';
import { HasChildren, ValuesOfObject } from '../types';
import { getTextFromChildren } from './children';

export const FOCUSABLE_ELEMENTS_LIST = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([hidden]):not([type="hidden"]):not([aria-hidden])',
  'select:not([disabled]):not([hidden]):not([aria-hidden])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'audio',
  'video',
  '[contenteditable]',
  '[tabindex]:not([tabindex="-1"])',
];

export const Keys = {
  ENTER: 'Enter',
  SPACE: 'Space',
  TAB: 'Tab',
  ESCAPE: 'Escape',
  HOME: 'Home',
  END: 'End',
  DELETE: 'Delete',
  BACKSPACE: 'Backspace',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
} as const;

export type KeysValues = ValuesOfObject<typeof Keys>;

const EVENT_KEY_TO_COMMON_KEY_MAP = new Map([
  ['Enter', Keys.ENTER],
  ['Space', Keys.SPACE],
  ['Spacebar', Keys.SPACE],
  [' ', Keys.SPACE],
  ['Tab', Keys.TAB],
  ['Escape', Keys.ESCAPE],
  ['Home', Keys.HOME],
  ['End', Keys.END],
  ['ArrowLeft', Keys.ARROW_LEFT],
  ['ArrowRight', Keys.ARROW_RIGHT],
  ['ArrowUp', Keys.ARROW_UP],
  ['ArrowDown', Keys.ARROW_DOWN],
  ['PageUp', Keys.PAGE_UP],
  ['PageDown', Keys.PAGE_DOWN],
]);

export function pressedKey<T extends KeyboardEvent | React.KeyboardEvent>(event: T) {
  const foundKey = EVENT_KEY_TO_COMMON_KEY_MAP.get(event.key);
  return foundKey ? foundKey : null;
}

export const FOCUS_ALLOW_LIST_KEYS = new Set<string>([
  Keys.TAB,
  Keys.ARROW_LEFT,
  Keys.ARROW_RIGHT,
  Keys.ARROW_UP,
  Keys.ARROW_DOWN,
  Keys.BACKSPACE,
  Keys.DELETE,
]);

export function isKeyboardFocusingStarted<T extends KeyboardEvent | React.KeyboardEvent>(event: T) {
  return FOCUS_ALLOW_LIST_KEYS.has(event.key);
}

export function shouldTriggerClickOnEnterOrSpace(
  e: KeyboardEvent | React.KeyboardEvent<HTMLElement>,
) {
  const el = e.target as HTMLElement;
  const { tagName } = el;

  const role = el.getAttribute('role');

  const isValidKeyboardEventTarget: boolean =
    el.isContentEditable !== true &&
    tagName !== 'INPUT' &&
    tagName !== 'TEXTAREA' &&
    (role === 'button' || role === 'link' || role === 'menuitem');

  const isNativeAnchorEl = tagName === 'A' && el.hasAttribute('href');
  const keyPressed = pressedKey(e);

  return (
    isValidKeyboardEventTarget &&
    // trigger buttons on Space
    ((keyPressed === Keys.SPACE && role === 'button') ||
      // trigger non-native links and buttons on Enter
      (keyPressed === Keys.ENTER && !isNativeAnchorEl))
  );
}

/**
 * @see https://doka.guide/a11y/aria-expanded/
 */
export const injectAriaExpandedPropByRole = (
  props: React.ComponentProps<any>,
  state: boolean,
  role?: React.AriaRole,
) => {
  switch (role) {
    case 'menu':
    case 'application':
    case 'tab':
    case 'menuitem':
    case 'treeitem':
    case 'gridcell':
      props['aria-expanded'] = state;
      return props;
    default:
      return props;
  }
};

interface HasAccessibleNameProps
  extends Pick<React.AriaAttributes, 'aria-label' | 'aria-labelledby'>,
    HasChildren {
  title?: string;
}

export function hasAccessibleName({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  title,
  children,
}: HasAccessibleNameProps) {
  if (ariaLabel || ariaLabelledBy || title) {
    return true;
  }

  const accessibleLabel = getTextFromChildren(children);

  if (accessibleLabel.trim() !== '') {
    return true;
  }

  return false;
}

/**
 * @private
 */
export const getHorizontalFocusGoTo = (
  keys: Extract<KeysValues, 'ArrowUp' | 'ArrowLeft' | 'ArrowDown' | 'ArrowRight'>,
) => {
  switch (keys) {
    case Keys.ARROW_UP:
    case Keys.ARROW_LEFT:
      return 'prev';
    case Keys.ARROW_DOWN:
    case Keys.ARROW_RIGHT:
      return 'next';
  }
};
