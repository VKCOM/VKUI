import * as React from 'react';
import * as icons from '@vkontakte/icons';

type IconName = keyof typeof icons | 'None';

type IconSize = '12' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '56' | '96';

const SIZE_ICONS_COUNT = 5;

const checkSize = ({
  iconName,
  iconSizes,
  sizeToCountMap,
  sizeIconsCount,
}: {
  iconName: string;
  iconSizes: IconSize[];
  sizeToCountMap: Record<string, number>;
  sizeIconsCount: number;
}) => {
  const filteredSizes = iconSizes.filter((size) => {
    return (sizeToCountMap[size] || 0) < sizeIconsCount;
  });
  const iconSize = filteredSizes.find((size) => iconName.startsWith(`Icon${size}`));
  if (iconSize) {
    sizeToCountMap[iconSize] = (sizeToCountMap[iconSize] || 0) + 1;
  }
  return !!iconSize;
};

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
  const options: Array<IconName | T> = ['None'];
  // @ts-expect-error: TS2740 ts ругается, что объект должен быть заполнен полями
  const mapping: Record<IconName | T, React.ReactNode> = {
    None: null,
  };
  const typedIcons = icons as Record<IconName, any>;
  const sizeToCountMap: Record<string, number> = {};

  Object.entries(typedIcons).forEach(([iconName, node]) => {
    const typedIconName = iconName as IconName;
    if (
      requiredIcons.includes(typedIconName) ||
      checkSize({ iconName, iconSizes, sizeIconsCount, sizeToCountMap })
    ) {
      !options.includes(typedIconName) && options.push(typedIconName);
      const Icon = node;
      mapping[typedIconName] = <Icon />;
    }
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
