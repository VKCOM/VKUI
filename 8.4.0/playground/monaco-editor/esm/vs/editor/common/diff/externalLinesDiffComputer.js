import { resolveAmdNodeModulePath } from '../../../amdX.js';
import { LineRange } from '../core/ranges/lineRange.js';
import { OffsetRange } from '../core/ranges/offsetRange.js';
import { StringText } from '../core/text/abstractText.js';
import '../core/text/positionToOffset.js';
import { LinesDiff, MovedText } from './linesDiffComputer.js';
import { lineRangeMappingFromRangeMappings, RangeMapping, LineRangeMapping } from './rangeMapping.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
let externalModulePromise;
let externalDiffComputerPromise;
let externalWasmDiffComputerPromise;
function loadExternalModule() {
    if (!externalModulePromise) {
        const url = resolveAmdNodeModulePath('@vscode/diff', 'dist/index.js');
        // Use a runtime-computed URL to keep bundlers from rewriting the import.
        externalModulePromise = import(/* webpackIgnore: true */ /* @vite-ignore */ `${url}`);
    }
    return externalModulePromise;
}
function loadExternalComputer(useWasm) {
    if (useWasm) {
        if (!externalWasmDiffComputerPromise) {
            externalWasmDiffComputerPromise = loadExternalModule().then(m => m.createDiffComputer({ useWasm: true }));
        }
        return externalWasmDiffComputerPromise;
    }
    if (!externalDiffComputerPromise) {
        externalDiffComputerPromise = loadExternalModule().then(m => m.createDiffComputer({ useWasm: false }));
    }
    return externalDiffComputerPromise;
}
async function getExternalLinesDiffComputer(useWasm) {
    const computer = await loadExternalComputer(useWasm);
    return new ExternalLinesDiffComputer(computer);
}
class ExternalLinesDiffComputer {
    constructor(_computer) {
        this._computer = _computer;
    }
    computeDiff(originalLines, modifiedLines, options) {
        const originalText = new StringText(originalLines.join('\n'));
        const modifiedText = new StringText(modifiedLines.join('\n'));
        const result = this._computer.computeDiff(originalText.value, modifiedText.value, {
            // TODO: this currently throws
            ignoreTrimWhitespace: true,
            // ignoreTrimWhitespace: options.ignoreTrimWhitespace,
            // TODO: support this. Currently throws with "Time is not implemented in this environment."
            // maxComputationTimeMs: options.maxComputationTimeMs,
            computeMoves: options.computeMoves,
            extendToSubwords: options.extendToSubwords,
        });
        const originalTransformer = originalText.getTransformer();
        const modifiedTransformer = modifiedText.getTransformer();
        const rangeMappings = [];
        let delta = 0;
        for (const r of result.edits.replacements) {
            const modifiedStart = r.range.start + delta;
            const modifiedEndExclusive = modifiedStart + r.newText.length;
            const originalRange = originalTransformer.getRange(new OffsetRange(r.range.start, r.range.endExclusive));
            const modifiedRange = modifiedTransformer.getRange(new OffsetRange(modifiedStart, modifiedEndExclusive));
            rangeMappings.push(new RangeMapping(originalRange, modifiedRange));
            delta += r.newText.length - (r.range.endExclusive - r.range.start);
        }
        const changes = lineRangeMappingFromRangeMappings(rangeMappings, originalText, modifiedText);
        const moves = [];
        if (options.computeMoves) {
            for (const move of result.moves) {
                const originalStartPos = originalTransformer.getPosition(move.range.original.start);
                const originalEndPos = originalTransformer.getPosition(move.range.original.endExclusive);
                const modifiedStartPos = modifiedTransformer.getPosition(move.range.modified.start);
                const modifiedEndPos = modifiedTransformer.getPosition(move.range.modified.endExclusive);
                const originalLineRange = new LineRange(originalStartPos.lineNumber, originalEndPos.lineNumber);
                const modifiedLineRange = new LineRange(modifiedStartPos.lineNumber, modifiedEndPos.lineNumber);
                moves.push(new MovedText(new LineRangeMapping(originalLineRange, modifiedLineRange), []));
            }
        }
        return new LinesDiff(changes, moves, result.hitTimeout);
    }
}

export { getExternalLinesDiffComputer };
