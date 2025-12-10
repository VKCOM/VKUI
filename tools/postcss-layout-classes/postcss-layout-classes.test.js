/* eslint-disable @typescript-eslint/no-floating-promises -- node тесты */
const assert = require('node:assert/strict');
const test = require('node:test');
const postcss = require('postcss');
const plugin = require('./index');

const snapshotOptions = { serializers: [(value) => value] };

async function run(input, opts = [undefined]) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: 'layout.css',
  });
  assert.strictEqual(result.warnings().length, 0);

  return result.css;
}

test.test('generate layout classes', async (t) => {
  const input = ``;

  t.assert.snapshot(await run(input), snapshotOptions);
});
