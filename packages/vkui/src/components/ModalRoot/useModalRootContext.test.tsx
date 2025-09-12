import { act } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { fakeTimers, waitCSSTransitionEnd } from '../../testing/utils';
import { ModalCard } from '../ModalCard/ModalCard';
import type { ModalCardProps } from '../ModalCard/types';
import { ModalRoot } from './ModalRoot';
import { useModalRootContext } from './useModalRootContext';

fakeTimers();

const ModalWithUseContext = (props: Omit<ModalCardProps, 'actions'>) => {
  const { onClose } = useModalRootContext();
  return <ModalCard {...props} actions={<button onClick={onClose}></button>} />;
};

describe(useModalRootContext, () => {
  test.each(['global', 'local'])('mount and unmount (should use %s callbacks)', async (type) => {
    const globalCallbacks = { onOpen: vi.fn(), onOpened: vi.fn(), onClose: vi.fn(), onClosed: vi.fn() }; // prettier-ignore
    const localCallbacks = { onOpen: vi.fn(), onOpened: vi.fn(), onClose: vi.fn(), onClosed: vi.fn() }; // prettier-ignore

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
    act(vi.runOnlyPendingTimers);

    if (type === 'global') {
      expect(globalCallbacks.onOpen).toHaveBeenCalledTimes(1);
      expect(globalCallbacks.onOpen).toHaveBeenCalledWith('m');
      expect(globalCallbacks.onOpened).toHaveBeenCalledTimes(1);
      expect(globalCallbacks.onOpened).toHaveBeenCalledWith('m');

      expect(localCallbacks.onOpen).toHaveBeenCalledTimes(0);
      expect(localCallbacks.onOpened).toHaveBeenCalledTimes(0);
    } else {
      expect(globalCallbacks.onOpen).toHaveBeenCalledTimes(0);
      expect(globalCallbacks.onOpened).toHaveBeenCalledTimes(0);

      expect(localCallbacks.onOpen).toHaveBeenCalledTimes(1);
      expect(localCallbacks.onOpen).toHaveBeenCalledWith();
      expect(localCallbacks.onOpened).toHaveBeenCalledTimes(1);
      expect(localCallbacks.onOpened).toHaveBeenCalledWith();
    }

    fireEvent.click(result.getByRole('button'));

    expect(globalCallbacks.onClose).toHaveBeenCalledTimes(1);
    expect(globalCallbacks.onClose).toHaveBeenCalledWith('m');

    expect(localCallbacks.onClose).toHaveBeenCalledTimes(0);
  });
});
