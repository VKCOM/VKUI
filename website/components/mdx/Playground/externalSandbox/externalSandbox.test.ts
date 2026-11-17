// @vitest-environment happy-dom

import { decompressFromBase64 } from 'lz-string';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { buildAppFile } from './buildAppFile';
import { openInCodeSandbox } from './codesandbox';
import { openInStackBlitz } from './stackblitz';

const openProject = vi.hoisted(() => vi.fn());
vi.mock('@stackblitz/sdk', () => ({ default: { openProject } }));
afterEach(() => vi.restoreAllMocks());

const editedCode =
  'const [count, setCount] = useState(0); return <Button before={<Icon16Add />} onClick={() => setCount(count + 1)}>{count}</Button>;';

describe('External Playground export', () => {
  it('detects hooks, icons and VKUI names without importing their runtime scope', () => {
    const app = buildAppFile(editedCode);
    expect(app).toContain("import { useState } from 'react'");
    expect(app).toContain("import { Button } from '@vkontakte/vkui'");
    expect(app).toContain("import { Icon16Add } from '@vkontakte/icons'");
    expect(app).toContain('setCount(count + 1)');
  });

  it('submits edited code to CodeSandbox and removes its temporary form', async () => {
    const submissions: HTMLFormElement[] = [];
    vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(function (
      this: HTMLFormElement,
    ) {
      submissions.push(this);
    });
    await openInCodeSandbox(editedCode);
    const submitted = submissions[0];
    expect(submitted?.action).toBe('https://codesandbox.io/api/v1/sandboxes/define');
    expect(submitted?.target).toBe('_blank');
    expect(submitted?.isConnected).toBe(false);
    const parameters = submitted?.querySelector<HTMLInputElement>('input')?.value || '';
    const base64 = parameters.replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(decompressFromBase64(base64));
    expect(payload.files['src/App.tsx'].content).toBe(buildAppFile(editedCode));
    expect(payload.files['package.json'].content.dependencies['@vkontakte/vkui']).toBeTruthy();
  });

  it('passes edited source, Vite configuration and new-window options to StackBlitz', async () => {
    await openInStackBlitz(editedCode);
    expect(openProject).toHaveBeenCalledWith(
      expect.objectContaining({
        template: 'node',
        files: expect.objectContaining({
          'src/App.tsx': buildAppFile(editedCode),
          'vite.config.ts': expect.stringContaining('@vkontakte/vkui/dist/cssm'),
        }),
      }),
      { openFile: 'src/App.tsx', newWindow: true },
    );
  });
});
