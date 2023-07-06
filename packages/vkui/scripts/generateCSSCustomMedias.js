const fs = require('fs');
const path = require('path');
const { getCustomMedias, PATHS } = require('../shared.config');

(function main() {
  console.log('🔄 Processing...');

  const { customMedia } = getCustomMedias();
  const dataRaw = [];

  dataRaw.push('/* ⚠️ Документ сгенерирован автоматически */');
  dataRaw.push('/* 📝 Если требуется изменения, то запустите команду `yarn workspace @vkontakte/vkui run generate:css-custom-medias` */'); // prettier-ignore
  dataRaw.push('');
  dataRaw.push('/* stylelint-disable */');
  dataRaw.push(
    Object.entries(customMedia)
      .map(([key, value]) => {
        return ['/* prettier-ignore */', `@custom-media ${key} ${value};`].join('\n');
      })
      .join('\n'),
  );
  dataRaw.push('');

  const data = dataRaw.join('\n');
  const fileDir = path.resolve(__dirname, PATHS.CSS_CUSTOM_MEDIAS.replace(PATHS.ROOT_DIR, '../'));

  fs.writeFileSync(fileDir, data, 'utf-8');

  console.log(`✅ ${fileDir}`);
})();
