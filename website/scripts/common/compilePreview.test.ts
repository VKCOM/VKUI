// @vitest-environment node

import { describe, expect, it } from 'vitest';
import { compilePreview, stripPreviewImports } from './compilePreview';

describe(compilePreview, () => {
  it('imports only the components and icons used by a JSX example', () => {
    const output = compilePreview('<Button before={<Icon16Add />}>Hello</Button>');
    expect(output).toContain("import { Button } from '@vkontakte/vkui'");
    expect(output).toContain("import { Icon16Add } from '@vkontakte/icons'");
    expect(output).not.toContain('import *');
    expect(output).not.toContain('react-live');
    expect(output).not.toContain('sucrase');
  });

  it('supports hooks, React namespace, multiple JSX nodes and aliased VKUI exports', () => {
    const hooks = compilePreview(
      'const [n, setN] = useState(0); return <Button onClick={() => setN(n + 1)}>{n}</Button>',
    );
    expect(hooks).toContain("import { useState } from 'react'");
    expect(hooks).toContain('setN(n + 1)');
    const react = compilePreview('const n = React.useRef(null); return <ExpressiveSpinner />');
    expect(react).toContain("import * as React from 'react'");
    expect(react).toContain('unstable_ExpressiveSpinner as ExpressiveSpinner');
    expect(() => compilePreview('<Button>A</Button><Button>B</Button>')).not.toThrow();
  });

  it('resolves lexical bindings, including shorthand references and nested shadowing', () => {
    expect(
      compilePreview('const Button = () => <span>Local</span>; return <Button />'),
    ).not.toContain('@vkontakte/vkui');
    const output = compilePreview('const components = { Button }; return <components.Button />');
    expect(output).toContain("import { Button } from '@vkontakte/vkui'");
    expect(output).not.toContain('import { components');
    const nested = compilePreview(
      'function Local() { const Button = () => null; return <Button />; } return <Button />',
    );
    expect(nested).toContain("import { Button } from '@vkontakte/vkui'");
  });

  it('strips import declarations while preserving strings containing import text', () => {
    const code =
      'import { Button } from "@vkontakte/vkui";\nreturn <Button>{"import x from y;"}</Button>';
    expect(stripPreviewImports(code)).toBe('return <Button>{"import x from y;"}</Button>');
    expect(compilePreview(code)).toContain('import x from y;');
  });
});
