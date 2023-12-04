import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Accordion } from './Accordion';

describe(Accordion, () => {
  baselineComponent(Accordion.Content);
  baselineComponent(Accordion.Summary, { a11y: false });

  it('toggles on click', () => {
    render(
      <Accordion>
        <Accordion.Summary iconPosition="before" data-testid="summary">
          Title
        </Accordion.Summary>
        <Accordion.Content data-testid="content">Content</Accordion.Content>
      </Accordion>,
    );
    const content = screen.getByTestId<HTMLDivElement>('content');
    const summary = screen.getByTestId('summary');
    expect(content.getAttribute('aria-hidden')).toBe('true');

    fireEvent.click(summary);
    expect(content.getAttribute('aria-hidden')).toBe('false');

    fireEvent.click(summary);
    expect(content.getAttribute('aria-hidden')).toBe('true');
  });
});
