import { localize } from '../../../../nls.js';
import { Color, RGBA } from '../../../../base/common/color.js';
import { registerColor, transparent, lessProminent, darken, lighten } from '../colorUtils.js';
import { foreground, contrastBorder, activeContrastBorder } from './baseColors.js';
import { scrollbarShadow, badgeBackground } from './miscColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// ----- editor
const editorBackground = registerColor('editor.background', { light: '#ffffff', dark: '#1E1E1E', hcDark: Color.black, hcLight: Color.white }, localize(1898, "Editor background color."));
const editorForeground = registerColor('editor.foreground', { light: '#333333', dark: '#BBBBBB', hcDark: Color.white, hcLight: foreground }, localize(1899, "Editor default foreground color."));
registerColor('editorStickyScroll.background', editorBackground, localize(1900, "Background color of sticky scroll in the editor"));
registerColor('editorStickyScrollGutter.background', editorBackground, localize(1901, "Background color of the gutter part of sticky scroll in the editor"));
registerColor('editorStickyScrollHover.background', { dark: '#2A2D2E', light: '#F0F0F0', hcDark: null, hcLight: Color.fromHex('#0F4A85').transparent(0.1) }, localize(1902, "Background color of sticky scroll on hover in the editor"));
registerColor('editorStickyScroll.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1903, "Border color of sticky scroll in the editor"));
registerColor('editorStickyScroll.shadow', scrollbarShadow, localize(1904, " Shadow color of sticky scroll in the editor"));
const editorWidgetBackground = registerColor('editorWidget.background', { dark: '#252526', light: '#F3F3F3', hcDark: '#0C141F', hcLight: Color.white }, localize(1905, 'Background color of editor widgets, such as find/replace.'));
const editorWidgetForeground = registerColor('editorWidget.foreground', foreground, localize(1906, 'Foreground color of editor widgets, such as find/replace.'));
const editorWidgetBorder = registerColor('editorWidget.border', { dark: transparent(editorWidgetForeground, 0.2), light: transparent(editorWidgetForeground, 0.2), hcDark: contrastBorder, hcLight: contrastBorder }, localize(1907, 'Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.'));
registerColor('editorWidget.resizeBorder', null, localize(1908, "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget."));
registerColor('editorError.background', null, localize(1909, 'Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorErrorForeground = registerColor('editorError.foreground', { dark: '#F14C4C', light: '#E51400', hcDark: '#F48771', hcLight: '#B5200D' }, localize(1910, 'Foreground color of error squigglies in the editor.'));
const editorErrorBorder = registerColor('editorError.border', { dark: null, light: null, hcDark: Color.fromHex('#E47777').transparent(0.8), hcLight: '#B5200D' }, localize(1911, 'If set, color of double underlines for errors in the editor.'));
const editorWarningBackground = registerColor('editorWarning.background', null, localize(1912, 'Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorWarningForeground = registerColor('editorWarning.foreground', { dark: '#CCA700', light: '#BF8803', hcDark: '#FFD370', hcLight: '#895503' }, localize(1913, 'Foreground color of warning squigglies in the editor.'));
const editorWarningBorder = registerColor('editorWarning.border', { dark: null, light: null, hcDark: Color.fromHex('#FFCC00').transparent(0.8), hcLight: Color.fromHex('#FFCC00').transparent(0.8) }, localize(1914, 'If set, color of double underlines for warnings in the editor.'));
registerColor('editorInfo.background', null, localize(1915, 'Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorInfoForeground = registerColor('editorInfo.foreground', { dark: '#59a4f9', light: '#0063d3', hcDark: '#59a4f9', hcLight: '#0063d3' }, localize(1916, 'Foreground color of info squigglies in the editor.'));
const editorInfoBorder = registerColor('editorInfo.border', { dark: null, light: null, hcDark: Color.fromHex('#59a4f9').transparent(0.8), hcLight: '#292929' }, localize(1917, 'If set, color of double underlines for infos in the editor.'));
const editorHintForeground = registerColor('editorHint.foreground', { dark: Color.fromHex('#eeeeee').transparent(0.7), light: '#6c6c6c', hcDark: null, hcLight: null }, localize(1918, 'Foreground color of hint squigglies in the editor.'));
registerColor('editorHint.border', { dark: null, light: null, hcDark: Color.fromHex('#eeeeee').transparent(0.8), hcLight: '#292929' }, localize(1919, 'If set, color of double underlines for hints in the editor.'));
const editorActiveLinkForeground = registerColor('editorLink.activeForeground', { dark: '#4E94CE', light: Color.blue, hcDark: Color.cyan, hcLight: '#292929' }, localize(1920, 'Color of active links.'));
// ----- editor selection
const editorSelectionBackground = registerColor('editor.selectionBackground', { light: '#ADD6FF', dark: '#264F78', hcDark: '#f3f518', hcLight: '#0F4A85' }, localize(1921, "Color of the editor selection."));
const editorSelectionForeground = registerColor('editor.selectionForeground', { light: null, dark: null, hcDark: '#000000', hcLight: Color.white }, localize(1922, "Color of the selected text for high contrast."));
const editorInactiveSelection = registerColor('editor.inactiveSelectionBackground', { light: transparent(editorSelectionBackground, 0.5), dark: transparent(editorSelectionBackground, 0.5), hcDark: transparent(editorSelectionBackground, 0.7), hcLight: transparent(editorSelectionBackground, 0.5) }, localize(1923, "Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations."), true);
const editorSelectionHighlight = registerColor('editor.selectionHighlightBackground', { light: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), dark: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), hcDark: null, hcLight: null }, localize(1924, 'Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('editor.selectionHighlightBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1925, "Border color for regions with the same content as the selection."));
registerColor('editor.compositionBorder', { light: '#000000', dark: '#ffffff', hcLight: '#000000', hcDark: '#ffffff' }, localize(1926, "The border color for an IME composition."));
// ----- editor find
registerColor('editor.findMatchBackground', { light: '#A8AC94', dark: '#515C6A', hcDark: null, hcLight: null }, localize(1927, "Color of the current search match."));
const editorFindMatchForeground = registerColor('editor.findMatchForeground', null, localize(1928, "Text color of the current search match."));
const editorFindMatchHighlight = registerColor('editor.findMatchHighlightBackground', { light: '#EA5C0055', dark: '#EA5C0055', hcDark: null, hcLight: null }, localize(1929, "Color of the other search matches. The color must not be opaque so as not to hide underlying decorations."), true);
const editorFindMatchHighlightForeground = registerColor('editor.findMatchHighlightForeground', null, localize(1930, "Foreground color of the other search matches."), true);
registerColor('editor.findRangeHighlightBackground', { dark: '#3a3d4166', light: '#b4b4b44d', hcDark: null, hcLight: null }, localize(1931, "Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor('editor.findMatchBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1932, "Border color of the current search match."));
const editorFindMatchHighlightBorder = registerColor('editor.findMatchHighlightBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1933, "Border color of the other search matches."));
const editorFindRangeHighlightBorder = registerColor('editor.findRangeHighlightBorder', { dark: null, light: null, hcDark: transparent(activeContrastBorder, 0.4), hcLight: transparent(activeContrastBorder, 0.4) }, localize(1934, "Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), true);
// ----- editor hover
registerColor('editor.hoverHighlightBackground', { light: '#ADD6FF26', dark: '#264f7840', hcDark: '#ADD6FF26', hcLight: null }, localize(1935, 'Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorHoverBackground = registerColor('editorHoverWidget.background', editorWidgetBackground, localize(1936, 'Background color of the editor hover.'));
const editorHoverForeground = registerColor('editorHoverWidget.foreground', editorWidgetForeground, localize(1937, 'Foreground color of the editor hover.'));
const editorHoverBorder = registerColor('editorHoverWidget.border', editorWidgetBorder, localize(1938, 'Border color of the editor hover.'));
registerColor('editorHoverWidget.statusBarBackground', { dark: lighten(editorHoverBackground, 0.2), light: darken(editorHoverBackground, 0.05), hcDark: editorWidgetBackground, hcLight: editorWidgetBackground }, localize(1939, "Background color of the editor hover status bar."));
// ----- editor inlay hint
const editorInlayHintForeground = registerColor('editorInlayHint.foreground', { dark: '#969696', light: '#969696', hcDark: Color.white, hcLight: Color.black }, localize(1940, 'Foreground color of inline hints'));
const editorInlayHintBackground = registerColor('editorInlayHint.background', { dark: transparent(badgeBackground, .10), light: transparent(badgeBackground, .10), hcDark: transparent(Color.white, .10), hcLight: transparent(badgeBackground, .10) }, localize(1941, 'Background color of inline hints'));
const editorInlayHintTypeForeground = registerColor('editorInlayHint.typeForeground', editorInlayHintForeground, localize(1942, 'Foreground color of inline hints for types'));
const editorInlayHintTypeBackground = registerColor('editorInlayHint.typeBackground', editorInlayHintBackground, localize(1943, 'Background color of inline hints for types'));
const editorInlayHintParameterForeground = registerColor('editorInlayHint.parameterForeground', editorInlayHintForeground, localize(1944, 'Foreground color of inline hints for parameters'));
const editorInlayHintParameterBackground = registerColor('editorInlayHint.parameterBackground', editorInlayHintBackground, localize(1945, 'Background color of inline hints for parameters'));
// ----- editor lightbulb
const editorLightBulbForeground = registerColor('editorLightBulb.foreground', { dark: '#FFCC00', light: '#DDB100', hcDark: '#FFCC00', hcLight: '#007ACC' }, localize(1946, "The color used for the lightbulb actions icon."));
registerColor('editorLightBulbAutoFix.foreground', { dark: '#75BEFF', light: '#007ACC', hcDark: '#75BEFF', hcLight: '#007ACC' }, localize(1947, "The color used for the lightbulb auto fix actions icon."));
registerColor('editorLightBulbAi.foreground', editorLightBulbForeground, localize(1948, "The color used for the lightbulb AI icon."));
// ----- editor snippet
registerColor('editor.snippetTabstopHighlightBackground', { dark: new Color(new RGBA(124, 124, 124, 0.3)), light: new Color(new RGBA(10, 50, 100, 0.2)), hcDark: new Color(new RGBA(124, 124, 124, 0.3)), hcLight: new Color(new RGBA(10, 50, 100, 0.2)) }, localize(1949, "Highlight background color of a snippet tabstop."));
registerColor('editor.snippetTabstopHighlightBorder', null, localize(1950, "Highlight border color of a snippet tabstop."));
registerColor('editor.snippetFinalTabstopHighlightBackground', null, localize(1951, "Highlight background color of the final tabstop of a snippet."));
registerColor('editor.snippetFinalTabstopHighlightBorder', { dark: '#525252', light: new Color(new RGBA(10, 50, 100, 0.5)), hcDark: '#525252', hcLight: '#292929' }, localize(1952, "Highlight border color of the final tabstop of a snippet."));
// ----- diff editor
const defaultInsertColor = new Color(new RGBA(155, 185, 85, .2));
const defaultRemoveColor = new Color(new RGBA(255, 0, 0, .2));
const diffInserted = registerColor('diffEditor.insertedTextBackground', { dark: '#9ccc2c33', light: '#9ccc2c40', hcDark: null, hcLight: null }, localize(1953, 'Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.'), true);
const diffRemoved = registerColor('diffEditor.removedTextBackground', { dark: '#ff000033', light: '#ff000033', hcDark: null, hcLight: null }, localize(1954, 'Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.'), true);
const diffInsertedLine = registerColor('diffEditor.insertedLineBackground', { dark: defaultInsertColor, light: defaultInsertColor, hcDark: null, hcLight: null }, localize(1955, 'Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('diffEditor.removedLineBackground', { dark: defaultRemoveColor, light: defaultRemoveColor, hcDark: null, hcLight: null }, localize(1956, 'Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('diffEditorGutter.insertedLineBackground', null, localize(1957, 'Background color for the margin where lines got inserted.'));
registerColor('diffEditorGutter.removedLineBackground', null, localize(1958, 'Background color for the margin where lines got removed.'));
const diffOverviewRulerInserted = registerColor('diffEditorOverview.insertedForeground', null, localize(1959, 'Diff overview ruler foreground for inserted content.'));
const diffOverviewRulerRemoved = registerColor('diffEditorOverview.removedForeground', null, localize(1960, 'Diff overview ruler foreground for removed content.'));
registerColor('diffEditor.insertedTextBorder', { dark: null, light: null, hcDark: '#33ff2eff', hcLight: '#374E06' }, localize(1961, 'Outline color for the text that got inserted.'));
registerColor('diffEditor.removedTextBorder', { dark: null, light: null, hcDark: '#FF008F', hcLight: '#AD0707' }, localize(1962, 'Outline color for text that got removed.'));
registerColor('diffEditor.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1963, 'Border color between the two text editors.'));
registerColor('diffEditor.diagonalFill', { dark: '#cccccc33', light: '#22222233', hcDark: null, hcLight: null }, localize(1964, "Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views."));
registerColor('diffEditor.unchangedRegionBackground', 'sideBar.background', localize(1965, "The background color of unchanged blocks in the diff editor."));
registerColor('diffEditor.unchangedRegionForeground', 'foreground', localize(1966, "The foreground color of unchanged blocks in the diff editor."));
registerColor('diffEditor.unchangedCodeBackground', { dark: '#74747429', light: '#b8b8b829', hcDark: null, hcLight: null }, localize(1967, "The background color of unchanged code in the diff editor."));
// ----- widget
const widgetShadow = registerColor('widget.shadow', { dark: transparent(Color.black, .36), light: transparent(Color.black, .16), hcDark: null, hcLight: null }, localize(1968, 'Shadow color of widgets such as find/replace inside the editor.'));
const widgetBorder = registerColor('widget.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1969, 'Border color of widgets such as find/replace inside the editor.'));
// ----- toolbar
const toolbarHoverBackground = registerColor('toolbar.hoverBackground', { dark: '#5a5d5e50', light: '#b8b8b850', hcDark: null, hcLight: null }, localize(1970, "Toolbar background when hovering over actions using the mouse"));
registerColor('toolbar.hoverOutline', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1971, "Toolbar outline when hovering over actions using the mouse"));
registerColor('toolbar.activeBackground', { dark: lighten(toolbarHoverBackground, 0.1), light: darken(toolbarHoverBackground, 0.1), hcDark: null, hcLight: null }, localize(1972, "Toolbar background when holding the mouse over actions"));
// ----- breadcumbs
const breadcrumbsForeground = registerColor('breadcrumb.foreground', transparent(foreground, 0.8), localize(1973, "Color of focused breadcrumb items."));
const breadcrumbsBackground = registerColor('breadcrumb.background', editorBackground, localize(1974, "Background color of breadcrumb items."));
const breadcrumbsFocusForeground = registerColor('breadcrumb.focusForeground', { light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hcDark: lighten(foreground, 0.1), hcLight: lighten(foreground, 0.1) }, localize(1975, "Color of focused breadcrumb items."));
const breadcrumbsActiveSelectionForeground = registerColor('breadcrumb.activeSelectionForeground', { light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hcDark: lighten(foreground, 0.1), hcLight: lighten(foreground, 0.1) }, localize(1976, "Color of selected breadcrumb items."));
registerColor('breadcrumbPicker.background', editorWidgetBackground, localize(1977, "Background color of breadcrumb item picker."));
// ----- merge
const headerTransparency = 0.5;
const currentBaseColor = Color.fromHex('#40C8AE').transparent(headerTransparency);
const incomingBaseColor = Color.fromHex('#40A6FF').transparent(headerTransparency);
const commonBaseColor = Color.fromHex('#606060').transparent(0.4);
const contentTransparency = 0.4;
const rulerTransparency = 1;
const mergeCurrentHeaderBackground = registerColor('merge.currentHeaderBackground', { dark: currentBaseColor, light: currentBaseColor, hcDark: null, hcLight: null }, localize(1978, 'Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('merge.currentContentBackground', transparent(mergeCurrentHeaderBackground, contentTransparency), localize(1979, 'Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeIncomingHeaderBackground = registerColor('merge.incomingHeaderBackground', { dark: incomingBaseColor, light: incomingBaseColor, hcDark: null, hcLight: null }, localize(1980, 'Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('merge.incomingContentBackground', transparent(mergeIncomingHeaderBackground, contentTransparency), localize(1981, 'Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeCommonHeaderBackground = registerColor('merge.commonHeaderBackground', { dark: commonBaseColor, light: commonBaseColor, hcDark: null, hcLight: null }, localize(1982, 'Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('merge.commonContentBackground', transparent(mergeCommonHeaderBackground, contentTransparency), localize(1983, 'Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeBorder = registerColor('merge.border', { dark: null, light: null, hcDark: '#C3DF6F', hcLight: '#007ACC' }, localize(1984, 'Border color on headers and the splitter in inline merge-conflicts.'));
registerColor('editorOverviewRuler.currentContentForeground', { dark: transparent(mergeCurrentHeaderBackground, rulerTransparency), light: transparent(mergeCurrentHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, localize(1985, 'Current overview ruler foreground for inline merge-conflicts.'));
registerColor('editorOverviewRuler.incomingContentForeground', { dark: transparent(mergeIncomingHeaderBackground, rulerTransparency), light: transparent(mergeIncomingHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, localize(1986, 'Incoming overview ruler foreground for inline merge-conflicts.'));
registerColor('editorOverviewRuler.commonContentForeground', { dark: transparent(mergeCommonHeaderBackground, rulerTransparency), light: transparent(mergeCommonHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, localize(1987, 'Common ancestor overview ruler foreground for inline merge-conflicts.'));
const overviewRulerFindMatchForeground = registerColor('editorOverviewRuler.findMatchForeground', { dark: '#d186167e', light: '#d186167e', hcDark: '#AB5A00', hcLight: '#AB5A00' }, localize(1988, 'Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.'), true);
const overviewRulerSelectionHighlightForeground = registerColor('editorOverviewRuler.selectionHighlightForeground', '#A0A0A0CC', localize(1989, 'Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.'), true);
// ----- problems
const problemsErrorIconForeground = registerColor('problemsErrorIcon.foreground', editorErrorForeground, localize(1990, "The color used for the problems error icon."));
const problemsWarningIconForeground = registerColor('problemsWarningIcon.foreground', editorWarningForeground, localize(1991, "The color used for the problems warning icon."));
const problemsInfoIconForeground = registerColor('problemsInfoIcon.foreground', editorInfoForeground, localize(1992, "The color used for the problems info icon."));

export { breadcrumbsActiveSelectionForeground, breadcrumbsBackground, breadcrumbsFocusForeground, breadcrumbsForeground, defaultInsertColor, defaultRemoveColor, diffInserted, diffInsertedLine, diffOverviewRulerInserted, diffOverviewRulerRemoved, diffRemoved, editorActiveLinkForeground, editorBackground, editorErrorBorder, editorErrorForeground, editorFindMatchForeground, editorFindMatchHighlight, editorFindMatchHighlightBorder, editorFindMatchHighlightForeground, editorFindRangeHighlightBorder, editorForeground, editorHintForeground, editorHoverBackground, editorHoverBorder, editorHoverForeground, editorInactiveSelection, editorInfoBorder, editorInfoForeground, editorInlayHintBackground, editorInlayHintForeground, editorInlayHintParameterBackground, editorInlayHintParameterForeground, editorInlayHintTypeBackground, editorInlayHintTypeForeground, editorLightBulbForeground, editorSelectionBackground, editorSelectionForeground, editorSelectionHighlight, editorWarningBackground, editorWarningBorder, editorWarningForeground, editorWidgetBackground, editorWidgetBorder, editorWidgetForeground, mergeBorder, mergeCommonHeaderBackground, mergeCurrentHeaderBackground, mergeIncomingHeaderBackground, overviewRulerFindMatchForeground, overviewRulerSelectionHighlightForeground, problemsErrorIconForeground, problemsInfoIconForeground, problemsWarningIconForeground, toolbarHoverBackground, widgetBorder, widgetShadow };
