import { act } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { fakeTimersForScope, waitCSSTransitionEnd } from '../../testing/utils';
import { ModalCard } from '../ModalCard/ModalCard';
import type { ModalCardProps } from '../ModalCard/types';
import { ModalRoot } from './ModalRoot';
import { useModalRootContext } from './useModalRootContext';

const ModalWithUseContext = (props: Omit<ModalCardProps, 'actions'>) => {
  const { onClose } = useModalRootContext();
  return <ModalCard {...props} actions={<button onClick={onClose}></button>} />;
};

describe(useModalRootContext, () => {
  fakeTimersForScope();
  test.each(['global', 'local'])('mount and unmount (should use %s callbacks)', async (type) => {
    const globalCallbacks = {
      onOpen: vi.fn(),
      onOpened: vi.fn(),
      onClose: vi.fn(),
      onClosed: vi.fn(),
    };
    const localCallbacks = {
      onOpen: vi.fn(),
      onOpened: vi.fn(),
      onClose: vi.fn(),
      onClosed: vi.fn(),
    };

    const result = render(
      <ModalRoot activeModal="m" {...globalCallbacks}>
        {type === 'local' ? (
          <ModalWithUseContext id="m" data-testid="m" {...localCallbacks} />
        ) : (
          <ModalWithUseContext id="m" data-testid="m" />
        )}
      </ModalRoot>,
    );

    await waitCSSTransitionEnd(result.getByTestId('m'));
    await act(vi.runOnlyPendingTimers);

    if (type === 'global') {
      expect(globalCallbacks.onOpen).toHaveBeenCalledExactlyOnceWith('m');
      expect(globalCallbacks.onOpened).toHaveBeenCalledExactlyOnceWith('m');

      expect(localCallbacks.onOpen).toHaveBeenCalledTimes(0);
      expect(localCallbacks.onOpened).toHaveBeenCalledTimes(0);
    } else {
      expect(globalCallbacks.onOpen).toHaveBeenCalledTimes(0);
      expect(globalCallbacks.onOpened).toHaveBeenCalledTimes(0);

      expect(localCallbacks.onOpen).toHaveBeenCalledExactlyOnceWith();
      expect(localCallbacks.onOpened).toHaveBeenCalledExactlyOnceWith();
    }

    fireEvent.click(result.getByRole('button'));

    expect(globalCallbacks.onClose).toHaveBeenCalledExactlyOnceWith('m');

    expect(localCallbacks.onClose).toHaveBeenCalledTimes(0);
  });
});
