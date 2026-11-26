import { localize } from '../../../../nls.js';
import { Color, RGBA } from '../../../../base/common/color.js';
import { registerColor, oneOf } from '../colorUtils.js';
import { editorWidgetBackground, editorWidgetForeground } from './editorColors.js';
import { listActiveSelectionForeground, listActiveSelectionIconForeground, listFocusHighlightForeground, listActiveSelectionBackground } from './listColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const quickInputBackground = registerColor('quickInput.background', editorWidgetBackground, localize(2111, "Quick picker background color. The quick picker widget is the container for pickers like the command palette."));
const quickInputForeground = registerColor('quickInput.foreground', editorWidgetForeground, localize(2112, "Quick picker foreground color. The quick picker widget is the container for pickers like the command palette."));
const quickInputTitleBackground = registerColor('quickInputTitle.background', { dark: new Color(new RGBA(255, 255, 255, 0.105)), light: new Color(new RGBA(0, 0, 0, 0.06)), hcDark: '#000000', hcLight: Color.white }, localize(2113, "Quick picker title background color. The quick picker widget is the container for pickers like the command palette."));
const pickerGroupForeground = registerColor('pickerGroup.foreground', { dark: '#3794FF', light: '#0066BF', hcDark: Color.white, hcLight: '#0F4A85' }, localize(2114, "Quick picker color for grouping labels."));
const pickerGroupBorder = registerColor('pickerGroup.border', { dark: '#3F3F46', light: '#CCCEDB', hcDark: Color.white, hcLight: '#0F4A85' }, localize(2115, "Quick picker color for grouping borders."));
const _deprecatedQuickInputListFocusBackground = registerColor('quickInput.list.focusBackground', null, '', undefined, localize(2116, "Please use quickInputList.focusBackground instead"));
const quickInputListFocusForeground = registerColor('quickInputList.focusForeground', listActiveSelectionForeground, localize(2117, "Quick picker foreground color for the focused item."));
const quickInputListFocusIconForeground = registerColor('quickInputList.focusIconForeground', listActiveSelectionIconForeground, localize(2118, "Quick picker icon foreground color for the focused item."));
const quickInputListFocusBackground = registerColor('quickInputList.focusBackground', { dark: oneOf(_deprecatedQuickInputListFocusBackground, listActiveSelectionBackground), light: oneOf(_deprecatedQuickInputListFocusBackground, listActiveSelectionBackground), hcDark: null, hcLight: null }, localize(2119, "Quick picker background color for the focused item."));
registerColor('quickInputList.focusHighlightForeground', listFocusHighlightForeground, localize(2120, "Quick picker foreground color of the match highlights on the focused item."));

export { _deprecatedQuickInputListFocusBackground, pickerGroupBorder, pickerGroupForeground, quickInputBackground, quickInputForeground, quickInputListFocusBackground, quickInputListFocusForeground, quickInputListFocusIconForeground, quickInputTitleBackground };
