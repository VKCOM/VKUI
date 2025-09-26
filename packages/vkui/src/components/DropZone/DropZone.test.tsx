import { fireEvent, render, screen } from '@testing-library/react';
import { stopPropagation } from '../../lib/utils';
import { baselineComponent } from '../../testing/utils';
import { DropZone } from './DropZone';
import styles from './DropZone.module.css';

describe('DropZone', () => {
  baselineComponent(DropZone);

  it('check active when dragover and dragleave', async () => {
    render(
      <DropZone data-testid="drop-zone">
        <div data-testid="content"></div>
      </DropZone>,
    );
    expect(screen.getByTestId('drop-zone')).not.toHaveClass(styles.active);
    fireEvent.dragOver(screen.getByTestId('content'));
    expect(screen.getByTestId('drop-zone')).toHaveClass(styles.active);

    fireEvent.dragLeave(screen.getByTestId('content'));
    expect(screen.getByTestId('drop-zone')).not.toHaveClass(styles.active);
  });

  it('no active state when content stopPropagation dragOver', async () => {
    render(
      <DropZone data-testid="drop-zone" onDragOver={stopPropagation}>
        <div data-testid="content"></div>
      </DropZone>,
    );
    fireEvent.dragOver(screen.getByTestId('content'));
    expect(screen.getByTestId('drop-zone')).not.toHaveClass(styles.active);
  });

  it('no active state when content without stopPropagation dragOver', async () => {
    render(
      <DropZone data-testid="drop-zone">
        {({ active }) => <div data-testid="content" data-active={active} />}
      </DropZone>,
    );
    fireEvent.dragOver(screen.getByTestId('content'));
    expect(screen.getByTestId('content').getAttribute('data-active')).toBe('true');
  });
});
