import fs from 'fs';
import * as path from 'path';
import * as semver from 'semver';

function findPackageJsonWithVKUI(startDir: string): string | null {
  let currentDir = startDir;

  while (currentDir !== path.parse(currentDir).root) {
    const packageJsonPath = path.join(currentDir, 'package.json');

    if (fs.existsSync(packageJsonPath)) {
      const vkuiVersion = getVKUIVersion(packageJsonPath);
      if (vkuiVersion) {
        return packageJsonPath;
      }
    }

    currentDir = path.dirname(currentDir);
  }

  return null;
}

function getVKUIVersion(packageJsonPath: string): string | undefined {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  const dependencies: Record<string, string> = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  return dependencies['@vkontakte/vkui'];
}

function getMajorVersion(version: string): number | null {
  const parsed = semver.valid(semver.coerce(version));
  return parsed ? semver.major(parsed) : null;
}

export function autoDetectVKUIVersion(): string | null {
  const startDir: string = process.cwd();
  const packageJsonPath: string | null = findPackageJsonWithVKUI(startDir);

  if (packageJsonPath) {
    const vkuiVersion: string | undefined = getVKUIVersion(packageJsonPath);

    if (vkuiVersion) {
      return String(getMajorVersion(vkuiVersion));
    }
  }
  return null;
}
