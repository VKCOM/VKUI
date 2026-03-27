#!/usr/bin/env node
import { startStdioServer } from './server.js';

try {
  await startStdioServer();
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
}
