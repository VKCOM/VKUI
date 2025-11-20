import fs from 'fs';
import { getPaths } from './get-paths.mjs';
import { getProps } from './get-props.mjs';

function generate() {
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

generate();
