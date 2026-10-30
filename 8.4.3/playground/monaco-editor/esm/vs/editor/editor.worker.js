import { isWorkerInitialized } from '../internal/common/initialize.js';
export { initialize } from '../internal/common/initialize.js';
import { start } from './editor.worker.start.js';

self.onmessage = () => {
  if (!isWorkerInitialized()) {
    start(() => {
      return {};
    });
  }
};
