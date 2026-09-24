const syntacticalChars = new Set([';', ',', '=', '+', '-', '*', '/', '{', '}', '(', ')', '[', ']', '<', '>', ':', '.', '!', '?', '&', '|', '^', '%', '@', '#', '~', '`', '\\', '\'', '"', '$']);
function isSyntacticalChar(char) {
    return syntacticalChars.has(char);
}
function isIdentifierChar(char) {
    return /[a-zA-Z0-9_]/.test(char);
}
function isWhitespaceChar(char) {
    return char === ' ' || char === '\t';
}
function analyzeTextShape(text) {
    const lines = text.split(/\r\n|\r|\n/);
    if (lines.length > 1) {
        return {
            kind: 'multiLine',
            lineCount: lines.length,
        };
    }
    const isSingleChar = text.length === 1;
    let singleCharKind;
    if (isSingleChar) {
        if (isSyntacticalChar(text)) {
            singleCharKind = 'syntactical';
        }
        else if (isIdentifierChar(text)) {
            singleCharKind = 'identifier';
        }
        else if (isWhitespaceChar(text)) {
            singleCharKind = 'whitespace';
        }
    }
    // Analyze whitespace patterns
    const whitespaceMatches = text.match(/[ \t]+/g) || [];
    const isMultipleWhitespace = whitespaceMatches.some(ws => ws.length > 1);
    const hasDuplicatedWhitespace = whitespaceMatches.some(ws => (ws.includes('  ') || ws.includes('\t\t')));
    // Analyze word patterns
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const isWord = words.length === 1 && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(words[0]);
    const isMultipleWords = words.length > 1;
    return {
        kind: 'singleLine',
        isSingleCharacter: isSingleChar,
        singleCharacterKind: singleCharKind,
        isWord,
        isMultipleWords,
        isMultipleWhitespace,
        hasDuplicatedWhitespace,
    };
}
class InlineSuggestionEditKind {
    constructor(edits) {
        this.edits = edits;
    }
    toString() {
        return JSON.stringify({ edits: this.edits });
    }
}
function computeEditKind(edit, textModel, cursorPosition) {
    if (edit.replacements.length === 0) {
        // Empty edit - return undefined as there's no edit to classify
        return undefined;
    }
    return new InlineSuggestionEditKind(edit.replacements.map(rep => computeSingleEditKind(rep, textModel)));
}
function countLines(text) {
    if (text.length === 0) {
        return 0;
    }
    return text.split(/\r\n|\r|\n/).length - 1;
}
function computeSingleEditKind(replacement, textModel, cursorPosition) {
    const replaceRange = replacement.replaceRange;
    const newText = replacement.newText;
    const deletedLength = replaceRange.length;
    const insertedLength = newText.length;
    const linesInserted = countLines(newText);
    const kind = replaceRange.isEmpty ? 'insert' : (newText.length === 0 ? 'delete' : 'replace');
    switch (kind) {
        case 'insert':
            return {
                operation: 'insert',
                properties: computeInsertProperties(replaceRange.start, newText, textModel),
                charactersInserted: insertedLength,
                charactersDeleted: 0,
                linesInserted,
                linesDeleted: 0,
            };
        case 'delete': {
            const deletedText = textModel.getValue().substring(replaceRange.start, replaceRange.endExclusive);
            return {
                operation: 'delete',
                properties: computeDeleteProperties(replaceRange.start, replaceRange.endExclusive, textModel),
                charactersInserted: 0,
                charactersDeleted: deletedLength,
                linesInserted: 0,
                linesDeleted: countLines(deletedText),
            };
        }
        case 'replace': {
            const oldText = textModel.getValue().substring(replaceRange.start, replaceRange.endExclusive);
            return {
                operation: 'replace',
                properties: computeReplaceProperties(oldText, newText),
                charactersInserted: insertedLength,
                charactersDeleted: deletedLength,
                linesInserted,
                linesDeleted: countLines(oldText),
            };
        }
    }
}
function computeInsertProperties(offset, newText, textModel, cursorPosition) {
    const textShape = analyzeTextShape(newText);
    const insertPosition = textModel.getPositionAt(offset);
    const lineContent = textModel.getLineContent(insertPosition.lineNumber);
    const lineLength = lineContent.length;
    // Determine location shape
    let locationShape;
    const isLineEmpty = lineContent.trim().length === 0;
    const isAtEndOfLine = insertPosition.column > lineLength;
    const isAtStartOfLine = insertPosition.column === 1;
    if (isLineEmpty) {
        locationShape = 'emptyLine';
    }
    else if (isAtEndOfLine) {
        locationShape = 'endOfLine';
    }
    else if (isAtStartOfLine) {
        locationShape = 'startOfLine';
    }
    else {
        locationShape = 'middleOfLine';
    }
    // Compute relative to cursor if cursor position is provided
    let relativeToCursor;
    return {
        textShape,
        locationShape,
        relativeToCursor,
    };
}
function computeDeleteProperties(startOffset, endOffset, textModel) {
    const deletedText = textModel.getValue().substring(startOffset, endOffset);
    const textShape = analyzeTextShape(deletedText);
    const startPosition = textModel.getPositionAt(startOffset);
    const endPosition = textModel.getPositionAt(endOffset);
    // Check if delete is at end of line
    const lineContent = textModel.getLineContent(endPosition.lineNumber);
    const isAtEndOfLine = endPosition.column > lineContent.length;
    // Check if entire line content is deleted
    const deletesEntireLineContent = startPosition.lineNumber === endPosition.lineNumber &&
        startPosition.column === 1 &&
        endPosition.column > lineContent.length;
    return {
        textShape,
        isAtEndOfLine,
        deletesEntireLineContent,
    };
}
function computeReplaceProperties(oldText, newText) {
    const oldShape = analyzeTextShape(oldText);
    const newShape = analyzeTextShape(newText);
    const oldIsWord = oldShape.kind === 'singleLine' && oldShape.isWord;
    const newIsWord = newShape.kind === 'singleLine' && newShape.isWord;
    const isWordToWordReplacement = oldIsWord && newIsWord;
    const isAdditive = newText.length > oldText.length;
    const isSubtractive = newText.length < oldText.length;
    const isSingleLineToSingleLine = oldShape.kind === 'singleLine' && newShape.kind === 'singleLine';
    const isSingleLineToMultiLine = oldShape.kind === 'singleLine' && newShape.kind === 'multiLine';
    const isMultiLineToSingleLine = oldShape.kind === 'multiLine' && newShape.kind === 'singleLine';
    return {
        isWordToWordReplacement,
        isAdditive,
        isSubtractive,
        isSingleLineToSingleLine,
        isSingleLineToMultiLine,
        isMultiLineToSingleLine,
    };
}

export { InlineSuggestionEditKind, computeEditKind };
