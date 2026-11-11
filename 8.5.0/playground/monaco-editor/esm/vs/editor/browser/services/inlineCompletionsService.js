import { TimeoutTimer } from '../../../base/common/async.js';
import { BugIndicatingError } from '../../../base/common/errors.js';
import { Emitter } from '../../../base/common/event.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import { localize, localize2 } from '../../../nls.js';
import { Action2 } from '../../../platform/actions/common/actions.js';
import { RawContextKey, IContextKeyService, ContextKeyExpr } from '../../../platform/contextkey/common/contextkey.js';
import { registerSingleton } from '../../../platform/instantiation/common/extensions.js';
import { createDecorator } from '../../../platform/instantiation/common/instantiation.js';
import { IQuickInputService } from '../../../platform/quickinput/common/quickInput.js';
import { IStorageService } from '../../../platform/storage/common/storage.js';
import { ITelemetryService } from '../../../platform/telemetry/common/telemetry.js';

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
const IInlineCompletionsService = createDecorator('IInlineCompletionsService');
const InlineCompletionsSnoozing = new RawContextKey('inlineCompletions.snoozed', false, localize(83, "Whether inline completions are currently snoozed"));
let InlineCompletionsService = class InlineCompletionsService extends Disposable {
    get snoozeTimeLeft() {
        if (this._snoozeTimeEnd === undefined) {
            return 0;
        }
        return Math.max(0, this._snoozeTimeEnd - Date.now());
    }
    constructor(_contextKeyService, _telemetryService) {
        super();
        this._contextKeyService = _contextKeyService;
        this._telemetryService = _telemetryService;
        this._onDidChangeIsSnoozing = this._register(new Emitter());
        this.onDidChangeIsSnoozing = this._onDidChangeIsSnoozing.event; // 5 minutes
        this._snoozeTimeEnd = undefined;
        this._recentCompletionIds = [];
        this._timer = this._register(new TimeoutTimer());
        const inlineCompletionsSnoozing = InlineCompletionsSnoozing.bindTo(this._contextKeyService);
        this._register(this.onDidChangeIsSnoozing(() => inlineCompletionsSnoozing.set(this.isSnoozing())));
    }
    setSnoozeDuration(durationMs) {
        if (durationMs < 0) {
            throw new BugIndicatingError(`Invalid snooze duration: ${durationMs}. Duration must be non-negative.`);
        }
        if (durationMs === 0) {
            this.cancelSnooze();
            return;
        }
        const wasSnoozing = this.isSnoozing();
        const timeLeft = this.snoozeTimeLeft;
        this._snoozeTimeEnd = Date.now() + durationMs;
        if (!wasSnoozing) {
            this._onDidChangeIsSnoozing.fire(true);
        }
        this._timer.cancelAndSet(() => {
            if (!this.isSnoozing()) {
                this._onDidChangeIsSnoozing.fire(false);
            }
            else {
                throw new BugIndicatingError('Snooze timer did not fire as expected');
            }
        }, this.snoozeTimeLeft + 1);
        this._reportSnooze(durationMs - timeLeft, durationMs);
    }
    isSnoozing() {
        return this.snoozeTimeLeft > 0;
    }
    cancelSnooze() {
        if (this.isSnoozing()) {
            this._reportSnooze(-this.snoozeTimeLeft, 0);
            this._snoozeTimeEnd = undefined;
            this._timer.cancel();
            this._onDidChangeIsSnoozing.fire(false);
        }
    }
    reportNewCompletion(requestUuid) {
        this._lastCompletionId = requestUuid;
        this._recentCompletionIds.unshift(requestUuid);
        if (this._recentCompletionIds.length > 5) {
            this._recentCompletionIds.pop();
        }
    }
    _reportSnooze(deltaMs, totalMs) {
        const deltaSeconds = Math.round(deltaMs / 1000);
        const totalSeconds = Math.round(totalMs / 1000);
        this._telemetryService.publicLog2('inlineCompletions.snooze', {
            deltaSeconds,
            totalSeconds,
            lastCompletionId: this._lastCompletionId,
            recentCompletionIds: this._recentCompletionIds,
        });
    }
};
InlineCompletionsService = __decorate([
    __param(0, IContextKeyService),
    __param(1, ITelemetryService)
], InlineCompletionsService);
registerSingleton(IInlineCompletionsService, InlineCompletionsService, 1 /* InstantiationType.Delayed */);
const snoozeInlineSuggestId = 'editor.action.inlineSuggest.snooze';
const cancelSnoozeInlineSuggestId = 'editor.action.inlineSuggest.cancelSnooze';
const LAST_SNOOZE_DURATION_KEY = 'inlineCompletions.lastSnoozeDuration';
class SnoozeInlineCompletion extends Action2 {
    static { this.ID = snoozeInlineSuggestId; }
    constructor() {
        super({
            id: SnoozeInlineCompletion.ID,
            title: localize2(97, "Snooze Inline Suggestions"),
            precondition: ContextKeyExpr.true(),
            f1: true,
        });
    }
    async run(accessor, ...args) {
        const quickInputService = accessor.get(IQuickInputService);
        const inlineCompletionsService = accessor.get(IInlineCompletionsService);
        const storageService = accessor.get(IStorageService);
        let durationMs;
        if (args.length > 0 && typeof args[0] === 'number') {
            durationMs = args[0] * 60_000;
        }
        if (!durationMs) {
            durationMs = await this.getDurationFromUser(quickInputService, storageService);
        }
        if (durationMs) {
            inlineCompletionsService.setSnoozeDuration(durationMs);
        }
    }
    async getDurationFromUser(quickInputService, storageService) {
        const lastSelectedDuration = storageService.getNumber(LAST_SNOOZE_DURATION_KEY, 0 /* StorageScope.PROFILE */, 300_000);
        const predefinedItems = [
            { label: localize(84, "1 minute"), id: '1', value: 60_000 },
            { label: localize(85, "5 minutes"), id: '5', value: 300_000 },
            { label: localize(86, "10 minutes"), id: '10', value: 600_000 },
            { label: localize(87, "15 minutes"), id: '15', value: 900_000 },
            { label: localize(88, "30 minutes"), id: '30', value: 1_800_000 },
            { label: localize(89, "60 minutes"), id: '60', value: 3_600_000 },
        ];
        let items = predefinedItems;
        if (lastSelectedDuration > 0 && !predefinedItems.some(item => item.value === lastSelectedDuration)) {
            const minutes = lastSelectedDuration / 60_000;
            const customItem = {
                label: localize(90, "{0} minutes (Last used)", minutes),
                id: 'last-custom',
                value: lastSelectedDuration,
                description: localize(91, "Last used custom duration"),
            };
            const index = predefinedItems.findIndex(item => item.value > lastSelectedDuration);
            if (index === -1) {
                items = [...predefinedItems, customItem];
            }
            else {
                items = [...predefinedItems.slice(0, index), customItem, ...predefinedItems.slice(index)];
            }
        }
        items.push({ label: localize(92, "Custom..."), id: 'custom', value: -1 });
        const picked = await quickInputService.pick(items, {
            placeHolder: localize(93, "Select snooze duration for Inline Suggestions"),
            activeItem: items.find(item => item.value === lastSelectedDuration),
        });
        if (picked) {
            if (picked.id === 'custom') {
                return this.getCustomDurationFromUser(quickInputService, storageService);
            }
            storageService.store(LAST_SNOOZE_DURATION_KEY, picked.value, 0 /* StorageScope.PROFILE */, 0 /* StorageTarget.USER */);
            return picked.value;
        }
        return undefined;
    }
    async getCustomDurationFromUser(quickInputService, storageService) {
        const customMinutes = await quickInputService.input({
            placeHolder: localize(94, "Duration in minutes (e.g. 90)"),
            prompt: localize(95, "Enter snooze duration in minutes"),
            validateInput: async (value) => {
                const n = Number(value);
                if (isNaN(n) || n <= 0 || !Number.isFinite(n)) {
                    return localize(96, "Please enter a positive number");
                }
                return undefined;
            }
        });
        if (customMinutes) {
            const ms = Number(customMinutes) * 60_000;
            storageService.store(LAST_SNOOZE_DURATION_KEY, ms, 0 /* StorageScope.PROFILE */, 0 /* StorageTarget.USER */);
            return ms;
        }
        return undefined;
    }
}
class CancelSnoozeInlineCompletion extends Action2 {
    static { this.ID = cancelSnoozeInlineSuggestId; }
    constructor() {
        super({
            id: CancelSnoozeInlineCompletion.ID,
            title: localize2(98, "Cancel Snooze Inline Suggestions"),
            precondition: InlineCompletionsSnoozing,
            f1: true,
        });
    }
    async run(accessor) {
        accessor.get(IInlineCompletionsService).cancelSnooze();
    }
}

export { CancelSnoozeInlineCompletion, IInlineCompletionsService, InlineCompletionsService, SnoozeInlineCompletion };
