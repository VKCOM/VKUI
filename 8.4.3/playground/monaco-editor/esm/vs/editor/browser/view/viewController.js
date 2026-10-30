import { CoreNavigationCommands } from '../coreCommands.js';
import { Position } from '../../common/core/position.js';
import { Selection } from '../../common/core/selection.js';
import { isLinux } from '../../../base/common/platform.js';
import { containsRTL } from '../../../base/common/strings.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewController {
    constructor(configuration, viewModel, userInputEvents, commandDelegate) {
        this.configuration = configuration;
        this.viewModel = viewModel;
        this.userInputEvents = userInputEvents;
        this.commandDelegate = commandDelegate;
    }
    paste(text, pasteOnNewLine, multicursorText, mode) {
        this.commandDelegate.paste(text, pasteOnNewLine, multicursorText, mode);
    }
    type(text) {
        this.commandDelegate.type(text);
    }
    compositionType(text, replacePrevCharCnt, replaceNextCharCnt, positionDelta) {
        this.commandDelegate.compositionType(text, replacePrevCharCnt, replaceNextCharCnt, positionDelta);
    }
    compositionStart() {
        this.commandDelegate.startComposition();
    }
    compositionEnd() {
        this.commandDelegate.endComposition();
    }
    cut() {
        this.commandDelegate.cut();
    }
    setSelection(modelSelection) {
        CoreNavigationCommands.SetSelection.runCoreEditorCommand(this.viewModel, {
            source: 'keyboard',
            selection: modelSelection
        });
    }
    _validateViewColumn(viewPosition) {
        const minColumn = this.viewModel.getLineMinColumn(viewPosition.lineNumber);
        if (viewPosition.column < minColumn) {
            return new Position(viewPosition.lineNumber, minColumn);
        }
        return viewPosition;
    }
    _hasMulticursorModifier(data) {
        switch (this.configuration.options.get(86 /* EditorOption.multiCursorModifier */)) {
            case 'altKey':
                return data.altKey;
            case 'ctrlKey':
                return data.ctrlKey;
            case 'metaKey':
                return data.metaKey;
            default:
                return false;
        }
    }
    _hasNonMulticursorModifier(data) {
        switch (this.configuration.options.get(86 /* EditorOption.multiCursorModifier */)) {
            case 'altKey':
                return data.ctrlKey || data.metaKey;
            case 'ctrlKey':
                return data.altKey || data.metaKey;
            case 'metaKey':
                return data.ctrlKey || data.altKey;
            default:
                return false;
        }
    }
    /**
     * Selects content inside brackets if the position is right after an opening bracket or right before a closing bracket.
     * @param pos The position in the model.
     * @param model The text model.
     */
    static _trySelectBracketContent(model, pos) {
        // Try to find bracket match if we're right after an opening bracket.
        if (pos.column > 1) {
            const pair = model.bracketPairs.matchBracket(pos.with(undefined, pos.column - 1));
            if (pair && pair[0].getEndPosition().equals(pos)) {
                return Selection.fromPositions(pair[0].getEndPosition(), pair[1].getStartPosition());
            }
        }
        // Try to find bracket match if we're right before a closing bracket.
        if (pos.column <= model.getLineMaxColumn(pos.lineNumber)) {
            const pair = model.bracketPairs.matchBracket(pos);
            if (pair && pair[1].getStartPosition().equals(pos)) {
                return Selection.fromPositions(pair[0].getEndPosition(), pair[1].getStartPosition());
            }
        }
        return undefined;
    }
    /**
     * Selects content inside a string if the position is right after an opening quote or right before a closing quote.
     * @param pos The position in the model.
     * @param model The text model.
     */
    static _trySelectStringContent(model, pos) {
        const { lineNumber, column } = pos;
        const { tokenization: tokens } = model;
        // Ensure we have accurate tokens for the line.
        if (!tokens.hasAccurateTokensForLine(lineNumber)) {
            if (tokens.isCheapToTokenize(lineNumber)) {
                tokens.forceTokenization(lineNumber);
            }
            else {
                return undefined;
            }
        }
        // Expand to the contiguous run of string tokens (StandardTokenType.String) around the click position.
        const lineTokens = tokens.getLineTokens(lineNumber);
        let startIndex = lineTokens.findTokenIndexAtOffset(column - 1);
        let endIndex = startIndex;
        while (startIndex > 0 &&
            lineTokens.getStandardTokenType(startIndex - 1) === 2 /* StandardTokenType.String */) {
            startIndex--;
        }
        while (endIndex + 1 < lineTokens.getCount() &&
            lineTokens.getStandardTokenType(endIndex + 1) === 2 /* StandardTokenType.String */) {
            endIndex++;
        }
        // Verify the click is after starting or before closing quote.
        const tokenStart = lineTokens.getStartOffset(startIndex);
        const tokenEnd = lineTokens.getEndOffset(endIndex);
        if (column !== tokenStart + 2 && column !== tokenEnd) {
            return undefined;
        }
        // Verify the token looks like a complete quoted string (quote ... quote).
        const lineContent = model.getLineContent(lineNumber);
        const firstChar = lineContent.charAt(tokenStart);
        if (firstChar !== '"' && firstChar !== '\'' && firstChar !== '`') {
            return undefined;
        }
        if (lineContent.charAt(tokenEnd - 1) !== firstChar) {
            return undefined;
        }
        // Skip if string contains RTL characters.
        const content = lineContent.substring(tokenStart + 1, tokenEnd - 1);
        if (containsRTL(content)) {
            return undefined;
        }
        return new Selection(lineNumber, tokenStart + 2, lineNumber, tokenEnd);
    }
    dispatchMouse(data) {
        const options = this.configuration.options;
        const selectionClipboardIsOn = (isLinux && options.get(121 /* EditorOption.selectionClipboard */));
        const columnSelection = options.get(28 /* EditorOption.columnSelection */);
        const scrollOnMiddleClick = options.get(171 /* EditorOption.scrollOnMiddleClick */);
        if (data.middleButton && !selectionClipboardIsOn) {
            if (scrollOnMiddleClick) ;
            else {
                this._columnSelect(data.position, data.mouseColumn, data.inSelectionMode);
            }
        }
        else if (data.startedOnLineNumbers) {
            // If the dragging started on the gutter, then have operations work on the entire line
            if (this._hasMulticursorModifier(data)) {
                if (data.inSelectionMode) {
                    this._lastCursorLineSelect(data.position, data.revealType);
                }
                else {
                    this._createCursor(data.position, true);
                }
            }
            else {
                if (data.inSelectionMode) {
                    this._lineSelectDrag(data.position, data.revealType);
                }
                else {
                    this._lineSelect(data.position, data.revealType);
                }
            }
        }
        else if (data.mouseDownCount >= 4) {
            this._selectAll();
        }
        else if (data.mouseDownCount === 3) {
            if (this._hasMulticursorModifier(data)) {
                if (data.inSelectionMode) {
                    this._lastCursorLineSelectDrag(data.position, data.revealType);
                }
                else {
                    this._lastCursorLineSelect(data.position, data.revealType);
                }
            }
            else {
                if (data.inSelectionMode) {
                    this._lineSelectDrag(data.position, data.revealType);
                }
                else {
                    this._lineSelect(data.position, data.revealType);
                }
            }
        }
        else if (data.mouseDownCount === 2) {
            if (!data.onInjectedText) {
                if (this._hasMulticursorModifier(data)) {
                    this._lastCursorWordSelect(data.position, data.revealType);
                }
                else {
                    if (data.inSelectionMode) {
                        this._wordSelectDrag(data.position, data.revealType);
                    }
                    else {
                        let selection;
                        if (options.get(173 /* EditorOption.doubleClickSelectsBlock */)) {
                            const model = this.viewModel.model;
                            const modelPos = this._convertViewToModelPosition(data.position);
                            selection = ViewController._trySelectBracketContent(model, modelPos) || ViewController._trySelectStringContent(model, modelPos);
                        }
                        if (selection) {
                            this._select(selection);
                        }
                        else {
                            this._wordSelect(data.position, data.revealType);
                        }
                    }
                }
            }
        }
        else {
            if (this._hasMulticursorModifier(data)) {
                if (!this._hasNonMulticursorModifier(data)) {
                    if (data.shiftKey) {
                        this._columnSelect(data.position, data.mouseColumn, true);
                    }
                    else {
                        // Do multi-cursor operations only when purely alt is pressed
                        if (data.inSelectionMode) {
                            this._lastCursorMoveToSelect(data.position, data.revealType);
                        }
                        else {
                            this._createCursor(data.position, false);
                        }
                    }
                }
            }
            else {
                if (data.inSelectionMode) {
                    if (data.altKey) {
                        this._columnSelect(data.position, data.mouseColumn, true);
                    }
                    else {
                        if (columnSelection) {
                            this._columnSelect(data.position, data.mouseColumn, true);
                        }
                        else {
                            this._moveToSelect(data.position, data.revealType);
                        }
                    }
                }
                else {
                    this.moveTo(data.position, data.revealType);
                }
            }
        }
    }
    _usualArgs(viewPosition, revealType) {
        viewPosition = this._validateViewColumn(viewPosition);
        return {
            source: 'mouse',
            position: this._convertViewToModelPosition(viewPosition),
            viewPosition,
            revealType
        };
    }
    moveTo(viewPosition, revealType) {
        CoreNavigationCommands.MoveTo.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _moveToSelect(viewPosition, revealType) {
        CoreNavigationCommands.MoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _columnSelect(viewPosition, mouseColumn, doColumnSelect) {
        viewPosition = this._validateViewColumn(viewPosition);
        CoreNavigationCommands.ColumnSelect.runCoreEditorCommand(this.viewModel, {
            source: 'mouse',
            position: this._convertViewToModelPosition(viewPosition),
            viewPosition: viewPosition,
            mouseColumn: mouseColumn,
            doColumnSelect: doColumnSelect
        });
    }
    _createCursor(viewPosition, wholeLine) {
        viewPosition = this._validateViewColumn(viewPosition);
        CoreNavigationCommands.CreateCursor.runCoreEditorCommand(this.viewModel, {
            source: 'mouse',
            position: this._convertViewToModelPosition(viewPosition),
            viewPosition: viewPosition,
            wholeLine: wholeLine
        });
    }
    _lastCursorMoveToSelect(viewPosition, revealType) {
        CoreNavigationCommands.LastCursorMoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _wordSelect(viewPosition, revealType) {
        CoreNavigationCommands.WordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _wordSelectDrag(viewPosition, revealType) {
        CoreNavigationCommands.WordSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _lastCursorWordSelect(viewPosition, revealType) {
        CoreNavigationCommands.LastCursorWordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _lineSelect(viewPosition, revealType) {
        CoreNavigationCommands.LineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _lineSelectDrag(viewPosition, revealType) {
        CoreNavigationCommands.LineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _lastCursorLineSelect(viewPosition, revealType) {
        CoreNavigationCommands.LastCursorLineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _lastCursorLineSelectDrag(viewPosition, revealType) {
        CoreNavigationCommands.LastCursorLineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _select(selection) {
        CoreNavigationCommands.SetSelection.runCoreEditorCommand(this.viewModel, { source: 'mouse', selection });
    }
    _selectAll() {
        CoreNavigationCommands.SelectAll.runCoreEditorCommand(this.viewModel, { source: 'mouse' });
    }
    // ----------------------
    _convertViewToModelPosition(viewPosition) {
        return this.viewModel.coordinatesConverter.convertViewPositionToModelPosition(viewPosition);
    }
    emitKeyDown(e) {
        this.userInputEvents.emitKeyDown(e);
    }
    emitKeyUp(e) {
        this.userInputEvents.emitKeyUp(e);
    }
    emitContextMenu(e) {
        this.userInputEvents.emitContextMenu(e);
    }
    emitMouseMove(e) {
        this.userInputEvents.emitMouseMove(e);
    }
    emitMouseLeave(e) {
        this.userInputEvents.emitMouseLeave(e);
    }
    emitMouseUp(e) {
        this.userInputEvents.emitMouseUp(e);
    }
    emitMouseDown(e) {
        this.userInputEvents.emitMouseDown(e);
    }
    emitMouseDrag(e) {
        this.userInputEvents.emitMouseDrag(e);
    }
    emitMouseDrop(e) {
        this.userInputEvents.emitMouseDrop(e);
    }
    emitMouseDropCanceled() {
        this.userInputEvents.emitMouseDropCanceled();
    }
    emitMouseWheel(e) {
        this.userInputEvents.emitMouseWheel(e);
    }
}

export { ViewController };
