import { act, useRef, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useMutationObserver } from './useMutationObserver';

describe('test useMutationObserver', () => {
  it('should call callback when add block', async () => {
    const callback = jest.fn();
    const Fixture = (props: { mockedBlocksIds: string[] }) => {
      const ref = useRef(null);
      useMutationObserver(ref, callback);
      return (
        <div ref={ref} style={{ position: 'static' }}>
          {props.mockedBlocksIds.map((id) => (
            <div key={id} data-testid={id} style={{ height: 50 }}></div>
          ))}
        </div>
      );
    };

    const result = render(<Fixture mockedBlocksIds={['block-1']} />);

    await act(async () => {
      result.rerender(<Fixture mockedBlocksIds={['block-1', 'block-2']} />);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('block-2')).toBeInTheDocument();
  });

  it('should call callback with custom options', async () => {
    const callback = jest.fn();

    const Fixture = () => {
      const [tabIndex, setTabIndex] = useState(-1);
      const ref = useRef(null);
      useMutationObserver(ref, callback, {
        subtree: true,
        attributes: true,
        attributeFilter: ['tabindex'],
      });

      return (
        <div ref={ref}>
          <div data-testid="button-1" tabIndex={0}>
            Button 1
          </div>
          <div data-testid="button-2" tabIndex={tabIndex}>
            Button 2
          </div>
          <div data-testid="button-3" tabIndex={0} onClick={() => setTabIndex(0)}>
            Button 3
          </div>
        </div>
      );
    };

    render(<Fixture />);

    expect(callback).toHaveBeenCalledTimes(0);

    await act(async () => {
      fireEvent.click(screen.getByTestId('button-3'));
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
