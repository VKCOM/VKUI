import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { resolveSlug } from '../helpers/index.js';
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
      description: 'Детальная карточка хука с описанием и параметрами. Для получения примеров использования хука используйте get_examples, если они есть',
      inputSchema: INPUT_SCHEMA,
    },
    async (args) => {
      const slug = resolveSlug(args);
      const result = await dataProvider.getHookMetadata(slug);
      return toToolResult(result);
    },
  );
}
