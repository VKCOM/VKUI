import type { TriggerType } from './types';

export const useResolveTriggerType = (triggerProp: TriggerType) =>
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
      triggerOnFocus: false,
      triggerOnClick: false,
      triggerOnHover: false,
    },
  );
