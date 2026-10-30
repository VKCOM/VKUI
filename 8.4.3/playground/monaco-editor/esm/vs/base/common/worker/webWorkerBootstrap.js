import { WebWorkerServer } from './webWorker.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
let initialized = false;
function initialize(factory) {
    if (initialized) {
        throw new Error('WebWorker already initialized!');
    }
    initialized = true;
    const webWorkerServer = new WebWorkerServer(msg => globalThis.postMessage(msg), (workerServer) => factory(workerServer));
    globalThis.onmessage = (e) => {
        webWorkerServer.onmessage(e.data);
    };
    return webWorkerServer;
}
function bootstrapWebWorker(factory) {
    globalThis.onmessage = (_e) => {
        // Ignore first message in this case and initialize if not yet initialized
        if (!initialized) {
            initialize(factory);
        }
    };
}

export { bootstrapWebWorker, initialize };
