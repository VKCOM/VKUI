import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { WriteBarIcon } from './WriteBarIcon';

const warnStub = jest.fn();
jest.mock('../../lib/warnOnce', () => {
  const originalModule = jest.requireActual('../../lib/warnOnce');

  return {
    __esModule: true,
    ...originalModule,
    warnOnce: () => {
      return () => {
        warnStub();
      };
    },
  };
});

describe('WriteBarIcon', () => {
  beforeEach(() => warnStub.mockReset());
  baselineComponent((props) => <WriteBarIcon aria-label="WriteBarIcon" {...props} />);

  it('a11y: adds default aria-label for assigned mode', () => {
    render(<WriteBarIcon data-testid="button" mode="send" />);

    expect(screen.getByTestId('button')).toHaveAttribute('aria-label', 'Отправить');
  });

  it('a11y: warns when there is no label text', () => {
    const nodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    render(<WriteBarIcon data-testid="button" mode={undefined} />);

    expect(warnStub).toHaveBeenCalledTimes(1);

    process.env.NODE_ENV = nodeEnv;
  });

  it('a11y: does not warn when there is label text', () => {
    const nodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    const { rerender } = render(<WriteBarIcon data-testid="button" mode="send" />);
    expect(warnStub).not.toHaveBeenCalled();

    rerender(<WriteBarIcon aria-label="send" />);
    expect(warnStub).not.toHaveBeenCalled();

    rerender(
      <React.Fragment>
        <WriteBarIcon aria-labelledby="send" />
        <div id="send">Send</div>
      </React.Fragment>,
    );
    expect(warnStub).not.toHaveBeenCalled();

    process.env.NODE_ENV = nodeEnv;
  });

  it('shows counter when count={0} is provided', () => {
    const count = 0;

    render(<WriteBarIcon mode="attach" count={0} />);
    const counter = screen.getByText(count.toString());

    expect(counter).toBeInTheDocument();
  });
});
