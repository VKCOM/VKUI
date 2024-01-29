import * as React from 'react';
import { render, screen } from '@testing-library/react';
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

  return (
    <AppRoot portalRoot={portalRootRef} {...appRootProps}>
      <AppRootPortal usePortal={usePortal}>
        <div>content</div>
      </AppRootPortal>
      <div data-testid="portal-root" ref={portalRootRef} />
    </AppRoot>
  );
}

describe('AppRootPortal', () => {
  it('does not use portal by default in full mode', () => {
    render(<TestComponent appRootProps={{ mode: 'full' }} />);

    expect(screen.getByTestId('portal-root').childElementCount).toBe(0);
  });

  it('uses portal in embedded mode', () => {
    render(<TestComponent appRootProps={{ mode: 'embedded' }} />);

    expect(screen.getByTestId('portal-root').childElementCount).toBe(1);
  });

  it('uses portal in partial mode', () => {
    render(<TestComponent appRootProps={{ mode: 'partial' }} />);

    expect(screen.getByTestId('portal-root').childElementCount).toBe(1);
  });

  it('does not use portal when portal is disabled in AppRoot', () => {
    render(<TestComponent appRootProps={{ mode: 'partial', disablePortal: true }} />);

    expect(screen.getByTestId('portal-root').childElementCount).toBe(0);
  });

  it('does not use portal when usePortal is false', () => {
    render(<TestComponent appRootProps={{ mode: 'partial' }} usePortal={false} />);

    expect(screen.getByTestId('portal-root').childElementCount).toBe(0);
  });

  it('uses portal in full mode when usePortal is true', () => {
    render(<TestComponent appRootProps={{ mode: 'full' }} usePortal />);

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

    expect(screen.getByTestId('portal-root').childElementCount).toBe(0);
    expect(screen.getByTestId('custom-portal').childElementCount).toBe(1);
  });
});
