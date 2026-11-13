/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class WebWorkerDescriptor {
    constructor(args) {
        this.esmModuleLocation = args.esmModuleLocation;
        this.esmModuleLocationBundler = args.esmModuleLocationBundler;
        this.label = args.label;
    }
}

export { WebWorkerDescriptor };
