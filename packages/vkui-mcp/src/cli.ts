#!/usr/bin/env node
import { startStdioServer } from './server.js';

try {
  const server = await startStdioServer();
  let isShuttingDown = false;

  const shutdown = async (signal: NodeJS.Signals) => {
    if (isShuttingDown) {
      return;
    }
    isShuttingDown = true;

    try {
      await server.close();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Ошибка при graceful shutdown (${signal})`, error);
      process.exitCode = 1;
    }
  };

  process.once('SIGINT', () => {
    void shutdown('SIGINT');
  });
  process.once('SIGTERM', () => {
    void shutdown('SIGTERM');
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
}
