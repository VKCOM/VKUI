export type NamedImports = Record<string, unknown>;

export type ExtraLibs = Record<string, string | (() => Promise<string>)>;

export interface StoryState {
  code: string;
  initialCode: string;
}

export interface LiveCodeEditorParameters {
  code?: string;
  getGlobals?: () => Array<NamedImports | Promise<NamedImports>>;
  scope?: NamedImports;
  extraLibs?: ExtraLibs;
  disabled?: boolean;
  format?: (code: string) => Promise<string>;
}
