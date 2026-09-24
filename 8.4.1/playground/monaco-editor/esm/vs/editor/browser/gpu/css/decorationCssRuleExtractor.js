import { $, getActiveDocument, getActiveWindow } from '../../../../base/browser/dom.js';
import { Disposable, toDisposable } from '../../../../base/common/lifecycle.js';
import './media/decorationCssRuleExtractor.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Extracts CSS rules that would be applied to certain decoration classes.
 */
class DecorationCssRuleExtractor extends Disposable {
    constructor() {
        super();
        this._ruleCache = new Map();
        this._cssVariableCache = new Map();
        this._container = $('div.monaco-decoration-css-rule-extractor');
        this._dummyElement = $('span');
        this._container.appendChild(this._dummyElement);
        this._register(toDisposable(() => this._container.remove()));
    }
    getStyleRules(canvas, decorationClassName) {
        // Check cache
        const existing = this._ruleCache.get(decorationClassName);
        if (existing) {
            return existing;
        }
        // Set up DOM
        this._dummyElement.className = decorationClassName;
        canvas.appendChild(this._container);
        // Get rules
        const rules = this._getStyleRules(decorationClassName);
        this._ruleCache.set(decorationClassName, rules);
        // Tear down DOM
        canvas.removeChild(this._container);
        return rules;
    }
    _getStyleRules(className) {
        // Iterate through all stylesheets and imported stylesheets to find matching rules
        const rules = [];
        const doc = getActiveDocument();
        const stylesheets = [...doc.styleSheets];
        // className can be space-separated (e.g., 'ghost-text-decoration syntax-highlighted')
        // We need to search for each individual class
        const classNames = className.split(' ').filter(c => c.length > 0);
        for (let i = 0; i < stylesheets.length; i++) {
            const stylesheet = stylesheets[i];
            this._collectMatchingRules(stylesheet.cssRules, classNames, rules);
        }
        return rules;
    }
    _collectMatchingRules(cssRules, classNames, result) {
        for (const rule of cssRules) {
            if (rule instanceof CSSImportRule) {
                if (rule.styleSheet) {
                    this._collectMatchingRules(rule.styleSheet.cssRules, classNames, result);
                }
            }
            else if (rule instanceof CSSStyleRule) {
                // Note that originally `.matches(rule.selectorText)` was used but this would
                // not pick up pseudo-classes which are important to determine support of the
                // returned styles.
                //
                // Since a selector could contain a class name lookup that is simple a prefix of
                // the class name we are looking for, we need to also check the character after
                // it.
                for (const className of classNames) {
                    const searchTerm = `.${className}`;
                    const index = rule.selectorText.indexOf(searchTerm);
                    if (index !== -1) {
                        const endOfResult = index + searchTerm.length;
                        if (rule.selectorText.length === endOfResult || rule.selectorText.substring(endOfResult, endOfResult + 1).match(/[ :.]/)) {
                            result.push(rule);
                            break; // Don't add the same rule multiple times
                        }
                    }
                }
                // Recursively check nested rules (CSS nesting)
                if (rule.cssRules?.length) {
                    this._collectMatchingRules(rule.cssRules, classNames, result);
                }
            }
        }
    }
    /**
     * Resolves a CSS variable to its computed value using the container element.
     */
    resolveCssVariable(canvas, variableName) {
        let result = this._cssVariableCache.get(variableName);
        if (result === undefined) {
            canvas.appendChild(this._container);
            result = getActiveWindow().getComputedStyle(this._container).getPropertyValue(variableName).trim();
            canvas.removeChild(this._container);
            this._cssVariableCache.set(variableName, result);
        }
        return result;
    }
    /**
     * Clears all cached CSS rules and CSS variable values. This should be called when the theme
     * changes to ensure fresh values are computed.
     */
    clear() {
        this._ruleCache.clear();
        this._cssVariableCache.clear();
    }
}

export { DecorationCssRuleExtractor };
