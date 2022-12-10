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

  it('ignores quotes', () => {
    expect(defaultFilterFn('петер', { label: 'Санкт-"Петербург"' })).toBeTruthy();
  });

  it('ignores braces', () => {
    expect(defaultFilterFn('пите', { label: 'Санкт-Петербург (Питер)' })).toBeTruthy();
  });

  it('search from the middle of sentence', () => {
    expect(defaultFilterFn('имя нельз', { label: 'Группа, чьё имя нельзя называть' })).toBeTruthy();
    expect(
      defaultFilterFn('нельзя назы', {
        label: 'Группа, чьё имя нельзя называть',
      }),
    ).toBeTruthy();
    expect(defaultFilterFn('имя нельз', { label: 'ельзя ывать' })).toBeFalsy();
  });

  it('skips matches in the middle', () => {
    expect(defaultFilterFn('ерб', { label: 'Санкт-Петербург' })).toBeFalsy();
  });

  it('skips irrelevant options', () => {
    expect(defaultFilterFn('Моск', { label: 'Санкт-Петербург' })).toBeFalsy();
  });

  it('accepts custom getOptionLabel', () => {
    expect(
      defaultFilterFn('гог', { description: 'Гоголь' }, (option) => option.description),
    ).toBeTruthy();
  });
});
