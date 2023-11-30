import { injectAriaExpandedPropByRole } from './accessibility';

describe(injectAriaExpandedPropByRole, () => {
  it.each(['menu', 'application', 'tab', 'menuitem', 'treeitem', 'gridcell'])(
    'should injects aria-expanded attribute to provided props when role="%s"',
    (role) => {
      expect(injectAriaExpandedPropByRole({}, true, role)).toEqual({ 'aria-expanded': true });
      expect(injectAriaExpandedPropByRole({}, false, role)).toEqual({ 'aria-expanded': false });
    },
  );

  it('should nit injects aria-expanded attribute to props', () => {
    expect(injectAriaExpandedPropByRole({}, true)).toEqual({});
    expect(injectAriaExpandedPropByRole({}, false)).toEqual({});
    expect(injectAriaExpandedPropByRole({}, true, 'alert')).toEqual({});
    expect(injectAriaExpandedPropByRole({}, false, 'alert')).toEqual({});
  });
});
