import { Icon12Add } from '@vkontakte/icons';
import { describe, expect, it } from 'vitest';
import { VisuallyHidden } from '../components/VisuallyHidden/VisuallyHidden';
import {
  hasAccessibleName,
  injectAriaExpandedPropByRole,
  supportsAriaExpanded,
} from './accessibility';

describe('accessibility utils', () => {
  describe('injectAriaExpandedPropByRole()', () => {
    it.each(['dialog', 'menu', 'application', 'tab', 'menuitem', 'treeitem', 'gridcell'])(
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

  describe('supportsAriaExpanded()', () => {
    it.each(['button', 'link', 'combobox', 'menuitem', 'tab', 'treeitem', 'switch'])(
      'should return true for an element with role="%s"',
      (role) => {
        expect(supportsAriaExpanded(<div role={role} />)).toBe(true);
      },
    );

    it.each(['presentation', 'none', 'article', 'list', 'alert'])(
      'should return false for an element with role="%s"',
      (role) => {
        expect(supportsAriaExpanded(<div role={role} />)).toBe(false);
      },
    );

    it.each(['a', 'area', 'button', 'input', 'select', 'summary', 'textarea'])(
      'should return true for <%s> without an explicit role',
      (tagName) => {
        const Element = tagName as 'button';

        expect(supportsAriaExpanded(<Element />)).toBe(true);
      },
    );

    it.each(['div', 'span', 'p', 'li'])(
      'should return false for <%s> without an explicit role',
      (tagName) => {
        const Element = tagName as 'div';

        expect(supportsAriaExpanded(<Element />)).toBe(false);
      },
    );

    it('should return true for a component, because the role of its root element is unknown', () => {
      const Component = () => <button type="button" />;

      expect(supportsAriaExpanded(<Component />)).toBe(true);
    });

    it('should prefer an explicit role over the implicit one', () => {
      expect(supportsAriaExpanded(<button role="presentation" type="button" />)).toBe(false);
      expect(supportsAriaExpanded(<div role="button" />)).toBe(true);
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
