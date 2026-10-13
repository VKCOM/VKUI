import { registerSingleton } from '../../../platform/instantiation/common/extensions.js';
import { IEditorWorkerService } from '../../common/services/editorWorker.js';
import { registerEditorContribution } from '../editorExtensions.js';
import { EditorWorkerService } from './editorWorkerService.js';
import { MarkerDecorationsContribution } from './markerDecorations.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* registers link detection and word based suggestions for any document */
registerSingleton(IEditorWorkerService, EditorWorkerService, 0 /* InstantiationType.Eager */);
// eager because it instantiates IMarkerDecorationsService which is responsible for rendering squiggles
registerEditorContribution(MarkerDecorationsContribution.ID, MarkerDecorationsContribution, 0 /* EditorContributionInstantiation.Eager */);
