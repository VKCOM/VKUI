import { RawContextKey } from '../../../../../platform/contextkey/common/contextkey.js';
import { localize } from '../../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InlineCompletionContextKeys {
    static { this.inlineSuggestionVisible = new RawContextKey('inlineSuggestionVisible', false, localize(1234, "Whether an inline suggestion is visible")); }
    static { this.inlineSuggestionAlternativeActionVisible = new RawContextKey('inlineSuggestionAlternativeActionVisible', false, localize(1235, "Whether an alternative action for the inline suggestion is visible.")); }
    static { this.inlineSuggestionHasIndentation = new RawContextKey('inlineSuggestionHasIndentation', false, localize(1236, "Whether the inline suggestion starts with whitespace")); }
    static { this.inlineSuggestionHasIndentationLessThanTabSize = new RawContextKey('inlineSuggestionHasIndentationLessThanTabSize', true, localize(1237, "Whether the inline suggestion starts with whitespace that is less than what would be inserted by tab")); }
    static { this.suppressSuggestions = new RawContextKey('inlineSuggestionSuppressSuggestions', undefined, localize(1238, "Whether suggestions should be suppressed for the current suggestion")); }
    static { this.cursorBeforeGhostText = new RawContextKey('cursorBeforeGhostText', false, localize(1239, "Whether the cursor is at ghost text")); }
    static { this.cursorInIndentation = new RawContextKey('cursorInIndentation', false, localize(1240, "Whether the cursor is in indentation")); }
    static { this.hasSelection = new RawContextKey('editor.hasSelection', false, localize(1241, "Whether the editor has a selection")); }
    static { this.cursorAtInlineEdit = new RawContextKey('cursorAtInlineEdit', false, localize(1242, "Whether the cursor is at an inline edit")); }
    static { this.inlineEditVisible = new RawContextKey('inlineEditIsVisible', false, localize(1243, "Whether an inline edit is visible")); }
    static { this.tabShouldJumpToInlineEdit = new RawContextKey('tabShouldJumpToInlineEdit', false, localize(1244, "Whether tab should jump to an inline edit.")); }
    static { this.tabShouldAcceptInlineEdit = new RawContextKey('tabShouldAcceptInlineEdit', false, localize(1245, "Whether tab should accept the inline edit.")); }
    static { this.inInlineEditsPreviewEditor = new RawContextKey('inInlineEditsPreviewEditor', true, localize(1246, "Whether the current code editor is showing an inline edits preview")); }
}

export { InlineCompletionContextKeys };
