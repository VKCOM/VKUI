import { localize } from '../../../../nls.js';
import { Color } from '../../../../base/common/color.js';
import { registerColor, transparent } from '../colorUtils.js';
import { focusBorder, contrastBorder } from './baseColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// ----- sash
registerColor('sash.hoverBorder', focusBorder, localize(2095, "Border color of active sashes."));
// ----- badge
const badgeBackground = registerColor('badge.background', { dark: '#4D4D4D', light: '#C4C4C4', hcDark: Color.black, hcLight: '#0F4A85' }, localize(2096, "Badge background color. Badges are small information labels, e.g. for search results count."));
const badgeForeground = registerColor('badge.foreground', { dark: Color.white, light: '#333', hcDark: Color.white, hcLight: Color.white }, localize(2097, "Badge foreground color. Badges are small information labels, e.g. for search results count."));
registerColor('activityWarningBadge.foreground', { dark: Color.white, light: Color.white, hcDark: Color.white, hcLight: Color.white }, localize(2098, 'Foreground color of the warning activity badge'));
registerColor('activityWarningBadge.background', { dark: '#B27C00', light: '#B27C00', hcDark: null, hcLight: '#B27C00' }, localize(2099, 'Background color of the warning activity badge'));
registerColor('activityErrorBadge.foreground', { dark: Color.black.lighten(0.2), light: Color.white, hcDark: null, hcLight: Color.black.lighten(0.2) }, localize(2100, 'Foreground color of the error activity badge'));
registerColor('activityErrorBadge.background', { dark: '#F14C4C', light: '#E51400', hcDark: null, hcLight: '#F14C4C' }, localize(2101, 'Background color of the error activity badge'));
// ----- scrollbar
const scrollbarShadow = registerColor('scrollbar.shadow', { dark: '#000000', light: '#DDDDDD', hcDark: null, hcLight: null }, localize(2102, "Scrollbar shadow to indicate that the view is scrolled."));
const scrollbarSliderBackground = registerColor('scrollbarSlider.background', { dark: Color.fromHex('#797979').transparent(0.4), light: Color.fromHex('#646464').transparent(0.4), hcDark: transparent(contrastBorder, 0.6), hcLight: transparent(contrastBorder, 0.4) }, localize(2103, "Scrollbar slider background color."));
const scrollbarSliderHoverBackground = registerColor('scrollbarSlider.hoverBackground', { dark: Color.fromHex('#646464').transparent(0.7), light: Color.fromHex('#646464').transparent(0.7), hcDark: transparent(contrastBorder, 0.8), hcLight: transparent(contrastBorder, 0.8) }, localize(2104, "Scrollbar slider background color when hovering."));
const scrollbarSliderActiveBackground = registerColor('scrollbarSlider.activeBackground', { dark: Color.fromHex('#BFBFBF').transparent(0.4), light: Color.fromHex('#000000').transparent(0.6), hcDark: contrastBorder, hcLight: contrastBorder }, localize(2105, "Scrollbar slider background color when clicked on."));
registerColor('scrollbar.background', null, localize(2106, "Scrollbar track background color."));
// ----- progress bar
const progressBarBackground = registerColor('progressBar.background', { dark: Color.fromHex('#0E70C0'), light: Color.fromHex('#0E70C0'), hcDark: contrastBorder, hcLight: contrastBorder }, localize(2107, "Background color of the progress bar that can show for long running operations."));
// ----- chart
registerColor('chart.line', { dark: '#236B8E', light: '#236B8E', hcDark: '#236B8E', hcLight: '#236B8E' }, localize(2108, "Line color for the chart."));
registerColor('chart.axis', { dark: Color.fromHex('#BFBFBF').transparent(0.4), light: Color.fromHex('#000000').transparent(0.6), hcDark: contrastBorder, hcLight: contrastBorder }, localize(2109, "Axis color for the chart."));
registerColor('chart.guide', { dark: Color.fromHex('#BFBFBF').transparent(0.2), light: Color.fromHex('#000000').transparent(0.2), hcDark: contrastBorder, hcLight: contrastBorder }, localize(2110, "Guide line for the chart."));

export { badgeBackground, badgeForeground, progressBarBackground, scrollbarShadow, scrollbarSliderActiveBackground, scrollbarSliderBackground, scrollbarSliderHoverBackground };
