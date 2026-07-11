#!/usr/bin/env node

/**
 * Postinstall script to override the `tsc` bin symlink.
 *
 * The monorepo uses TypeScript 7 (via `@typescript/native`) for type-checking
 * and TypeScript 6 (via `@typescript/typescript6` → `typescript`/`@typescript/old`)
 * for the programmatic API (`require('typescript')`) used by typescript-eslint
 * and build scripts.
 *
 * Yarn's node-modules linker gives precedence to the `tsc` bin from
 * `@typescript/old` (TypeScript 6), so we need to re-point the root
 * `node_modules/.bin/tsc` symlink to `@typescript/native` (TypeScript 7).
 * We also fix workspace-level `.bin/tsc` symlinks for the same reason.
 */

const { symlinkSync, lstatSync, readlinkSync, unlinkSync, readdirSync } = require('node:fs');
const { resolve, relative } = require('node:path');

const ROOT = resolve(__dirname, '..', '..');
const NATIVE_TSC = resolve(ROOT, 'node_modules', '@typescript', 'native', 'bin', 'tsc');

try {
  lstatSync(NATIVE_TSC);
} catch {
  // @typescript/native not installed yet — skip.
  process.exit(0);
}

/**
 * Re-point a `tsc` symlink in the given `.bin` directory to the TS7 binary.
 * Uses a relative path to match yarn's own symlink style.
 */
function linkTsc(binDir) {
  const tscLink = resolve(binDir, 'tsc');
  const relativeTarget = relative(binDir, NATIVE_TSC);

  try {
    const current = readlinkSync(tscLink);
    if (current === relativeTarget) {
      return; // already correct
    }
  } catch {
    // No symlink or not a symlink — will create below.
  }

  try {
    unlinkSync(tscLink);
  } catch {
    // Doesn't exist or not a symlink — continue.
  }

  try {
    symlinkSync(relativeTarget, tscLink, 'file');
  } catch {
    // Can't create symlink (e.g. permission) — skip silently.
  }
}

// 1. Root .bin
linkTsc(resolve(ROOT, 'node_modules', '.bin'));

// 2. Workspace .bin directories (packages/*, tools/*, website)
const workspaceGlobs = ['packages', 'tools', 'website'];
for (const dir of workspaceGlobs) {
  const parent = resolve(ROOT, dir);
  let entries;
  try {
    entries = readdirSync(parent, { withFileTypes: true });
  } catch {
    continue;
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }
    const binDir = resolve(parent, entry.name, 'node_modules', '.bin');
    try {
      lstatSync(binDir);
    } catch {
      continue;
    }
    linkTsc(binDir);
  }
}

// eslint-disable-next-line no-console
console.log('✓ Linked tsc → @typescript/native (TypeScript 7)');
