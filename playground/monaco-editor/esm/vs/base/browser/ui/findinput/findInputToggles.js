import { EventHelper } from '../../dom.js';
import { Toggle } from '../toggle/toggle.js';
import { Codicon } from '../../../common/codicons.js';
import { localize } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Arrow-Key support to navigate between the toggles of a find input, with
 * `Escape` moving focus back to the input box.
 *
 * The toggles are resolved through a callback because they are only needed
 * once one of the handled keys is pressed.
 */
function navigateToggles(event, domNode, getToggleDomNodes, focusInput) {
    if (event.equals(15 /* KeyCode.LeftArrow */) || event.equals(17 /* KeyCode.RightArrow */) || event.equals(9 /* KeyCode.Escape */)) {
        const indexes = getToggleDomNodes();
        const index = indexes.indexOf(domNode.ownerDocument.activeElement);
        if (index >= 0) {
            let newIndex = -1;
            if (event.equals(17 /* KeyCode.RightArrow */)) {
                newIndex = (index + 1) % indexes.length;
            }
            else if (event.equals(15 /* KeyCode.LeftArrow */)) {
                if (index === 0) {
                    newIndex = indexes.length - 1;
                }
                else {
                    newIndex = index - 1;
                }
            }
            if (event.equals(9 /* KeyCode.Escape */)) {
                indexes[index].blur();
                focusInput();
            }
            else if (newIndex >= 0) {
                indexes[newIndex].focus();
            }
            EventHelper.stop(event, true);
        }
    }
}
const NLS_CASE_SENSITIVE_TOGGLE_LABEL = localize(2, "Match Case");
const NLS_WHOLE_WORD_TOGGLE_LABEL = localize(3, "Match Whole Word");
const NLS_REGEX_TOGGLE_LABEL = localize(4, "Use Regular Expression");
class CaseSensitiveToggle extends Toggle {
    constructor(opts) {
        super({
            icon: Codicon.caseSensitive,
            title: NLS_CASE_SENSITIVE_TOGGLE_LABEL + opts.appendTitle,
            isChecked: opts.isChecked,
            hoverLifecycleOptions: opts.hoverLifecycleOptions,
            inputActiveOptionBorder: opts.inputActiveOptionBorder,
            inputActiveOptionForeground: opts.inputActiveOptionForeground,
            inputActiveOptionBackground: opts.inputActiveOptionBackground
        });
    }
}
class WholeWordsToggle extends Toggle {
    constructor(opts) {
        super({
            icon: Codicon.wholeWord,
            title: NLS_WHOLE_WORD_TOGGLE_LABEL + opts.appendTitle,
            isChecked: opts.isChecked,
            hoverLifecycleOptions: opts.hoverLifecycleOptions,
            inputActiveOptionBorder: opts.inputActiveOptionBorder,
            inputActiveOptionForeground: opts.inputActiveOptionForeground,
            inputActiveOptionBackground: opts.inputActiveOptionBackground
        });
    }
}
class RegexToggle extends Toggle {
    constructor(opts) {
        super({
            icon: Codicon.regex,
            title: NLS_REGEX_TOGGLE_LABEL + opts.appendTitle,
            isChecked: opts.isChecked,
            hoverLifecycleOptions: opts.hoverLifecycleOptions,
            inputActiveOptionBorder: opts.inputActiveOptionBorder,
            inputActiveOptionForeground: opts.inputActiveOptionForeground,
            inputActiveOptionBackground: opts.inputActiveOptionBackground
        });
    }
}

export { CaseSensitiveToggle, RegexToggle, WholeWordsToggle, navigateToggles };
