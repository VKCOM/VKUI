import { fileURLToPath } from 'node:url';

/**
 * Вызывает fn только при прямом запуске файла (как главного модуля),
 * чтобы тот же модуль можно было импортировать в воркерах без side-effects.
 */
export function runIfMain(importMetaUrl: string, fn: () => void): void {
  if (process.argv[1] && fileURLToPath(importMetaUrl) === process.argv[1]) {
    fn();
  }
}
