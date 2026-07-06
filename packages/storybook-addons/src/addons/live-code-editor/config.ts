export interface LiveCodeEditorConfig {
  format: ((code: string) => Promise<string>) | undefined;
}

const GLOBAL_KEY = '__VKUI_LIVE_CODE_EDITOR_CONFIG__';

const getDefaultConfig = (): LiveCodeEditorConfig => ({
  format: undefined,
});

const config: LiveCodeEditorConfig = ((window as any)[GLOBAL_KEY] ??= getDefaultConfig());

export const getLiveCodeEditorConfig = () => config;

export const setLiveCodeEditorConfig = (newConfig: Partial<LiveCodeEditorConfig>) => {
  if (newConfig.format) {
    config.format = newConfig.format;
  }
};
