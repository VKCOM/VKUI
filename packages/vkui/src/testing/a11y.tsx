import * as React from 'react';
import { render } from '@testing-library/react';
import { configureAxe, toHaveNoViolations } from 'jest-axe';

export const axe = configureAxe({
  /**
   * @see https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
   */
  //   rules: {
  //     'aria-required-parent': {
  //       /*
  //        * a11y: Certain ARIA roles must be contained by particular parents (aria-required-parent)
  //        *       мы тестируем компоненты атомарно, поэтому это конкретное правило в нашем случае
  //        *       не подходит
  //        */
  //       enabled: false,
  //     },
  //     'label': {
  //       /*
  //        * a11y: Form elements must have labels (label)
  //        *       мы тестируем компоненты атомарно, поэтому это конкретное правило в нашем случае
  //        *       не подходит: мы не можем задать дефолтные лейблы компонентам форм
  //        */
  //       enabled: false,
  //     },
  //   },
});
expect.extend(toHaveNoViolations);

export function a11yBasicTest(Component: React.ComponentType<any>) {
  it('a11y: has no violations', async () => {
    const { container } = render(<Component />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}
