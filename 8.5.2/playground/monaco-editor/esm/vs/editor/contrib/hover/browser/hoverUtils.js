import { getDomNodePagePosition } from '../../../../base/browser/dom.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function isMousePositionWithinElement(element, posx, posy) {
    const elementRect = getDomNodePagePosition(element);
    if (posx < elementRect.left + 3 /* PADDING.VALUE */
        || posx > elementRect.left + elementRect.width - 3 /* PADDING.VALUE */
        || posy < elementRect.top + 3 /* PADDING.VALUE */
        || posy > elementRect.top + elementRect.height - 3 /* PADDING.VALUE */) {
        return false;
    }
    return true;
}
/**
 * Determines whether hover should be shown based on the hover setting and current keyboard modifiers.
 * When `hoverEnabled` is 'onKeyboardModifier', hover is shown when the user presses the opposite
 * modifier key from the multi-cursor modifier (e.g., if multi-cursor uses Alt, hover shows on Ctrl/Cmd).
 *
 * @param hoverEnabled - The hover enabled setting
 * @param multiCursorModifier - The modifier key used for multi-cursor operations
 * @param mouseEvent - The current mouse event containing modifier key states
 * @returns true if hover should be shown, false otherwise
 */
function shouldShowHover(hoverEnabled, multiCursorModifier, mouseEvent) {
    if (hoverEnabled === 'on') {
        return true;
    }
    if (hoverEnabled === 'off') {
        return false;
    }
    return isTriggerModifierPressed(multiCursorModifier, mouseEvent.event);
}
/**
 * Returns true if the trigger modifier (inverse of multi-cursor modifier) is pressed.
 * This works with both mouse and keyboard events by relying only on the modifier flags.
 */
function isTriggerModifierPressed(multiCursorModifier, event) {
    if (multiCursorModifier === 'altKey') {
        return event.ctrlKey || event.metaKey;
    }
    return event.altKey; // multiCursorModifier is ctrlKey or metaKey
}

export { isMousePositionWithinElement, isTriggerModifierPressed, shouldShowHover };
