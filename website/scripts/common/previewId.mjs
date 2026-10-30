import { createHash } from 'node:crypto';

export function getPreviewId(code) {
  return createHash('sha256').update(code.trim()).digest('hex').slice(0, 24);
}
