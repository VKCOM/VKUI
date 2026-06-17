import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const SCRIPT_FILE = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SCRIPT_FILE);
const WEBSITE_DIR = path.resolve(SCRIPT_DIR, '../..');
const DOCGEN_PATH = path.join(WEBSITE_DIR, '.docgen', 'docgen.json');

export function loadDocgen() {
  if (!fs.existsSync(DOCGEN_PATH)) {
    return {};
  }
  const raw = fs.readFileSync(DOCGEN_PATH, 'utf8');
  return JSON.parse(raw);
}
