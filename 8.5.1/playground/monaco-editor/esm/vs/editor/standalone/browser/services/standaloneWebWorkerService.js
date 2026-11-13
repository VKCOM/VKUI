import { getMonacoEnvironment } from '../../../../base/browser/browser.js';
import { WebWorkerService } from '../../../../platform/webWorker/browser/webWorkerServiceImpl.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class StandaloneWebWorkerService extends WebWorkerService {
    _createWorker(descriptor) {
        const monacoEnvironment = getMonacoEnvironment();
        if (monacoEnvironment) {
            if (typeof monacoEnvironment.getWorker === 'function') {
                const worker = monacoEnvironment.getWorker('workerMain.js', descriptor.label);
                if (worker !== undefined) {
                    return Promise.resolve(worker);
                }
            }
        }
        return super._createWorker(descriptor);
    }
    _getWorkerLoadingFailedErrorMessage(descriptor) {
        const examplePath = '\'...?esm\''; // Broken up to avoid detection by bundler plugin
        return `Failed to load worker script for label: ${descriptor.label}.
Ensure your bundler properly bundles modules referenced by "new URL(${examplePath}, import.meta.url)".`;
    }
    getWorkerUrl(descriptor) {
        const monacoEnvironment = getMonacoEnvironment();
        if (monacoEnvironment) {
            if (typeof monacoEnvironment.getWorkerUrl === 'function') {
                const workerUrl = monacoEnvironment.getWorkerUrl('workerMain.js', descriptor.label);
                if (workerUrl !== undefined) {
                    const absoluteUrl = new URL(workerUrl, document.baseURI).toString();
                    return absoluteUrl;
                }
            }
        }
        if (!descriptor.esmModuleLocationBundler) {
            throw new Error(`You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker for the worker label: ${descriptor.label}`);
        }
        const url = typeof descriptor.esmModuleLocationBundler === 'function' ? descriptor.esmModuleLocationBundler() : descriptor.esmModuleLocationBundler;
        const urlStr = url.toString();
        return urlStr;
    }
}

export { StandaloneWebWorkerService };
