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
  examples: ExampleItem[];
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
  before: string;
  after: string;
}

export type MigrationComponentMap = Record<string, MigrationComponentExample>;

export interface MigrationTarget {
  name: string;
}

export interface DataProvider {
  listComponents: () => Promise<ComponentListItem[]>;
  getComponentMetadata: (params: {
    name?: string;
    slug?: string;
  }) => Promise<ComponentMetadata | null>;
  listExamples: (params?: { component?: string }) => Promise<ExampleItem[]>;
  getExample: (params: { id: string }) => Promise<ExampleItem>;
  listMigrationTargets: () => Promise<MigrationTarget[]>;
  getMigrationTarget: (params: { name: string }) => Promise<MigrationComponentExample | null>;
}
