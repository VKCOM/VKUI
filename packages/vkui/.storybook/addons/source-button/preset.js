import { fileURLToPath } from 'node:url';

export function managerEntries(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve('./register.ts'))];
}
