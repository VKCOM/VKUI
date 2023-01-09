import fsPromises from 'fs/promises';

import { getVKUIToken } from './styleProperty';

const regex = /(?<![\w])(--[a-z_]+)/gm;

/**
 * Ищет токены в коде и заменяет
 */
function replacer(code: string) {
  let edited = false;
  return {
    code: code.replace(regex, (_, p1) => {
      const vkuiToken = getVKUIToken('', '', p1);

      if (vkuiToken) {
        edited = true;
        return vkuiToken;
      }

      return p1;
    }),
    edited,
  };
}

export function fileReplacer(pathToFile: string) {
  return new Promise((resolve, reject) => {
    // TODO: нужно учитывать кодировку
    fsPromises
      .readFile(pathToFile)
      .then((source) => {
        const { code, edited } = replacer(source.toString());

        if (!edited) {
          resolve(null);
          return;
        }

        fsPromises.writeFile(pathToFile, code).then(resolve).catch(reject);
      })
      .catch(reject);
  });
}
