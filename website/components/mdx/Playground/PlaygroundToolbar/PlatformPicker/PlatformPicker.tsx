import * as React from 'react';
import { type PlatformType, SegmentedControl } from '@vkontakte/vkui';
import { usePlaygroundContext } from '../../context';
import { PLATFORM_OPTIONS } from './constants';

export function PlatformPicker({ className }: { className?: string }) {
  const { platform, setContext, isLoading } = usePlaygroundContext();

  const handlePlatformChange = (newPlatform: PlatformType) => {
    void setContext({ platform: newPlatform });
  };

  return (
    <SegmentedControl
      size="m"
      value={platform}
      className={className}
      options={PLATFORM_OPTIONS}
      // @ts-expect-error: TS2232 fix SegmentedControl types?
      onChange={isLoading ? undefined : handlePlatformChange}
    />
  );
}
