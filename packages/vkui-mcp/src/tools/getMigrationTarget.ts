import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { migrationV8 } from '../migrations/v8.js';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const MIGRATION_TARGET_NAMES = Object.keys(migrationV8).sort() as [string, ...string[]];

const INPUT_SCHEMA = z.object({
  name: z
    .enum(MIGRATION_TARGET_NAMES)
    .describe('Один из компонентов или хуков, требующих миграции на v8'),
});

export function registerGetMigrationTarget(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'get_migration_target',
    {
      description:
        'Рекомендации по миграции конкретного компонента или хука на v8. Сначала вызови list_migration_targets, чтобы получить список доступных имён. Может вернуть описание и примеры before/after.',
      inputSchema: INPUT_SCHEMA,
    },
    async ({ name }) => {
      const result = await dataProvider.getMigrationTarget(name);
      if (result === null) {
        return toToolResult({
          error: 'Цель миграции не найдена',
          receivedInput: { name },
          hint: 'Вызови list_migration_targets для списка доступных целей (name должен совпадать с одним из элементов списка).',
        });
      }
      return toToolResult(result);
    },
  );
}
