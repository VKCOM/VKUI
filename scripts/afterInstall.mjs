#!/usr/bin/env node

import * as url from 'node:url';
import * as checkNodeVersion from './check_node_version.mjs';

/**
 * Для версий Node.js<20
 */
export const importMetaFilename = url.fileURLToPath(import.meta.url);

export async function main() {
  await checkNodeVersion.main();
}

if (process.argv[1] === importMetaFilename) {
  void main();
}
