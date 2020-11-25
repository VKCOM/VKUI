const { promisify } = require('util');
const { exec } = require('child_process');
const waitPort = require('wait-port');
const execP = promisify(exec);

const startDocker = () => Promise.all([
  execP('docker-compose up -d', { cwd: __dirname }),
  waitPort({ host: 'localhost', port: 9001, silent: true, timeout: 30000 }),
]);

const stopDocker = () => execP('docker-compose stop', { cwd: __dirname });

module.exports = { startDocker, stopDocker };
