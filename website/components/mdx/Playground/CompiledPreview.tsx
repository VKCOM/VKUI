'use client';

import * as React from 'react';
import { PanelSpinner } from '@vkontakte/vkui';
import { previews } from '@/generated/previews';

class PreviewBoundary extends React.Component<React.PropsWithChildren, { error: string | null }> {
  state: { error: string | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error: error.message };
  }

  render() {
    return this.state.error ? <pre>{this.state.error}</pre> : this.props.children;
  }
}

export function CompiledPreview({ previewId }: { previewId: string }) {
  const Preview = previews[previewId];
  if (!Preview) {
    throw new Error(`Missing compiled Playground: ${previewId}`);
  }

  return (
    <PreviewBoundary key={previewId}>
      <React.Suspense fallback={<PanelSpinner visibilityDelay={250} />}>
        <Preview />
      </React.Suspense>
    </PreviewBoundary>
  );
}
