/* eslint-disable no-restricted-globals, no-restricted-properties, spaced-comment */
/// <reference types="vite/client" />

import type * as React from 'react';
import { flushSync } from 'react-dom';
import { createRoot, type Root } from 'react-dom/client';
import '../index.css';
import '../../src/styles/layout.css';

type Story = React.ComponentType<Record<string, unknown>>;
type StoryModule = Record<string, unknown>;

const storyModules = import.meta.glob<StoryModule>('../../src/**/*.e2e-playground.tsx');
const rootElement = document.getElementById('root')!;
let root: Root | undefined;

const getStoryModulePath = (storyId: string) => {
  const candidates = Object.keys(storyModules)
    .map((modulePath) => {
      const fileName = modulePath.split('/').pop()!;
      const moduleName = fileName.replace('.e2e-playground.tsx', '');
      return { modulePath, moduleName };
    })
    .filter(({ moduleName }) => storyId.startsWith(moduleName))
    .sort((a, b) => b.moduleName.length - a.moduleName.length);

  return candidates[0]?.modulePath;
};

const storyCache = new Map<string, Story>();

async function resolveStory(storyId: string): Promise<Story | undefined> {
  const cachedStory = storyCache.get(storyId);
  if (cachedStory) {
    return cachedStory;
  }

  const modulePath = getStoryModulePath(storyId);
  const loadStoryModule = modulePath && storyModules[modulePath];
  if (!loadStoryModule) {
    return undefined;
  }

  const story = (await loadStoryModule())[storyId];
  if (typeof story !== 'function') {
    return undefined;
  }

  storyCache.set(storyId, story as Story);
  return story as Story;
}

const galleryWindow = window as unknown as Window & {
  mount: (params: { story: string; props?: Record<string, unknown> }) => Promise<void>;
  unmount: () => Promise<void>;
};

galleryWindow.mount = async ({ story: storyId, props }) => {
  const Story = await resolveStory(storyId);
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
