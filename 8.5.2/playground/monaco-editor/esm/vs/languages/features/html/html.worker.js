import { initialize } from '../../../internal/common/initialize.js';
import { HTMLWorker } from './htmlWorker.js';

self.onmessage = () => {
  initialize((ctx, createData) => {
    return new HTMLWorker(ctx, createData);
  });
};
