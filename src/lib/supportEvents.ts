import { canUseDOM } from './dom';
import { isTesting } from './testing';

export type VKUISupportEvents = {
  supported: boolean;
  name?: string;
};

// WebKitAnimationEvent и WebKitTransitionEvent не существуют в глобальном контексте
declare const WebKitAnimationEvent: AnimationEvent;
declare const WebKitTransitionEvent: TransitionEvent;

const animationEvent: VKUISupportEvents = {
  supported: false,
  name: null,
};

const transitionEvent: VKUISupportEvents = {
  supported: false,
  name: null,
};

if (canUseDOM && !isTesting) {
  if (typeof AnimationEvent !== 'undefined') {
    animationEvent.supported = true;
    animationEvent.name = 'animationend';
  } else if (typeof WebKitAnimationEvent !== 'undefined') {
    animationEvent.supported = true;
    animationEvent.name = 'webkitAnimationEnd';
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
