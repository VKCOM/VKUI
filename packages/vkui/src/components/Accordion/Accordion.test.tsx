import { fireEvent, render, renderHook } from '@testing-library/react';
import { a11yTest, baselineComponent, waitCSSKeyframesAnimation } from '../../testing/utils';
import { Accordion } from './Accordion';
import { useAccordionContext } from './AccordionContext';

describe(Accordion, () => {
  a11yTest(() => (
    <Accordion>
      <Accordion.Summary iconPosition="before" data-testid="summary">
        Title
      </Accordion.Summary>
      <Accordion.Content data-testid="content">Content</Accordion.Content>
    </Accordion>
  ));

  it('useAccordionContext', () => {
    const h = renderHook(useAccordionContext, {
      wrapper: ({ children }) => (
        <Accordion defaultExpanded>
          <Accordion.Summary data-testid="summary">Title</Accordion.Summary>
          <Accordion.Content data-testid="content">{children}</Accordion.Content>
        </Accordion>
      ),
    });

    expect(h.result.current.expanded).toBeTruthy();
  });
});
