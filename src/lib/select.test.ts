import { defaultFilterFn } from './select';

describe(defaultFilterFn, () => {
  it('filters one word', () => {
    expect(defaultFilterFn('моск', { label: 'Москва' })).toBeTruthy();
  });

  it('filters several words', () => {
    expect(defaultFilterFn('monk', { label: 'Arctic Monkeys' })).toBeTruthy();
  });

  it('filters dashed words', () => {
    expect(defaultFilterFn('петер', { label: 'Санкт-Петербург' })).toBeTruthy();
  });

  it('skips matches in the middle', () => {
    expect(defaultFilterFn('ерб', { label: 'Санкт-Петербург' })).toBeFalsy();
  });

  it('accepts custom getOptionLabel', () => {
    expect(defaultFilterFn('гог', { description: 'Гоголь' }, (option) => option.description)).toBeTruthy();
  });
});
