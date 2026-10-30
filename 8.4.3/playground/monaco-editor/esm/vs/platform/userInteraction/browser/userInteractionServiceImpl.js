import { getWindow, ModifierKeyEmitter, trackFocus } from '../../../base/browser/dom.js';
import '../../../base/common/observableInternal/index.js';
import { registerSingleton } from '../../instantiation/common/extensions.js';
import { IUserInteractionService } from './userInteractionService.js';
import { observableFromEvent } from '../../../base/common/observableInternal/observables/observableFromEvent.js';
import { observableValue } from '../../../base/common/observableInternal/observables/observableValue.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class UserInteractionService {
    constructor() {
        this._modifierObservables = new WeakMap();
    }
    readModifierKeyStatus(element, reader) {
        const win = element instanceof Window ? element : getWindow(element);
        let obs = this._modifierObservables.get(win);
        if (!obs) {
            const emitter = ModifierKeyEmitter.getInstance();
            obs = observableFromEvent(this, emitter.event, () => ({
                ctrlKey: emitter.keyStatus.ctrlKey,
                shiftKey: emitter.keyStatus.shiftKey,
                altKey: emitter.keyStatus.altKey,
                metaKey: emitter.keyStatus.metaKey,
            }));
            this._modifierObservables.set(win, obs);
        }
        return obs.read(reader);
    }
    createFocusTracker(element, store) {
        const tracker = store.add(trackFocus(element));
        const hasFocusWithin = (el) => {
            if (el instanceof Window) {
                return el.document.hasFocus();
            }
            const shadowRoot = el.getRootNode() instanceof ShadowRoot ? el.getRootNode() : null;
            const activeElement = shadowRoot ? shadowRoot.activeElement : el.ownerDocument.activeElement;
            return el.contains(activeElement);
        };
        const value = observableValue('isFocused', hasFocusWithin(element));
        store.add(tracker.onDidFocus(() => value.set(true, undefined)));
        store.add(tracker.onDidBlur(() => value.set(false, undefined)));
        return value;
    }
    createHoverTracker(element, store) {
        const value = observableValue('isHovered', false);
        const onEnter = () => value.set(true, undefined);
        const onLeave = () => value.set(false, undefined);
        element.addEventListener('mouseenter', onEnter);
        element.addEventListener('mouseleave', onLeave);
        store.add({
            dispose: () => {
                element.removeEventListener('mouseenter', onEnter);
                element.removeEventListener('mouseleave', onLeave);
            }
        });
        return value;
    }
    createDomFocusTracker(element) {
        return trackFocus(element);
    }
}
registerSingleton(IUserInteractionService, UserInteractionService, 1 /* InstantiationType.Delayed */);

export { UserInteractionService };
