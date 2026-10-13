import { getActiveWindow } from './dom.js';
import '../common/observableInternal/index.js';
import { observableSignal } from '../common/observableInternal/observables/observableSignal.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class AnimatedValue {
    static startNow(startValue, endValue, durationMs, interpolationFunction = easeOutExpo) {
        return new AnimatedValue(startValue, endValue, durationMs, Date.now(), interpolationFunction);
    }
    constructor(startValue, endValue, durationMs, startTimeMs, _interpolationFunction = easeOutExpo) {
        this.startValue = startValue;
        this.endValue = endValue;
        this.durationMs = durationMs;
        this.startTimeMs = startTimeMs;
        this._interpolationFunction = _interpolationFunction;
        if (startValue === endValue) {
            this.durationMs = 0;
        }
    }
    isFinished(nowMs) {
        return nowMs >= this.startTimeMs + this.durationMs;
    }
    getValue(nowMs) {
        const timePassed = nowMs - this.startTimeMs;
        if (timePassed >= this.durationMs) {
            return this.endValue;
        }
        const value = this._interpolationFunction(timePassed, this.startValue, this.endValue - this.startValue, this.durationMs);
        return value;
    }
}
function easeOutExpo(passedTime, start, length, totalDuration) {
    return passedTime === totalDuration
        ? start + length
        : length * (-Math.pow(2, -10 * passedTime / totalDuration) + 1) + start;
}
function easeOutCubic(passedTime, start, length, totalDuration) {
    return length * ((passedTime = passedTime / totalDuration - 1) * passedTime * passedTime + 1) + start;
}
class ObservableAnimatedValue {
    constructor(_value) {
        this._value = _value;
    }
    getValue(reader) {
        const nowMs = Date.now();
        if (!this._value.isFinished(nowMs)) {
            AnimationFrameScheduler.instance.invalidateOnNextAnimationFrame(reader);
        }
        return this._value.getValue(nowMs);
    }
    isFinished(reader) {
        const nowMs = Date.now();
        const isFinished = this._value.isFinished(nowMs);
        if (!isFinished) {
            AnimationFrameScheduler.instance.invalidateOnNextAnimationFrame(reader);
        }
        return isFinished;
    }
}
class AnimationFrameScheduler {
    constructor() {
        this._counter = observableSignal(this);
        this._isScheduled = false;
    }
    static { this.instance = new AnimationFrameScheduler(); }
    invalidateOnNextAnimationFrame(reader) {
        this._counter.read(reader);
        if (!this._isScheduled) {
            this._isScheduled = true;
            getActiveWindow().requestAnimationFrame(() => {
                this._isScheduled = false;
                this._update();
            });
        }
    }
    _update() {
        this._counter.trigger(undefined);
    }
}

export { AnimatedValue, AnimationFrameScheduler, ObservableAnimatedValue, easeOutCubic, easeOutExpo };
