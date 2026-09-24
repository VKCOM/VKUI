/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Size2D {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    toString() {
        return `(${this.width},${this.height})`;
    }
    transpose() {
        return new Size2D(this.height, this.width);
    }
    toDimension() {
        return { width: this.width, height: this.height };
    }
}

export { Size2D };
