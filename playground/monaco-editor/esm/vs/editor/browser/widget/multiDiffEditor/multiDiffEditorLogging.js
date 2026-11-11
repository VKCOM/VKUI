import { Disposable, toDisposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { basename } from '../../../../base/common/resources.js';
import { URI } from '../../../../base/common/uri.js';
import { LogLevel } from '../../../../platform/log/common/log.js';
import { observableFromEvent } from '../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { autorunWithStore, autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Trace logger for the multi diff editor. Logs the state transitions that are
 * hard to observe from the outside (scroll offsets that are set programmatically,
 * content height changes, collapsed state changes and view state save/restore),
 * so bugs like "the editor jumped while scrolling" or "this file was expanded
 * even though it was collapsed" can be reconstructed from the log.
 *
 * Enable with `Developer: Set Log Level...` > `Window` > `Trace`.
 */
class MultiDiffEditorLogger extends Disposable {
    constructor(_logService) {
        super();
        this._logService = _logService;
        /** Last logged collapsed state per diff item, to only log actual changes. */
        this._lastLoggedCollapsed = new Map();
        /** Last logged content height per diff item, to only log actual changes. */
        this._lastLoggedContentHeight = new Map();
        this._isEnabled = observableFromEvent(this, this._logService.onDidChangeLogLevel, () => this._logService.getLevel() <= LogLevel.Trace);
    }
    /**
     * Whether trace logging is on. Check this before computing data that is only
     * needed for logging.
     */
    get isEnabled() {
        return this._isEnabled.get();
    }
    log(message, data) {
        if (!this.isEnabled) {
            return;
        }
        const formattedData = data ? Object.entries(data).map(([key, value]) => `${key}: ${formatValue(value)}`).join(', ') : undefined;
        this._logService.trace(`[MultiDiffEditor] ${message}${formattedData ? ` (${formattedData})` : ''}`);
    }
    /**
     * Traces the state transitions that cannot be reconstructed after the fact:
     * view model/loading changes, collapsed state changes (no matter who caused
     * them) and content height changes, which are the usual cause of the view
     * jumping while scrolling. Per-frame rendering is deliberately not traced.
     *
     * The observers only exist while trace logging is on, so nothing is observed
     * (and no state is tracked) in the default case; they are recreated when the
     * log level is raised to trace again.
     */
    logStateChanges(state) {
        this._register(autorunWithStore((reader, store) => {
            if (!this._isEnabled.read(reader)) {
                return;
            }
            // Reset the tracked state when tracing is turned off, so the first logs
            // after re-enabling report the current state instead of a diff against
            // stale values.
            store.add(toDisposable(() => {
                this._lastLoggedCollapsed.clear();
                this._lastLoggedContentHeight.clear();
            }));
            store.add(autorun(reader => {
                const viewModel = state.viewModel.read(reader);
                this.log('view model changed', {
                    hasViewModel: !!viewModel,
                    isLoading: viewModel?.isLoading.read(reader),
                    preserveFocusOnLoad: state.isPreserveFocusOnLoad(),
                });
            }));
            store.add(autorun(reader => {
                const changed = [];
                for (const item of state.items.read(reader)) {
                    const collapsed = item.collapsed.read(reader);
                    const key = item.getKey();
                    if (this._lastLoggedCollapsed.get(key) !== collapsed) {
                        this._lastLoggedCollapsed.set(key, collapsed);
                        changed.push(`${item.getLabel()}=${collapsed}`);
                    }
                }
                if (changed.length > 0) {
                    this.log('collapsed state changed', { changed });
                }
            }));
            store.add(autorun(reader => {
                // Not read via the reader: this must not re-run on every scroll event.
                const scrollTop = state.getScrollTop();
                const changed = [];
                let totalHeight = 0;
                for (const item of state.items.read(reader)) {
                    const contentHeight = item.contentHeight.read(reader);
                    const key = item.getKey();
                    const lastContentHeight = this._lastLoggedContentHeight.get(key);
                    if (lastContentHeight !== contentHeight) {
                        // A height change above the current scroll offset shifts
                        // everything below it and makes the view jump.
                        const abovePosition = totalHeight < scrollTop ? ' (above scroll offset)' : '';
                        changed.push(`${item.getLabel()}: ${lastContentHeight ?? '?'} -> ${contentHeight}${abovePosition}`);
                        this._lastLoggedContentHeight.set(key, contentHeight);
                    }
                    totalHeight += contentHeight + state.spaceBetweenPx;
                }
                if (changed.length > 0) {
                    this.log('content height changed', { changed, totalHeight, scrollTop });
                }
            }));
        }));
    }
}
/** Short, log friendly name of a diff item resource. */
function formatUri(uri) {
    if (!uri) {
        return '<none>';
    }
    // Pathless URIs (e.g. `changes-multi-diff-source:?<query>`) have an empty
    // basename, so fall back to something that still identifies the resource.
    return basename(uri) || uri.authority || uri.scheme;
}
/** Turns a {@link DocumentDiffItemViewModel.getKey} value into a short log label. */
function formatDiffItemKey(key) {
    if (key === undefined) {
        return '<none>';
    }
    try {
        const [original, modified] = JSON.parse(key);
        const uri = modified ?? original;
        return uri ? formatUri(URI.parse(uri)) : '<none>';
    }
    catch {
        return key;
    }
}
function formatValue(value) {
    if (value === undefined) {
        return '<undefined>';
    }
    if (URI.isUri(value)) {
        return formatUri(value);
    }
    if (Array.isArray(value)) {
        return `[${value.map(formatValue).join(', ')}]`;
    }
    if (typeof value === 'number') {
        return String(Math.round(value * 100) / 100);
    }
    if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    return String(value);
}

export { MultiDiffEditorLogger, formatDiffItemKey, formatUri };
