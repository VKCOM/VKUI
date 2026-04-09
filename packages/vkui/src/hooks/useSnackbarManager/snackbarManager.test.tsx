import { act, render, screen, waitFor } from '@testing-library/react';
import { waitCSSKeyframesAnimation, withFakeTimers } from '../../testing/utils';
import { SnackbarManagerHolder } from './components/SnackbarManagerHolder';
import {
  AUTO_MOUNT_HOLDER_ATTR,
  createSnackbarManager,
  getSnackbarManagerInternals,
  snackbarManager,
} from './snackbarManager';

const AUTO_MOUNT_HOLDER_SELECTOR = `[${AUTO_MOUNT_HOLDER_ATTR}]`;

describe('snackbarManager (imperative API)', () => {
  afterEach(() => {
    act(() => {
      snackbarManager.closeAll();
    });
    document.body.querySelector(AUTO_MOUNT_HOLDER_SELECTOR)?.remove();
  });

  it('auto-mounts SnackbarManagerHolder in document.body on first open()', async () => {
    expect(document.body.querySelector(AUTO_MOUNT_HOLDER_SELECTOR)).not.toBeInTheDocument();

    act(() => {
      snackbarManager.open({ children: 'Auto-mounted snackbar' });
    });

    await waitFor(() => {
      expect(screen.getByText('Auto-mounted snackbar')).toBeInTheDocument();
    });

    expect(document.body.querySelector(AUTO_MOUNT_HOLDER_SELECTOR)).toBeInTheDocument();
  });

  it('opens snackbar when SnackbarManagerHolder is mounted', async () => {
    render(<SnackbarManagerHolder />);

    act(() => {
      snackbarManager.open({ children: 'Global snackbar' });
    });

    expect(screen.getByText('Global snackbar')).toBeInTheDocument();
  });

  it(
    'closes snackbar by id',
    withFakeTimers(async () => {
      render(<SnackbarManagerHolder />);

      let id: string | undefined;
      act(() => {
        const result = snackbarManager.open({
          'children': 'To close',
          'data-testid': 'snackbar-to-close',
        });
        id = result.id;
      });

      const snackbarEl = screen.getByTestId('snackbar-to-close');
      expect(snackbarEl).toBeInTheDocument();

      act(() => {
        snackbarManager.close(id!);
      });

      const alert = snackbarEl.querySelector('[role="alert"]') ?? snackbarEl;
      await waitCSSKeyframesAnimation(alert as HTMLElement, {
        runOnlyPendingTimers: true,
      });
      expect(screen.queryByTestId('snackbar-to-close')).not.toBeInTheDocument();
    }),
  );

  it(
    'closeAll closes all snackbars',
    withFakeTimers(async () => {
      render(<SnackbarManagerHolder />);

      act(() => {
        snackbarManager.open({ children: 'First' });
        snackbarManager.open({ children: 'Second' });
      });

      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Second')).toBeInTheDocument();

      act(() => {
        snackbarManager.closeAll();
      });

      const alerts = screen.getAllByRole('alert');
      await Promise.all(
        alerts.map((alert) => waitCSSKeyframesAnimation(alert, { runOnlyPendingTimers: true })),
      );

      expect(screen.queryByText('First')).not.toBeInTheDocument();
      expect(screen.queryByText('Second')).not.toBeInTheDocument();
    }),
  );

  it('update changes snackbar content', async () => {
    render(<SnackbarManagerHolder />);

    let id: string | undefined;
    act(() => {
      const result = snackbarManager.open({ children: 'Initial text' });
      id = result.id;
    });

    expect(screen.getByText('Initial text')).toBeInTheDocument();

    act(() => {
      snackbarManager.update(id!, { children: 'Updated text' });
    });

    expect(screen.queryByText('Initial text')).not.toBeInTheDocument();
    expect(screen.getByText('Updated text')).toBeInTheDocument();
  });

  it('applies SnackbarManagerHolder props and shows snackbar', async () => {
    render(<SnackbarManagerHolder limit={2} zIndex={8888} />);

    act(() => {
      snackbarManager.open({ children: 'With zIndex' });
    });

    expect(screen.getByText('With zIndex')).toBeInTheDocument();
  });
});

describe('createSnackbarManager', () => {
  it('creates independent manager instance', async () => {
    const customManager = createSnackbarManager({ limit: 1 });

    render(<SnackbarManagerHolder manager={customManager} />);

    act(() => {
      customManager.open({ children: 'From custom manager' });
    });

    expect(screen.getByText('From custom manager')).toBeInTheDocument();

    act(() => {
      customManager.closeAll();
    });
  });

  it(
    'custom manager and global snackbarManager are independent',
    withFakeTimers(async () => {
      const customManager = createSnackbarManager();

      render(
        <>
          <SnackbarManagerHolder />
          <SnackbarManagerHolder manager={customManager} />
        </>,
      );

      act(() => {
        snackbarManager.open({ children: 'Global' });
        customManager.open({ children: 'Custom' });
      });

      expect(screen.getByText('Global')).toBeInTheDocument();
      expect(screen.getByText('Custom')).toBeInTheDocument();

      act(() => {
        customManager.closeAll();
      });

      const customAlerts = screen
        .getAllByRole('alert')
        .filter((el) => el.textContent?.includes('Custom'));
      await Promise.all(
        customAlerts.map((alert) =>
          waitCSSKeyframesAnimation(alert, { runOnlyPendingTimers: true }),
        ),
      );

      expect(screen.getByText('Global')).toBeInTheDocument();
      expect(screen.queryByText('Custom')).not.toBeInTheDocument();

      act(() => {
        snackbarManager.closeAll();
      });
    }),
  );
});

describe('getSnackbarManagerInternals', () => {
  it('throws when passed non-manager object', () => {
    expect(() => getSnackbarManagerInternals({} as any)).toThrow('VKUI');
  });
});
