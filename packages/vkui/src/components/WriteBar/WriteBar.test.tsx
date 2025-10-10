import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent, fakeTimersForScope, userEvent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { WriteBar, type WriteBarProps } from './WriteBar';

const getInput = () => screen.getByRole('textbox');

describe('WriteBar', () => {
  baselineComponent((props: WriteBarProps) => (
    <>
      <VisuallyHidden id="writebar" Component="label">
        WriteBar
      </VisuallyHidden>
      <WriteBar aria-labelledby="writebar" {...props} />
    </>
  ));

  it('should work with slotsProps', () => {
    const rootRef1 = createRef<HTMLDivElement>();
    const rootRef2 = createRef<HTMLDivElement>();
    const textAreaRef1 = createRef<HTMLTextAreaElement>();
    const textAreaRef2 = createRef<HTMLTextAreaElement>();
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onRootClick = vi.fn();

    render(
      <WriteBar
        data-testid="textArea"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={textAreaRef1}
        value="value"
        onChange={noop}
        onClick={onClick1}
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
        }}
        slotsProps={{
          root: {
            'data-testid': 'root',
            'className': 'rootClassName-2',
            'style': {
              color: 'rgb(255, 0, 0)',
            },
            'getRootRef': rootRef2,
            'onClick': onRootClick,
          },
          textArea: {
            'className': 'textAreaClassName',
            'getRootRef': textAreaRef2,
            'data-testid': 'textArea-2',
            'value': 'value-2',
            'onClick': onClick2,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('textArea')).not.toBeInTheDocument();
    const textArea = screen.getByTestId('textArea-2');
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveClass('textAreaClassName');
    expect(textArea).toHaveValue('value-2');

    const root = screen.getByTestId('root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('rootClassName');
    expect(root).toHaveClass('rootClassName-2');
    expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(root).toHaveStyle('color: rgb(255, 0, 0)');

    expect(rootRef1.current).toBe(rootRef2.current);
    expect(rootRef1.current).toBe(root);

    expect(textAreaRef1.current).toBe(textAreaRef2.current);
    expect(textAreaRef1.current).toBe(textArea);

    fireEvent.click(textArea);
    expect(onClick1).toHaveBeenCalledTimes(1);
    expect(onClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick).toHaveBeenCalledTimes(2);
  });

  describe('works uncontrolled', () => {
    fakeTimersForScope();
    it('form reset form', async () => {
      render(
        <form data-testid="form">
          <WriteBar />
        </form>,
      );
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
      screen.getByTestId<HTMLFormElement>('form').reset();
      expect(getInput()).toHaveValue('');
    });
    it('form reset with defaultValue', async () => {
      render(
        <form data-testid="form">
          <WriteBar defaultValue="def" />
        </form>,
      );
      expect(getInput()).toHaveValue('def');
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('defuser');
      screen.getByTestId<HTMLFormElement>('form').reset();
      expect(getInput()).toHaveValue('def');
    });
  });
});
