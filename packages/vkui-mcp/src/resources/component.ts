import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import type { DataProvider } from '../types.js';
import { templateVar, textContent, VKUI_SCHEME } from './utils.js';

export function registerComponentResource(server: McpServer, dataProvider: DataProvider): void {
  const template = new ResourceTemplate(`${VKUI_SCHEME}://component/{slug}`, {
    list: async () => {
      const components = await dataProvider.listComponents();
      return {
        resources: components.map((c) => ({
          uri: `${VKUI_SCHEME}://component/${c.slug}`,
          name: c.name,
          description: c.description,
          mimeType: 'application/json' as const,
        })),
      };
    },
    complete: {
      slug: async (value) => {
        const components = await dataProvider.listComponents();
        const lower = value.toLowerCase();
        return components
          .filter((c) => c.slug.includes(lower) || c.name.toLowerCase().includes(lower))
          .map((c) => c.slug)
          .slice(0, 20);
      },
    },
  });

  server.registerResource(
    'component',
    template,
    {
      description: 'Метаданные компонента VKUI (описание, props, примеры)',
      mimeType: 'application/json',
    },
    async (uri, variables) => {
      const slug = templateVar(variables.slug);
      if (!slug) {
        throw new McpError(ErrorCode.InvalidParams, 'Параметр slug обязателен');
      }
      const meta = await dataProvider.getComponentMetadata({ slug });
      if (!meta) {
        throw new McpError(ErrorCode.InvalidParams, `Компонент с slug "${slug}" не найден`);
      }
      return textContent(uri.toString(), JSON.stringify(meta, null, 2));
    },
  );
}
