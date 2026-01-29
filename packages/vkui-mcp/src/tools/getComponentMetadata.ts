import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
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
      description: 'Детальная карточка компонента с описанием и свойствами',
      inputSchema: INPUT_SCHEMA,
    },
    async ({ name, slug }) => {
      if (!name && !slug) {
        throw new Error('Нужно указать name или slug.');
      }
      const result = await dataProvider.getComponentMetadata({ name, slug });
      return toToolResult(result);
    },
  );
}
