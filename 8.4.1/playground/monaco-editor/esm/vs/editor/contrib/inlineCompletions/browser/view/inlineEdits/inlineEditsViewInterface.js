import { getWindow } from '../../../../../../base/browser/dom.js';
import { StandardMouseEvent } from '../../../../../../base/browser/mouseEvent.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var InlineEditTabAction;
(function (InlineEditTabAction) {
    InlineEditTabAction["Jump"] = "jump";
    InlineEditTabAction["Accept"] = "accept";
    InlineEditTabAction["Inactive"] = "inactive";
})(InlineEditTabAction || (InlineEditTabAction = {}));
class InlineEditClickEvent {
    static create(event, alternativeAction = false) {
        return new InlineEditClickEvent(new StandardMouseEvent(getWindow(event), event), alternativeAction);
    }
    constructor(event, alternativeAction = false) {
        this.event = event;
        this.alternativeAction = alternativeAction;
    }
}
// TODO: Move this out of here as it is also includes ghosttext
var InlineCompletionViewKind;
(function (InlineCompletionViewKind) {
    InlineCompletionViewKind["GhostText"] = "ghostText";
    InlineCompletionViewKind["Custom"] = "custom";
    InlineCompletionViewKind["SideBySide"] = "sideBySide";
    InlineCompletionViewKind["Deletion"] = "deletion";
    InlineCompletionViewKind["InsertionInline"] = "insertionInline";
    InlineCompletionViewKind["InsertionMultiLine"] = "insertionMultiLine";
    InlineCompletionViewKind["WordReplacements"] = "wordReplacements";
    InlineCompletionViewKind["LineReplacement"] = "lineReplacement";
    InlineCompletionViewKind["Collapsed"] = "collapsed";
    InlineCompletionViewKind["JumpTo"] = "jumpTo";
})(InlineCompletionViewKind || (InlineCompletionViewKind = {}));
class InlineCompletionViewData {
    constructor(cursorColumnDistance, cursorLineDistance, lineCountOriginal, lineCountModified, characterCountOriginal, characterCountModified, disjointReplacements, sameShapeReplacements) {
        this.cursorColumnDistance = cursorColumnDistance;
        this.cursorLineDistance = cursorLineDistance;
        this.lineCountOriginal = lineCountOriginal;
        this.lineCountModified = lineCountModified;
        this.characterCountOriginal = characterCountOriginal;
        this.characterCountModified = characterCountModified;
        this.disjointReplacements = disjointReplacements;
        this.sameShapeReplacements = sameShapeReplacements;
        this.longDistanceHintVisible = undefined;
        this.longDistanceHintDistance = undefined;
    }
    setLongDistanceViewData(lineNumber, inlineEditLineNumber) {
        this.longDistanceHintVisible = true;
        this.longDistanceHintDistance = Math.abs(inlineEditLineNumber - lineNumber);
    }
    getData() {
        return {
            cursorColumnDistance: this.cursorColumnDistance,
            cursorLineDistance: this.cursorLineDistance,
            lineCountOriginal: this.lineCountOriginal,
            lineCountModified: this.lineCountModified,
            characterCountOriginal: this.characterCountOriginal,
            characterCountModified: this.characterCountModified,
            disjointReplacements: this.disjointReplacements,
            sameShapeReplacements: this.sameShapeReplacements,
            longDistanceHintVisible: this.longDistanceHintVisible,
            longDistanceHintDistance: this.longDistanceHintDistance
        };
    }
}

export { InlineCompletionViewData, InlineCompletionViewKind, InlineEditClickEvent, InlineEditTabAction };
