import fs from 'fs';

export const TRANSFORM_DIR = `${__dirname}/transforms`;

let CODEMODS: string[] = [];

export default function getAvailableCodemods() {
  if (CODEMODS.length === 0) {
    CODEMODS = fs
      .readdirSync(TRANSFORM_DIR)
      .filter((fname) => fname.endsWith('.js'))
      .map((fname) => fname.slice(0, -3));
  }

  return CODEMODS;
}
