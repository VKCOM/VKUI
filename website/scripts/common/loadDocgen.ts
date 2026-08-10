import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_FILE = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SCRIPT_FILE);
const WEBSITE_DIR = path.resolve(SCRIPT_DIR, '../..');
const DOCGEN_PATH = path.join(WEBSITE_DIR, '.docgen', 'docgen.json');

export type DocgenProps = Record<string, unknown[]>;

export function loadDocgen(): DocgenProps {
  if (!fs.existsSync(DOCGEN_PATH)) {
    return {};
  }
  const raw = fs.readFileSync(DOCGEN_PATH, 'utf8');
  return JSON.parse(raw) as DocgenProps;
}
