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
        <Placeholder.Title data-testid="header">Header</Placeholder.Title>
        <Placeholder.Actions data-testid="actions">Actions</Placeholder.Actions>
        <Placeholder.Description data-testid="text">Text</Placeholder.Description>
      </Placeholder>,
    );
    expect(screen.getByTestId('container')).toHaveClass(
      classNames(styles.host, styles.stretched, styles.withPadding),
    );
    expect(screen.getByTestId('icon')).toHaveClass(styles.icon);
    expect(screen.getByTestId('header')).toHaveClass(styles.header);
    expect(screen.getByTestId('text')).toHaveClass(styles.text);
    expect(screen.getByTestId('actions')).toHaveClass(styles.action);

    expect(screen.getByText('Icon')).toBeInTheDocument();
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});
