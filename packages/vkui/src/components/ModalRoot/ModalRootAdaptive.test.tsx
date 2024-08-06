import { render, screen } from '@testing-library/react';
import { ModalRoot } from './ModalRootAdaptive';

let isDesktop = true;
jest.mock('../../hooks/useAdaptivityWithJSMediaQueries', () => ({
  useAdaptivityWithJSMediaQueries: () => ({
    isDesktop,
  }),
}));

jest.mock('./ModalRootDesktop', () => ({
  ModalRootDesktop: () => {
    return <div data-testid="ModalRootDesktop"></div>;
  },
}));

jest.mock('./ModalRoot', () => ({
  ModalRootTouch: () => {
    return <div data-testid="ModalRootTouch"></div>;
  },
}));

describe(ModalRoot, () => {
  const checkUseDesktopComponent = (desktop: boolean) => {
    expect(screen.getByTestId(desktop ? 'ModalRootDesktop' : 'ModalRootTouch')).toBeInTheDocument();
  };

  it('check use correct component to render modal root', () => {
    isDesktop = true;
    const { rerender } = render(
      <ModalRoot activeModal="1">
        <></>
      </ModalRoot>,
    );
    checkUseDesktopComponent(true);

    isDesktop = false;
    rerender(
      <ModalRoot activeModal="1">
        <></>
      </ModalRoot>,
    );
    checkUseDesktopComponent(false);
  });
});
