/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TextAreaEditContextRegistryImpl {
    constructor() {
        this._textAreaEditContextMapping = new Map();
    }
    register(ownerID, textAreaEditContext) {
        this._textAreaEditContextMapping.set(ownerID, textAreaEditContext);
        return {
            dispose: () => {
                this._textAreaEditContextMapping.delete(ownerID);
            }
        };
    }
}
const TextAreaEditContextRegistry = new TextAreaEditContextRegistryImpl();

export { TextAreaEditContextRegistry };
