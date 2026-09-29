import type { ComponentType, ReactNode } from 'react';

type IconName = `Icon${number}${string}`;

type IconSize =
  | '12'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '56'
  | '64'
  | '96';

export const ICON_SIZES: IconSize[] = [
  '12',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '56',
  '64',
  '96',
];

const ICON_REGEX = /^Icon(\d+)/;

export const getIconDisplayName = (name: string): string =>
  name.replace(/^Icon(\d+)(.+)$/, (_, size: string, baseName: string) => {
    const snakeCaseName = baseName
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
      .replace(/([a-z\d])([A-Z])/g, '$1_$2')
      .toLowerCase();

    return `${snakeCaseName}_${size}`;
  });

export const getIconSize = (iconName: IconName) => {
  const match = iconName.match(ICON_REGEX);
  return match?.[1] as IconSize | undefined;
};

export const createIconsConfig = (icons: Record<string, ComponentType>): ConfigData[] => {
  const sizeToIconsMap = new Map<IconSize, IconData[]>();
  Object.keys(icons).forEach((iconName) => {
    if (!ICON_REGEX.test(iconName)) {
      return;
    }

    const typedIconName = iconName as IconName;
    const size = getIconSize(typedIconName);
    if (!size || !ICON_SIZES.includes(size)) {
      return;
    }
    const iconsBySize = sizeToIconsMap.get(size) ?? [];
    const Icon = icons[typedIconName];
    iconsBySize.push({ name: typedIconName, node: <Icon /> });
    sizeToIconsMap.set(size, iconsBySize);
  });
  return ICON_SIZES.flatMap((size) => {
    const iconsBySize = sizeToIconsMap.get(size);
    return iconsBySize ? [{ size, icons: iconsBySize }] : [];
  });
};

export type IconData = {
  name: IconName;
  node: ReactNode;
};

export type ConfigData = {
  size: IconSize;
  icons: IconData[];
};
