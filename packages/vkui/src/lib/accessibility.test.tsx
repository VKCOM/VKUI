import * as React from 'react';
import { Icon12Add } from '@vkontakte/icons';
import { VisuallyHidden } from '../vkui';
import { hasAccessibleName, injectAriaExpandedPropByRole } from './accessibility';

describe('accessibility utils', () => {
  describe('injectAriaExpandedPropByRole()', () => {
    it.each(['menu', 'application', 'tab', 'menuitem', 'treeitem', 'gridcell'])(
      'should injects aria-expanded attribute to provided props when role="%s"',
      (role) => {
        expect(injectAriaExpandedPropByRole({}, true, role)).toEqual({ 'aria-expanded': true });
        expect(injectAriaExpandedPropByRole({}, false, role)).toEqual({ 'aria-expanded': false });
      },
    );

    it('should not injects aria-expanded attribute to props', () => {
      expect(injectAriaExpandedPropByRole({}, true)).toEqual({});
      expect(injectAriaExpandedPropByRole({}, false)).toEqual({});
      expect(injectAriaExpandedPropByRole({}, true, 'alert')).toEqual({});
      expect(injectAriaExpandedPropByRole({}, false, 'alert')).toEqual({});
    });
  });

  describe('hasAccessibleName()', () => {
    it('returns true if aria-label exists', () => {
      const result = hasAccessibleName({
        'aria-label': 'Есть aria-label',
        'aria-labelledby': undefined,
        'title': undefined,
        'children': undefined,
      });

      expect(result).toEqual(true);
    });

    it('returns true if aria-labelledby exists', () => {
      const result = hasAccessibleName({
        'aria-label': undefined,
        'aria-labelledby': 'label-id',
        'title': undefined,
        'children': undefined,
      });

      expect(result).toEqual(true);
    });

    it('returns true if title exists', () => {
      const result = hasAccessibleName({
        'aria-label': undefined,
        'aria-labelledby': undefined,
        'title': 'Есть title',
        'children': undefined,
      });

      expect(result).toEqual(true);
    });

    it('returns true if children have text', () => {
      const result = hasAccessibleName({
        'aria-label': undefined,
        'aria-labelledby': undefined,
        'title': undefined,
        'children': <VisuallyHidden>Текст</VisuallyHidden>,
      });

      expect(result).toEqual(true);
    });

    it('returns false if children have icon only and everything else is undefined', () => {
      const result = hasAccessibleName({
        'aria-label': undefined,
        'aria-labelledby': undefined,
        'title': undefined,
        'children': <Icon12Add />,
      });

      expect(result).toEqual(false);
    });
  });
});
