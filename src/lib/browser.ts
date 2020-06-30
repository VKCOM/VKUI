import { Version } from '../types';

export function parseiOSVersion(userAgent: string): Version | null {
  if (!userAgent) {
    return null;
  }

  const match = userAgent.match(/(iphone os|cpu os|ios) \b([0-9]+_[0-9]+(?:_[0-9]+)?)\b/i);
  if (!match) {
    return null;
  }

  const [major, minor, patch] = match[2].replace(/_/g, '.').split('.');

  return {
    major: parseInt(major) || 0,
    minor: parseInt(minor) || 0,
    patch: parseInt(patch) || 0,
  };
}
