import { type ReactNode } from 'react';
import * as React from 'react';
import * as icons from '@vkontakte/icons';

type IconName = Exclude<keyof typeof icons, 'IconSettingsProvider' | 'IconAppearanceProvider'>;

type IconSize = '12' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '56' | '96';

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
  '96',
];

const ICON_REGEX = /Icon(\d+)/;
const sizeToIconsMap: Map<IconSize, Map<IconName, React.ReactNode>> = new Map();

const getIconSize = (iconName: IconName) => {
  const match = iconName.match(ICON_REGEX);
  return match?.[1] as IconSize | null;
};

const fillIconsMap = () => {
  Object.keys(icons).forEach((iconName) => {
    if (!ICON_REGEX.test(iconName)) {
      return;
    }

    const typedIconName = iconName as IconName;
    const node = icons[typedIconName];
    const size = getIconSize(typedIconName);
    if (!size) {
      return;
    }
    const iconsBySize = sizeToIconsMap.get(size);
    const Icon = node;
    if (iconsBySize) {
      iconsBySize.set(typedIconName, <Icon />);
    } else {
      sizeToIconsMap.set(size, new Map([[typedIconName, <Icon key="icon" />]]));
    }
  });
};

fillIconsMap();

export type ConfigData = {
  size: IconSize;
  icons: Array<{
    name: IconName;
    node: ReactNode;
  }>;
};

export const CONFIG: ConfigData[] = ICON_SIZES.map((size) => {
  const iconsBySize = sizeToIconsMap.get(size)!;
  return {
    size,
    icons: Array.from(iconsBySize.keys()).map((iconName) => ({
      name: iconName,
      node: iconsBySize.get(iconName)!,
    })),
  };
});
