import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({
  name: z.string().describe('Имя хука (например, useModalManager)').optional(),
  slug: z.string().describe('Slug хука (например, use-modal-manager)').optional(),
});

export function registerGetHookMetadata(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'get_hook_metadata',
    {
      description: 'Детальная карточка хука с описанием и параметрами',
      inputSchema: INPUT_SCHEMA,
    },
    async ({ name, slug }) => {
      if (!name && !slug) {
        throw new Error('Нужно указать name или slug.');
      }
      const result = await dataProvider.getHookMetadata({ name, slug });
      return toToolResult(result);
    },
  );
}
