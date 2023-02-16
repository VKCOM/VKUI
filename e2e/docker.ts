import { exec } from 'child_process';
import { promisify } from 'util';
import waitPort from 'wait-port';
const execP = promisify(exec);

export const startDocker = () =>
  Promise.all<any>([
    execP('docker-compose up -d', { cwd: __dirname }),
    waitPort({ host: 'localhost', port: 9001, timeout: 30000 }),
  ]);

export const stopDocker = () => execP('docker-compose stop', { cwd: __dirname });
