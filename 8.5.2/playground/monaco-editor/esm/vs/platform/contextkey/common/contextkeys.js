import { isMacintosh, isLinux, isWindows, isChromeOS, isWeb, isIOS, isMobile } from '../../../base/common/platform.js';
import { localize } from '../../../nls.js';
import { RawContextKey } from './contextkey.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
new RawContextKey('isMac', isMacintosh, localize(1778, "Whether the operating system is macOS"));
new RawContextKey('isLinux', isLinux, localize(1779, "Whether the operating system is Linux"));
const IsWindowsContext = new RawContextKey('isWindows', isWindows, localize(1780, "Whether the operating system is Windows"));
new RawContextKey('isChromeOS', isChromeOS, localize(1781, "Whether the operating system is ChromeOS"));
const IsWebContext = new RawContextKey('isWeb', isWeb, localize(1782, "Whether the platform is a web browser"));
new RawContextKey('isMacNative', isMacintosh && !isWeb, localize(1783, "Whether the operating system is macOS on a non-browser platform"));
new RawContextKey('isIOS', isIOS, localize(1784, "Whether the operating system is iOS"));
new RawContextKey('isMobile', isMobile, localize(1785, "Whether the platform is a mobile web browser"));
new RawContextKey('isDevelopment', false, true);
new RawContextKey('productQualityType', '', localize(1786, "Quality type of VS Code"));
const InputFocusedContextKey = 'inputFocus';
const InputFocusedContext = new RawContextKey(InputFocusedContextKey, false, localize(1787, "Whether keyboard focus is inside an input box"));

export { InputFocusedContext, InputFocusedContextKey, IsWebContext, IsWindowsContext };
