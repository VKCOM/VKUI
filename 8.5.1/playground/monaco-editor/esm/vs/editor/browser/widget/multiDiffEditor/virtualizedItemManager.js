import { BugIndicatingError, onUnexpectedError } from '../../../../base/common/errors.js';
import { Event, Emitter } from '../../../../base/common/event.js';
import { Disposable, DisposableStore, toDisposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';
import { mapObservableArrayCached } from '../../../../base/common/observableInternal/utils/utils.js';
import { derived } from '../../../../base/common/observableInternal/observables/derived.js';
import { autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';
import { transaction } from '../../../../base/common/observableInternal/transaction.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class VirtualizedItemBinding extends Disposable {
    constructor(item) {
        super();
        this.item = item;
        this._onDidDispose = this._register(new Emitter());
        this.onDidDispose = this._onDidDispose.event;
    }
    dispose() {
        if (this._store.isDisposed) {
            return;
        }
        this._onDidDispose.fire();
        super.dispose();
    }
}
class VirtualizedItemTemplate extends Disposable {
    constructor() {
        super(...arguments);
        this._currentBinding = observableValue(this, undefined);
        this.currentBinding = this._currentBinding;
        this._bindingStore = this._register(new DisposableStore());
    }
    bind(item, context) {
        if (this._currentBinding.get()) {
            throw new BugIndicatingError('Cannot rebind a virtualized template before disposing its current binding');
        }
        const binding = this.createBinding(item, context);
        this._bindingStore.clear();
        this._bindingStore.add(Event.once(binding.onDidDispose)(() => {
            if (this._currentBinding.get() !== binding) {
                throw new BugIndicatingError('Disposed binding does not own its virtualized template');
            }
            this._currentBinding.set(undefined, undefined);
        }));
        this._currentBinding.set(binding, undefined);
        return binding;
    }
    dispose() {
        this._currentBinding.get()?.dispose();
        super.dispose();
    }
}
class VirtualizedItemManager extends Disposable {
    constructor(items, _context, _delegate) {
        super();
        this._context = _context;
        this._delegate = _delegate;
        this._pools = new Map();
        this.virtualizedItems = mapObservableArrayCached(this, items, (item, store) => store.add(new ManagedVirtualizedItem(item, this, _delegate)), item => _delegate.getId(item)).recomputeInitiallyAndOnChange(this._store);
        this._register(toDisposable(() => {
            for (const pool of this._pools.values()) {
                pool.dispose();
            }
            this._pools.clear();
        }));
    }
    acquire(item) {
        const templateId = this._delegate.getTemplateId(item);
        let pool = this._pools.get(templateId);
        if (!pool) {
            pool = new VirtualizedTemplatePool(() => this._delegate.createTemplate(templateId, this._context));
            this._pools.set(templateId, pool);
        }
        return pool.acquire();
    }
}
class ManagedVirtualizedItem extends Disposable {
    constructor(item, _manager, _delegate) {
        super();
        this.item = item;
        this._manager = _manager;
        this._delegate = _delegate;
        this._templateReference = observableValue(this, undefined);
        this._isHidden = observableValue(this, false);
        this._didRenderFail = false;
        this.template = derived(this, reader => this._templateReference.read(reader)?.object);
        this.binding = derived(this, reader => this.template.read(reader)?.currentBinding.read(reader));
        const unboundSize = _delegate.getUnboundSize(item);
        this.size = derived(this, reader => this.binding.read(reader)?.size.read(reader) ?? unboundSize.read(reader));
        this.maxScroll = derived(this, reader => this.binding.read(reader)?.maxScroll.read(reader) ?? { maxScroll: 0 });
        this._register(autorun(reader => {
            const binding = this.binding.read(reader);
            if (!binding || !this._isHidden.read(reader) || binding.shouldKeepAlive.read(reader)) {
                return;
            }
            this._clearBinding();
        }));
    }
    render(renderedRange, scrollOffset, width, renderedViewport, context) {
        this._lastRender = { renderedRange, scrollOffset, width, renderedViewport, context };
        this._isHidden.set(false, undefined);
        if (this._didRenderFail) {
            return;
        }
        try {
            this._render(renderedRange, scrollOffset, width, renderedViewport, context);
        }
        catch (error) {
            this._didRenderFail = true;
            onUnexpectedError(error);
        }
    }
    _render(renderedRange, scrollOffset, width, renderedViewport, context) {
        let binding = this.binding.get();
        if (!binding) {
            const templateReference = this._manager.acquire(this.item);
            const template = templateReference.object;
            if (template.currentBinding.get()) {
                templateReference.dispose();
                throw new BugIndicatingError('Virtualized template pool returned a bound template');
            }
            let newBinding;
            try {
                newBinding = template.bind(this.item, {
                    initialSize: this.size.get(),
                    runWithScrollAnchor: (getItemOffset, update) => {
                        if (!context) {
                            throw new BugIndicatingError('Cannot preserve a virtualized item scroll anchor without a render context');
                        }
                        context.runWithScrollAnchor(getItemOffset, update);
                    },
                });
                if (newBinding.item !== this.item || template.currentBinding.get() !== newBinding) {
                    throw new BugIndicatingError('Virtualized template returned a binding for a different item');
                }
                const validatedBinding = newBinding;
                transaction(tx => {
                    this._delegate.onDidBind?.(validatedBinding, tx);
                    this._templateReference.set(templateReference, tx);
                });
            }
            catch (error) {
                (template.currentBinding.get() ?? newBinding)?.dispose();
                templateReference.dispose();
                throw error;
            }
            binding = newBinding;
        }
        binding.render(renderedRange, scrollOffset, width, renderedViewport);
    }
    hide() {
        this._isHidden.set(true, undefined);
        this.binding.get()?.hide();
    }
    _clearBinding() {
        const templateReference = this._templateReference.get();
        const binding = templateReference?.object.currentBinding.get();
        if (!templateReference || !binding) {
            return;
        }
        transaction(tx => {
            this._delegate.onWillUnbind?.(binding, tx);
        });
        binding.hide();
        binding.dispose();
        if (templateReference.object.currentBinding.get()) {
            throw new BugIndicatingError('Virtualized binding did not release its template when disposed');
        }
        transaction(tx => {
            this._templateReference.set(undefined, tx);
        });
        templateReference.dispose();
    }
    dispose() {
        this._clearBinding();
        super.dispose();
    }
}
class VirtualizedTemplatePool {
    constructor(_create) {
        this._create = _create;
        this._unused = new Set();
        this._used = new Set();
    }
    acquire() {
        const template = this._unused.values().next().value ?? this._create();
        this._unused.delete(template);
        if (template.currentBinding.get()) {
            throw new BugIndicatingError('Cannot acquire a bound virtualized template');
        }
        this._used.add(template);
        let disposed = false;
        return {
            object: template,
            dispose: () => {
                if (disposed) {
                    return;
                }
                disposed = true;
                if (template.currentBinding.get()) {
                    throw new BugIndicatingError('Cannot pool a virtualized template with a current binding');
                }
                this._used.delete(template);
                if (this._unused.size >= 5) {
                    template.dispose();
                }
                else {
                    this._unused.add(template);
                }
            },
        };
    }
    dispose() {
        for (const template of this._used) {
            template.dispose();
        }
        for (const template of this._unused) {
            template.dispose();
        }
        this._used.clear();
        this._unused.clear();
    }
}

export { ManagedVirtualizedItem, VirtualizedItemBinding, VirtualizedItemManager, VirtualizedItemTemplate };
