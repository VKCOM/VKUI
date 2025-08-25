import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../../components/Button/Button';
import { ModalCard } from '../../components/ModalCard/ModalCard';
import { ModalPage } from '../../components/ModalPage/ModalPage';
import { waitCSSTransitionEndConditionally } from '../../components/ModalRoot/ModalRoot.test';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import {
  type CustomModalProps,
  type ModalRootApi,
  type OpenModalCardProps,
  type OpenModalPageProps,
} from './types';
import { useModalRoot } from './useModalRoot';

const Fixture = ({ setApi }: { setApi: (api: ModalRootApi) => void }) => {
  const [api, contextHolder] = useModalRoot();
  useIsomorphicLayoutEffect(() => {
    setApi(api);
  }, []);
  return <>{contextHolder}</>;
};

describe('useModalRoot', () => {
  let api: ModalRootApi | null = null;
  const getApi = () => {
    expect(api).toBeTruthy();
    return api!;
  };
  const setApi = (newApi: ModalRootApi) => {
    api = newApi;
  };
  beforeEach(() => {
    api = null;
  });
  it('check open ModalPage and ModalCard with history', async () => {
    render(<Fixture setApi={setApi} />);
    await React.act(() =>
      getApi().openModalCard({
        'title': 'Title',
        'id': 'modal-card',
        'data-testid': 'modal-card',
      }),
    );
    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-card'), 'ModalCard');
    expect(screen.getByTestId('modal-card')).toBeInTheDocument();

    await React.act(() =>
      getApi().openModalPage({
        'id': 'modal-page',
        'data-testid': 'modal-page',
        'children': 'Content',
      }),
    );

    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-card'), 'ModalCard');
    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-page'), 'ModalPage');
    expect(screen.getByTestId('modal-page')).toBeInTheDocument();
    expect(screen.queryByTestId('modal-card')).not.toBeInTheDocument();

    React.act(() => getApi().close('modal-page'));

    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-page'), 'ModalPage');
    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-card'), 'ModalCard');
    expect(screen.getByTestId('modal-card')).toBeInTheDocument();
    expect(screen.queryByTestId('modal-page')).not.toBeInTheDocument();

    React.act(() => getApi().close('modal-card'));
    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-card'), 'ModalCard');
    expect(screen.queryByTestId('modal-card')).not.toBeInTheDocument();
    expect(screen.queryByTestId('modal-page')).not.toBeInTheDocument();
  });

  it('check open ModalPage and ModalCard without history', async () => {
    render(<Fixture setApi={setApi} />);
    await React.act(() =>
      getApi().openModalCard({
        'title': 'Title',
        'id': 'modal-card',
        'data-testid': 'modal-card',
      }),
    );
    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-card'), 'ModalCard');
    expect(screen.getByTestId('modal-card')).toBeInTheDocument();

    React.act(() => {
      getApi().close('modal-card');
      getApi().openModalPage({
        'id': 'modal-page',
        'data-testid': 'modal-page',
        'children': 'Content',
      });
    });

    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-card'), 'ModalCard');
    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-page'), 'ModalPage');
    expect(screen.getByTestId('modal-page')).toBeInTheDocument();
    expect(screen.queryByTestId('modal-card')).not.toBeInTheDocument();

    React.act(() => getApi().close('modal-page'));

    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-page'), 'ModalPage');
    expect(screen.queryByTestId('modal-card')).not.toBeInTheDocument();
    expect(screen.queryByTestId('modal-page')).not.toBeInTheDocument();
  });

  it('check closeAll modals', async () => {
    render(<Fixture setApi={setApi} />);
    await React.act(() =>
      getApi().openModalCard({
        'title': 'Title',
        'id': 'modal-card',
        'data-testid': 'modal-card',
      }),
    );
    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-card'), 'ModalCard');
    expect(screen.getByTestId('modal-card')).toBeInTheDocument();

    await React.act(() =>
      getApi().openModalPage({
        'id': 'modal-page',
        'data-testid': 'modal-page',
        'children': 'Content',
      }),
    );

    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-card'), 'ModalCard');
    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-page'), 'ModalPage');
    expect(screen.getByTestId('modal-page')).toBeInTheDocument();
    expect(screen.queryByTestId('modal-card')).not.toBeInTheDocument();

    React.act(() => getApi().closeAll());

    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-page'), 'ModalPage');
    expect(screen.queryByTestId('modal-card')).not.toBeInTheDocument();
    expect(screen.queryByTestId('modal-page')).not.toBeInTheDocument();
  });

  it('check open update props', async () => {
    render(<Fixture setApi={setApi} />);
    await React.act(() =>
      getApi().openModalCard({
        'title': 'Title',
        'id': 'modal-card',
        'data-testid': 'modal-card',
      }),
    );
    const modalCard = screen.getByTestId('modal-card');
    await waitCSSTransitionEndConditionally(modalCard, 'ModalCard');
    expect(modalCard).toBeInTheDocument();

    expect(screen.getByText('Title')).toBeInTheDocument();

    React.act(() =>
      getApi().update('modal-card', 'card', {
        title: 'Updated title',
      }),
    );
    expect(screen.getByText('Updated title')).toBeInTheDocument();
  });

  it('check working with return data', async () => {
    render(<Fixture setApi={setApi} />);
    let cardApi: ReturnType<ModalRootApi['openModalCard']>;
    React.act(() => {
      cardApi = getApi().openModalCard({
        'title': 'Title',
        'data-testid': 'modal-card',
      });
    });
    expect(cardApi!.id).toBeTruthy();
    expect(screen.getByText('Title')).toBeInTheDocument();

    React.act(() =>
      cardApi.update({
        title: 'Updated title',
      }),
    );
    expect(screen.getByText('Updated title')).toBeInTheDocument();

    let closePromiseResolved = false;
    void cardApi!.onClose().then(() => {
      closePromiseResolved = true;
    });

    React.act(() => cardApi.close());

    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-card'), 'ModalCard');
    expect(closePromiseResolved).toBeTruthy();
  });

  it('should correct render custom modal card', async () => {
    const additionalAction = jest.fn();

    const ModalCardComponent = ({
      additionalAction,
      update,
      close,
      modalProps,
    }: CustomModalProps<OpenModalCardProps, { additionalAction: VoidFunction }>) => {
      return (
        <ModalCard title="Ininital Title" data-testid="modal-card" {...modalProps}>
          <Button data-testid="update-button" onClick={() => update({ title: 'Updated Title' })}>
            Update
          </Button>
          <Button data-testid="close-button" onClick={close}>
            Close
          </Button>
          <Button data-testid="additional-button" onClick={additionalAction}>
            Additional action
          </Button>
        </ModalCard>
      );
    };

    render(<Fixture setApi={setApi} />);
    React.act(() => {
      getApi().openCustomModal('card', {
        id: 'modal-1',
        component: ModalCardComponent,
        additionalProps: {
          additionalAction,
        },
      });
    });

    fireEvent.click(screen.getByTestId('additional-button'));
    expect(additionalAction).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByTestId('update-button'));
    expect(screen.getByText('Updated Title')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('close-button'));
    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-card'), 'ModalCard');
    expect(screen.queryByTestId('modal-card')).not.toBeInTheDocument();
  });

  it('should correct render custom modal page', async () => {
    const additionalAction = jest.fn();

    const ModalPageComponent = ({
      additionalAction,
      update,
      close,
      modalProps,
    }: CustomModalProps<OpenModalPageProps, { additionalAction: VoidFunction }>) => {
      return (
        <ModalPage data-testid="modal-page" header="Initial header" {...modalProps}>
          <Button data-testid="update-button" onClick={() => update({ header: 'Updated header' })}>
            Update
          </Button>
          <Button data-testid="close-button" onClick={close}>
            Close
          </Button>
          <Button data-testid="additional-button" onClick={additionalAction}>
            Additional action
          </Button>
        </ModalPage>
      );
    };

    render(<Fixture setApi={setApi} />);
    React.act(() => {
      getApi().openCustomModal('page', {
        id: 'modal-1',
        component: ModalPageComponent,
        additionalProps: {
          additionalAction,
        },
      });
    });

    fireEvent.click(screen.getByTestId('additional-button'));
    expect(additionalAction).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByTestId('update-button'));
    expect(screen.getByText('Updated header')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('close-button'));
    await waitCSSTransitionEndConditionally(screen.getByTestId('modal-page'), 'ModalPage');
    expect(screen.queryByTestId('modal-page')).not.toBeInTheDocument();
  });
});
