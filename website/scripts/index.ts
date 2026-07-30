import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

/**
 * Запускает генератор в отдельном worker thread — реальная параллельность
 * без порождения новых процессов Node.js (cold-start одного процесса).
 * Вывод воркера (stdout/stderr) пробрасывается в родительский процесс.
 */
function runWorker(scriptUrl: URL): Promise<void> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(fileURLToPath(scriptUrl));
    worker.on('error', reject);
    worker.on('messageerror', reject);
    worker.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${fileURLToPath(scriptUrl)} exited with code ${code}`));
      }
    });
  });
}

// copy-mdx-to-public зависит от generate-props (читает .docgen/docgen.json),
// поэтому запускаем их последовательно в одной цепочке.
// generate-showcase и generate-llms-txt независимы — идут параллельно с остальными.
async function main() {
  const propsChain = runWorker(new URL('./generate-props/generate-props.ts', import.meta.url)).then(
    () => runWorker(new URL('./copy-mdx-to-public.ts', import.meta.url)),
  );

  await Promise.all([
    propsChain,
    runWorker(new URL('./generate-showcase.ts', import.meta.url)),
    runWorker(new URL('./generate-llms-txt.ts', import.meta.url)),
  ]);
}

await main();
