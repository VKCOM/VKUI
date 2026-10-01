/* eslint-disable no-restricted-globals, no-restricted-properties, spaced-comment */
/// <reference types="vite/client" />

import type * as React from 'react';
import { flushSync } from 'react-dom';
import { createRoot, type Root } from 'react-dom/client';
import '../index.css';
import '../../src/styles/layout.css';

type Story = React.ComponentType<Record<string, unknown>>;
type StoryModule = Record<string, unknown>;

const storyModules = import.meta.glob('../../src/**/*.e2e-playground.tsx', { eager: true });
const rootElement = document.getElementById('root')!;
let root: Root | undefined;

function resolveStory(storyId: string): Story | undefined {
  for (const module of Object.values(storyModules)) {
    const story = (module as StoryModule)[storyId];
    if (typeof story === 'function') {
      return story as Story;
    }
  }
  return undefined;
}

const galleryWindow = window as unknown as Window & {
  mount: (params: { story: string; props?: Record<string, unknown> }) => Promise<void>;
  unmount: () => Promise<void>;
};

galleryWindow.mount = async ({ story: storyId, props }) => {
  const Story = resolveStory(storyId);
  if (!Story) {
    throw new Error(`Unknown story: ${storyId}`);
  }

  root ??= createRoot(rootElement);
  flushSync(() => root!.render(<Story {...props} />));
};

galleryWindow.unmount = async () => {
  root?.unmount();
  root = undefined;
};
