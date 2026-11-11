import { Emitter } from '../../../base/common/event.js';
import { Lazy } from '../../../base/common/lazy.js';
import { ReferenceCollection, Disposable } from '../../../base/common/lifecycle.js';
import { Schemas } from '../../../base/common/network.js';
import { URI } from '../../../base/common/uri.js';
import { generateUuid } from '../../../base/common/uuid.js';
import { IModelService } from './model.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let InMemoryTextModelService = class InMemoryTextModelService {
    constructor(modelService) {
        this._models = new InMemoryModelCollection(modelService);
    }
    createModelReference(resource) {
        return this._acquire(resource);
    }
    createSyntheticDocument(value, languageSelection) {
        const resource = URI.from({ scheme: Schemas.inMemory, path: `/synthetic/${generateUuid()}` });
        return this._acquire(resource, value, languageSelection);
    }
    async _acquire(resource, value, languageSelection = null) {
        const reference = this._models.acquire(resource.toString(), value, languageSelection);
        try {
            // The entry must exist before model creation, and reentrant opens must
            // wait for its lazy factory to finish.
            await Promise.resolve();
            return { object: reference.object.value, dispose: () => reference.dispose() };
        }
        catch (error) {
            reference.dispose();
            throw error;
        }
    }
};
InMemoryTextModelService = __decorate([
    __param(0, IModelService)
], InMemoryTextModelService);
class InMemoryModelCollection extends ReferenceCollection {
    constructor(_modelService) {
        super();
        this._modelService = _modelService;
    }
    createReferencedObject(key, value, languageSelection = null) {
        return new Lazy(() => {
            const resource = URI.parse(key);
            const model = value === undefined
                ? this._modelService.getModel(resource)
                : this._modelService.createModel(value, languageSelection, resource);
            if (!model) {
                throw new Error('Model not found');
            }
            return new SimpleModel(model, value !== undefined);
        });
    }
    destroyReferencedObject(_key, model) {
        model.rawValue?.dispose();
    }
}
class SimpleModel extends Disposable {
    constructor(textEditorModel, _ownsModel) {
        super();
        this.textEditorModel = textEditorModel;
        this._ownsModel = _ownsModel;
        this._onWillDispose = this._register(new Emitter());
    }
    dispose() {
        if (this.isDisposed()) {
            return;
        }
        this._onWillDispose.fire();
        super.dispose();
        if (this._ownsModel) {
            this.textEditorModel.dispose();
        }
    }
    isDisposed() {
        return this._store.isDisposed;
    }
}

export { InMemoryTextModelService };
