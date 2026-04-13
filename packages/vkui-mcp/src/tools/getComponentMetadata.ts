import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { resolveSlug } from '../helpers/index.js';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({
  name: z.string().describe('Имя компонента (например, Button)').optional(),
  slug: z.string().describe('Slug компонента (например, button)').optional(),
});

export function registerGetComponentMetadata(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'get_component_metadata',
    {
      description:
        'Детальная карточка компонента с описанием и свойствами. Для получения примеров использования компонентов используйте get_examples',
      inputSchema: INPUT_SCHEMA,
    },
    async (args) => {
      const slug = resolveSlug(args);
      const result = await dataProvider.getComponentMetadata(slug);
      return toToolResult(result);
    },
  );
}
