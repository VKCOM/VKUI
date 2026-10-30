// @vitest-environment happy-dom
// @vitest-environment-options {"settings":{"handleDisabledFileLoadingAsSuccess":true}}

import { waitFor } from '@testing-library/react';
import { expect, it } from 'vitest';
import { syncPreviewStyles } from './syncPreviewStyles';

it('mirrors initial and delayed stylesheet chunks, HMR edits and removal', async () => {
  const target = document.implementation.createHTMLDocument();
  const style = document.createElement('style');
  style.textContent = '.example { color: red }';
  document.head.appendChild(style);
  const stop = syncPreviewStyles(target);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/delayed-preview.css';
  try {
    expect(target.head.textContent).toContain('color: red');
    document.head.appendChild(link);
    await waitFor(() =>
      expect(target.head.querySelector('link[href="/delayed-preview.css"]')).toBeTruthy(),
    );
    style.textContent = '.example { color: blue }';
    await waitFor(() => expect(target.head.textContent).toContain('color: blue'));
    link.remove();
    await waitFor(() =>
      expect(target.head.querySelector('link[href="/delayed-preview.css"]')).toBeNull(),
    );
  } finally {
    stop();
    style.remove();
    link.remove();
  }
});
