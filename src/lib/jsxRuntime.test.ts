import { HTMLAttributes, Attributes } from 'react';
import { createScopedElement } from './jsxRuntime';
import { __controller } from './classScopingMode';

describe(createScopedElement, () => {
  beforeEach(() => __controller._noConflict = false);
  const processProps = (props: Attributes & HTMLAttributes<any>) => {
    return createScopedElement('div', props).props;
  };
  const classSet = ({ className }: HTMLAttributes<any>) => new Set(className ? className.split(' ').filter(Boolean) : []);

  describe('prefixes vkuiClass', () => {
    const prefixed = new Set(['A', 'B', 'vkuiA', 'vkuiB']);
    it('from array', () =>
      expect(classSet(processProps({ vkuiClass: ['A', 'B'] }))).toEqual(prefixed));
    it('from string', () =>
      expect(classSet(processProps({ vkuiClass: 'A B' }))).toEqual(prefixed));
  });
  it('is idempotent', () => {
    const pass1 = processProps({ vkuiClass: 'A' });
    expect(classSet(processProps({ vkuiClass: pass1.className }))).toEqual(classSet(pass1));
  });
  describe('handles missing args', () => {
    it('does not require vkuiClass', () =>
      expect(processProps({})).not.toHaveProperty('className'));
    it('accepts falsy vkuiClass', () =>
      expect(processProps({ vkuiClass: null })).not.toHaveProperty('className'));
    it('does not require props', () =>
      expect(createScopedElement('div').props).not.toHaveProperty('className'));
  });
  describe('className integration', () => {
    it('passes className without prefixing without vkuiClass', () =>
      expect(processProps({ className: 'B C' }).className).toBe('B C'));
    it('merges className with vkuiClass', () =>
      expect(classSet(processProps({ vkuiClass: ['S'], className: 'B C' }))).toEqual(new Set(['vkuiS', 'S', 'B', 'C'])));
  });
  it('legacy classes can be controlled', () => {
    // can be diabled...
    __controller._noConflict = true;
    expect(classSet(processProps({ vkuiClass: ['A', 'B'] }))).toEqual(new Set(['vkuiA', 'vkuiB']));
    // ...and enabled back again
    __controller._noConflict = false;
    expect(classSet(processProps({ vkuiClass: ['A', 'B'] }))).toEqual(new Set(['vkuiA', 'vkuiB', 'A', 'B']));
  });
});
