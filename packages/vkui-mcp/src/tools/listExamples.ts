import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({
  component: z.string().describe('Имя или slug компонента для фильтрации').optional(),
});

export function registerListExamples(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'list_examples',
    {
      description: 'Список примеров использования компонентов',
      inputSchema: INPUT_SCHEMA,
    },
    async ({ component }) => {
      const result = await dataProvider.listExamples({ component });
      return toToolResult(result);
    },
  );
}
