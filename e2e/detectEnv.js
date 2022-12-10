// This file is in JS because it runs in node when generating jest.e2e.config
const { execSync } = require('child_process');

function checkDocker() {
  try {
    execSync('docker stats --no-stream');
    return true;
  } catch (err) {
    return false;
  }
}

function checkLinux() {
  const { platform } = process;
  return platform !== 'win32' && platform !== 'darwin';
}

const isLinux = checkLinux();
const useDocker = process.env.E2E_DOCKER === '1' || (!isLinux && checkDocker());
const canRunTests = useDocker || isLinux;

module.exports = { isLinux, useDocker, canRunTests };
