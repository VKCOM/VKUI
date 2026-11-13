import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import { OverviewHeaderActions } from './OverviewHeaderActions';

const loading = vi.hoisted(() => {
  let release: (() => void) | undefined;
  return {
    ready: new Promise<void>((resolve) => {
      release = resolve;
    }),
    release: () => release?.(),
    started: vi.fn(),
    copy: vi.fn().mockResolvedValue(true),
  };
});

vi.mock('./AssistantMenu', async () => {
  loading.started();
  await loading.ready;
  return {
    AssistantMenu: () => <button type="button">Loaded menu</button>,
  };
});

vi.mock('./useCopyFeedback', () => ({
  useCopyFeedback: () => ({ copied: false, animationKey: 0, copy: loading.copy }),
}));

const waitForHover = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
  });

it('waits for the menu, ignores stale hover intent and preserves copy and keyboard behavior', async () => {
  const props = { pageUrl: 'https://vkui.io/components/button', mdxUrl: '/components/button.mdx' };
  const first = render(<OverviewHeaderActions {...props} />);
  const trigger = screen.getByRole('button', { name: 'Скопировать ссылку' });
  expect(loading.started).not.toHaveBeenCalled();

  fireEvent.mouseOver(trigger);
  await waitFor(() => expect(loading.started).toHaveBeenCalledTimes(1));
  await waitForHover();
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(screen.queryByRole('progressbar')).toBeNull();
  expect(trigger.getAttribute('aria-expanded')).toBe('false');

  fireEvent.click(trigger);
  expect(loading.copy).toHaveBeenCalledWith(props.pageUrl);
  fireEvent.mouseOut(trigger, { relatedTarget: document.body });
  await waitForHover();
  await act(async () => {
    loading.release();
    await vi.dynamicImportSettled();
  });
  expect(screen.queryByRole('dialog')).toBeNull();

  fireEvent.mouseOver(trigger);
  expect(await screen.findByRole('dialog')).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Loaded menu' })).toBeTruthy();
  expect(screen.queryByRole('progressbar')).toBeNull();
  first.unmount();

  render(<OverviewHeaderActions {...props} />);
  const keyboardTrigger = screen.getByRole('button', { name: 'Скопировать ссылку' });
  fireEvent.focus(keyboardTrigger);
  expect(await screen.findByRole('dialog')).toBeTruthy();
  fireEvent.keyDown(document, { key: 'Escape' });
  await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  expect(loading.started).toHaveBeenCalledTimes(1);
  cleanup();
});
