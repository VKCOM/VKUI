import { createTrustedTypesPolicy } from '../../../base/browser/trustedTypes.js';
import { coalesce } from '../../../base/common/arrays.js';
import { onUnexpectedError } from '../../../base/common/errors.js';
import { Emitter } from '../../../base/common/event.js';
import { Disposable, toDisposable } from '../../../base/common/lifecycle.js';
import { COI } from '../../../base/common/network.js';
import { WebWorkerClient } from '../../../base/common/worker/webWorker.js';
import { getNLSMessages, getNLSLanguage } from '../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class WebWorkerService {
    static { this._workerIdPool = 0; }
    createWorkerClient(workerDescriptor) {
        let worker;
        const id = ++WebWorkerService._workerIdPool;
        if (workerDescriptor instanceof Worker || isPromiseLike(workerDescriptor)) {
            worker = Promise.resolve(workerDescriptor);
        }
        else {
            worker = this._createWorker(workerDescriptor);
        }
        return new WebWorkerClient(new WebWorker(worker, id));
    }
    _createWorker(descriptor) {
        const workerRunnerUrl = this.getWorkerUrl(descriptor);
        const workerUrlWithNls = getWorkerBootstrapUrl(descriptor.label, workerRunnerUrl, this._getWorkerLoadingFailedErrorMessage(descriptor));
        const worker = new Worker(ttPolicy ? ttPolicy.createScriptURL(workerUrlWithNls) : workerUrlWithNls, { name: descriptor.label, type: 'module' });
        return whenESMWorkerReady(worker);
    }
    _getWorkerLoadingFailedErrorMessage(_descriptor) {
        return undefined;
    }
    getWorkerUrl(descriptor) {
        if (!descriptor.esmModuleLocation) {
            throw new Error('Missing esmModuleLocation in WebWorkerDescriptor');
        }
        const uri = typeof descriptor.esmModuleLocation === 'function' ? descriptor.esmModuleLocation() : descriptor.esmModuleLocation;
        const urlStr = uri.toString(true);
        return urlStr;
    }
}
const ttPolicy = (() => {
    // Reuse the trusted types policy defined from worker bootstrap
    // when available.
    // Refs https://github.com/microsoft/vscode/issues/222193
    const workerGlobalThis = globalThis;
    if (typeof self === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope' && workerGlobalThis.workerttPolicy !== undefined) {
        return workerGlobalThis.workerttPolicy;
    }
    else {
        return createTrustedTypesPolicy('defaultWorkerFactory', { createScriptURL: value => value });
    }
})();
function getWorkerBootstrapUrl(label, workerScriptUrl, workerLoadingFailedErrorMessage) {
    if (/^((http:)|(https:)|(file:))/.test(workerScriptUrl) && workerScriptUrl.substring(0, globalThis.origin.length) !== globalThis.origin) ;
    else {
        const start = workerScriptUrl.lastIndexOf('?');
        const end = workerScriptUrl.lastIndexOf('#', start);
        const params = start > 0
            ? new URLSearchParams(workerScriptUrl.substring(start + 1, ~end ? end : undefined))
            : new URLSearchParams();
        COI.addSearchParam(params, true, true);
        const search = params.toString();
        if (!search) {
            workerScriptUrl = `${workerScriptUrl}#${label}`;
        }
        else {
            workerScriptUrl = `${workerScriptUrl}?${params.toString()}#${label}`;
        }
    }
    // In below blob code, we are using JSON.stringify to ensure the passed
    // in values are not breaking our script. The values may contain string
    // terminating characters (such as ' or ").
    const blob = new Blob([coalesce([
            `/*${label}*/`,
            `globalThis._VSCODE_NLS_MESSAGES = ${JSON.stringify(getNLSMessages())};`,
            `globalThis._VSCODE_NLS_LANGUAGE = ${JSON.stringify(getNLSLanguage())};`,
            `globalThis._VSCODE_FILE_ROOT = ${JSON.stringify(globalThis._VSCODE_FILE_ROOT)};`,
            `const ttPolicy = globalThis.trustedTypes?.createPolicy('defaultWorkerFactory', { createScriptURL: value => value });`,
            `globalThis.workerttPolicy = ttPolicy;`,
            workerLoadingFailedErrorMessage ? 'try {' : '',
            `await import(ttPolicy?.createScriptURL(${JSON.stringify(workerScriptUrl)}) ?? ${JSON.stringify(workerScriptUrl)});`,
            workerLoadingFailedErrorMessage ? `} catch (err) { console.error(${JSON.stringify(workerLoadingFailedErrorMessage)}, err); throw err; }` : '',
            `globalThis.postMessage({ type: 'vscode-worker-ready' });`,
            `/*${label}*/`
        ]).join('')], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
}
function whenESMWorkerReady(worker) {
    return new Promise((resolve, reject) => {
        worker.onmessage = function (e) {
            if (e.data.type === 'vscode-worker-ready') {
                worker.onmessage = null;
                resolve(worker);
            }
        };
        worker.onerror = reject;
    });
}
function isPromiseLike(obj) {
    return !!obj && typeof obj.then === 'function';
}
class WebWorker extends Disposable {
    constructor(worker, id) {
        super();
        this._onMessage = this._register(new Emitter());
        this.onMessage = this._onMessage.event;
        this._onError = this._register(new Emitter());
        this.onError = this._onError.event;
        this.id = id;
        this.worker = worker;
        this.postMessage('-please-ignore-', []); // TODO: Eliminate this extra message
        const errorHandler = (ev) => {
            this._onError.fire(ev);
        };
        this.worker.then((w) => {
            w.onmessage = (ev) => {
                this._onMessage.fire(ev.data);
            };
            w.onmessageerror = (ev) => {
                this._onError.fire(ev);
            };
            if (typeof w.addEventListener === 'function') {
                w.addEventListener('error', errorHandler);
            }
        });
        this._register(toDisposable(() => {
            this.worker?.then(w => {
                w.onmessage = null;
                w.onmessageerror = null;
                w.removeEventListener('error', errorHandler);
                w.terminate();
            });
            this.worker = null;
        }));
    }
    getId() {
        return this.id;
    }
    postMessage(message, transfer) {
        this.worker?.then(w => {
            try {
                w.postMessage(message, transfer);
            }
            catch (err) {
                onUnexpectedError(err);
                onUnexpectedError(new Error(`FAILED to post message to worker`, { cause: err }));
            }
        });
    }
}

export { WebWorker, WebWorkerService };
