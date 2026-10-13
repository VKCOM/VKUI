import { LRUCache } from './map.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
new LRUCache(10000);
const nfdCache = new LRUCache(10000); // bounded to 10000 elements
function normalizeNFD(str) {
    return normalize(str, 'NFD', nfdCache);
}
const nonAsciiCharactersPattern = /[^\u0000-\u0080]/;
function normalize(str, form, normalizedCache) {
    if (!str) {
        return str;
    }
    const cached = normalizedCache.get(str);
    if (cached) {
        return cached;
    }
    let res;
    if (nonAsciiCharactersPattern.test(str)) {
        res = str.normalize(form);
    }
    else {
        res = str;
    }
    // Use the cache for fast lookup
    normalizedCache.set(str, res);
    return res;
}
/**
 * Attempts to normalize the string to Unicode base format (NFD -> remove accents -> lower case).
 * When original string contains accent characters directly, only lower casing will be performed.
 * This is done so as to keep the string length the same and not affect indices.
 *
 * @see https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463
 */
const tryNormalizeToBase = function () {
    const cache = new LRUCache(10000); // bounded to 10000 elements
    const accentsRegex = /[\u0300-\u036f]/g;
    return function (str) {
        const cached = cache.get(str);
        if (cached) {
            return cached;
        }
        const noAccents = normalizeNFD(str).replace(accentsRegex, '');
        const result = (noAccents.length === str.length ? noAccents : str).toLowerCase();
        cache.set(str, result);
        return result;
    };
}();

export { normalizeNFD, tryNormalizeToBase };
