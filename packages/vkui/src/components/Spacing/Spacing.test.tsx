import { render } from '@testing-library/react';
import { DESIGN_SYSTEM_SIZES as sizes } from '../../lib/spacings/sizes';
import { baselineComponent } from '../../testing/utils';
import { CUSTOM_CSS_TOKEN_FOR_USER_GAP, Spacing } from './Spacing';

describe('Spacing', () => {
  baselineComponent(Spacing);

  it('should use default size', () => {
    const h = render(<Spacing />);
    expect(h.container.firstElementChild).toHaveClass('vkui-spacing-m');
  });

  it('should preserve use className', () => {
    const userClassName = 'test';
    const h = render(<Spacing className={userClassName} />);
    expect(h.container.firstElementChild).toHaveClass(`vkui-spacing-m ${userClassName}`);
  });

  it.each(sizes)('should use union sizes', (size) => {
    const h = render(<Spacing size={size} />);
    expect(h.container.firstElementChild).toHaveClass(`vkui-spacing-${size}`);
  });

  it('should use custom size', () => {
    const h = render(<Spacing size={16} />);
    expect(h.container.firstElementChild).toHaveStyle(`${CUSTOM_CSS_TOKEN_FOR_USER_GAP}: 16px`);
  });

  it('should use css variable size', () => {
    const h = render(<Spacing size="--my-custom-var" />);
    expect(h.container.firstElementChild).toHaveStyle(
      `${CUSTOM_CSS_TOKEN_FOR_USER_GAP}: var(--my-custom-var)`,
    );
  });

  it('should preserve user style', () => {
    const h = render(<Spacing size={16} style={{ fontSize: 12 }} />);
    expect(h.container.firstElementChild).toHaveStyle(
      `font-size: 12px; ${CUSTOM_CSS_TOKEN_FOR_USER_GAP}: 16px`,
    );
  });
});
