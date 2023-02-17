import * as React from 'react';
import {
  Icon16Cancel,
  Icon20CheckCircleOn,
  Icon20CopyOutline,
  Icon20DeleteOutline,
  Icon20GearOutline,
  Icon20ListPlayOutline,
  Icon20ShareOutline,
  Icon24CheckCircleOn,
  Icon24ThumbsUpOutline,
  Icon28CopyOutline,
  Icon28DeleteOutline,
  Icon28EditOutline,
  Icon28ListPlayOutline,
  Icon28MessageOutline,
  Icon28PlaySpeedOutline,
  Icon28SettingsOutline,
  Icon28ShareOutline,
  Icon28SubtitlesOutline,
} from '@vkontakte/icons';

const IconsMap = {
  None: undefined,
  Icon28CopyOutline,
  Icon28DeleteOutline,
  Icon28EditOutline,
  Icon28ListPlayOutline,
  Icon28PlaySpeedOutline,
  Icon28SettingsOutline,
  Icon28ShareOutline,
  Icon28SubtitlesOutline,
  Icon20CopyOutline,
  Icon20DeleteOutline,
  Icon20GearOutline,
  Icon20ListPlayOutline,
  Icon20ShareOutline,
  Icon20CheckCircleOn,
  Icon24CheckCircleOn,
  Icon24ThumbsUpOutline,
  Icon16Cancel,
  Icon28MessageOutline,
};
const IconOptions = Object.keys(IconsMap);

export type IconName = keyof typeof IconsMap;

export const IconArgType = {
  options: IconOptions,
  control: 'select',
};

export const getIconArgBySize = (exp: RegExp) => {
  return {
    options: IconOptions.filter((name) => exp.test(name) || name === 'None'),
    control: 'select',
  };
};

export const getIconComponent = (iconName?: IconName, props?: Record<string, any>) => {
  if (iconName && iconName !== 'None') {
    const Icon = IconsMap[iconName];
    return <Icon {...props} />;
  }
  return undefined;
};
