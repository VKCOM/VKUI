import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import ChipsInput, { ChipsInputOption, ChipsInputProps } from './ChipsInput';

const ChipsInputTest = (props: ChipsInputProps<ChipsInputOption>) => {
  return (
    <ChipsInput
      data-testid="chips-input"
      renderChip={undefined}
      {...props}
    />
  );
};

const getChipsInput = () => screen.getByTestId('chips-input');
const getChip = () => screen.queryByText('Красный');

describe('ChipsInput', () => {
  baselineComponent(ChipsInput);

  it('renders values passed to it', () => {
    render(
      <ChipsInputTest
        value={[
          { value: 'red', label: 'Красный' },
        ]}
      />,
    );

    expect(getChip()).not.toBeNull();
  });

  it('adds chips', () => {
    render(<ChipsInputTest value={[]} renderChip={undefined} />);

    userEvent.type(getChipsInput(), 'Красный{enter}');

    expect(getChip()).not.toBeNull();
  });

  it('does not lose data when adding an already existing chip', () => {
    render(
      <ChipsInputTest
        value={[
          { value: 'Красный', label: 'Красный' },
          { value: 'Синий', label: 'Синий' },
          { value: 'Белый', label: 'Белый' },
        ]}
      />,
    );

    userEvent.type(getChipsInput(), 'Красный{enter}');

    expect(getChip()).not.toBeNull();
  });

  it('removes chip on hitting backspace', () => {
    render(<ChipsInputTest value={[{ value: 'red', label: 'Красный' }]} />);

    userEvent.type(getChipsInput(), '{backspace}');

    expect(getChip()).toBeNull();
  });

  it('does not delete chips on hitting backspace in readonly mode', () => {
    render(<ChipsInputTest readOnly value={[{ value: 'red', label: 'Красный' }]} />);

    userEvent.type(getChipsInput(), '{backspace}');

    expect(getChip()).not.toBeNull();
  });
});
