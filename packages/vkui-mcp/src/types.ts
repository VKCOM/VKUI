export interface ComponentListItem {
  name: string;
  slug: string;
  description: string;
  examplesCount: number;
}

export interface ComponentMetadata {
  name: string;
  slug: string;
  description: string;
  props: unknown[];
}

export interface HookListItem {
  name: string;
  slug: string;
  description: string;
  examplesCount: number;
}

export interface HookMetadata {
  name: string;
  slug: string;
  description: string;
  props: unknown[];
}

export interface ExampleItem {
  id: string;
  component: string;
  componentSlug: string;
  title: string;
  code: string;
  sourcePath: string;
}

export interface MigrationComponentExample {
  description?: string;
  before?: string;
  after?: string;
}

export type MigrationComponentMap = Record<string, MigrationComponentExample>;

export interface MigrationTarget {
  name: string;
}

export interface DataProvider {
  listComponents: () => Promise<ComponentListItem[]>;
  getComponentMetadata: (slug: string) => Promise<ComponentMetadata | null>;
  listHooks: () => Promise<HookListItem[]>;
  getHookMetadata: (slug: string) => Promise<HookMetadata | null>;
  getExamples: (slug: string) => Promise<string | null>;
  listMigrationTargets: () => Promise<MigrationTarget[]>;
  getMigrationTarget: (component: string) => Promise<MigrationComponentExample | null>;
}
