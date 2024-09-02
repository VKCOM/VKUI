import * as React from 'react';
import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, mountTest, userEvent, waitCSSTransitionEnd } from '../../testing/utils';
import { Button } from '../Button/Button';
import { ModalCard } from '../ModalCard/ModalCard';
import { ModalPage } from '../ModalPage/ModalPage';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';
import { withModalRootContext } from './withModalRootContext';
import styles from './ModalRoot.module.css';
import modalPageStyles from '../ModalPage/ModalPage.module.css';

const clickFade = async () =>
  await userEvent.click(document.querySelector(`.${styles.ModalRoot__mask}`)!);

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

const mockDate = () => {
  const startGestureDate = new Date(2024, 7, 5);
  jest.useFakeTimers();
  jest.setSystemTime(startGestureDate);
  const endGestureDate = new Date(startGestureDate);

  return {
    next: (ms = 500) => {
      endGestureDate.setMilliseconds(endGestureDate.getMilliseconds() + ms);
      jest.setSystemTime(endGestureDate);
    },
  };
};

describe.each([
  ['ModalRootTouch', ModalRootTouch],
  ['ModalRootDesktop', ModalRootDesktop],
] as const)('%s', (name, ModalRoot: any) => {
  baselineComponent<any>(ModalRoot, { forward: false, a11y: false, getRootRef: false });
  describe('With ModalPage', () =>
    mountTest(() => (
      <ModalRoot activeModal="m">
        <ModalPage id="m" />
      </ModalRoot>
    )));
  describe('With ModalCard', () =>
    mountTest(() => (
      <ModalRoot activeModal="m">
        <ModalCard id="m" />
      </ModalRoot>
    )));

  describe('shows active modal', () => {
    const modals = [
      <ModalPage id="m" data-testid="m" key="m" />,
      <ModalPage id="other" data-testid="other" key="o" />,
    ];
    it('on mount', () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();
    });
    it('shows via prop update', () => {
      const h = render(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      act(jest.runAllTimers);
      h.rerender(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      act(jest.runAllTimers);
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();
    });
    it('hides via prop update', async () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(h.getByTestId('m')));
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();

      h.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(h.getByTestId('m')));
      expect(h.queryByTestId('m')).toBeNull();
      expect(h.queryByTestId('other')).toBeNull();
    });
    it('changes via prop update', async () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(h.getByTestId('m')));
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();

      h.rerender(<ModalRoot activeModal="other">{modals}</ModalRoot>);
      act(jest.runAllTimers);
      if (
        name === 'ModalRootTouch' /* note: 'ModalRootDesktop' смена `activeModal` без анимаций */
      ) {
        await waitCSSTransitionEnd(getFirstHTMLElementChild(h.getByTestId('m')));
      }
      await waitCSSTransitionEnd(getFirstHTMLElementChild(h.getByTestId('other')));
      expect(h.queryByTestId('m')).toBeNull();
      expect(h.queryByTestId('other')).not.toBeNull();
    });
  });

  describe('handle onClose', () => {
    describe('on fade click', () => {
      it('calls modal onClose', async () => {
        const onClose = jest.fn();
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" onClose={onClose} />
          </ModalRoot>,
        );
        // wait for animations
        act(jest.runAllTimers);
        await clickFade();
        expect(onClose).toHaveBeenCalledTimes(1);
        expect(onCloseRoot).not.toHaveBeenCalled();
      });
      it('calls root onClose if modal has no onClose', async () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" />
          </ModalRoot>,
        );
        // wait for animations
        act(jest.runAllTimers);
        await clickFade();
        expect(onCloseRoot).toHaveBeenCalledTimes(1);
      });
      it('does not call root onClose when preventClose is provided', async () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" preventClose />
          </ModalRoot>,
        );
        // wait for animations
        act(jest.runAllTimers);
        await clickFade();
        expect(onCloseRoot).not.toHaveBeenCalled();
        await userEvent.keyboard('{Escape}');
        expect(onCloseRoot).not.toHaveBeenCalled();
      });
    });
    if (name === 'ModalRootDesktop') {
      it('on esc click', async () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" />
          </ModalRoot>,
        );
        // wait for animations
        act(jest.runAllTimers);
        await userEvent.keyboard('{Escape}');
        expect(onCloseRoot).toHaveBeenCalledTimes(1);
      });
    }
  });

  it('check modal mask with fast modal change', async () => {
    const onClose = jest.fn();
    const modals = [
      <ModalPage id="m" key="m" />,
      <ModalPage id="other" key="o" onClose={onClose} />,
    ];

    const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
    act(jest.runAllTimers);
    h.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
    h.rerender(<ModalRoot activeModal="other">{modals}</ModalRoot>);
    act(jest.runAllTimers);

    // check if mask is present
    expect(document.querySelector<HTMLElement>(`.${styles.ModalRoot__mask}`)?.style.opacity).toBe(
      '1',
    );

    // onClose is working
    await clickFade();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('disables native pull-to-refresh when modal is open', async () => {
    const modals = [<ModalPage id="m" data-testid="m" key="m" />, <ModalPage id="other" key="o" />];

    const component = render(<ModalRoot activeModal={null}>{modals}</ModalRoot>, {
      baseElement: document.documentElement,
    });
    act(jest.runAllTimers);

    expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeFalsy();

    component.rerender(<ModalRoot activeModal="m">{modals}</ModalRoot>);
    act(jest.runAllTimers);
    await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('m')));

    if (name === 'ModalRootTouch') {
      expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeTruthy();
    } else {
      expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeFalsy();
    }

    component.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
    act(jest.runAllTimers);
    await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('m')));

    expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeFalsy();
  });

  it('modalOverlayTestId for ModalRoot', () => {
    render(
      <ModalRoot activeModal="page" modalOverlayTestId="modal-mask">
        <ModalPage id="page" />
      </ModalRoot>,
    );
    expect(screen.queryByTestId('modal-mask')).toBeTruthy();
  });

  describe('focus', () => {
    let modalPageRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    let modalCardRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    let modalPageWithInputRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    let inputInnerModalPageRef: React.RefObject<HTMLInputElement> =
      React.createRef<HTMLInputElement>();
    let modals: React.ReactElement[] = [];

    beforeEach(() => {
      modalPageRef = React.createRef<HTMLDivElement>();
      modalCardRef = React.createRef<HTMLDivElement>();
      modalPageWithInputRef = React.createRef<HTMLDivElement>();
      inputInnerModalPageRef = React.createRef<HTMLInputElement>();
      modals = [
        <ModalPage id="modal-page" data-testid="modal-page" key="1" getRootRef={modalPageRef} />,
        <ModalCard id="modal-card" data-testid="modal-card" key="2" getRootRef={modalCardRef} />,
        <ModalPage
          id="modal-page-with-input"
          data-testid="modal-page-with-input"
          key="3"
          getRootRef={modalPageWithInputRef}
        >
          <input ref={inputInnerModalPageRef} autoFocus />
        </ModalPage>,
      ];
    });

    it('should focus on modal container if controllable element does not exist or is not focused', async () => {
      const component = render(<ModalRoot activeModal="modal-page">{modals}</ModalRoot>, {
        baseElement: document.documentElement,
      });
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('modal-page')));

      expect(modalPageRef.current).toHaveFocus();

      component.rerender(<ModalRoot activeModal="modal-card">{modals}</ModalRoot>);
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('modal-card')));

      expect(modalCardRef.current).toHaveFocus();
    });

    it('should focus on controllable element instead modal if it is focused', () => {
      render(<ModalRoot activeModal="modal-page-with-input">{modals}</ModalRoot>, {
        baseElement: document.documentElement,
      });
      act(jest.runAllTimers);

      expect(modalPageWithInputRef.current).not.toHaveFocus();
      expect(inputInnerModalPageRef.current).toHaveFocus();
    });

    it('should focus on controllable element only (if it is focused)', () => {
      const component = render(
        <ModalRoot activeModal="modal-page" noFocusToDialog>
          {modals}
        </ModalRoot>,
        {
          baseElement: document.documentElement,
        },
      );
      act(jest.runAllTimers);

      expect(modalPageRef.current).not.toHaveFocus();

      component.rerender(
        <ModalRoot activeModal="modal-page-with-input" noFocusToDialog>
          {modals}
        </ModalRoot>,
      );
      act(jest.runAllTimers);

      expect(modalPageWithInputRef.current).not.toHaveFocus();
      expect(inputInnerModalPageRef.current).toHaveFocus();
    });
  });
});

function getFirstHTMLElementChild(el: HTMLElement | null) {
  return el && el.firstElementChild instanceof HTMLElement ? el.firstElementChild : null;
}

describe(ModalRootTouch, () => {
  describe('check correct update height', () => {
    const updateHeightSetup = async ({
      content,
      defaultModalContentClientHeight,
      defaultContentInScrollHeight,
    }: {
      content: React.ReactElement;
      defaultModalContentClientHeight: number;
      defaultContentInScrollHeight: number;
    }) => {
      let modalContentClientHeight = defaultModalContentClientHeight;
      let contentInScrollHeight = defaultContentInScrollHeight;
      let innerElementTransform = '';

      const Fixture = () => {
        return (
          <ModalRootTouch activeModal="modal-page">
            <ModalPage
              id="modal-page"
              data-testid="modal-page"
              key="1"
              getRootRef={(element) => {
                if (!element) {
                  return;
                }
                jest
                  .spyOn((element.firstElementChild! as HTMLElement).style, 'transform', 'set')
                  .mockImplementation((newTransform) => (innerElementTransform = newTransform));
                jest
                  .spyOn(element, 'offsetHeight', 'get')
                  .mockImplementation(() => modalContentClientHeight);
              }}
              getModalContentRef={(element) => {
                if (!element) {
                  return;
                }
                jest
                  .spyOn(element, 'clientHeight', 'get')
                  .mockImplementation(() => modalContentClientHeight);
                jest
                  .spyOn(element.firstElementChild!, 'scrollHeight', 'get')
                  .mockImplementation(() => contentInScrollHeight);
              }}
            >
              {content}
            </ModalPage>
          </ModalRootTouch>
        );
      };

      const component = render(<Fixture />, {
        baseElement: document.documentElement,
      });
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('modal-page')));

      return {
        component,
        set modalContentClientHeight(height: number) {
          modalContentClientHeight = height;
        },
        set contentInScrollHeight(height: number) {
          contentInScrollHeight = height;
        },
        get innerElementTransform() {
          return innerElementTransform;
        },
      };
    };

    it('should update modal height without expandable', async () => {
      const ModalPageContent = withModalRootContext(({ updateModalHeight }) => {
        return (
          <div>
            <Button onClick={updateModalHeight} data-testid="update-height">
              Обновить
            </Button>
          </div>
        );
      });

      const mockedData = await updateHeightSetup({
        content: <ModalPageContent />,
        defaultContentInScrollHeight: 700,
        defaultModalContentClientHeight: 800,
      });

      expect(mockedData.innerElementTransform).toBe('translate3d(0, 12.5%, 0)');

      mockedData.modalContentClientHeight = 1000;
      mockedData.contentInScrollHeight = 700;

      fireEvent.click(mockedData.component.getByTestId('update-height'));
      act(jest.runAllTimers);

      expect(mockedData.innerElementTransform).toBe('translate3d(0, 30%, 0)');
    });

    it('should update modal height with expandable', async () => {
      const ModalPageContent = withModalRootContext(({ updateModalHeight }) => {
        return (
          <div>
            <Button onClick={updateModalHeight} data-testid="update-height">
              Обновить
            </Button>
          </div>
        );
      });

      const mockedData = await updateHeightSetup({
        content: <ModalPageContent />,
        defaultModalContentClientHeight: 600,
        defaultContentInScrollHeight: 800,
      });

      expect(mockedData.innerElementTransform).toBe('translate3d(0, 25%, 0)');

      mockedData.modalContentClientHeight = 700;
      mockedData.contentInScrollHeight = 1000;

      fireEvent.click(mockedData.component.getByTestId('update-height'));
      act(jest.runAllTimers);

      expect(mockedData.innerElementTransform).toBe('translate3d(0, 25%, 0)');
    });
  });

  describe('touch move events check to modal page', () => {
    const touchMoveSetup = async ({
      onClose,
      settlingHeight,
      modalPageHeight = 664,
      modalPageContentClientHeight,
      contentScrollHeight,
    }: {
      onClose: VoidFunction;
      settlingHeight?: number;
      modalPageHeight?: number;
      modalPageContentClientHeight: number;
      contentScrollHeight: number;
    }) => {
      let innerElementTransform = '';

      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 720,
      });

      const Fixture = () => {
        return (
          <ModalRootTouch activeModal="modal-page">
            <ModalPage
              id="modal-page"
              data-testid="modal-page"
              key="1"
              settlingHeight={settlingHeight}
              onClose={onClose}
              getRootRef={(element) => {
                if (!element) {
                  return;
                }
                jest
                  .spyOn((element.firstElementChild as HTMLDivElement).style, 'transform', 'set')
                  .mockImplementation((newTransform) => (innerElementTransform = newTransform));
                jest
                  .spyOn(element, 'offsetHeight', 'get')
                  .mockImplementation(() => modalPageHeight);
              }}
              getModalContentRef={(element) => {
                if (!element) {
                  return;
                }
                jest
                  .spyOn(element, 'clientHeight', 'get')
                  .mockImplementation(() => modalPageContentClientHeight);
                jest
                  .spyOn(element.firstElementChild!, 'scrollHeight', 'get')
                  .mockImplementation(() => contentScrollHeight);
              }}
            >
              <div></div>
            </ModalPage>
          </ModalRootTouch>
        );
      };

      const component = render(<Fixture />, {
        baseElement: document.documentElement,
      });

      const header = component.container.getElementsByClassName(
        modalPageStyles['ModalPage__header'],
      )[0];
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('modal-page')));

      return {
        component,
        get header() {
          return header;
        },
        get innerElementTransform() {
          return innerElementTransform;
        },
      };
    };

    it('should hide modal page by touch', async () => {
      const date = mockDate();

      const onClose = jest.fn();

      const mockedData = await touchMoveSetup({
        onClose,
        modalPageContentClientHeight: 608,
        contentScrollHeight: 1291,
      });
      fireEvent.mouseDown(mockedData.header, {
        clientY: 250,
      });
      fireEvent.mouseMove(mockedData.header, {
        clientY: 350,
      });
      date.next();
      fireEvent.mouseUp(mockedData.header, {
        client: 350,
      });

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('should expand and then collapse modal page by touch', async () => {
      const date = mockDate();

      const onClose = jest.fn();

      const mockedData = await touchMoveSetup({
        onClose,
        modalPageContentClientHeight: 608,
        contentScrollHeight: 1291,
      });
      expect(mockedData.innerElementTransform).toBe('translate3d(0, 25%, 0)');
      fireEvent.mouseDown(mockedData.header, {
        clientY: 250,
      });
      fireEvent.mouseMove(mockedData.header, {
        clientY: 190,
      });
      date.next();
      fireEvent.mouseUp(mockedData.header, {
        client: 190,
      });
      act(jest.runAllTimers);
      expect(mockedData.innerElementTransform).toBe('translate3d(0, 0%, 0)');

      fireEvent.mouseDown(mockedData.header, {
        clientY: 95,
      });
      fireEvent.mouseMove(mockedData.header, {
        clientY: 180,
      });
      date.next();
      fireEvent.mouseUp(mockedData.header, {
        client: 180,
      });
      act(jest.runAllTimers);
      expect(mockedData.innerElementTransform).toBe('translate3d(0, 25%, 0)');

      expect(onClose).toHaveBeenCalledTimes(0);
    });

    it('should close modal page when settlingHeight 100 by touch', async () => {
      const date = mockDate();

      const onClose = jest.fn();

      const mockedData = await touchMoveSetup({
        onClose,
        settlingHeight: 100,
        modalPageContentClientHeight: 600,
        contentScrollHeight: 1200,
      });

      expect(mockedData.innerElementTransform).toBe('translate3d(0, 0%, 0)');
      fireEvent.mouseDown(mockedData.header, {
        clientY: 95,
      });
      fireEvent.mouseMove(mockedData.header, {
        clientY: 250,
      });
      date.next();
      fireEvent.mouseUp(mockedData.header, {
        client: 250,
      });
      act(jest.runAllTimers);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('modal card touch move events', () => {
    const touchMoveSetup = async ({ onClose }: { onClose: VoidFunction }) => {
      let content: HTMLDivElement;
      let transform = '';
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 720,
      });
      const Fixture = () => {
        return (
          <ModalRootTouch activeModal="modal-card">
            <ModalCard
              id="modal-card"
              data-testid="modal-card"
              key="1"
              onClose={onClose}
              getRootRef={(element) => {
                if (!element) {
                  return;
                }
                content = element.firstElementChild as HTMLDivElement;
                jest.spyOn(content, 'offsetHeight', 'get').mockImplementation(() => 320);
                jest
                  .spyOn(content.style, 'transform', 'set')
                  .mockImplementation((newTransform) => (transform = newTransform));
              }}
            >
              <div></div>
            </ModalCard>
          </ModalRootTouch>
        );
      };

      const component = render(<Fixture />, {
        baseElement: document.documentElement,
      });
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('modal-card')));

      return {
        component,
        get transform() {
          return transform;
        },
        get content() {
          return content;
        },
      };
    };

    it('should close modal card by touch', async () => {
      const date = mockDate();
      const onClose = jest.fn();
      const mockedData = await touchMoveSetup({
        onClose,
      });
      expect(mockedData.transform).toBe('translate3d(0, 0%, 0)');
      fireEvent.mouseDown(mockedData.content, {
        clientY: 400,
      });
      fireEvent.mouseMove(mockedData.content, {
        clientY: 500,
      });
      act(jest.runAllTimers);
      date.next();
      expect(mockedData.transform).toBe('translate3d(0, 31.25%, 0)');
      fireEvent.mouseUp(mockedData.content, {
        clientY: 500,
      });
      act(jest.runAllTimers);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
