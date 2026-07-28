import * as fs from 'node:fs';
import { runIfMain } from '../common/runIfMain.ts';
import { getPaths } from './get-paths.ts';
import { getProps } from './get-props.ts';

export function generateProps(): void {
  // eslint-disable-next-line no-console
  console.log('🔄 Генерация свойств компонентов...');
  const componentPaths = getPaths();
  const props = getProps({ paths: componentPaths });

  if (!fs.existsSync('.docgen')) {
    fs.mkdirSync('.docgen');
  }
  fs.writeFileSync('.docgen/docgen.json', JSON.stringify(props));
  // eslint-disable-next-line no-console
  console.log(`✅ Свойства сгенерированы.`);
}

void runIfMain(import.meta.url, generateProps);
