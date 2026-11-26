import { binarySearch2 } from '../../../../base/common/arrays.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class AnnotatedString {
    constructor(annotations = []) {
        /**
         * Annotations are non intersecting and contiguous in the array.
         */
        this._annotations = [];
        this._annotations = annotations;
    }
    /**
     * Set annotations for a specific range.
     * Annotations should be sorted and non-overlapping.
     * If the annotation value is undefined, the annotation is removed.
     */
    setAnnotations(annotations) {
        for (const annotation of annotations.annotations) {
            const startIndex = this._getStartIndexOfIntersectingAnnotation(annotation.range.start);
            const endIndexExclusive = this._getEndIndexOfIntersectingAnnotation(annotation.range.endExclusive);
            if (annotation.annotation !== undefined) {
                this._annotations.splice(startIndex, endIndexExclusive - startIndex, { range: annotation.range, annotation: annotation.annotation });
            }
            else {
                this._annotations.splice(startIndex, endIndexExclusive - startIndex);
            }
        }
    }
    /**
     * Returns all annotations that intersect with the given offset range.
     */
    getAnnotationsIntersecting(range) {
        const startIndex = this._getStartIndexOfIntersectingAnnotation(range.start);
        const endIndexExclusive = this._getEndIndexOfIntersectingAnnotation(range.endExclusive);
        return this._annotations.slice(startIndex, endIndexExclusive);
    }
    _getStartIndexOfIntersectingAnnotation(offset) {
        // Find index to the left of the offset
        const startIndexWhereToReplace = binarySearch2(this._annotations.length, (index) => {
            return this._annotations[index].range.start - offset;
        });
        let startIndex;
        if (startIndexWhereToReplace >= 0) {
            startIndex = startIndexWhereToReplace;
            // Also include the next annotation if it ends exactly at offset (touching boundary)
            const nextCandidate = this._annotations[startIndex]?.range;
            if (nextCandidate && nextCandidate.endExclusive === offset) {
                startIndex--;
            }
        }
        else {
            const candidate = this._annotations[-(startIndexWhereToReplace + 2)]?.range;
            if (candidate && offset >= candidate.start && offset < candidate.endExclusive) {
                startIndex = -(startIndexWhereToReplace + 2);
            }
            else {
                startIndex = -(startIndexWhereToReplace + 1);
            }
        }
        return startIndex;
    }
    _getEndIndexOfIntersectingAnnotation(offset) {
        // Find index to the right of the offset
        const endIndexWhereToReplace = binarySearch2(this._annotations.length, (index) => {
            return this._annotations[index].range.endExclusive - offset;
        });
        let endIndexExclusive;
        if (endIndexWhereToReplace >= 0) {
            endIndexExclusive = endIndexWhereToReplace + 1;
            // Also include the next annotation if it starts exactly at offset (touching boundary)
            const nextCandidate = this._annotations[endIndexExclusive]?.range;
            if (nextCandidate && nextCandidate.start === offset) {
                endIndexExclusive++;
            }
        }
        else {
            const candidate = this._annotations[-(endIndexWhereToReplace + 1)]?.range;
            if (candidate && offset >= candidate.start && offset <= candidate.endExclusive) {
                endIndexExclusive = -endIndexWhereToReplace;
            }
            else {
                endIndexExclusive = -(endIndexWhereToReplace + 1);
            }
        }
        return endIndexExclusive;
    }
    /**
     * Applies a string edit to the annotated string, updating annotation ranges accordingly.
     * @param edit The string edit to apply.
     * @returns The annotations that were deleted (became empty) as a result of the edit.
     */
    applyEdit(edit) {
        const annotations = this._annotations.slice();
        // treat edits as deletion of the replace range and then as insertion that extends the first range
        const finalAnnotations = [];
        const deletedAnnotations = [];
        let offset = 0;
        for (const e of edit.replacements) {
            while (true) {
                // ranges before the current edit
                const annotation = annotations[0];
                if (!annotation) {
                    break;
                }
                const range = annotation.range;
                if (range.endExclusive >= e.replaceRange.start) {
                    break;
                }
                annotations.shift();
                const newAnnotation = { range: range.delta(offset), annotation: annotation.annotation };
                if (!newAnnotation.range.isEmpty) {
                    finalAnnotations.push(newAnnotation);
                }
                else {
                    deletedAnnotations.push(newAnnotation);
                }
            }
            const intersecting = [];
            while (true) {
                const annotation = annotations[0];
                if (!annotation) {
                    break;
                }
                const range = annotation.range;
                if (!range.intersectsOrTouches(e.replaceRange)) {
                    break;
                }
                annotations.shift();
                intersecting.push(annotation);
            }
            for (let i = intersecting.length - 1; i >= 0; i--) {
                const annotation = intersecting[i];
                let r = annotation.range;
                // Inserted text will extend the first intersecting annotation, if the edit truly overlaps it
                const shouldExtend = i === 0 && (e.replaceRange.endExclusive > r.start) && (e.replaceRange.start < r.endExclusive);
                // Annotation shrinks by the overlap then grows with the new text length
                const overlap = r.intersect(e.replaceRange).length;
                r = r.deltaEnd(-overlap + (shouldExtend ? e.newText.length : 0));
                // If the annotation starts after the edit start, shift left to the edit start position
                const rangeAheadOfReplaceRange = r.start - e.replaceRange.start;
                if (rangeAheadOfReplaceRange > 0) {
                    r = r.delta(-rangeAheadOfReplaceRange);
                }
                // If annotation shouldn't be extended AND it is after or on edit start, move it after the newly inserted text
                if (!shouldExtend && rangeAheadOfReplaceRange >= 0) {
                    r = r.delta(e.newText.length);
                }
                // We already took our offset into account.
                // Because we add r back to the queue (which then adds offset again),
                // we have to remove it here so as to not double count it.
                r = r.delta(-(e.newText.length - e.replaceRange.length));
                annotations.unshift({ annotation: annotation.annotation, range: r });
            }
            offset += e.newText.length - e.replaceRange.length;
        }
        while (true) {
            const annotation = annotations[0];
            if (!annotation) {
                break;
            }
            annotations.shift();
            const newAnnotation = { annotation: annotation.annotation, range: annotation.range.delta(offset) };
            if (!newAnnotation.range.isEmpty) {
                finalAnnotations.push(newAnnotation);
            }
            else {
                deletedAnnotations.push(newAnnotation);
            }
        }
        this._annotations = finalAnnotations;
        return deletedAnnotations;
    }
}
class AnnotationsUpdate {
    static create(annotations) {
        return new AnnotationsUpdate(annotations);
    }
    constructor(annotations) {
        this._annotations = annotations;
    }
    get annotations() {
        return this._annotations;
    }
}

export { AnnotatedString, AnnotationsUpdate };
