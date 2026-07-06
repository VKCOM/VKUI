import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scripts = [
  './generate-props/generate-props.mjs',
  './generate-showcase.mjs',
  './copy-mdx-to-public.mjs',
  './generate-llms-txt.mjs',
];

for (const script of scripts) {
  execSync(`node ${path.resolve(__dirname, script)}`, { stdio: 'inherit' });
}
