/* eslint-disable @typescript-eslint/no-floating-promises -- node тесты */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import type {
  AcceptedPlugin,
  Container,
  Declaration,
  Document,
  ProcessOptions,
  Rule,
} from 'postcss';
import type { DirectionFlow } from 'postcss-logical';
import cssModules from 'postcss-modules';
import plugin from './index.js';

const testDirectory = fileURLToPath(new URL('.', import.meta.url));

async function run(
  input: string,
  plugins: AcceptedPlugin[] = [plugin()],
  options: ProcessOptions = {},
) {
  const result = await postcss(plugins).process(input, { from: 'margin.css', ...options });
  assert.equal(result.warnings().length, 0);
  return result;
}

function rules(container: Container | Document) {
  return (container.nodes ?? [])
    .filter((node): node is Rule => node.type === 'rule')
    .map((rule) => ({
      selector: rule.selector,
      declarations: rule.nodes
        .filter((node): node is Declaration => node.type === 'decl')
        .map(({ prop, value, important }) => ({ prop, value, important: Boolean(important) })),
    }));
}

function trimmedRule(selector: string, prop: string, important = false) {
  return { selector, declarations: [{ prop, value: '0', important }] };
}

for (const axis of ['block', 'inline']) {
  for (const [value, edges] of [
    [`${axis}-start`, ['start']],
    [`${axis}-end`, ['end']],
    [axis, ['start', 'end']],
    [`${axis}-start ${axis}-end`, ['start', 'end']],
    [`${axis}-end ${axis}-start`, ['start', 'end']],
  ] as Array<[string, string[]]>) {
    test(`trims ${value}`, async () => {
      const result = await run(`.column { margin-trim: ${value}; }`);
      assert.deepEqual(rules(result.root), [
        { selector: '.column', declarations: [] },
        ...edges.map((edge) =>
          trimmedRule(
            `.column > :${edge === 'start' ? 'first' : 'last'}-child`,
            `margin-${axis}-${edge}`,
          ),
        ),
      ]);
    });
  }
}

test('preserves declarations, comments, and rule order', async () => {
  const result = await run(`
    .before { color: red; }
    .column { /* keep */ display: flex; margin-trim: block-end; gap: 8px; }
    .after { color: blue; }
  `);
  assert.deepEqual(rules(result.root), [
    { selector: '.before', declarations: [{ prop: 'color', value: 'red', important: false }] },
    {
      selector: '.column',
      declarations: [
        { prop: 'display', value: 'flex', important: false },
        { prop: 'gap', value: '8px', important: false },
      ],
    },
    trimmedRule('.column > :last-child', 'margin-block-end'),
    { selector: '.after', declarations: [{ prop: 'color', value: 'blue', important: false }] },
  ]);
  const columnRule = result.root.nodes[1];
  assert.ok(columnRule && columnRule.type === 'rule');
  assert.equal(columnRule.first?.type === 'comment' && columnRule.first.text, 'keep');
});

test('expands selector lists without splitting commas inside selectors', async () => {
  const selector = '.column, :is(.a, .b), [data-value="a,b"]';
  const result = await run(`${selector} { margin-trim: block; }`);
  assert.deepEqual(rules(result.root).slice(1), [
    trimmedRule(
      '.column > :first-child, :is(.a, .b) > :first-child, [data-value="a,b"] > :first-child',
      'margin-block-start',
    ),
    trimmedRule(
      '.column > :last-child, :is(.a, .b) > :last-child, [data-value="a,b"] > :last-child',
      'margin-block-end',
    ),
  ]);
});

test('matches case-insensitive property names and keywords', async () => {
  const result = await run('.column { MARGIN-TRIM: BlOcK-EnD; }');
  assert.deepEqual(rules(result.root).slice(1), [
    trimmedRule('.column > :last-child', 'margin-block-end'),
  ]);
  assert.equal(result.root.nodes[0]?.type === 'rule' && result.root.nodes[0].nodes.length, 0);
});

test('accepts whitespace and comments between block edges', async () => {
  const result = await run('.column { margin-trim: block-start\n\t/* edge */ block-end; }');
  assert.deepEqual(rules(result.root).slice(1), [
    trimmedRule('.column > :first-child', 'margin-block-start'),
    trimmedRule('.column > :last-child', 'margin-block-end'),
  ]);
});

for (const value of [
  'block inline',
  'inline block',
  'block-start block-start',
  'inline-start inline-start',
  'unknown',
  'constructor',
  '__proto__',
  'toString',
  'var(--trim)',
  'inherit',
  'revert',
  'revert-layer',
]) {
  test(`preserves unsupported value ${value}`, async () => {
    const input = `.column { margin-trim: ${value}; }`;
    assert.equal((await run(input)).css, input);
  });
}

test('ignores CSS without margin-trim and custom properties with similar names', async () => {
  const input = '.column { --margin-trim: block; margin: 8px; }';
  assert.equal((await run(input)).css, input);
  assert.equal((await run('')).css, '');
});

for (const declarations of [
  'margin-trim: block; margin-trim: block-end;',
  'margin-trim: block-start; margin-trim: block-end;',
  'margin-trim: block-end; margin-trim: block-end;',
  'margin-trim: block-end; margin-trim: unknown;',
]) {
  test(`uses the last valid declaration: ${declarations}`, async () => {
    const result = await run(`.column { ${declarations} }`);
    assert.deepEqual(rules(result.root).slice(1), [
      trimmedRule('.column > :last-child', 'margin-block-end'),
    ]);
  });
}

for (const value of ['none', 'initial', 'unset']) {
  test(`cancels earlier trimming with ${value}`, async () => {
    const result = await run(`.column { margin-trim: block; margin-trim: ${value}; }`);
    assert.deepEqual(rules(result.root), [{ selector: '.column', declarations: [] }]);
  });
}

for (const [declarations, edge] of [
  ['margin-trim: block-start !important; margin-trim: block-end;', 'start'],
  ['margin-trim: block-end; margin-trim: block-start !important;', 'start'],
  ['margin-trim: block-start !important; margin-trim: block-end !important;', 'end'],
  ['margin-trim: block-start !important; margin-trim: none;', 'start'],
]) {
  test(`respects importance: ${declarations}`, async () => {
    const result = await run(`.column { ${declarations} }`);
    assert.deepEqual(rules(result.root).slice(1), [
      trimmedRule(
        `.column > :${edge === 'start' ? 'first' : 'last'}-child`,
        `margin-block-${edge}`,
        true,
      ),
    ]);
  });
}

test('an important reset cancels earlier trimming', async () => {
  const result = await run('.column { margin-trim: none !important; margin-trim: block; }');
  assert.deepEqual(rules(result.root), [{ selector: '.column', declarations: [] }]);
});

test('switching axes replaces the entire earlier declaration', async () => {
  const result = await run('.row { margin-trim: block; margin-trim: INLINE-END; }');
  assert.deepEqual(rules(result.root), [
    { selector: '.row', declarations: [] },
    trimmedRule('.row > :last-child', 'margin-inline-end'),
  ]);
});

test('respects importance when switching axes', async () => {
  const result = await run('.row { margin-trim: inline-start !important; margin-trim: block; }');
  assert.deepEqual(rules(result.root).slice(1), [
    trimmedRule('.row > :first-child', 'margin-inline-start', true),
  ]);
});

test('resets inline trimming', async () => {
  const result = await run('.row { margin-trim: inline; margin-trim: none; }');
  assert.deepEqual(rules(result.root), [{ selector: '.row', declarations: [] }]);
});

test('keeps generated rules inside enclosing at-rules', async () => {
  const result = await run(`
    @layer components {
      @supports (display: flex) {
        @media (min-width: 600px) {
          .column { margin-trim: block-end !important; }
        }
      }
    }
  `);
  const layer = result.root.nodes[0];
  assert.ok(layer?.type === 'atrule');
  const supports = layer.nodes?.[0];
  assert.ok(supports?.type === 'atrule');
  const media = supports.nodes?.[0];
  assert.ok(media?.type === 'atrule');
  assert.equal(layer.name, 'layer');
  assert.equal(supports.name, 'supports');
  assert.equal(media.name, 'media');
  assert.deepEqual(rules(media).slice(1), [
    trimmedRule('.column > :last-child', 'margin-block-end', true),
  ]);
  assert.equal(result.root.nodes.length, 1);
});

test('handles nested selectors without processing nested declarations twice', async () => {
  const result = await run(
    '.parent { margin-trim: block-start; & > .column { margin-trim: block-end; } }',
  );
  const parentRule = result.root.nodes[0];
  assert.ok(parentRule?.type === 'rule');
  assert.deepEqual(rules(parentRule), [
    { selector: '& > .column', declarations: [] },
    trimmedRule('& > .column > :last-child', 'margin-block-end'),
  ]);
  assert.deepEqual(rules(result.root).slice(1), [
    trimmedRule('.parent > :first-child', 'margin-block-start'),
  ]);
});

test('is idempotent', async () => {
  const first = await run('.column { margin-trim: block !important; }');
  assert.equal((await run(first.css)).css, first.css);
});

test('supports passing the plugin creator directly to PostCSS', async () => {
  const result = await run('.column { margin-trim: block-end; }', [plugin]);
  assert.deepEqual(rules(result.root).slice(1), [
    trimmedRule('.column > :last-child', 'margin-block-end'),
  ]);
});

test('retains source locations for generated rules and declarations', async () => {
  const result = await run('.column {\n  margin-trim: block;\n}', undefined, {
    to: 'output.css',
    map: { inline: false },
  });
  for (const rule of result.root.nodes.slice(1)) {
    if (rule.type !== 'rule') {
      throw new Error('Expected a generated rule');
    }
    assert.ok(rule.source?.input.file && rule.source.start && rule.first?.source?.start);
    assert.equal(rule.source.input.file, result.root.source?.input.file);
    assert.equal(rule.source.start.line, 2);
    assert.equal(rule.first.source.start.line, 2);
  }
  assert.deepEqual(result.map.toJSON().sources, ['margin.css']);
});

test('generated declarations are transformed by postcss-logical', async () => {
  const { default: logical } = await import('postcss-logical');
  const result = await run('.column { margin-trim: block; }', [plugin(), logical()]);
  assert.deepEqual(rules(result.root).slice(1), [
    trimmedRule('.column > :first-child', 'margin-top'),
    trimmedRule('.column > :last-child', 'margin-bottom'),
  ]);
});

for (const [inlineDirection, start, end] of [
  ['left-to-right', 'left', 'right'],
  ['right-to-left', 'right', 'left'],
] as Array<['left-to-right' | 'right-to-left', string, string]>) {
  test(`transforms inline margins for ${inlineDirection}`, async () => {
    const { default: logical } = await import('postcss-logical');
    const result = await run('.row { margin-trim: inline; }', [
      plugin(),
      logical({ inlineDirection: inlineDirection as DirectionFlow }),
    ]);
    assert.deepEqual(rules(result.root).slice(1), [
      trimmedRule('.row > :first-child', `margin-${start}`),
      trimmedRule('.row > :last-child', `margin-${end}`),
    ]);
  });
}

test('preserves CSS Modules exports for classes containing only margin-trim', async () => {
  let exports;
  const result = await run('.column { margin-trim: block-end; }', [
    plugin(),
    cssModules({
      generateScopedName: 'vkui[local]',
      getJSON: (_filename, json) => {
        exports = json;
      },
    }),
  ]);
  assert.deepEqual(exports, { column: 'vkuicolumn' });
  assert.deepEqual(rules(result.root), [
    { selector: '.vkuicolumn', declarations: [] },
    trimmedRule('.vkuicolumn > :last-child', 'margin-block-end'),
  ]);
});

test('compiles DropZoneGrid with CSS Modules and logical properties', async () => {
  const input = await fs.readFile(
    `${testDirectory}/../../packages/vkui/src/components/DropZone/DropZoneGrid/DropZoneGrid.module.css`,
    'utf8',
  );
  const { default: logical } = await import('postcss-logical');
  let exports;
  const result = await run(input, [
    plugin(),
    logical(),
    cssModules({
      generateScopedName: 'vkui[local]',
      getJSON: (_filename, json) => {
        exports = json;
      },
    }),
  ]);
  assert.deepEqual(exports, { host: 'vkuihost', column: 'vkuicolumn', row: 'vkuirow' });
  assert.equal(result.css.includes('margin-trim:'), false);
  assert.ok(
    rules(result.root).some(
      (rule) =>
        rule.selector === '.vkuirow > *:last-child' &&
        rule.declarations.some(({ prop, value }) => prop === 'margin-right' && value === '0'),
    ),
  );
  assert.ok(
    rules(result.root).some(
      (rule) => rule.selector === '.vkuirow > *:first-child:nth-last-child(n + 3)',
    ),
  );
});
