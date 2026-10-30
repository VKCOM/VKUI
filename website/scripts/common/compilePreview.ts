import * as fs from 'node:fs';
import * as path from 'node:path';
import * as React from 'react';
import { transformSync } from '@swc/core';
import ts from 'typescript';

const scopeFile = path.resolve(import.meta.dirname, '../../components/mdx/Playground/scope.ts');
const scope = ts.createSourceFile(
  'scope.ts',
  fs.readFileSync(scopeFile, 'utf8'),
  ts.ScriptTarget.Latest,
);
const vkuiNames = new Map<string, string>();
for (const statement of scope.statements) {
  if (
    ts.isImportDeclaration(statement) &&
    ts.isStringLiteral(statement.moduleSpecifier) &&
    statement.moduleSpecifier.text === '@vkontakte/vkui'
  ) {
    const bindings = statement.importClause?.namedBindings;
    if (bindings && ts.isNamedImports(bindings)) {
      for (const item of bindings.elements) {
        vkuiNames.set(item.name.text, item.propertyName?.text || item.name.text);
      }
    }
  }
}

export const vkuiExportNames = [...vkuiNames.keys()];

export function stripPreviewImports(code: string) {
  const source = ts.createSourceFile(
    'example.tsx',
    code,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  for (const statement of [...source.statements].reverse()) {
    if (ts.isImportDeclaration(statement)) {
      code = code.slice(0, statement.getStart(source)) + code.slice(statement.end);
    }
  }
  return code.trim();
}

export function compilePreview(code: string) {
  const body = stripPreviewImports(code);
  const contents = `export default function Preview() {\n${body.startsWith('<') ? `return (<>${body}</>);` : body}\n}`;
  const filename = '/preview.tsx';
  const source = ts.createSourceFile(
    filename,
    contents,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const options: ts.CompilerOptions = { noLib: true, noResolve: true, jsx: ts.JsxEmit.ReactJSX };
  const host = ts.createCompilerHost(options);
  host.getSourceFile = (name) => (name === filename ? source : undefined);
  const checker = ts.createProgram([filename], options, host).getTypeChecker();
  const names = new Set<string>();

  function visit(node: ts.Node) {
    if (ts.isIdentifier(node)) {
      const parent = node.parent;
      const symbol = checker.getSymbolAtLocation(node);
      const resolved =
        symbol && ts.isShorthandPropertyAssignment(parent)
          ? checker.getShorthandAssignmentValueSymbol(parent)
          : symbol;
      if (
        !resolved &&
        !(ts.isPropertyAccessExpression(parent) && parent.name === node) &&
        !(ts.isPropertyAssignment(parent) && parent.name === node) &&
        !(ts.isJsxAttribute(parent) && parent.name === node)
      ) {
        names.add(node.text);
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(source);

  const imports: string[] = [];
  const vkui = [...names].filter((name) => vkuiNames.has(name));
  const icons = [...names].filter(
    (name) => /^Icon\d/.test(name) || name === 'IconAppearanceProvider',
  );
  const react = [...names].filter((name) => name !== 'React' && name in React);
  if (names.has('React')) {
    imports.push("import * as React from 'react';");
  }
  if (react.length) {
    imports.push(`import { ${react.join(', ')} } from 'react';`);
  }
  if (vkui.length) {
    imports.push(
      `import { ${vkui.map((name) => (vkuiNames.get(name) === name ? name : `${vkuiNames.get(name)} as ${name}`)).join(', ')} } from '@vkontakte/vkui';`,
    );
  }
  if (icons.length) {
    imports.push(`import { ${icons.join(', ')} } from '@vkontakte/icons';`);
  }

  return transformSync(`'use client';\n${imports.join('\n')}\n${contents}`, {
    swcrc: false,
    filename: 'preview.tsx',
    jsc: {
      target: 'es2020',
      parser: { syntax: 'typescript', tsx: true },
      transform: { react: { runtime: 'automatic' } },
    },
    module: { type: 'es6' },
  }).code;
}
