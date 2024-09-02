import { render, screen } from '@testing-library/react';
import { classNames } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { Placeholder } from './Placeholder';
import styles from './Placeholder.module.css';

describe('Placeholder', () => {
  baselineComponent(Placeholder);

  it('check correct render elements', () => {
    render(
      <Placeholder data-testid="container" stretched>
        <Placeholder.Icon data-testid="icon">Icon</Placeholder.Icon>
        <Placeholder.Header data-testid="header">Header</Placeholder.Header>
        <Placeholder.Actions data-testid="actions">Actions</Placeholder.Actions>
        <Placeholder.Text data-testid="text">Text</Placeholder.Text>
      </Placeholder>,
    );
    expect(screen.getByTestId('container')).toHaveClass(
      classNames(
        styles['Placeholder'],
        styles['Placeholder--stretched'],
        styles['Placeholder--withPadding'],
      ),
    );
    expect(screen.getByTestId('icon')).toHaveClass(styles['Placeholder__icon']);
    expect(screen.getByTestId('header')).toHaveClass(styles['Placeholder__header']);
    expect(screen.getByTestId('text')).toHaveClass(styles['Placeholder__text']);
    expect(screen.getByTestId('actions')).toHaveClass(styles['Placeholder__action']);

    expect(screen.getByText('Icon')).toBeInTheDocument();
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});
