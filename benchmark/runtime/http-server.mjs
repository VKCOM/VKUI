import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import util from 'node:util';
import dotenv from 'dotenv';
import finalHandler from 'finalhandler';
import serveStatic from 'serve-static';

dotenv.config({
  path: [
    path.resolve(import.meta.dirname, '../.env.default'),
    path.resolve(import.meta.dirname, '../.env'),
  ],
  override: true,
  quiet: true,
});

const host = process.env.WEB_SERVER_HOST;
const port = process.env.WEB_SERVER_PORT;
const publicDir = path.join(import.meta.dirname, process.env.STATIC_BUILD_DIR);

const staticHandler = serveStatic(publicDir, {
  index: fs.readdirSync(publicDir).filter((i) => i.endsWith('.html')),
  extensions: ['html'],
  cacheControl: false,
});

const server = http.createServer((req, res) => staticHandler(req, res, finalHandler(req, res)));

server.listen(port, host, handleServer);

function handleServer() {
  console.debug(`HTTP server started: http://${host}:${port}`);
}

/** @param {NodeJS.Signals} signal */
function handleServerClose(signal) {
  console.debug(`${signal} signal received: closing HTTP server`);
  server.close(() => {
    console.debug('HTTP server closed');
  });
}

process.on('SIGINT', handleServerClose);
process.on('SIGTERM', handleServerClose);
