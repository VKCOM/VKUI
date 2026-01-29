import type { ComponentListItem, ComponentMetadata, DataProvider, ExampleItem } from './types.js';

const VKUI_DOCUMENTATION_URL = 'https://vkui.io';

const cache = new Map<string, any>();

async function readJson<T>(relativePath: string): Promise<T> {
  const cacheKey = relativePath;
  const cached = cache.get(cacheKey);
  if (cached !== undefined) {
    return cached;
  }

  let data: T;

  const url = new URL(relativePath.replace(/\\/g, '/'), VKUI_DOCUMENTATION_URL).toString();
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Не удалось загрузить ${url}: ${response.status}`);
  }
  data = (await response.json()) as T;

  if (!data) {
    throw new Error('Не удалось найти MCP данные.');
  }

  cache.set(cacheKey, data);
  return data;
}

export function createDataProvider(): DataProvider {
  return {
    async listComponents() {
      return await readJson<ComponentListItem[]>('mcp/components.json');
    },
    async getComponentMetadata({ name, slug }) {
      const components = await readJson<ComponentListItem[]>('mcp/components.json');
      const component = components.find((item) => item.name === name || item.slug === slug);
      if (!component) {
        return null;
      }
      return await readJson<ComponentMetadata>(`mcp/components/${component.slug}.json`);
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
      return await readJson<ExampleItem>(`mcp/examples/${id}.json`);
    },
  };
}
