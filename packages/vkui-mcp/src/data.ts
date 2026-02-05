import { migrationV8 } from './migrations/v8.js';
import type {
  ComponentListItem,
  ComponentMetadata,
  DataProvider,
  ExampleItem,
  HookListItem,
  HookMetadata,
  MigrationTarget,
} from './types.js';

const DEFAULT_DOCUMENTATION_BASE_URL = 'https://vkui.io';

export function createDataProvider(): DataProvider {
  const baseUrl =
    (typeof process !== 'undefined' ? process.env?.VKUI_DOCS_BASE_URL : undefined) ??
    DEFAULT_DOCUMENTATION_BASE_URL;

  const cache = new Map<string, unknown>();

  async function readJson<T>(relativePath: string): Promise<T> {
    const cacheKey = relativePath;
    const cached = cache.get(cacheKey);
    if (cached !== undefined) {
      return cached as T;
    }

    let data: T | null;

    const url = new URL(relativePath.replace(/\\/g, '/'), baseUrl).toString();
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Не удалось загрузить ${url}: ${response.status}`);
    }
    data = (await response.json()) as T;

    if (!data) {
      throw new Error('Не удалось найти MCP данные. Укажите VKUI_DOCS_BASE_URL.');
    }

    cache.set(cacheKey, data);
    return data;
  }

  return {
    async listComponents() {
      return readJson<ComponentListItem[]>('mcp/components.json');
    },
    async getComponentMetadata({ name, slug }) {
      const components = await readJson<ComponentListItem[]>('mcp/components.json');
      const component = components.find((item) => item.name === name || item.slug === slug);
      if (!component) {
        return null;
      }
      const raw = await readJson<ComponentMetadata & { exampleIds?: string[] }>(
        `mcp/components/${component.slug}.json`,
      );
      if (raw.exampleIds?.length) {
        const examples = await Promise.all(
          raw.exampleIds.map((id) => readJson<ExampleItem>(`mcp/examples/${id}.json`)),
        );
        const { exampleIds: _ids, ...rest } = raw;
        return { ...rest, examples } as ComponentMetadata;
      }
      return raw as ComponentMetadata;
    },
    async listHooks() {
      return readJson<HookListItem[]>('mcp/hooks.json');
    },
    async getHookMetadata({ name, slug }) {
      const hooks = await readJson<HookListItem[]>('mcp/hooks.json');
      const hook = hooks.find((item) => item.name === name || item.slug === slug);
      if (!hook) {
        return null;
      }
      const raw = await readJson<HookMetadata & { exampleIds?: string[] }>(
        `mcp/hooks/${hook.slug}.json`,
      );
      if (raw.exampleIds?.length) {
        const examples = await Promise.all(
          raw.exampleIds.map((id) => readJson<ExampleItem>(`mcp/examples/${id}.json`)),
        );
        const { exampleIds: _ids, ...rest } = raw;
        return { ...rest, examples } as HookMetadata;
      }
      return raw as HookMetadata;
    },
    async listExamples({ component } = {}) {
      const examples = await readJson<ExampleItem[]>('mcp/examples.json');
      if (!component) {
        return examples;
      }
      return examples.filter(
        (item) => item.component === component || item.componentSlug === component,
      );
    },
    async getExample({ id }) {
      return readJson<ExampleItem>(`mcp/examples/${id}.json`);
    },
    async listMigrationTargets() {
      return Object.keys(migrationV8)
        .sort((a, b) => a.localeCompare(b))
        .map<MigrationTarget>((name) => ({ name }));
    },
    async getMigrationTarget({ name }) {
      return migrationV8[name] ?? null;
    },
  };
}
