import { useSyncExternalStore } from 'react';
import { createStore, type Store } from './createStore';
import type { ExtraLibs, StoryState } from './types';

interface LiveCodeEditorState {
  extraLibs: ExtraLibs;
  stories: Record<string, StoryState>;
}

const store: Store<LiveCodeEditorState> = ((window.parent as any)._addon_live_code_editor_store ||=
  createStore<LiveCodeEditorState>({
    extraLibs: {},
    stories: {},
  }));

export const useLiveCodeEditorState = () =>
  [useSyncExternalStore(store.subscribe, store.getState), store.setState] as const;
