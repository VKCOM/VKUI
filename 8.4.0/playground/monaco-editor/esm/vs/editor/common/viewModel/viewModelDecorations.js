import { Range } from '../core/range.js';
import { InlineModelDecorationsComputer } from './inlineDecorations.js';
import { filterValidationDecorations, filterFontDecorations } from '../config/editorOptions.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewModelDecorations {
    constructor(editorId, model, configuration, linesCollection, coordinatesConverter) {
        this.editorId = editorId;
        this.configuration = configuration;
        this._linesCollection = linesCollection;
        const context = {
            getModelDecorations: (viewRange, onlyMinimapDecorations, onlyMarginDecorations) => this._linesCollection.getDecorationsInRange(viewRange, this.editorId, filterValidationDecorations(this.configuration.options), filterFontDecorations(this.configuration.options), onlyMinimapDecorations, onlyMarginDecorations)
        };
        this._inlineDecorationsComputer = new InlineModelDecorationsComputer(context, model, coordinatesConverter);
        this._cachedModelDecorationsResolver = null;
        this._cachedModelDecorationsResolverViewRange = null;
    }
    _clearCachedModelDecorationsResolver() {
        this._cachedModelDecorationsResolver = null;
        this._cachedModelDecorationsResolverViewRange = null;
    }
    dispose() {
        this._inlineDecorationsComputer.reset();
        this._clearCachedModelDecorationsResolver();
    }
    reset() {
        this._inlineDecorationsComputer.reset();
        this._clearCachedModelDecorationsResolver();
    }
    onModelDecorationsChanged() {
        this._inlineDecorationsComputer.onModelDecorationsChanged();
        this._clearCachedModelDecorationsResolver();
    }
    onLineMappingChanged() {
        this._inlineDecorationsComputer.onLineMappingChanged();
        this._clearCachedModelDecorationsResolver();
    }
    getMinimapDecorationsInRange(range) {
        return this._inlineDecorationsComputer.getDecorations(range, true, false).decorations;
    }
    getDecorationsViewportData(viewRange) {
        let cacheIsValid = (this._cachedModelDecorationsResolver !== null);
        cacheIsValid = cacheIsValid && (viewRange.equalsRange(this._cachedModelDecorationsResolverViewRange));
        if (!cacheIsValid) {
            this._cachedModelDecorationsResolver = this._inlineDecorationsComputer.getDecorations(viewRange, false, false);
            this._cachedModelDecorationsResolverViewRange = viewRange;
        }
        return this._cachedModelDecorationsResolver;
    }
    getDecorationsOnLine(lineNumber, onlyMinimapDecorations = false, onlyMarginDecorations = false) {
        const range = new Range(lineNumber, this._linesCollection.getViewLineMinColumn(lineNumber), lineNumber, this._linesCollection.getViewLineMaxColumn(lineNumber));
        return this._inlineDecorationsComputer.getDecorations(range, onlyMinimapDecorations, onlyMarginDecorations);
    }
}

export { ViewModelDecorations };
