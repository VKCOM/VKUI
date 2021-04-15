import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
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
const getChip = (label: string) => screen.queryByText(label);

describe('ChipsInput', () => {
  baselineComponent(ChipsInput);

  it('renders values passed to it', () => {
    render(
      <ChipsInputTest
        value={[
          { value: 'red', label: 'Красный' },
          { value: 'blue', label: 'Синий' },
        ]}
      />,
    );

    expect(getChip('Красный')).not.toBeNull();
    expect(getChip('Синий')).not.toBeNull();
  });

  it('adds chips', () => {
    render(<ChipsInputTest value={[]} renderChip={undefined} />);

    userEvent.type(getChipsInput(), 'Красный{enter}');

    expect(getChip('Красный')).not.toBeNull();
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

    expect(getChip('Красный')).not.toBeNull();
  });

  it('removes chip on hitting backspace', () => {
    render(<ChipsInputTest value={[{ value: 'red', label: 'Красный' }]} />);

    userEvent.type(getChipsInput(), '{backspace}');

    expect(getChip('Красный')).toBeNull();
  });

  it('does not delete chips on hitting backspace in readonly mode', () => {
    render(<ChipsInputTest readOnly value={[{ value: 'blue', label: 'Синий' }]} />);

    userEvent.type(getChipsInput(), '{backspace}');

    expect(getChip('Синий')).not.toBeNull();
  });
});
