/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
let _getInlineCompletionsController;
function getInlineCompletionsController(editor) {
    return _getInlineCompletionsController?.(editor) ?? null;
}
function setInlineCompletionsControllerGetter(getter) {
    _getInlineCompletionsController = getter;
}

export { getInlineCompletionsController, setInlineCompletionsControllerGetter };
