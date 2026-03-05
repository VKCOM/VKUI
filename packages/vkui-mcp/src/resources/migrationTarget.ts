import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import type { DataProvider } from '../types.js';
import { templateVar, textContent, VKUI_SCHEME } from './utils.js';

export function registerMigrationTargetResource(
  server: McpServer,
  dataProvider: DataProvider,
): void {
  const template = new ResourceTemplate(`${VKUI_SCHEME}://migration/{name}`, {
    list: async () => {
      const targets = await dataProvider.listMigrationTargets();
      return {
        resources: targets.map((t) => ({
          uri: `${VKUI_SCHEME}://migration/${encodeURIComponent(t.name)}`,
          name: t.name,
          description: `Рекомендации по миграции ${t.name} на v8`,
          mimeType: 'application/json' as const,
        })),
      };
    },
    complete: {
      name: async (value) => {
        const targets = await dataProvider.listMigrationTargets();
        const lower = value.toLowerCase();
        return targets
          .filter((t) => t.name.toLowerCase().includes(lower))
          .map((t) => t.name)
          .slice(0, 20);
      },
    },
  });

  server.registerResource(
    'migration-target',
    template,
    {
      description: 'Рекомендации по миграции конкретного компонента или хука на VKUI v8',
      mimeType: 'application/json',
    },
    async (uri, variables) => {
      const rawName = variables.name;
      const name = templateVar(rawName);
      if (!name) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Параметр name обязателен. Переданный input: ${JSON.stringify({ name: rawName })}`,
        );
      }
      const decodedName = decodeURIComponent(name);
      const target = await dataProvider.getMigrationTarget({ name: decodedName });
      if (!target) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Цель миграции не найдена. Переданный name: ${JSON.stringify(decodedName)}. Вызовите list_migration_targets для списка доступных целей.`,
        );
      }
      return textContent(uri.toString(), JSON.stringify(target, null, 2));
    },
  );
}
