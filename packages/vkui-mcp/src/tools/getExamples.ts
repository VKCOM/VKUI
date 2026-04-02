import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { resolveSlug } from '../helpers/index.js';
import { toNameFromSlug } from '../helpers/toNameFromSlug.js';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({
  name: z.string().describe('Имя компонента или хука (например, Button)').optional(),
  slug: z.string().describe('Slug компонента или хука (например, button)').optional(),
});

export function registerGetExamples(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'get_examples',
    {
      description: 'Примеры использования компонента или хука. Принимает имя или slug компонента или хука.',
      inputSchema: INPUT_SCHEMA,
    },
    async (args) => {
      const slug = resolveSlug(args);
      const content = await dataProvider.getExamples(slug);
      return toToolResult({
        name: toNameFromSlug(slug),
        slug,
        content,
      });
    },
  );
}
