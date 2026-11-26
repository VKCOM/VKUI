import '../../../base/common/observableInternal/index.js';
import { createDecorator } from '../../../platform/instantiation/common/instantiation.js';
import { observableValue } from '../../../base/common/observableInternal/observables/observableValue.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const IRenameSymbolTrackerService = createDecorator('renameSymbolTrackerService');
class NullRenameSymbolTrackerService {
    constructor() {
        this._trackedWord = observableValue(this, undefined);
        this.trackedWord = this._trackedWord;
        this._trackedWord.set(undefined, undefined);
    }
}

export { IRenameSymbolTrackerService, NullRenameSymbolTrackerService };
