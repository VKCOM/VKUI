import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { type SpacingSize, spacingSizeClassNames } from '../../lib/spacings/sizes';
import { baselineComponent } from '../../testing/utils';
import { CUSTOM_CSS_TOKEN_FOR_USER_GAP, Spacing } from './Spacing';

const sizes = Object.keys(spacingSizeClassNames) as SpacingSize[];

describe('Spacing', () => {
  baselineComponent(Spacing);

  it('should use default size', () => {
    const h = render(<Spacing />);
    expect(h.container.firstElementChild).toHaveClass(spacingSizeClassNames.m);
  });

  it('should preserve use className', () => {
    const userClassName = 'test';
    const h = render(<Spacing className={userClassName} />);
    expect(h.container.firstElementChild).toHaveClass(
      `${spacingSizeClassNames.m} ${userClassName}`,
    );
  });

  it.each(sizes)('should use union sizes', (size) => {
    const h = render(<Spacing size={size} />);
    expect(h.container.firstElementChild).toHaveClass(spacingSizeClassNames[size]);
  });

  it('should use custom size', () => {
    const h = render(<Spacing size={16} />);
    expect(
      getComputedStyle(h.container.firstElementChild!).getPropertyValue(
        CUSTOM_CSS_TOKEN_FOR_USER_GAP,
      ),
    ).toBe('16px');
  });

  it('should use css variable size', () => {
    const h = render(<Spacing size="--my-custom-var" />);
    expect(
      getComputedStyle(h.container.firstElementChild!).getPropertyValue(
        CUSTOM_CSS_TOKEN_FOR_USER_GAP,
      ),
    ).toBe('var(--my-custom-var)');
  });

  it('should preserve user style', () => {
    const h = render(<Spacing size={16} style={{ fontSize: 12 }} />);
    expect(getComputedStyle(h.container.firstElementChild!).getPropertyValue('font-size')).toBe(
      '12px',
    );
    expect(
      getComputedStyle(h.container.firstElementChild!).getPropertyValue(
        CUSTOM_CSS_TOKEN_FOR_USER_GAP,
      ),
    ).toBe('16px');
  });
});
