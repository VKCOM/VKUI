import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Accordion } from './Accordion';

describe(Accordion, () => {
  baselineComponent(Accordion);

  it('open on click', () => {
    render(
      <Accordion data-testid="details">
        <Accordion.Summary data-testid="summary">Title</Accordion.Summary>
        Content
      </Accordion>,
    );
    const details = screen.getByTestId<HTMLDetailsElement>('details');
    const summary = screen.getByTestId('summary');
    expect(details.open).toBeFalsy();

    fireEvent.click(summary);
    expect(details.open).toBeTruthy();

    fireEvent.click(summary);
    expect(details.open).toBeFalsy();
  });
});
