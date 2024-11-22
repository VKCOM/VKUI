import { mergeStyle } from './mergeStyle';

describe(mergeStyle, () => {
  it.each([
    {
      input: [],
      output: undefined,
    },
    {
      input: [undefined],
      output: undefined,
    },
    {
      input: [{ color: 'red' }, { background: 'blue' }],
      output: { color: 'red', background: 'blue' },
    },
    {
      input: [{ color: 'red' }, { background: 'blue' }, { border: 'green' }],
      output: { color: 'red', background: 'blue', border: 'green' },
    },
    {
      input: [undefined, { color: 'red' }, undefined],
      output: { color: 'red' },
    },
    {
      input: [{ color: 'red' }],
      output: { color: 'red' },
    },
    {
      input: [{ color: 'red' }, { color: 'blue' }],
      output: { color: 'blue' },
    },
    {
      input: [{ color: 'red' }, { color: 'blue' }, { color: 'green' }],
      output: { color: 'green' },
    },
  ])('mergeStyle($input) is $output', ({ input, output }) =>
    expect(mergeStyle(...input)).toStrictEqual(output),
  );

  const testStyles = { display: 'flex' };
  const copyTestStyles = { ...testStyles };

  it.each([
    [[testStyles]],
    [[undefined, testStyles]],
    [[testStyles, undefined]],
    [[undefined, testStyles, undefined]],
  ])('mergeStyle(%p) is not copy', (input) => {
    const result = mergeStyle(...input);
    expect(result).toBe(testStyles);
    expect(result).not.toBe(copyTestStyles);
  });
});
