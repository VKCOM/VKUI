import * as React from 'react';
import * as icons from '@vkontakte/icons';

type IconName = Exclude<keyof typeof icons, 'IconSettingsProvider' | 'IconAppearanceProvider'>;

type IconSize = '12' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '56' | '96';

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

const SIZE_ICONS_COUNT = 5;

export const createFieldWithPresets = <CustomPresetName extends string>({
  iconSizes = [],
  sizeIconsCount = SIZE_ICONS_COUNT,
  requiredIcons = [],
  additionalPresets = {},
}: {
  // Список размеров используемых иконок
  iconSizes?: IconSize[];
  // Количество иконок каждого заданного размера
  sizeIconsCount?: number;
  // Обязательные иконки, которые должны быть
  requiredIcons?: IconName[];
  // Дополнительные пресеты. Например Avatar, IconButton, Badge и т.д
  additionalPresets?: { [K in CustomPresetName]?: React.ReactNode };
}) => {
  const options: Array<IconName | CustomPresetName | 'None'> = ['None'];
  const mapping: { [K in IconName | CustomPresetName | 'None']?: React.ReactNode } = {
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
    if (options.includes(iconName)) {
      return;
    }
    options.push(iconName);
    const Icon = icons[iconName];
    mapping[iconName] = <Icon />;
  });

  for (const presetName in additionalPresets) {
    if (!additionalPresets.hasOwnProperty(presetName)) {
      continue;
    }
    options.push(presetName);
    mapping[presetName] = additionalPresets[presetName];
  }

  return {
    control: 'select' as const,
    options,
    mapping,
  };
};
