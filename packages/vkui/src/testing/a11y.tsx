import * as React from 'react';
import { render } from '@testing-library/react';
import { configureAxe, toHaveNoViolations } from 'jest-axe';

export const axe = configureAxe({
  /**
   * @see https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
   */
});
expect.extend(toHaveNoViolations);

export function a11yBasicTest(Component: React.ComponentType<any>) {
  it('a11y: has no violations', async () => {
    const { container } = render(<Component />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}
