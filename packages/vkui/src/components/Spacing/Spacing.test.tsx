import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import {
  CUSTOM_CSS_TOKEN_FOR_USER_GAP,
  sizesClassNames,
  Spacing,
  type SpacingSize,
} from './Spacing';

const sizes = Object.keys(sizesClassNames) as SpacingSize[];

describe('Spacing', () => {
  baselineComponent(Spacing);

  it('should use default size', () => {
    const h = render(<Spacing />);
    expect(h.container.firstElementChild).toHaveClass(sizesClassNames.m);
  });

  it('should preserve use className', () => {
    const userClassName = 'test';
    const h = render(<Spacing className={userClassName} />);
    expect(h.container.firstElementChild).toHaveClass(`${sizesClassNames.m} ${userClassName}`);
  });

  it.each(sizes)('should use union sizes', (size) => {
    const h = render(<Spacing size={size} />);
    expect(h.container.firstElementChild).toHaveClass(sizesClassNames[size]);
  });

  it('should use custom size', () => {
    const h = render(<Spacing size={16} />);
    expect(h.container.firstElementChild).toHaveStyle(`${CUSTOM_CSS_TOKEN_FOR_USER_GAP}: 16px`);
  });

  it('should preserve user style', () => {
    const h = render(<Spacing size={16} style={{ fontSize: 12 }} />);
    expect(h.container.firstElementChild).toHaveStyle(
      `font-size: 12px; ${CUSTOM_CSS_TOKEN_FOR_USER_GAP}: 16px`,
    );
  });
});
