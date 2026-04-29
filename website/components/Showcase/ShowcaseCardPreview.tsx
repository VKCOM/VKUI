'use client';

import * as React from 'react';
import { IframePreview } from './IframePreview';
import { InlinePreview } from './InlinePreview';
import { ISOLATED_PREVIEW_SLUGS } from './previewShared';

export interface ShowcaseCardPreviewProps {
  slug: string;
  code: string;
  direction?: 'row' | 'column' | undefined;
  wrapper?: string | undefined;
}

export function ShowcaseCardPreview({ slug, code, direction, wrapper }: ShowcaseCardPreviewProps) {
  const Renderer = ISOLATED_PREVIEW_SLUGS.has(slug) ? IframePreview : InlinePreview;
  return <Renderer code={code} direction={direction} wrapper={wrapper} />;
}
