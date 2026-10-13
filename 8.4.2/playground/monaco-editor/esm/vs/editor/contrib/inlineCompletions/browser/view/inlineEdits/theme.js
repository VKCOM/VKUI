import { assertNever } from '../../../../../../base/common/assert.js';
import { BugIndicatingError } from '../../../../../../base/common/errors.js';
import '../../../../../../base/common/observableInternal/index.js';
import { localize } from '../../../../../../nls.js';
import { registerColor, transparent, darken, asCssVariable } from '../../../../../../platform/theme/common/colorUtils.js';
import '../../../../../../platform/theme/common/colors/baseColors.js';
import '../../../../../../platform/theme/common/colors/chartsColors.js';
import { diffRemoved, diffInserted, diffInsertedLine, editorHoverForeground, editorHoverBorder, editorHoverBackground, editorBackground } from '../../../../../../platform/theme/common/colors/editorColors.js';
import { buttonForeground, buttonBackground } from '../../../../../../platform/theme/common/colors/inputColors.js';
import '../../../../../../platform/theme/common/colors/listColors.js';
import '../../../../../../platform/theme/common/colors/menuColors.js';
import '../../../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../../../platform/theme/common/colors/miscColors.js';
import '../../../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../../../platform/theme/common/colors/searchColors.js';
import { InlineCompletionEditorType } from '../../model/provideInlineCompletions.js';
import { InlineEditTabAction } from './inlineEditsViewInterface.js';
import { observableFromEventOpts } from '../../../../../../base/common/observableInternal/observables/observableFromEvent.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const originalBackgroundColor = registerColor('inlineEdit.originalBackground', transparent(diffRemoved, 0.2), localize(1266, 'Background color for the original text in inline edits.'), true);
const modifiedBackgroundColor = registerColor('inlineEdit.modifiedBackground', transparent(diffInserted, 0.3), localize(1267, 'Background color for the modified text in inline edits.'), true);
registerColor('inlineEdit.originalChangedLineBackground', transparent(diffRemoved, 0.8), localize(1268, 'Background color for the changed lines in the original text of inline edits.'), true);
const originalChangedTextOverlayColor = registerColor('inlineEdit.originalChangedTextBackground', transparent(diffRemoved, 0.8), localize(1269, 'Overlay color for the changed text in the original text of inline edits.'), true);
const modifiedChangedLineBackgroundColor = registerColor('inlineEdit.modifiedChangedLineBackground', {
    light: transparent(diffInsertedLine, 0.7),
    dark: transparent(diffInsertedLine, 0.7),
    hcDark: diffInsertedLine,
    hcLight: diffInsertedLine
}, localize(1270, 'Background color for the changed lines in the modified text of inline edits.'), true);
const modifiedChangedTextOverlayColor = registerColor('inlineEdit.modifiedChangedTextBackground', transparent(diffInserted, 0.7), localize(1271, 'Overlay color for the changed text in the modified text of inline edits.'), true);
// ------- GUTTER INDICATOR -------
const inlineEditIndicatorPrimaryForeground = registerColor('inlineEdit.gutterIndicator.primaryForeground', buttonForeground, localize(1272, 'Foreground color for the primary inline edit gutter indicator.'));
const inlineEditIndicatorPrimaryBorder = registerColor('inlineEdit.gutterIndicator.primaryBorder', buttonBackground, localize(1273, 'Border color for the primary inline edit gutter indicator.'));
const inlineEditIndicatorPrimaryBackground = registerColor('inlineEdit.gutterIndicator.primaryBackground', {
    light: transparent(inlineEditIndicatorPrimaryBorder, 0.5),
    dark: transparent(inlineEditIndicatorPrimaryBorder, 0.4),
    hcDark: transparent(inlineEditIndicatorPrimaryBorder, 0.4),
    hcLight: transparent(inlineEditIndicatorPrimaryBorder, 0.5),
}, localize(1274, 'Background color for the primary inline edit gutter indicator.'));
const inlineEditIndicatorSecondaryForeground = registerColor('inlineEdit.gutterIndicator.secondaryForeground', editorHoverForeground, localize(1275, 'Foreground color for the secondary inline edit gutter indicator.'));
const inlineEditIndicatorSecondaryBorder = registerColor('inlineEdit.gutterIndicator.secondaryBorder', editorHoverBorder, localize(1276, 'Border color for the secondary inline edit gutter indicator.'));
const inlineEditIndicatorSecondaryBackground = registerColor('inlineEdit.gutterIndicator.secondaryBackground', editorHoverBackground, localize(1277, 'Background color for the secondary inline edit gutter indicator.'));
const inlineEditIndicatorSuccessfulForeground = registerColor('inlineEdit.gutterIndicator.successfulForeground', buttonForeground, localize(1278, 'Foreground color for the successful inline edit gutter indicator.'));
const inlineEditIndicatorSuccessfulBorder = registerColor('inlineEdit.gutterIndicator.successfulBorder', buttonBackground, localize(1279, 'Border color for the successful inline edit gutter indicator.'));
const inlineEditIndicatorSuccessfulBackground = registerColor('inlineEdit.gutterIndicator.successfulBackground', inlineEditIndicatorSuccessfulBorder, localize(1280, 'Background color for the successful inline edit gutter indicator.'));
const inlineEditIndicatorBackground = registerColor('inlineEdit.gutterIndicator.background', {
    hcDark: transparent('tab.inactiveBackground', 0.5),
    hcLight: transparent('tab.inactiveBackground', 0.5),
    dark: transparent('tab.inactiveBackground', 0.5),
    light: '#5f5f5f18',
}, localize(1281, 'Background color for the inline edit gutter indicator.'));
// ------- BORDER COLORS -------
const originalBorder = registerColor('inlineEdit.originalBorder', {
    light: diffRemoved,
    dark: diffRemoved,
    hcDark: diffRemoved,
    hcLight: diffRemoved
}, localize(1282, 'Border color for the original text in inline edits.'));
const modifiedBorder = registerColor('inlineEdit.modifiedBorder', {
    light: darken(diffInserted, 0.6),
    dark: diffInserted,
    hcDark: diffInserted,
    hcLight: diffInserted
}, localize(1283, 'Border color for the modified text in inline edits.'));
const tabWillAcceptModifiedBorder = registerColor('inlineEdit.tabWillAcceptModifiedBorder', {
    light: darken(modifiedBorder, 0),
    dark: darken(modifiedBorder, 0),
    hcDark: darken(modifiedBorder, 0),
    hcLight: darken(modifiedBorder, 0)
}, localize(1284, 'Modified border color for the inline edits widget when tab will accept it.'));
const tabWillAcceptOriginalBorder = registerColor('inlineEdit.tabWillAcceptOriginalBorder', {
    light: darken(originalBorder, 0),
    dark: darken(originalBorder, 0),
    hcDark: darken(originalBorder, 0),
    hcLight: darken(originalBorder, 0)
}, localize(1285, 'Original border color for the inline edits widget over the original text when tab will accept it.'));
function getModifiedBorderColor(tabAction) {
    return tabAction.map(a => a === InlineEditTabAction.Accept ? tabWillAcceptModifiedBorder : modifiedBorder);
}
function getOriginalBorderColor(tabAction) {
    return tabAction.map(a => a === InlineEditTabAction.Accept ? tabWillAcceptOriginalBorder : originalBorder);
}
function getEditorBlendedColor(colorIdentifier, themeService) {
    let color;
    if (typeof colorIdentifier === 'string') {
        color = observeColor(colorIdentifier, themeService);
    }
    else {
        color = colorIdentifier.map((identifier, reader) => observeColor(identifier, themeService).read(reader));
    }
    const backgroundColor = observeColor(editorBackground, themeService);
    return color.map((c, reader) => /** @description makeOpaque */ c.makeOpaque(backgroundColor.read(reader)));
}
function getEditorBackgroundColor(editorType) {
    let color;
    switch (editorType) {
        case InlineCompletionEditorType.TextEditor:
            color = editorBackground;
            break;
        case InlineCompletionEditorType.DiffEditor:
            color = editorBackground;
            break;
        case InlineCompletionEditorType.Notebook:
            color = 'notebook.cellEditorBackground';
            break;
        default:
            assertNever(editorType, 'Not supported editor type yet');
    }
    return asCssVariable(color);
}
function observeColor(colorIdentifier, themeService) {
    return observableFromEventOpts({
        owner: { observeColor: colorIdentifier },
        equalsFn: (a, b) => a.equals(b),
        debugName: () => `observeColor(${colorIdentifier})`
    }, themeService.onDidColorThemeChange, () => {
        const color = themeService.getColorTheme().getColor(colorIdentifier);
        if (!color) {
            throw new BugIndicatingError(`Missing color: ${colorIdentifier}`);
        }
        return color;
    });
}
// Styles
const INLINE_EDITS_BORDER_RADIUS = 3; // also used in CSS file

export { INLINE_EDITS_BORDER_RADIUS, getEditorBackgroundColor, getEditorBlendedColor, getModifiedBorderColor, getOriginalBorderColor, inlineEditIndicatorBackground, inlineEditIndicatorPrimaryBackground, inlineEditIndicatorPrimaryBorder, inlineEditIndicatorPrimaryForeground, inlineEditIndicatorSecondaryBackground, inlineEditIndicatorSecondaryBorder, inlineEditIndicatorSecondaryForeground, inlineEditIndicatorSuccessfulBackground, inlineEditIndicatorSuccessfulBorder, inlineEditIndicatorSuccessfulForeground, modifiedBackgroundColor, modifiedChangedLineBackgroundColor, modifiedChangedTextOverlayColor, observeColor, originalBackgroundColor, originalChangedTextOverlayColor };
