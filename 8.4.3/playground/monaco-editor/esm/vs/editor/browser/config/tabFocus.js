import { Emitter } from '../../../base/common/event.js';
import { Disposable } from '../../../base/common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TabFocusImpl extends Disposable {
    constructor() {
        super(...arguments);
        this._tabFocus = false;
        this._onDidChangeTabFocus = this._register(new Emitter());
        this.onDidChangeTabFocus = this._onDidChangeTabFocus.event;
    }
    getTabFocusMode() {
        return this._tabFocus;
    }
    setTabFocusMode(tabFocusMode) {
        this._tabFocus = tabFocusMode;
        this._onDidChangeTabFocus.fire(this._tabFocus);
    }
}
/**
 * Control what pressing Tab does.
 * If it is false, pressing Tab or Shift-Tab will be handled by the editor.
 * If it is true, pressing Tab or Shift-Tab will move the browser focus.
 * Defaults to false.
 */
const TabFocus = new TabFocusImpl();

export { TabFocus };
