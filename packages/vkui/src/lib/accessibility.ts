import type * as React from 'react';
import type { HasChildren, ValuesOfObject } from '../types';
import { getTextFromChildren } from './children';

export const FOCUSABLE_ELEMENTS_LIST: string[] = [
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
  ['Delete', Keys.DELETE],
  ['Backspace', Keys.BACKSPACE],
  ['Home', Keys.HOME],
  ['End', Keys.END],
  ['ArrowLeft', Keys.ARROW_LEFT],
  ['ArrowRight', Keys.ARROW_RIGHT],
  ['ArrowUp', Keys.ARROW_UP],
  ['ArrowDown', Keys.ARROW_DOWN],
  ['PageUp', Keys.PAGE_UP],
  ['PageDown', Keys.PAGE_DOWN],
]);

export function pressedKey<T extends KeyboardEvent | React.KeyboardEvent>(
  event: T,
):
  | 'Enter'
  | 'Space'
  | 'Tab'
  | 'Escape'
  | 'Home'
  | 'End'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'PageUp'
  | 'PageDown'
  | 'Backspace'
  | 'Delete'
  | null {
  const foundKey = EVENT_KEY_TO_COMMON_KEY_MAP.get(event.key);
  return foundKey ? foundKey : null;
}

export const FOCUS_ALLOW_LIST_KEYS: Set<string> = new Set<string>([
  Keys.TAB,
  Keys.ARROW_LEFT,
  Keys.ARROW_RIGHT,
  Keys.ARROW_UP,
  Keys.ARROW_DOWN,
  Keys.BACKSPACE,
  Keys.DELETE,
]);

export function isKeyboardFocusingStarted<T extends KeyboardEvent | React.KeyboardEvent>(
  event: T,
): boolean {
  return FOCUS_ALLOW_LIST_KEYS.has(event.key);
}

export function shouldTriggerClickOnEnterOrSpace(
  e: KeyboardEvent | React.KeyboardEvent<HTMLElement>,
): boolean {
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
 * Роли, для которых ARIA допускает атрибут `aria-expanded`.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#aria-expanded
 */
const ROLES_SUPPORTING_ARIA_EXPANDED: React.AriaRole[] = [
  'application',
  'button',
  'checkbox',
  'columnheader',
  'combobox',
  'gridcell',
  'link',
  'listbox',
  'menuitem',
  'menuitemcheckbox',
  'menuitemradio',
  'row',
  'rowheader',
  'switch',
  'tab',
  'treeitem',
];

const INPUT_TYPES_SUPPORTING_ARIA_EXPANDED = ['button', 'checkbox', 'image', 'reset', 'submit'];

interface ReferenceElementProps {
  role?: React.AriaRole;
  href?: string;
  type?: string;
  tabIndex?: number;
}

const getElementProps = (element: React.ReactElement): ReferenceElementProps =>
  (element.props as ReferenceElementProps | undefined) ?? {};

/** Неявная роль зависит от атрибутов: `<a>` без `href` не `link`, а роль `<input>` задаёт тип. */
const tagSupportsAriaExpanded = (tagName: string, props: ReferenceElementProps): boolean => {
  switch (tagName) {
    case 'button':
    case 'select':
    case 'summary':
      return true;
    case 'a':
    case 'area':
      return props.href !== undefined;
    case 'input':
      return INPUT_TYPES_SUPPORTING_ARIA_EXPANDED.includes(props.type ?? 'text');
    default:
      return false;
  }
};

/**
 * Проверяет, допускает ли элемент атрибут `aria-expanded`.
 *
 * Для элемента с явной ролью решает роль, для DOM-элемента без роли — тег и его атрибуты. Для
 * компонента роль корневого элемента неизвестна, поэтому решение остаётся за самим компонентом.
 */
export const supportsAriaExpanded = (element: React.ReactElement): boolean => {
  const props = getElementProps(element);

  if (props.role) {
    return ROLES_SUPPORTING_ARIA_EXPANDED.includes(props.role);
  }

  if (typeof element.type !== 'string') {
    return true;
  }

  return tagSupportsAriaExpanded(element.type, props);
};

const NATIVELY_INTERACTIVE_TAG_NAMES = ['button', 'input', 'select', 'summary', 'textarea'];

/** Проверяет, есть ли у элемента своя интерактивная семантика, которую нельзя переопределять. */
export const hasOwnInteractiveSemantics = (element: React.ReactElement): boolean => {
  const props = getElementProps(element);

  if (props.role || typeof element.type !== 'string') {
    return true;
  }

  if (element.type === 'a' || element.type === 'area') {
    return props.href !== undefined;
  }

  return NATIVELY_INTERACTIVE_TAG_NAMES.includes(element.type);
};

/**
 * @see https://doka.guide/a11y/aria-expanded/
 */
export const injectAriaExpandedPropByRole = (
  props: React.ComponentProps<any>,
  state: boolean,
  role?: React.AriaRole,
): React.ComponentProps<any> => {
  switch (role) {
    case 'dialog':
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
  title?: string | undefined;
}

export function hasAccessibleName({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  title,
  children,
}: HasAccessibleNameProps): boolean {
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
  keys: Extract<KeysValues, 'ArrowUp' | 'ArrowLeft' | 'ArrowDown' | 'ArrowRight' | 'Home' | 'End'>,
): 'prev' | 'next' | 'first' | 'last' => {
  switch (keys) {
    case Keys.ARROW_UP:
    case Keys.ARROW_LEFT:
      return 'prev';
    case Keys.ARROW_DOWN:
    case Keys.ARROW_RIGHT:
      return 'next';
    case Keys.HOME:
      return 'first';
    case Keys.END:
      return 'last';
  }
};
