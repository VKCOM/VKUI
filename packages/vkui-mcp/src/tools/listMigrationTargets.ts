import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({});

export function registerListMigrationTargets(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'list_migration_targets',
    {
      description: 'Список компонентов и хуков, требующих миграции на v8',
      inputSchema: INPUT_SCHEMA,
    },
    async () => {
      const result = await dataProvider.listMigrationTargets();
      return toToolResult(result);
    },
  );
}
