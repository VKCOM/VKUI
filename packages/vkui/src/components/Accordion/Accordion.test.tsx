import { fireEvent, render } from '@testing-library/react';
import { a11yTest, baselineComponent, waitCSSKeyframesAnimation } from '../../testing/utils';
import { Accordion } from './Accordion';

describe(Accordion, () => {
  a11yTest(() => (
    <Accordion>
      <Accordion.Summary iconPosition="before" data-testid="summary">
        Title
      </Accordion.Summary>
      <Accordion.Content data-testid="content">Content</Accordion.Content>
    </Accordion>
  ));

  baselineComponent(Accordion.Content);
  baselineComponent((props) => <Accordion.Summary {...props}>Title</Accordion.Summary>);

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
