import fs from 'fs';

export const TRANSFORM_DIR = `${__dirname}/transforms`;

let CODEMODS: string[] = [];

const swapElementsOfArray = (a: number, b: number, array: unknown[]) => {
  if (a === -1 || b === -1) {
    return;
  }

  const valueA = array[a];
  const valueB = array[b];

  array[b] = valueA;
  array[a] = valueB;
};

export default function getAvailableCodemods(dirname = TRANSFORM_DIR) {
  if (CODEMODS.length === 0) {
    CODEMODS = fs
      .readdirSync(dirname)
      .filter((fname) => fname.endsWith('.js') || fname.endsWith('.ts'))
      .map((fname) => fname.slice(0, -3));

    swapElementsOfArray(
      CODEMODS.findIndex((fname) => fname === 'text-tooltip'),
      CODEMODS.findIndex((fname) => fname === 'tooltip'),
      CODEMODS,
    );
  }

  return CODEMODS;
}
