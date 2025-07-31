import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { Button } from '../Button/Button';
import { ModalRootContext } from './ModalRootContext';
import { withModalRootContext } from './withModalRootContext';

const Modal = ({ updateModalHeight }: { updateModalHeight: VoidFunction }) => {
  return (
    <div>
      <Button onClick={updateModalHeight} data-testid="update-modal-height"></Button>
    </div>
  );
};

describe(withModalRootContext, () => {
  it('check call update modal height callback', () => {
    const ModalWithContext = withModalRootContext(Modal);
    const updateModalHeight = jest.fn();
    render(
      <ModalRootContext.Provider
        value={{
          isInsideModal: false,
          updateModalHeight: updateModalHeight,
          registerModal: noop,
          setDisableModalOverlay: noop,
        }}
      >
        <ModalWithContext />
      </ModalRootContext.Provider>,
    );
    fireEvent.click(screen.getByTestId('update-modal-height'));
    expect(updateModalHeight).toHaveBeenCalledTimes(1);
  });
});
