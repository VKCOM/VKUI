const child_process = require('child_process');

function checkDocker() {
  try {
    child_process.execSync('docker stats --no-stream');
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
const useDocker = process.env.E2E_DOCKER === '1' || !isLinux && checkDocker();
const canRunTests = useDocker || isLinux;

module.exports = { useDocker, isLinux, canRunTests };
