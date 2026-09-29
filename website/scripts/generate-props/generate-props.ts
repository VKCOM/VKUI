import * as fs from 'node:fs';
import { runIfMain } from '../common/runIfMain.ts';
import { getPaths } from './get-paths.ts';
import { getProps } from './get-props.ts';

export function generateProps() {
  // eslint-disable-next-line no-console
  console.log('🔄 Генерация свойств компонентов...');
  const componentPaths = getPaths();
  return getProps({ paths: componentPaths });
}

function writeProps() {
  const props = generateProps();
  fs.mkdirSync('.docgen', { recursive: true });
  fs.writeFileSync('.docgen/docgen.json', JSON.stringify(props));
  // eslint-disable-next-line no-console
  console.log(`✅ Свойства сгенерированы.`);
}

void runIfMain(import.meta.url, writeProps);
