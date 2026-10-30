import product from '../../../platform/product/common/product.js';
import { isObject } from '../../../base/common/types.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Get the completions enablement setting name from product configuration.
 */
function getCompletionsEnablementSettingName() {
    return product.defaultChatAgent?.completionsEnablementSetting;
}
/**
 * Checks if completions (e.g., Copilot) are enabled for a given language ID
 * using `ITextResourceConfigurationService`.
 *
 * @param configurationService The text resource configuration service to read settings from.
 * @param modeId The language ID to check. Defaults to '*' which checks the global setting.
 * @returns `true` if completions are enabled for the language, `false` otherwise.
 */
function isCompletionsEnabledWithTextResourceConfig(configurationService, resource, modeId = '*') {
    const settingName = getCompletionsEnablementSettingName();
    if (!settingName) {
        return false;
    }
    // Pass undefined as resource to get the global setting
    return isCompletionsEnabledFromObject(configurationService.getValue(resource, settingName), modeId);
}
/**
 * Checks if completions are enabled for a given language ID using a pre-fetched
 * completions enablement object.
 *
 * @param completionsEnablementObject The object containing per-language enablement settings.
 * @param modeId The language ID to check. Defaults to '*' which checks the global setting.
 * @returns `true` if completions are enabled for the language, `false` otherwise.
 */
function isCompletionsEnabledFromObject(completionsEnablementObject, modeId = '*') {
    if (!isObject(completionsEnablementObject)) {
        return false; // default to disabled if setting is not available
    }
    if (typeof completionsEnablementObject[modeId] !== 'undefined') {
        return Boolean(completionsEnablementObject[modeId]); // go with setting if explicitly defined
    }
    return Boolean(completionsEnablementObject['*']); // fallback to global setting otherwise
}

export { isCompletionsEnabledFromObject, isCompletionsEnabledWithTextResourceConfig };
