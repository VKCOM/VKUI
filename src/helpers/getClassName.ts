import { OSType, platform } from '../lib/platform';

export default function getClassname(base: string, osname: OSType = platform()): string {
  return `${base} ${base}--${osname}`;
}
