import { render, screen } from '@testing-library/react';
import { getDocumentBody } from '../../lib/dom';
import { baselineComponent, fakeTimers, userEvent } from '../../testing/utils';
import { Radio } from '../Radio/Radio';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  baselineComponent(RadioGroup);
  fakeTimers();

  it('check role="radiogroup"', () => {
    render(
      <>
        <span id="title">Title</span>
        <RadioGroup aria-labelledby="title">
          <Radio name="test">Classic</Radio>
          <Radio name="test">Regular</Radio>
        </RadioGroup>
      </>,
    );

    const radioComponent = screen.getByRole<HTMLInputElement>('radiogroup');
    expect(radioComponent).toBeTruthy();

    expect(radioComponent.getAttribute('aria-labelledby')).toBe('title');
  });

  it('check navigation by radio buttons', async () => {
    render(
      <RadioGroup>
        <Radio name="test" value="classic" data-testid="classic">
          Classic
        </Radio>
        <Radio name="test" value="regular" data-testid="regular">
          Regular
        </Radio>
      </RadioGroup>,
    );
    expect(getDocumentBody()).toHaveFocus();

    const checkRadioFocusAndChecked = (testId: string) => {
      const radio = screen.getByTestId<HTMLInputElement>(testId);
      expect(radio).toHaveFocus();
      expect(radio).toBeChecked();
    };

    await userEvent.tab();
    expect(screen.getByTestId<HTMLInputElement>('classic')).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    checkRadioFocusAndChecked('regular');

    await userEvent.keyboard('{ArrowUp}');
    checkRadioFocusAndChecked('classic');

    await userEvent.keyboard('{ArrowRight}');
    checkRadioFocusAndChecked('regular');

    await userEvent.keyboard('{ArrowLeft}');
    checkRadioFocusAndChecked('classic');

    await userEvent.tab();
    expect(getDocumentBody()).toHaveFocus();
  });
});
