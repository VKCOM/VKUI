import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({
  id: z.string().describe('Идентификатор примера'),
});

export function registerGetExample(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'get_example',
    {
      description: 'Конкретный пример использования компонента',
      inputSchema: INPUT_SCHEMA,
    },
    async ({ id }) => {
      const result = await dataProvider.getExample({ id });
      return toToolResult(result);
    },
  );
}
