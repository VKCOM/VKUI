import { fireEvent, render, screen } from '@testing-library/react';
import { Platform } from '../../lib/platform';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { SimpleCell } from './SimpleCell';
import styles from './SimpleCell.module.css';

describe('SimpleCell', () => {
  baselineComponent((props) => <SimpleCell {...props}>SimpleCell</SimpleCell>);

  it('[typography] indicator is a span regardless of sizeY', () => {
    const { rerender } = render(
      <AdaptivityProvider sizeY="regular">
        <SimpleCell indicator="Русский">Язык</SimpleCell>
      </AdaptivityProvider>,
    );
    expect(screen.getByText('Русский').tagName.toLowerCase()).toMatch('span');

    rerender(
      <AdaptivityProvider sizeY="compact">
        <SimpleCell indicator="English">Language</SimpleCell>
      </AdaptivityProvider>,
    );
    expect(screen.getByText('English').tagName.toLowerCase()).toMatch('span');
  });

  it('check chevron showed', () => {
    const { container } = render(
      <ConfigProvider platform={Platform.IOS}>
        <SimpleCell expandable="auto">Язык</SimpleCell>
      </ConfigProvider>,
    );
    expect(
      container.getElementsByClassName(styles['SimpleCell__chevronIcon'])[0],
    ).toBeInTheDocument();
  });

  it('handles disabled', () => {
    const clickStub = jest.fn();
    render(
      <SimpleCell data-testid="test" onClick={clickStub} disabled>
        Язык
      </SimpleCell>,
    );

    fireEvent.click(screen.getByText('Язык'));
    expect(clickStub).not.toHaveBeenCalled();

    expect(screen.getByTestId('test')).toHaveClass(styles['SimpleCell--disabled']);
  });
});
