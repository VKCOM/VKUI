import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../../testing/utils';
import { Image } from '../../Image/Image';
import { ImageBasePositionedComponent } from './ImageBasePositionedComponent';
import styles from './ImageBasePositionedComponent.module.css';

describe(ImageBasePositionedComponent, () => {
  baselineComponent(ImageBasePositionedComponent);

  it('check component position', () => {
    render(
      <ImageBasePositionedComponent
        data-testid="component"
        position={{
          insetBlockStart: '10px',
          insetBlockEnd: '10px',
          insetInlineEnd: '20px',
          insetInlineStart: '20px',
        }}
      />,
    );

    expect(screen.getByTestId('component')).not.toHaveClass(styles['PositionedComponent--hidden']);

    expect(screen.getByTestId('component')).toHaveStyle('inset-block-start: 10px;');
    expect(screen.getByTestId('component')).toHaveStyle('inset-block-end: 10px;');
    expect(screen.getByTestId('component')).toHaveStyle('inset-inline-start: 20px;');
    expect(screen.getByTestId('component')).toHaveStyle('inset-inline-end: 20px;');
  });

  it('check visibility on image hover', async () => {
    render(
      <>
        <Image size={96} src="test" alt="Приложение шторм онлайн" data-testid="image">
          <ImageBasePositionedComponent
            data-testid="component"
            visibility="on-image-hover"
            position={{
              insetBlockStart: '10px',
              insetBlockEnd: '10px',
              insetInlineEnd: '20px',
              insetInlineStart: '20px',
            }}
          />
        </Image>
      </>,
    );

    expect(screen.getByTestId('component')).toHaveClass(styles['PositionedComponent--hidden']);

    fireEvent(
      screen.getByTestId('image'),
      new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByTestId('component')).not.toHaveClass(styles['PositionedComponent--hidden']);

    fireEvent(
      screen.getByTestId('image'),
      new MouseEvent('mouseout', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByTestId('component')).toHaveClass(styles['PositionedComponent--hidden']);
  });
});
