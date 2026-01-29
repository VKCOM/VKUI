import { migrationV8 } from './migrations/v8.js';
import type {
  ComponentListItem,
  ComponentMetadata,
  DataProvider,
  ExampleItem,
  MigrationTarget,
} from './types.js';

const DOCUMENTATION_BASE_URL = 'https://vkui.io';

export function createDataProvider(): DataProvider {
  const cache = new Map<string, unknown>();

  async function readJson<T>(relativePath: string): Promise<T> {
    const cacheKey = relativePath;
    const cached = cache.get(cacheKey);
    if (cached !== undefined) {
      return cached as T;
    }

    let data: T | null;

    const url = new URL(relativePath.replace(/\\/g, '/'), DOCUMENTATION_BASE_URL).toString();
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
      return readJson<ComponentMetadata>(`mcp/components/${component.slug}.json`);
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
