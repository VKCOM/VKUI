import { act, useRef } from 'react';
import { render, screen } from '@testing-library/react';
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
});
