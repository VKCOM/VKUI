import systemPalette from '../appearance/palette';
import customPalette from '../appearance/custom_palette';
import { resolveColor } from '../lib/colors';

const palette = { ...systemPalette, ...customPalette };

const colors = Object.keys(palette).reduce((acc, colorId) => {
  acc[colorId] = resolveColor(palette, colorId);
  return acc;
}, {});

export default colors;
