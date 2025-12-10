/* eslint-disable @typescript-eslint/no-floating-promises -- node тесты */
const assert = require('node:assert/strict');
const test = require('node:test');
const postcss = require('postcss');
const plugin = require('./index');

const snapshotOptions = { serializers: [(value) => value] };

async function run(input, opts = [undefined]) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  assert.strictEqual(result.warnings().length, 0);

  return result.css;
}

test.test('rewrite custom property', async (t) => {
  const input = `.a {
    --color: #fff;
}
.a {
    --color: #000;
}
.b {
    --color: #fff;
}
.b {
    --color: #000;
}
`;

  t.assert.snapshot(await run(input), snapshotOptions);
});

test.test('merge one', async (t) => {
  const input = `:root {
    --color: #fff;
}
.b {
    color: var(--color);
}
.b {
    --color: #fff;
}
`;

  t.assert.snapshot(await run(input), snapshotOptions);
});

test.test('merge three', async (t) => {
  const input = `:root {
    --color: #fff;
    --size: 1px;
}
.b {
    color: var(--color);
}
.b {
    --color: #fff;
    --size: 2px;
}
`;

  t.assert.snapshot(await run(input), snapshotOptions);
});

// PS: по идеи @media в итоге не должно быть, но чтобы ничего не сломать оставлю так
test.test('check cascading', async (t) => {
  const input = `
@media (min-resolution: 2dppx) {
    :root {
        --color: blue;
        color: blue;
    }
}
@media (min-resolution: 3dppx) {
    :root {
        --color: blue;
    }
}
:root {
    --color: blue;
}`;

  t.assert.snapshot(await run(input), snapshotOptions);
});

test.test('check deep cascading', async (t) => {
  const input = `
@supports (display: flex) {
    @media screen and (min-width: 900px) {
        :root {
            --color: blue;
        }
    }
}
:root {
    --color: blue;
}`;

  t.assert.snapshot(await run(input), snapshotOptions);
});

test.test('no custom properties', async (t) => {
  const input = `
.b {
  color: var(--color);
}`;

  t.assert.snapshot(await run(input), snapshotOptions);
});

test.test('example', async (t) => {
  const input = `
.a {
    --color1: #ff0000;
    --color2: #ff0000;
    --size: 2px;
}
.b {
    --color1: #ff0000;
    --color2: #ff0000;
    --size: 1px;
}
.c {
    --color: #0000ff;
    --size: 1px;
}
`;

  t.assert.snapshot(await run(input), snapshotOptions);
});
