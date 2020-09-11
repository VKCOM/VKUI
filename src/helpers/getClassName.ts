import { OSType, platform } from '../lib/platform';

export function getClassName(base: string, osname: OSType = platform()): string {
  return `${base} ${base}--${osname}`;
}

export default getClassName;
