import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '../../testing/a11y';
import { Chip } from '../Chip/Chip';
import { ChipsInputBase } from './ChipsInputBase';

describe('ChipsInputBase', () => {
  describe('a11y(basic):', () => {
    it('has no axe violations', async () => {
      const { container } = render(<ChipsInputBase value={[{ value: 'red', label: 'Красный' }]} />);

      const results = await axe(container, {
        rules: {
          /* aria-required-children:
           *   у Chip есть role="row". Все дети внутри Chip отмечены role="gridcell",
           *   что валидно, но ошибка при этом не исчезает
           */
          'aria-required-children': {
            enabled: false,
          },
        },
      });
      expect(results).toHaveNoViolations();
    });
  });

  describe('a11y(keyboard navigation):', () => {
    it('focuses chip on TAB', async () => {
      render(
        <ChipsInputBase
          data-testid="chips-input"
          value={[{ value: 'red', label: 'Красный', testid: 'chip-red' }]}
          // @ts-expect-error: TS2339 Property does not exist
          renderChip={({ value, label, option: { testid }, ...restProps }) => (
            <Chip data-testid={testid} value={value} {...restProps}>
              {label}
            </Chip>
          )}
        />,
      );
      userEvent.tab();
      expect(screen.getByTestId('chip-red')).toHaveFocus();
    });

    it('focuses first chip on return to chips', async () => {
      render(
        <ChipsInputBase
          data-testid="chips-input"
          value={[
            { value: 'red', label: 'Красный', testid: 'chip-red' },
            { value: 'black', label: 'Черный', testid: 'chip-black' },
          ]}
          // @ts-expect-error: TS2339 Property does not exist
          renderChip={({ value, label, option: { testid }, ...restProps }) => (
            <Chip data-testid={testid} value={value} {...restProps}>
              {label}
            </Chip>
          )}
        />,
      );
      userEvent.tab(); // focuses first chip
      userEvent.tab(); // focuses next non-chip element (input)
      userEvent.tab({ shift: true }); // backwards — focuses first chip

      expect(screen.getByTestId('chip-red')).toHaveFocus();
    });

    it('moves between chips via arrows', async () => {
      render(
        <ChipsInputBase
          data-testid="chips-input"
          readOnly
          value={[
            { value: 'red', label: 'Красный', testid: 'chip-red' },
            { value: 'black', label: 'Черный', testid: 'chip-black' },
          ]}
          // @ts-expect-error: TS2339 Property does not exist
          renderChip={({ value, label, option: { testid }, ...restProps }) => (
            <Chip removable={false} data-testid={testid} value={value} {...restProps}>
              {label}
            </Chip>
          )}
        />,
      );
      userEvent.tab();

      userEvent.keyboard('{arrowLeft}'); // to previous (last) chip
      expect(screen.getByTestId('chip-black')).toHaveFocus();

      userEvent.keyboard('{arrowRight}'); // to next (first) chip
      expect(screen.getByTestId('chip-red')).toHaveFocus();

      userEvent.keyboard('{arrowDown}'); // to previous (last) chip
      expect(screen.getByTestId('chip-black')).toHaveFocus();

      userEvent.keyboard('{arrowUp}'); // to next (first) chip
      expect(screen.getByTestId('chip-red')).toHaveFocus();
    });

    it('traps focus inside chips when moving via arrows', async () => {
      render(
        <ChipsInputBase
          readOnly
          data-testid="chips-input"
          value={[{ value: 'red', label: 'Красный', testid: 'chip-red' }]}
          // @ts-expect-error: TS2339 Property does not exist
          renderChip={({ value, label, option: { testid }, ...restProps }) => (
            <Chip removable={false} data-testid={testid} value={value} {...restProps}>
              {label}
            </Chip>
          )}
        />,
      );
      userEvent.tab();
      expect(screen.getByTestId('chip-red')).toHaveFocus();

      userEvent.keyboard('{arrowLeft}{arrowLeft}');
      expect(screen.getByTestId('chip-red')).toHaveFocus();

      userEvent.keyboard('{arrowRight}{arrowRight}');
      expect(screen.getByTestId('chip-red')).toHaveFocus();

      userEvent.keyboard('{arrowDown}{arrowDown}');
      expect(screen.getByTestId('chip-red')).toHaveFocus();

      userEvent.keyboard('{arrowUp}{arrowUp}');
      expect(screen.getByTestId('chip-red')).toHaveFocus();
    });

    it('moves between first and last chips on pressing HOME (PageUp) and END (PageDown)', async () => {
      render(
        <ChipsInputBase
          data-testid="chips-input"
          readOnly
          value={[
            { value: 'red', label: 'Красный', testid: 'chip-red' },
            { value: 'black', label: 'Черный', testid: 'chip-black' },
            { value: 'yellow', label: 'Желтый', testid: 'chip-yellow' },
          ]}
          // @ts-expect-error: TS2339 Property does not exist
          renderChip={({ value, label, option: { testid }, ...restProps }) => (
            <Chip removable={false} data-testid={testid} value={value} {...restProps}>
              {label}
            </Chip>
          )}
        />,
      );
      userEvent.tab();

      userEvent.keyboard('{End}'); // to last chip
      expect(screen.getByTestId('chip-yellow')).toHaveFocus();

      userEvent.keyboard('{Home}'); // to first chip
      expect(screen.getByTestId('chip-red')).toHaveFocus();

      userEvent.keyboard('{PageDown}'); // to last chip
      expect(screen.getByTestId('chip-yellow')).toHaveFocus();

      userEvent.keyboard('{PageUp}'); // to first chip
      expect(screen.getByTestId('chip-red')).toHaveFocus();
    });

    it('removes removable chip on ENTER', async () => {
      render(
        <ChipsInputBase
          data-testid="chips-input"
          value={[
            { value: 'red', label: 'Красный', testid: 'chip-red' },
            { value: 'black', label: 'Черный', testid: 'chip-black' },
          ]}
          // @ts-expect-error: TS2339 Property does not exist
          renderChip={({ value, label, option: { testid }, ...restProps }) => (
            <Chip data-testid={testid} value={value} {...restProps}>
              {label}
            </Chip>
          )}
        />,
      );

      const chipRed = screen.getByTestId('chip-red');
      const chipBlack = screen.getByTestId('chip-black');

      expect(chipRed).toBeInTheDocument();
      expect(chipBlack).toBeInTheDocument();

      userEvent.tab();
      userEvent.keyboard('{arrowRight}{enter}');

      expect(chipRed).not.toBeInTheDocument();
      expect(chipBlack).toBeInTheDocument();
    });
  });
});
