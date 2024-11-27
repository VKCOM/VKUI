import { mergeStyle } from './mergeStyle';

describe(mergeStyle, () => {
  it.each([
    {
      a: undefined,
      b: undefined,
      output: undefined,
    },
    {
      a: { color: 'red' },
      b: { background: 'blue' },
      output: { color: 'red', background: 'blue' },
    },
    {
      a: undefined,
      b: { color: 'red' },
      output: { color: 'red' },
    },
    {
      a: { color: 'red' },
      b: undefined,
      output: { color: 'red' },
    },
    {
      a: { color: 'red' },
      b: { color: 'blue' },
      output: { color: 'blue' },
    },
  ] as const)('mergeStyle($a, $b) is $output', ({ a, b, output }) =>
    expect(mergeStyle(a, b)).toStrictEqual(output),
  );

  const testStyles = { display: 'flex' };
  const copyTestStyles = { ...testStyles };

  it.each([[[undefined, testStyles]], [[testStyles, undefined]]] as const)(
    'mergeStyle(%p) is not copy',
    ([a, b]) => {
      const result = mergeStyle(a, b);
      expect(result).toBe(testStyles);
      expect(result).not.toBe(copyTestStyles);
    },
  );
});
