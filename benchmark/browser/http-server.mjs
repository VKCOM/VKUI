import http from 'node:http';
import path from 'node:path';
import dotenv from 'dotenv';
import handler from 'serve-handler';

dotenv.config({
  path: [
    path.resolve(import.meta.dirname, '../.env.default'),
    path.resolve(import.meta.dirname, '../.env'),
  ],
  override: true,
});

function createServer({ host, port }) {
  const server = http.createServer((request, response) => {
    return handler(request, response, {
      public: path.join(import.meta.dirname, process.env.STATIC_BUILD_DIR),
    });
  });

  function close() {
    return new Promise((resolve, reject) => {
      server.close((error) => {
        if (error !== undefined) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  return new Promise((resolve) => {
    server.listen(port, host, () => {
      resolve({ close });
    });
  });
}

void createServer({ host: process.env.WEB_SERVER_HOST, port: process.env.WEB_SERVER_PORT });
