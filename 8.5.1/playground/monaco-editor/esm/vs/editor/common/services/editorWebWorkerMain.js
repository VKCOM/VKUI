import { bootstrapWebWorker } from '../../../base/common/worker/webWorkerBootstrap.js';
import { EditorWorker } from './editorWebWorker.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
bootstrapWebWorker(() => new EditorWorker(null));
