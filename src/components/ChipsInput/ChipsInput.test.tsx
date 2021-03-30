import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { baselineComponent } from '../../testing/utils';
import ChipsInput, { ChipsInputOption, ChipsInputProps } from './ChipsInput';

const ChipsInputController = ({ value, ...props }: ChipsInputProps<ChipsInputOption>) => {
  return (
    <div data-testid="chips-container">
      <ChipsInput
        value={value}
        data-testid="chips-input"
        renderChip={undefined}
        {...props}
      />
    </div>
  );
};

const getChipsContainer = () => screen.getByTestId('chips-container');
const getChipsInput = () => screen.getByTestId('chips-input');
const getChip = (label: string) => screen.getByText(label).parentElement;

describe('ChipsInput', () => {
  baselineComponent(ChipsInput);

  it('renders values passed to it', () => {
    render(
      <ChipsInputController
        value={[
          { value: 'red', label: 'Красный' },
          { value: 'blue', label: 'Синий' },
        ]}
      />,
    );

    const chipRed = getChip('Красный');
    const chipBlue = getChip('Синий');

    expect(getChipsContainer()).toContainElement(chipRed);
    expect(getChipsContainer()).toContainElement(chipBlue);
  });

  it('adds chips', () => {
    render(<ChipsInputController value={[]} renderChip={undefined} />);

    userEvent.type(getChipsInput(), 'Красный{enter}');

    const chipRed = getChip('Красный');
    expect(getChipsContainer()).toContainElement(chipRed);
  });

  it('removes chip on chip remove button click', () => {
    render(<ChipsInputController value={[{ value: 'red', label: 'Красный' }]} />);

    const chipRed = getChip('Красный');
    const chipRedRemove: HTMLElement = chipRed.querySelector('.vkuiChip__remove');

    expect(chipRed).toContainElement(chipRedRemove);

    userEvent.click(chipRedRemove);
    expect(getChipsContainer()).not.toContainElement(chipRed);
  });

  it('removes chip on hitting backspace', () => {
    render(<ChipsInputController value={[{ value: 'red', label: 'Красный' }]} />);

    const chipRed = getChip('Красный');

    userEvent.type(getChipsInput(), '{backspace}');
    expect(getChipsContainer()).not.toContainElement(chipRed);
  });

  it('has disabled state', () => {
    render(<ChipsInputController disabled value={[{ value: 'blue', label: 'Синий' }]} />);

    const chipBlue = getChip('Синий');

    expect(getChipsInput()).toBeDisabled();

    expect(getChipsContainer()).toContainElement(chipBlue);
    expect(chipBlue).not.toContainElement(chipBlue.querySelector('.vkuiChip__remove'));
  });

  it('checks focus and blur', () => {
    render(<ChipsInputController value={[]} />);

    userEvent.click(getChipsInput());
    expect(getChipsInput()).toHaveFocus();

    getChipsInput().blur();
    expect(getChipsInput()).not.toHaveFocus();
  });
});
