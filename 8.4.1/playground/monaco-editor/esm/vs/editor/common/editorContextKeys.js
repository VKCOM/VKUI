import { localize } from '../../nls.js';
import { RawContextKey } from '../../platform/contextkey/common/contextkey.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var EditorContextKeys;
(function (EditorContextKeys) {
    EditorContextKeys.editorSimpleInput = new RawContextKey('editorSimpleInput', false, true);
    /**
     * A context key that is set when the editor's text has focus (cursor is blinking).
     * Is false when focus is in simple editor widgets (repl input, scm commit input).
     */
    EditorContextKeys.editorTextFocus = new RawContextKey('editorTextFocus', false, localize(714, "Whether the editor text has focus (cursor is blinking)"));
    /**
     * A context key that is set when the editor's text or an editor's widget has focus.
     */
    EditorContextKeys.focus = new RawContextKey('editorFocus', false, localize(715, "Whether the editor or an editor widget has focus (e.g. focus is in the find widget)"));
    /**
     * A context key that is set when any editor input has focus (regular editor, repl input...).
     */
    EditorContextKeys.textInputFocus = new RawContextKey('textInputFocus', false, localize(716, "Whether an editor or a rich text input has focus (cursor is blinking)"));
    EditorContextKeys.readOnly = new RawContextKey('editorReadonly', false, localize(717, "Whether the editor is read-only"));
    EditorContextKeys.inDiffEditor = new RawContextKey('inDiffEditor', false, localize(718, "Whether the context is a diff editor"));
    EditorContextKeys.isEmbeddedDiffEditor = new RawContextKey('isEmbeddedDiffEditor', false, localize(719, "Whether the context is an embedded diff editor"));
    EditorContextKeys.inMultiDiffEditor = new RawContextKey('inMultiDiffEditor', false, localize(720, "Whether the context is a multi diff editor"));
    EditorContextKeys.multiDiffEditorAllCollapsed = new RawContextKey('multiDiffEditorAllCollapsed', undefined, localize(721, "Whether all files in multi diff editor are collapsed"));
    EditorContextKeys.hasChanges = new RawContextKey('diffEditorHasChanges', false, localize(722, "Whether the diff editor has changes"));
    EditorContextKeys.comparingMovedCode = new RawContextKey('comparingMovedCode', false, localize(723, "Whether a moved code block is selected for comparison"));
    EditorContextKeys.accessibleDiffViewerVisible = new RawContextKey('accessibleDiffViewerVisible', false, localize(724, "Whether the accessible diff viewer is visible"));
    EditorContextKeys.diffEditorRenderSideBySideInlineBreakpointReached = new RawContextKey('diffEditorRenderSideBySideInlineBreakpointReached', false, localize(725, "Whether the diff editor render side by side inline breakpoint is reached"));
    EditorContextKeys.diffEditorInlineMode = new RawContextKey('diffEditorInlineMode', false, localize(726, "Whether inline mode is active"));
    EditorContextKeys.diffEditorOriginalWritable = new RawContextKey('diffEditorOriginalWritable', false, localize(727, "Whether modified is writable in the diff editor"));
    EditorContextKeys.diffEditorModifiedWritable = new RawContextKey('diffEditorModifiedWritable', false, localize(728, "Whether modified is writable in the diff editor"));
    EditorContextKeys.diffEditorOriginalUri = new RawContextKey('diffEditorOriginalUri', '', localize(729, "The uri of the original document"));
    EditorContextKeys.diffEditorModifiedUri = new RawContextKey('diffEditorModifiedUri', '', localize(730, "The uri of the modified document"));
    EditorContextKeys.columnSelection = new RawContextKey('editorColumnSelection', false, localize(731, "Whether `editor.columnSelection` is enabled"));
    EditorContextKeys.writable = EditorContextKeys.readOnly.toNegated();
    EditorContextKeys.hasNonEmptySelection = new RawContextKey('editorHasSelection', false, localize(732, "Whether the editor has text selected"));
    EditorContextKeys.hasOnlyEmptySelection = EditorContextKeys.hasNonEmptySelection.toNegated();
    EditorContextKeys.hasMultipleSelections = new RawContextKey('editorHasMultipleSelections', false, localize(733, "Whether the editor has multiple selections"));
    EditorContextKeys.hasSingleSelection = EditorContextKeys.hasMultipleSelections.toNegated();
    EditorContextKeys.tabMovesFocus = new RawContextKey('editorTabMovesFocus', false, localize(734, "Whether `Tab` will move focus out of the editor"));
    EditorContextKeys.tabDoesNotMoveFocus = EditorContextKeys.tabMovesFocus.toNegated();
    EditorContextKeys.isInEmbeddedEditor = new RawContextKey('isInEmbeddedEditor', false, true);
    EditorContextKeys.canUndo = new RawContextKey('canUndo', false, true);
    EditorContextKeys.canRedo = new RawContextKey('canRedo', false, true);
    EditorContextKeys.hoverVisible = new RawContextKey('editorHoverVisible', false, localize(735, "Whether the editor hover is visible"));
    EditorContextKeys.hoverFocused = new RawContextKey('editorHoverFocused', false, localize(736, "Whether the editor hover is focused"));
    EditorContextKeys.stickyScrollFocused = new RawContextKey('stickyScrollFocused', false, localize(737, "Whether the sticky scroll is focused"));
    EditorContextKeys.stickyScrollVisible = new RawContextKey('stickyScrollVisible', false, localize(738, "Whether the sticky scroll is visible"));
    EditorContextKeys.standaloneColorPickerVisible = new RawContextKey('standaloneColorPickerVisible', false, localize(739, "Whether the standalone color picker is visible"));
    EditorContextKeys.standaloneColorPickerFocused = new RawContextKey('standaloneColorPickerFocused', false, localize(740, "Whether the standalone color picker is focused"));
    EditorContextKeys.isComposing = new RawContextKey('isComposing', false, localize(741, "Whether the editor is in the composition mode"));
    /**
     * A context key that is set when an editor is part of a larger editor, like notebooks or
     * (future) a diff editor
     */
    EditorContextKeys.inCompositeEditor = new RawContextKey('inCompositeEditor', undefined, localize(742, "Whether the editor is part of a larger editor (e.g. notebooks)"));
    EditorContextKeys.notInCompositeEditor = EditorContextKeys.inCompositeEditor.toNegated();
    // -- mode context keys
    EditorContextKeys.languageId = new RawContextKey('editorLangId', '', localize(743, "The language identifier of the editor"));
    EditorContextKeys.hasCompletionItemProvider = new RawContextKey('editorHasCompletionItemProvider', false, localize(744, "Whether the editor has a completion item provider"));
    EditorContextKeys.hasCodeActionsProvider = new RawContextKey('editorHasCodeActionsProvider', false, localize(745, "Whether the editor has a code actions provider"));
    EditorContextKeys.hasCodeLensProvider = new RawContextKey('editorHasCodeLensProvider', false, localize(746, "Whether the editor has a code lens provider"));
    EditorContextKeys.hasDefinitionProvider = new RawContextKey('editorHasDefinitionProvider', false, localize(747, "Whether the editor has a definition provider"));
    EditorContextKeys.hasDeclarationProvider = new RawContextKey('editorHasDeclarationProvider', false, localize(748, "Whether the editor has a declaration provider"));
    EditorContextKeys.hasImplementationProvider = new RawContextKey('editorHasImplementationProvider', false, localize(749, "Whether the editor has an implementation provider"));
    EditorContextKeys.hasTypeDefinitionProvider = new RawContextKey('editorHasTypeDefinitionProvider', false, localize(750, "Whether the editor has a type definition provider"));
    EditorContextKeys.hasHoverProvider = new RawContextKey('editorHasHoverProvider', false, localize(751, "Whether the editor has a hover provider"));
    EditorContextKeys.hasDocumentHighlightProvider = new RawContextKey('editorHasDocumentHighlightProvider', false, localize(752, "Whether the editor has a document highlight provider"));
    EditorContextKeys.hasDocumentSymbolProvider = new RawContextKey('editorHasDocumentSymbolProvider', false, localize(753, "Whether the editor has a document symbol provider"));
    EditorContextKeys.hasReferenceProvider = new RawContextKey('editorHasReferenceProvider', false, localize(754, "Whether the editor has a reference provider"));
    EditorContextKeys.hasRenameProvider = new RawContextKey('editorHasRenameProvider', false, localize(755, "Whether the editor has a rename provider"));
    EditorContextKeys.hasSignatureHelpProvider = new RawContextKey('editorHasSignatureHelpProvider', false, localize(756, "Whether the editor has a signature help provider"));
    EditorContextKeys.hasInlayHintsProvider = new RawContextKey('editorHasInlayHintsProvider', false, localize(757, "Whether the editor has an inline hints provider"));
    // -- mode context keys: formatting
    EditorContextKeys.hasDocumentFormattingProvider = new RawContextKey('editorHasDocumentFormattingProvider', false, localize(758, "Whether the editor has a document formatting provider"));
    EditorContextKeys.hasDocumentSelectionFormattingProvider = new RawContextKey('editorHasDocumentSelectionFormattingProvider', false, localize(759, "Whether the editor has a document selection formatting provider"));
    EditorContextKeys.hasMultipleDocumentFormattingProvider = new RawContextKey('editorHasMultipleDocumentFormattingProvider', false, localize(760, "Whether the editor has multiple document formatting providers"));
    EditorContextKeys.hasMultipleDocumentSelectionFormattingProvider = new RawContextKey('editorHasMultipleDocumentSelectionFormattingProvider', false, localize(761, "Whether the editor has multiple document selection formatting providers"));
    EditorContextKeys.selectionHasDiagnostics = new RawContextKey('editorSelectionHasDiagnostics', false, localize(762, "Whether any diagnostic is present in the current editor selection"));
})(EditorContextKeys || (EditorContextKeys = {}));

export { EditorContextKeys };
