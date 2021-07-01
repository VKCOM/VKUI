import { KeyboardEvent as SyntheticKeyboardEvent } from 'react';

export function shouldTriggerClickOnEnterOrSpace(e: SyntheticKeyboardEvent<HTMLElement>) {
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
