import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Button } from '../Button/Button';
import { Tappable } from '../Tappable/Tappable';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  baselineComponent(Pagination, undefined, 'with only icon');

  baselineComponent(
    (props) => <Pagination {...props} navigationButtonsStyle="caption" />,
    undefined,
    'with only caption',
  );

  baselineComponent(
    (props) => <Pagination {...props} navigationButtonsStyle="both" />,
    undefined,
    'with both',
  );

  baselineComponent(
    (props) => <Pagination {...props} totalPages={123} currentPage={4} />,
    undefined,
    'with ellipsis',
  );

  baselineComponent(
    (props) => (
      <Pagination
        {...props}
        totalPages={123}
        currentPage={4}
        renderPageButton={(props) => <Tappable {...props} href={`#${props['data-page']}`} />}
        renderNavigationButton={(props) => <Button {...props} href={`#${props['data-page']}`} />}
      />
    ),
    undefined,
    'with href',
  );

  it('check navigation by click', () => {
    const onChange = vi.fn();
    const Fixture = ({ page }: { page: number }) => {
      return (
        <Pagination
          currentPage={page}
          navigationButtonsStyle="caption"
          siblingCount={0}
          boundaryCount={1}
          totalPages={100}
          disabled={false}
          onChange={onChange}
        />
      );
    };

    const { rerender } = render(<Fixture page={0} />);
    fireEvent.click(screen.getByText('3'));
    expect(onChange.mock.calls[0][0]).toBe(3);

    rerender(<Fixture page={3} />);
    fireEvent.click(screen.getByText('Вперёд'));
    expect(onChange.mock.calls[1][0]).toBe(4);

    rerender(<Fixture page={4} />);
    fireEvent.click(screen.getByText('Назад'));
    expect(onChange.mock.calls[2][0]).toBe(3);
  });

  it('checks data-testid setup', () => {
    const onChange = vi.fn();
    const Fixture = ({ page }: { page: number }) => {
      return (
        <Pagination
          pageButtonTestId={(day, active) => (active ? `active-day-${day}` : `day-${day}`)}
          prevButtonTestId="prevButton"
          nextButtonTestId="nextButton"
          currentPage={page}
          navigationButtonsStyle="caption"
          siblingCount={0}
          boundaryCount={1}
          totalPages={100}
          disabled={false}
          onChange={onChange}
        />
      );
    };

    const component = render(<Fixture page={0} />);
    fireEvent.click(screen.getByTestId('day-3'));
    expect(onChange.mock.calls[0][0]).toBe(3);

    component.rerender(<Fixture page={3} />);
    expect(screen.queryByTestId('active-day-3')).toBeTruthy();
    fireEvent.click(screen.getByTestId('nextButton'));
    expect(onChange.mock.calls[1][0]).toBe(4);

    component.rerender(<Fixture page={4} />);
    fireEvent.click(screen.getByTestId('prevButton'));
    expect(onChange.mock.calls[2][0]).toBe(3);
  });
});
