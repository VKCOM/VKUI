import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppRoot, type AppRootProps } from './AppRoot';
import { AppRootPortal, type AppRootPortalProps } from './AppRootPortal';

function TestComponent({
  appRootProps = {},
  usePortal,
}: {
  appRootProps?: AppRootProps;
  usePortal?: AppRootPortalProps['usePortal'];
} = {}) {
  const portalRootRef = React.useRef<HTMLDivElement | null>(null);

  const [opened, setOpened] = React.useState(false);

  return (
    <AppRoot portalRoot={portalRootRef} {...appRootProps}>
      <button
        onClick={() => {
          setOpened((opened) => !opened);
        }}
      >
        Toggle modal
      </button>
      {opened ? (
        <AppRootPortal usePortal={usePortal}>
          <div>content</div>
        </AppRootPortal>
      ) : null}
      <div data-testid="portal-root" ref={portalRootRef} />
    </AppRoot>
  );
}

describe('AppRootPortal', () => {
  beforeEach(function cleanupBodyFromAppendedDivsByPortal() {
    document.body.innerHTML = '';
  });

  it('does not use portal by default in full mode', () => {
    render(<TestComponent appRootProps={{ mode: 'full' }} />);

    fireEvent.click(screen.getByText(/Toggle modal/));

    expect(screen.getByTestId('portal-root').childElementCount).toBe(0);
  });

  it.each(['embedded', 'partial'] as const)(
    'uses document.body by default for portal if nothing specific is provided in %s mode',
    (mode) => {
      const TestComponent = ({ mode }: { mode: AppRootProps['mode'] }) => {
        const [opened, setOpened] = React.useState(false);

        return (
          <AppRoot mode={mode}>
            <button
              onClick={() => {
                setOpened((opened) => !opened);
              }}
            >
              Toggle modal
            </button>
            {opened ? (
              <AppRootPortal>
                <div>content</div>
              </AppRootPortal>
            ) : null}
          </AppRoot>
        );
      };

      render(<TestComponent mode={mode} />);

      expect(document.body.childElementCount).toBe(1);

      fireEvent.click(screen.getByText(/Toggle modal/));

      expect(document.body.childElementCount).toBe(2);
    },
  );

  it.each(['embedded', 'partial'] as const)(
    'uses provided to AppRoot portalRoot in %s mode',
    (mode) => {
      render(<TestComponent appRootProps={{ mode }} />);

      fireEvent.click(screen.getByText(/Toggle modal/));

      expect(screen.getByTestId('portal-root').childElementCount).toBe(1);
    },
  );

  it.each(['embedded', 'partial'] as const)(
    'uses provided to AppRoot portalRoot directly as HTMLElement in %s mode when element is set via state update',
    (mode) => {
      const TestComponent = ({ mode }: { mode: AppRootProps['mode'] }) => {
        const [portalRootElement, setPortalRootElement] = React.useState<HTMLDivElement | null>(
          null,
        );

        return (
          <AppRoot mode={mode} portalRoot={portalRootElement}>
            <AppRootPortal>
              <div>content</div>
            </AppRootPortal>
            <div data-testid="portal-root" ref={setPortalRootElement} />
          </AppRoot>
        );
      };

      render(<TestComponent mode={mode} />);

      expect(screen.getByTestId('portal-root').childElementCount).toBe(1);
    },
  );

  it('does not use portal when portal is disabled in AppRoot', () => {
    render(<TestComponent appRootProps={{ mode: 'partial', disablePortal: true }} />);

    fireEvent.click(screen.getByText(/Toggle modal/));

    expect(screen.getByTestId('portal-root').childElementCount).toBe(0);
  });

  it('does not use portal when usePortal is false but portalRoot is provided', () => {
    render(<TestComponent appRootProps={{ mode: 'partial' }} usePortal={false} />);

    fireEvent.click(screen.getByText(/Toggle modal/));

    expect(screen.getByTestId('portal-root').childElementCount).toBe(0);
  });

  it('uses portal in full mode when usePortal is true', () => {
    render(<TestComponent appRootProps={{ mode: 'full' }} usePortal />);

    fireEvent.click(screen.getByText(/Toggle modal/));

    expect(screen.getByTestId('portal-root').childElementCount).toBe(1);
  });

  it('uses portal passed via usePortal prop', () => {
    const Wrapper = function Wrapper() {
      const customPortalRef = React.useRef<HTMLDivElement | null>(null);
      return (
        <React.Fragment>
          <TestComponent usePortal={customPortalRef} />
          <div data-testid="custom-portal" ref={customPortalRef} />
        </React.Fragment>
      );
    };
    render(<Wrapper />);

    fireEvent.click(screen.getByText(/Toggle modal/));

    expect(screen.getByTestId('portal-root').childElementCount).toBe(0);
    expect(screen.getByTestId('custom-portal').childElementCount).toBe(1);
  });
});
