'use client';

import * as React from 'react';
import { Flex } from '@vkontakte/vkui';
import {
  BlockWrapper,
  FixedLayoutWrapper,
  OnboardingTooltipWrapper,
  OverlayButtonWrapper,
} from '@/components/wrappers';

export const ISOLATED_PREVIEW_SLUGS = new Set<string>([
  'action-sheet',
  'modal-card',
  'modal-page',
  'panel-header-context',
  'popout-wrapper',
  'alert',
]);

export const STAGE_HEIGHT = 220;

export const wrapperMap: Record<string, React.ComponentType<React.PropsWithChildren>> = {
  BlockWrapper: BlockWrapper as React.ComponentType<React.PropsWithChildren>,
  FixedLayoutWrapper: FixedLayoutWrapper as React.ComponentType<React.PropsWithChildren>,
  OnboardingTooltipWrapper:
    OnboardingTooltipWrapper as React.ComponentType<React.PropsWithChildren>,
  OverlayButtonWrapper: OverlayButtonWrapper as React.ComponentType<React.PropsWithChildren>,
};

export function transformCode(code: string): string {
  if (code.trim().startsWith('<')) {
    return `<React.Fragment>\n${code}\n</React.Fragment>;`;
  }
  return `() => { ${code} }`;
}

export function makeDefaultWrapper(direction: 'row' | 'column' = 'row') {
  return function DefaultPreviewWrapper({ children }: React.PropsWithChildren) {
    return (
      <Flex gap="m" direction={direction} align="center" justify="center" inlineSize="100%">
        {children}
      </Flex>
    );
  };
}

export function resolveWrapper(
  wrapper: string | undefined,
  direction: 'row' | 'column' | undefined,
): React.ComponentType<React.PropsWithChildren> {
  if (wrapper && wrapperMap[wrapper]) {
    return wrapperMap[wrapper];
  }
  return makeDefaultWrapper(direction);
}

export interface PreviewRendererProps {
  code: string;
  direction?: 'row' | 'column' | undefined;
  wrapper?: string | undefined;
}
