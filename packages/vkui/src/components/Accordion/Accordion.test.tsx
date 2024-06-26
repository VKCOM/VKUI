import { fireEvent, render } from '@testing-library/react';
import { baselineComponent, waitCSSKeyframesAnimation } from '../../testing/utils';
import { Accordion } from './Accordion';

describe(Accordion, () => {
  baselineComponent(Accordion.Content);
  baselineComponent(Accordion.Summary, { a11y: false });

  it('toggles on click', async () => {
    const result = render(
      <Accordion>
        <Accordion.Summary iconPosition="before" data-testid="summary">
          Title
        </Accordion.Summary>
        <Accordion.Content data-testid="content">Content</Accordion.Content>
      </Accordion>,
    );
    const content = result.getByTestId('content');
    const contentIn = content.firstElementChild as HTMLElement;
    const summary = result.getByTestId('summary');
    expect(content.getAttribute('aria-hidden')).toBe('true');

    fireEvent.click(summary);
    await waitCSSKeyframesAnimation(contentIn);
    expect(content.getAttribute('aria-hidden')).toBe('false');

    fireEvent.click(summary);
    await waitCSSKeyframesAnimation(contentIn);
    expect(content.getAttribute('aria-hidden')).toBe('true');
  });
});
