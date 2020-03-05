let supported: boolean;
let prefix: string;

if (typeof document !== 'undefined') {
  const d = document.body || document.documentElement;
  if ('style' in d) {
    if ('transition' in d.style) {
      supported = true;
    } else if ('webkitTransition' in d.style) {
      supported = true;
      prefix = 'webkit';
    }
  }
}

const transitionEndEventName: string = prefix ? prefix + 'TransitionEnd' : 'transitionend';
const animationEndEventName: string = prefix ? prefix + 'AnimationEnd' : 'animationend';

export default {
  supported,
  prefix,
  transitionEndEventName,
  animationEndEventName,
};
