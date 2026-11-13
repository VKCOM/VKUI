/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getMultiDiffEditorVariantConfiguration(variant) {
    switch (variant) {
        case 'noCardsNonCompact':
            return {
                classNames: ['multiDiffEditor-standard'],
                horizontalInsets: { left: 9, right: 9 },
                headerHeight: 40,
                contentBottomPadding: 0,
                headerClickToCollapse: false,
            };
        case 'noCards':
            return {
                classNames: ['multiDiffEditor-compact'],
                horizontalInsets: { left: 0, right: 0 },
                headerHeight: 32,
                contentBottomPadding: 8,
                headerClickToCollapse: true,
                diffEditorOptions: { hideOriginalLineNumbers: true },
            };
        case 'cards':
            return {
                diffEditorVariant: 'compact',
                classNames: ['multiDiffEditor-compact', 'multiDiffEditor-card'],
                horizontalInsets: { left: 9, right: 9 },
                headerHeight: 40,
                contentBottomPadding: 0,
                headerClickToCollapse: true,
                diffEditorOptions: { hideOriginalLineNumbers: true },
            };
    }
}

export { getMultiDiffEditorVariantConfiguration };
