import * as React from 'react';
import * as icons from '@vkontakte/icons';

type IconName = keyof typeof icons;

type IconSize = '12' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '56' | '96';

const sizeToIconsMap: Map<IconSize, Map<IconName, React.ReactNode>> = new Map();

const getIconSize = (iconName: IconName) => {
  const match = iconName.match(/Icon(\d+)/);
  return (match?.[1] || '12') as IconSize;
};

const fillIconsMap = () => {
  Object.keys(icons).forEach((iconName) => {
    const typedIconName = iconName as IconName;
    const node = icons[typedIconName];
    const size = getIconSize(typedIconName);
    const iconsBySize = sizeToIconsMap.get(size);
    const Icon = node as any;
    if (iconsBySize) {
      iconsBySize.set(typedIconName, <Icon />);
    } else {
      sizeToIconsMap.set(size, new Map([[typedIconName, <Icon key="icon" />]]));
    }
  });
};

fillIconsMap();

const SIZE_ICONS_COUNT = 5;

export const createFieldWithPresets = <T extends string>({
  iconSizes = [],
  sizeIconsCount = SIZE_ICONS_COUNT,
  requiredIcons = [],
  // @ts-expect-error: TS2740 ts ругается, что объект должен быть заполнен полями
  additionalPresets = {},
}: {
  iconSizes?: IconSize[];
  sizeIconsCount?: number;
  requiredIcons?: IconName[];
  additionalPresets?: Record<T, React.ReactNode>;
}) => {
  const options: Array<IconName | T | 'None'> = ['None'];
  // @ts-expect-error: TS2740 ts ругается, что объект должен быть заполнен полями
  const mapping: Record<IconName | T | 'None', React.ReactNode> = {
    None: null,
  };

  iconSizes.forEach((iconSize) => {
    const iconsBySize = sizeToIconsMap.get(iconSize)!;
    const iconsNames = Array.from(iconsBySize.keys()).slice(0, sizeIconsCount);

    iconsNames.forEach((iconName) => {
      options.push(iconName);
      mapping[iconName] = iconsBySize.get(iconName);
    });
  });

  requiredIcons.forEach((iconName) => {
    options.push(iconName);
    const Icon = icons[iconName] as any;
    mapping[iconName] = <Icon />;
  });

  Object.entries(additionalPresets).forEach(([presetName, node]) => {
    const typedPresetName = presetName as T;
    const typedNode = node as React.ReactNode;
    options.push(typedPresetName);
    mapping[typedPresetName] = typedNode;
  });

  return {
    control: 'select' as const,
    options,
    mapping,
  };
};
