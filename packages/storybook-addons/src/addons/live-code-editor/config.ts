export interface LiveCodeEditorConfig {
  format: ((code: string) => Promise<string>) | undefined;
}

const config: LiveCodeEditorConfig = {
  format: undefined,
};

export const getLiveCodeEditorConfig = () => config;

export const setLiveCodeEditorConfig = (newConfig: Partial<LiveCodeEditorConfig>) => {
  if (newConfig.format) {
    config.format = newConfig.format;
  }
};
