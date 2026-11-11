import './symbolIcons.css';
import { localize } from '../../../../nls.js';
import { registerColor } from '../../../../platform/theme/common/colorUtils.js';
import { foreground } from '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import '../../../../platform/theme/common/colors/editorColors.js';
import '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
registerColor('symbolIcon.arrayForeground', foreground, localize(1569, 'The foreground color for array symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.booleanForeground', foreground, localize(1570, 'The foreground color for boolean symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.classForeground', {
    dark: '#EE9D28',
    light: '#D67E00',
    hcDark: '#EE9D28',
    hcLight: '#D67E00'
}, localize(1571, 'The foreground color for class symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.colorForeground', foreground, localize(1572, 'The foreground color for color symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.constantForeground', foreground, localize(1573, 'The foreground color for constant symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.constructorForeground', {
    dark: '#B180D7',
    light: '#652D90',
    hcDark: '#B180D7',
    hcLight: '#652D90'
}, localize(1574, 'The foreground color for constructor symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.enumeratorForeground', {
    dark: '#EE9D28',
    light: '#D67E00',
    hcDark: '#EE9D28',
    hcLight: '#D67E00'
}, localize(1575, 'The foreground color for enumerator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.enumeratorMemberForeground', {
    dark: '#75BEFF',
    light: '#007ACC',
    hcDark: '#75BEFF',
    hcLight: '#007ACC'
}, localize(1576, 'The foreground color for enumerator member symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.eventForeground', {
    dark: '#EE9D28',
    light: '#D67E00',
    hcDark: '#EE9D28',
    hcLight: '#D67E00'
}, localize(1577, 'The foreground color for event symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.fieldForeground', {
    dark: '#75BEFF',
    light: '#007ACC',
    hcDark: '#75BEFF',
    hcLight: '#007ACC'
}, localize(1578, 'The foreground color for field symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.fileForeground', foreground, localize(1579, 'The foreground color for file symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.folderForeground', foreground, localize(1580, 'The foreground color for folder symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.functionForeground', {
    dark: '#B180D7',
    light: '#652D90',
    hcDark: '#B180D7',
    hcLight: '#652D90'
}, localize(1581, 'The foreground color for function symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.interfaceForeground', {
    dark: '#75BEFF',
    light: '#007ACC',
    hcDark: '#75BEFF',
    hcLight: '#007ACC'
}, localize(1582, 'The foreground color for interface symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.keyForeground', foreground, localize(1583, 'The foreground color for key symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.keywordForeground', foreground, localize(1584, 'The foreground color for keyword symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.methodForeground', {
    dark: '#B180D7',
    light: '#652D90',
    hcDark: '#B180D7',
    hcLight: '#652D90'
}, localize(1585, 'The foreground color for method symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.moduleForeground', foreground, localize(1586, 'The foreground color for module symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.namespaceForeground', foreground, localize(1587, 'The foreground color for namespace symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.nullForeground', foreground, localize(1588, 'The foreground color for null symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.numberForeground', foreground, localize(1589, 'The foreground color for number symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.objectForeground', foreground, localize(1590, 'The foreground color for object symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.operatorForeground', foreground, localize(1591, 'The foreground color for operator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.packageForeground', foreground, localize(1592, 'The foreground color for package symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.propertyForeground', foreground, localize(1593, 'The foreground color for property symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.referenceForeground', foreground, localize(1594, 'The foreground color for reference symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.snippetForeground', foreground, localize(1595, 'The foreground color for snippet symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.stringForeground', foreground, localize(1596, 'The foreground color for string symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.structForeground', foreground, localize(1597, 'The foreground color for struct symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.textForeground', foreground, localize(1598, 'The foreground color for text symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.typeParameterForeground', foreground, localize(1599, 'The foreground color for type parameter symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.unitForeground', foreground, localize(1600, 'The foreground color for unit symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
registerColor('symbolIcon.variableForeground', {
    dark: '#75BEFF',
    light: '#007ACC',
    hcDark: '#75BEFF',
    hcLight: '#007ACC',
}, localize(1601, 'The foreground color for variable symbols. These symbols appear in the outline, breadcrumb, and suggest widget.'));
