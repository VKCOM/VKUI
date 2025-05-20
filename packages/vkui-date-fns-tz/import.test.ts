import * as assert from 'node:assert/strict';
import * as test from 'node:test';
import * as build from './build.ts';

test.it('should import like ES6 module', async () => {
  await build.main();

  assert.ok(
    // @ts-ignore
    await import('./index.js'),
  );
  assert.ok(
    // @ts-ignore
    await import('./tzOffset/index.js'),
  );
  assert.ok(
    // @ts-ignore
    await import('./tzScan/index.js'),
  );
  assert.ok(
    // @ts-ignore
    await import('./date/index.js'),
  );
  assert.ok(
    // @ts-ignore
    await import('./date/mini.js'),
  );
  assert.ok(
    // @ts-ignore
    await import('./tz/index.js'),
  );
  assert.ok(
    // @ts-ignore
    await import('./constants/index.js'),
  );
});
