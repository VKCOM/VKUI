import { Icon12Add } from '@vkontakte/icons';
import { describe, expect, it } from 'vitest';
import { VisuallyHidden } from '../components/VisuallyHidden/VisuallyHidden';
import {
  hasAccessibleName,
  hasOwnInteractiveSemantics,
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

    it.each(['button', 'select', 'summary'])(
      'should return true for <%s> without an explicit role',
      (tagName) => {
        const Element = tagName as 'button';

        expect(supportsAriaExpanded(<Element />)).toBe(true);
      },
    );

    it.each(['div', 'span', 'p', 'li', 'textarea'])(
      'should return false for <%s> without an explicit role',
      (tagName) => {
        const Element = tagName as 'div';

        expect(supportsAriaExpanded(<Element />)).toBe(false);
      },
    );

    it('should require href, because <a> and <area> without it are not links', () => {
      expect(supportsAriaExpanded(<a href="/" />)).toBe(true);
      expect(supportsAriaExpanded(<a />)).toBe(false);
      expect(supportsAriaExpanded(<area href="/" />)).toBe(true);
      expect(supportsAriaExpanded(<area />)).toBe(false);
    });

    it.each(['button', 'checkbox', 'image', 'reset', 'submit'])(
      'should return true for <input type="%s">',
      (type) => {
        expect(supportsAriaExpanded(<input type={type} />)).toBe(true);
      },
    );

    it.each(['text', 'email', 'number', 'radio', 'range', 'search'])(
      'should return false for <input type="%s">',
      (type) => {
        expect(supportsAriaExpanded(<input type={type} />)).toBe(false);
      },
    );

    it('should treat <input> without a type as a textbox', () => {
      expect(supportsAriaExpanded(<input />)).toBe(false);
    });

    it('should return true for a component, because the role of its root element is unknown', () => {
      const Component = () => <button type="button" />;

      expect(supportsAriaExpanded(<Component />)).toBe(true);
    });

    it('should prefer an explicit role over the implicit one', () => {
      expect(supportsAriaExpanded(<button role="presentation" type="button" />)).toBe(false);
      expect(supportsAriaExpanded(<div role="button" />)).toBe(true);
    });
  });

  describe('hasOwnInteractiveSemantics()', () => {
    it.each(['button', 'input', 'select', 'summary', 'textarea'])(
      'should return true for the native control <%s>',
      (tagName) => {
        const Element = tagName as 'button';

        expect(hasOwnInteractiveSemantics(<Element />)).toBe(true);
      },
    );

    it.each(['div', 'span', 'p', 'li'])('should return false for <%s>', (tagName) => {
      const Element = tagName as 'div';

      expect(hasOwnInteractiveSemantics(<Element />)).toBe(false);
    });

    it('should require href, because <a> and <area> without it are not interactive', () => {
      expect(hasOwnInteractiveSemantics(<a href="/" />)).toBe(true);
      expect(hasOwnInteractiveSemantics(<a />)).toBe(false);
      expect(hasOwnInteractiveSemantics(<area href="/" />)).toBe(true);
      expect(hasOwnInteractiveSemantics(<area />)).toBe(false);
    });

    it('should return true for an element with an explicit role', () => {
      expect(hasOwnInteractiveSemantics(<div role="presentation" />)).toBe(true);
    });

    it('should return true for a component, because its root element is unknown', () => {
      const Component = () => <div />;

      expect(hasOwnInteractiveSemantics(<Component />)).toBe(true);
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
