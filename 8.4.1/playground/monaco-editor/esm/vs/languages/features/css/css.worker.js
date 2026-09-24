import { initialize } from '../../../internal/common/initialize.js';
import { CSSWorker } from './cssWorker.js';

self.onmessage = () => {
  initialize((ctx, createData) => {
    return new CSSWorker(ctx, createData);
  });
};
