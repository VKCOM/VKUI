import { initialize } from '../../../internal/common/initialize.js';
import { JSONWorker } from './jsonWorker.js';

self.onmessage = () => {
  initialize((ctx, createData) => {
    return new JSONWorker(ctx, createData);
  });
};
