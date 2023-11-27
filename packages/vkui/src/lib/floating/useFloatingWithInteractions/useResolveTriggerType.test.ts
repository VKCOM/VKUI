import { useResolveTriggerType } from './useResolveTriggerType';

describe(useResolveTriggerType, () => {
  const defaultResult = { triggerOnFocus: false, triggerOnClick: false, triggerOnHover: false };
  const onlyFocusResult = { triggerOnFocus: true, triggerOnClick: false, triggerOnHover: false };
  const onlyClickResult = { triggerOnFocus: false, triggerOnClick: true, triggerOnHover: false };
  const onlyHoverResult = { triggerOnFocus: false, triggerOnClick: false, triggerOnHover: true };

  it.each([
    { type: 'focus', args: 'focus' as const, result: onlyFocusResult },
    { type: 'focus', args: ['focus' as const], result: onlyFocusResult },
    { type: 'click', args: ['click' as const], result: onlyClickResult },
    { type: 'click', args: ['click' as const], result: onlyClickResult },
    { type: 'hover', args: ['hover' as const], result: onlyHoverResult },
    { type: 'hover', args: ['hover' as const], result: onlyHoverResult },
    { type: 'manual', args: 'manual' as const, result: defaultResult },
  ])(`should return only $type predicate for args are $args`, ({ args, result }) => {
    expect(useResolveTriggerType(args)).toEqual(result);
  });

  it.each([
    { args: ['focus' as const, 'click' as const, 'hover' as const], result: { triggerOnFocus: true, triggerOnClick: true, triggerOnHover: true } }, // prettier-ignore
    { args: ['focus' as const, 'click' as const], result: { triggerOnFocus: true, triggerOnClick: true, triggerOnHover: false } }, // prettier-ignore
    { args: ['focus' as const, 'hover' as const], result: { triggerOnFocus: true, triggerOnClick: false, triggerOnHover: true } }, // prettier-ignore
    { args: ['click' as const, 'hover' as const], result: { triggerOnFocus: false, triggerOnClick: true, triggerOnHover: true } }, // prettier-ignore
  ])(`should return combination predicates for args are $args`, ({ args, result }) => {
    expect(useResolveTriggerType(args)).toEqual(result);
  });
});
