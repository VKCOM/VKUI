import { OS, platform } from '../lib/platform';

export default function getClassname(base: string, osname: OS = platform()): string {
  return `${base} ${base}--${osname}`;
}
