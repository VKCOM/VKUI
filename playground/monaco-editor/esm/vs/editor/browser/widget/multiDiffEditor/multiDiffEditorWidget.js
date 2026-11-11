import { readHotReloadableExport } from '../../../../base/common/hotReloadHelpers.js';
import { Disposable, MutableDisposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import './colors.js';
import './diffEditorItemTemplate.js';
import { getMultiDiffEditorVariantConfiguration } from './multiDiffEditorOptions.js';
import { MultiDiffEditorWidgetImpl } from './multiDiffEditorWidgetImpl.js';
import { observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';
import { autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';
import { transaction } from '../../../../base/common/observableInternal/transaction.js';

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
let MultiDiffEditorWidget = class MultiDiffEditorWidget extends Disposable {
    constructor(_element, _workbenchUIElementFactory, _options, _instantiationService) {
        super();
        this._element = _element;
        this._workbenchUIElementFactory = _workbenchUIElementFactory;
        this._options = _options;
        this._instantiationService = _instantiationService;
        this._dimension = observableValue(this, undefined);
        this._viewModel = observableValue(this, undefined);
        this._diffLayoutOptions = observableValue(this, undefined);
        this._paddingBottomPx = observableValue(this, 0);
        this._widgetImplDisposable = this._register(new MutableDisposable());
        this._variant = this._options.variant;
        const initialWidgetImpl = this._createWidgetImpl(MultiDiffEditorWidgetImpl);
        this._widgetImplDisposable.value = initialWidgetImpl;
        this._widgetImplValue = observableValue(this, initialWidgetImpl);
        this._widgetImpl = this._widgetImplValue;
        let isInitialHotReloadRun = true;
        this._register(autorun(reader => {
            const widgetImpl = readHotReloadableExport(MultiDiffEditorWidgetImpl);
            if (isInitialHotReloadRun) {
                isInitialHotReloadRun = false;
                return;
            }
            this._replaceWidgetImpl(widgetImpl);
        }));
    }
    _createWidgetImpl(widgetImpl) {
        return this._instantiationService.createInstance(widgetImpl, this._element, this._dimension, this._viewModel, this._workbenchUIElementFactory, getMultiDiffEditorVariantConfiguration(this._variant), this._diffLayoutOptions, this._options.diffEditorOptions, this._paddingBottomPx);
    }
    _replaceWidgetImpl(widgetImpl) {
        const previousImpl = this._widgetImplValue.get();
        const viewState = previousImpl.getViewState();
        const viewModel = this._viewModel.get();
        const previousControl = previousImpl.activeControl.get();
        const focusedEditor = previousControl?.getOriginalEditor().hasTextFocus()
            ? 'original'
            : previousControl?.getModifiedEditor().hasTextFocus()
                ? 'modified'
                : undefined;
        this._viewModel.set(undefined, undefined);
        this._widgetImplDisposable.clear();
        const newImpl = this._createWidgetImpl(widgetImpl);
        this._widgetImplDisposable.value = newImpl;
        newImpl.setPreserveFocusOnLoad(true);
        transaction(tx => {
            this._viewModel.set(viewModel, tx);
            newImpl.setViewState(viewState, tx);
        });
        if (focusedEditor === 'original') {
            newImpl.activeControl.get()?.getOriginalEditor().focus();
        }
        else if (focusedEditor === 'modified') {
            newImpl.activeControl.get()?.getModifiedEditor().focus();
        }
        newImpl.setPreserveFocusOnLoad(false);
        this._widgetImplValue.set(newImpl, undefined);
    }
};
MultiDiffEditorWidget = __decorate([
    __param(3, IInstantiationService)
], MultiDiffEditorWidget);

export { MultiDiffEditorWidget };
