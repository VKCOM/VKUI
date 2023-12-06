import type { ChipOption } from '../ChipsInputBase/types';

export type FocusActionType = 'next' | 'prev';

export type CreateNewOptionPreset = {
  actionText: string;
};

export type PlaceholderPreset = {
  placeholder: string;
};

export type ServicePreset = CreateNewOptionPreset | PlaceholderPreset;

export type OptionPreset<O extends ChipOption> = O | ServicePreset;
