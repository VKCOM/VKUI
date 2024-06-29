import type { TriggerType } from './types';

export const useResolveTriggerType = (
  triggerProp: TriggerType,
): {
  triggerOnFocus: boolean;
  triggerOnClick: boolean;
  triggerOnHover: boolean;
} =>
  (typeof triggerProp === 'string' ? [triggerProp] : triggerProp).reduce(
    (result, trigger) => {
      switch (trigger) {
        case 'click':
          result.triggerOnClick = true;
          return result;
        case 'hover':
          result.triggerOnHover = true;
          return result;
        case 'focus':
          result.triggerOnFocus = true;
          return result;
        case 'manual':
          return result;
      }
    },
    {
      triggerOnFocus: false as boolean,
      triggerOnClick: false as boolean,
      triggerOnHover: false as boolean,
    },
  );
