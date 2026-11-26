import { equals as equals$1 } from './arrays.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Compares two items for equality using strict equality.
*/
function strictEquals(a, b) {
    return a === b;
}
function strictEqualsC() {
    return (a, b) => a === b;
}
/**
 * Checks if the items of two arrays are equal.
 * By default, strict equality is used to compare elements, but a custom equality comparer can be provided.
 */
function arrayEquals(a, b, itemEquals) {
    return equals$1(a, b, itemEquals ?? strictEquals);
}
/**
 * Checks if the items of two arrays are equal.
 * By default, strict equality is used to compare elements, but a custom equality comparer can be provided.
 */
function arrayEqualsC(itemEquals) {
    return (a, b) => equals$1(a, b, itemEquals ?? strictEquals);
}
/**
 * Drills into arrays (items ordered) and objects (keys unordered) and uses strict equality on everything else.
*/
function structuralEquals(a, b) {
    if (a === b) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!structuralEquals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    if (a && typeof a === 'object' && b && typeof b === 'object') {
        if (Object.getPrototypeOf(a) === Object.prototype && Object.getPrototypeOf(b) === Object.prototype) {
            const aObj = a;
            const bObj = b;
            const keysA = Object.keys(aObj);
            const keysB = Object.keys(bObj);
            const keysBSet = new Set(keysB);
            if (keysA.length !== keysB.length) {
                return false;
            }
            for (const key of keysA) {
                if (!keysBSet.has(key)) {
                    return false;
                }
                if (!structuralEquals(aObj[key], bObj[key])) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
function structuralEqualsC() {
    return (a, b) => structuralEquals(a, b);
}
/**
 * Two items are considered equal, if their stringified representations are equal.
*/
function jsonStringifyEquals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
/**
 * Two items are considered equal, if their stringified representations are equal.
*/
function jsonStringifyEqualsC() {
    return (a, b) => JSON.stringify(a) === JSON.stringify(b);
}
/**
 * Uses `item.equals(other)` to determine equality.
 */
function thisEqualsC() {
    return (a, b) => a.equals(b);
}
/**
 * Checks if two items are both null or undefined, or are equal according to the provided equality comparer.
*/
function equalsIfDefined(v1, v2, equals) {
    if (v1 === undefined || v1 === null || v2 === undefined || v2 === null) {
        return v2 === v1;
    }
    return equals(v1, v2);
}
/**
 * Returns an equality comparer that checks if two items are both null or undefined, or are equal according to the provided equality comparer.
*/
function equalsIfDefinedC(equals) {
    return (v1, v2) => {
        if (v1 === undefined || v1 === null || v2 === undefined || v2 === null) {
            return v2 === v1;
        }
        return equals(v1, v2);
    };
}
/**
 * Each function in this file which offers an equality comparison, has an accompanying
 * `*C` variant which returns an EqualityComparer function.
 *
 * The `*C` variant allows for easier composition of equality comparers and improved type-inference.
*/
var equals;
(function (equals) {
    equals.strict = strictEquals;
    equals.strictC = strictEqualsC;
    equals.array = arrayEquals;
    equals.arrayC = arrayEqualsC;
    equals.structural = structuralEquals;
    equals.structuralC = structuralEqualsC;
    equals.jsonStringify = jsonStringifyEquals;
    equals.jsonStringifyC = jsonStringifyEqualsC;
    equals.thisC = thisEqualsC;
    equals.ifDefined = equalsIfDefined;
    equals.ifDefinedC = equalsIfDefinedC;
})(equals || (equals = {}));

export { arrayEquals, arrayEqualsC, equals, equalsIfDefined, equalsIfDefinedC, jsonStringifyEquals, jsonStringifyEqualsC, strictEquals, strictEqualsC, structuralEquals, structuralEqualsC, thisEqualsC };
