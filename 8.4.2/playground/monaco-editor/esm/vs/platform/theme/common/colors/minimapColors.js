import { localize } from '../../../../nls.js';
import { Color, RGBA } from '../../../../base/common/color.js';
import { registerColor, transparent } from '../colorUtils.js';
import { editorFindMatchHighlight, editorSelectionHighlight, editorSelectionBackground, editorInfoBorder, editorInfoForeground, editorWarningBorder, editorWarningForeground } from './editorColors.js';
import { scrollbarSliderBackground, scrollbarSliderHoverBackground, scrollbarSliderActiveBackground } from './miscColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const minimapFindMatch = registerColor('minimap.findMatchHighlight', editorFindMatchHighlight, localize(2051, 'Minimap marker color for find matches.'), true);
const minimapSelectionOccurrenceHighlight = registerColor('minimap.selectionOccurrenceHighlight', editorSelectionHighlight, localize(2052, 'Minimap marker color for repeating editor selections.'), true);
const minimapSelection = registerColor('minimap.selectionHighlight', editorSelectionBackground, localize(2053, 'Minimap marker color for the editor selection.'), true);
const minimapInfo = registerColor('minimap.infoHighlight', { dark: editorInfoForeground, light: editorInfoForeground, hcDark: editorInfoBorder, hcLight: editorInfoBorder }, localize(2054, 'Minimap marker color for infos.'));
const minimapWarning = registerColor('minimap.warningHighlight', { dark: editorWarningForeground, light: editorWarningForeground, hcDark: editorWarningBorder, hcLight: editorWarningBorder }, localize(2055, 'Minimap marker color for warnings.'));
const minimapError = registerColor('minimap.errorHighlight', { dark: new Color(new RGBA(255, 18, 18, 0.7)), light: new Color(new RGBA(255, 18, 18, 0.7)), hcDark: new Color(new RGBA(255, 50, 50, 1)), hcLight: '#B5200D' }, localize(2056, 'Minimap marker color for errors.'));
const minimapBackground = registerColor('minimap.background', null, localize(2057, "Minimap background color."));
const minimapForegroundOpacity = registerColor('minimap.foregroundOpacity', Color.fromHex('#000f'), localize(2058, 'Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.'));
registerColor('minimapSlider.background', transparent(scrollbarSliderBackground, 0.5), localize(2059, "Minimap slider background color."));
registerColor('minimapSlider.hoverBackground', transparent(scrollbarSliderHoverBackground, 0.5), localize(2060, "Minimap slider background color when hovering."));
registerColor('minimapSlider.activeBackground', transparent(scrollbarSliderActiveBackground, 0.5), localize(2061, "Minimap slider background color when clicked on."));

export { minimapBackground, minimapError, minimapFindMatch, minimapForegroundOpacity, minimapInfo, minimapSelection, minimapSelectionOccurrenceHighlight, minimapWarning };
