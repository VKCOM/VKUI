import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({
  name: z.string().describe('Название компонента или хука'),
});

export function registerGetMigrationTarget(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'get_migration_target',
    {
      description: 'Рекомендации по миграции конкретного компонента или хука на v8',
      inputSchema: INPUT_SCHEMA,
    },
    async ({ name }) => {
      const result = await dataProvider.getMigrationTarget({ name });
      return toToolResult(result);
    },
  );
}
