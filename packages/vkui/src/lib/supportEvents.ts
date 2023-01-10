import { canUseDOM } from './dom';
import { isTesting } from './testing';

export type VKUISupportEvents = {
  supported: boolean;
  name?: string | null;
};

// WebKitAnimationEvent и WebKitTransitionEvent не существуют в глобальном контексте
declare const WebKitAnimationEvent: AnimationEvent;
declare const WebKitTransitionEvent: TransitionEvent;

const animationEvent = {
  supported: false,
};

const transitionEvent: VKUISupportEvents = {
  supported: false,
  name: null,
};

if (canUseDOM && !isTesting) {
  if (typeof AnimationEvent !== 'undefined') {
    animationEvent.supported = true;
  } else if (typeof WebKitAnimationEvent !== 'undefined') {
    animationEvent.supported = true;
  }

  if (typeof TransitionEvent !== 'undefined') {
    transitionEvent.supported = true;
    transitionEvent.name = 'transitionend';
  } else if (typeof WebKitTransitionEvent !== 'undefined') {
    transitionEvent.supported = true;
    transitionEvent.name = 'webkitTransitionEnd';
  }
}

export { animationEvent, transitionEvent };
