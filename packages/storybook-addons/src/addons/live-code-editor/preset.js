import { fileURLToPath } from 'node:url';

export function managerEntries(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve('./auto-register.ts'))];
}

export function viteFinal(config) {
  return {
    ...config,
    optimizeDeps: {
      ...config.optimizeDeps,
      include: [...(config.optimizeDeps?.include || []), '@babel/standalone'],
    },
  };
}
