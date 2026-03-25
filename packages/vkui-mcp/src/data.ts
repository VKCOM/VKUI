import { migrationV8 } from './migrations/v8.js';
import type {
  ComponentListItem,
  ComponentMetadata,
  DataProvider,
  HookListItem,
  HookMetadata,
  MigrationTarget,
} from './types.js';

const DEFAULT_DOCUMENTATION_BASE_URL = 'https://vkui.io';

export function createDataProvider(): DataProvider {
  const baseUrl =
    (typeof process !== 'undefined' ? process.env?.VKUI_DOCS_BASE_URL : undefined) ??
    DEFAULT_DOCUMENTATION_BASE_URL;
  const version = typeof process !== 'undefined' ? process.env?.VKUI_VERSION : undefined;
  const docsBaseUrl = version ? `${baseUrl.replace(/\/$/, '')}/${version}` : baseUrl;

  const cache = new Map<string, unknown>();

  async function readDataImpl<T extends object | string>(relativePath: string, type: 'text' | 'json'): Promise<T> {
    const cacheKey = version ? `${version}/${relativePath}` : relativePath;
    const cached = cache.get(cacheKey);
    if (cached !== undefined) {
      return cached as T;
    }

    const url = new URL(relativePath.replace(/\\/g, '/'), docsBaseUrl).toString();
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Не удалось загрузить ${url}: ${response.status}`);
    }
    const data = type === 'json'
      ? (await response.json()) as T
      : (await response.text()) as T;

    if (!data) {
      throw new Error('Не удалось найти MCP данные. Укажите VKUI_DOCS_BASE_URL.');
    }

    cache.set(cacheKey, data);

    return data;
  }

  async function readJson<T extends object>(relativePath: string): Promise<T> {
    return readDataImpl<T>(relativePath, 'json');
  }

  async function readText(relativePath: string): Promise<string | null> {
    return readDataImpl<string>(relativePath, 'text');
  }

  return {
    async listComponents() {
      return readJson<ComponentListItem[]>('mcp/components.json');
    },
    async getComponentMetadata(slug) {
      return readJson<ComponentMetadata>(`mcp/components/${slug}.json`);
    },
    async listHooks() {
      return readJson<HookListItem[]>('mcp/hooks.json');
    },
    async getHookMetadata(slug) {
      return readJson<HookMetadata>(`mcp/hooks/${slug}.json`);
    },
    async getExamples(slug) {
      return await readText(`mcp/examples/${slug}.txt`);
    },
    async listMigrationTargets() {
      return Object.keys(migrationV8)
        .sort((a, b) => a.localeCompare(b))
        .map<MigrationTarget>((name) => ({ name }));
    },
    async getMigrationTarget(name) {
      return migrationV8[name] ?? null;
    },
  };
}
