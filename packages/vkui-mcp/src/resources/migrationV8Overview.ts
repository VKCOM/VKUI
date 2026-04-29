import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { DataProvider } from '../types.js';
import { textContent, VKUI_SCHEME } from './utils.js';

export const MIGRATION_V8_OVERVIEW_URI = `${VKUI_SCHEME}://migration/v8`;

export function registerMigrationV8Overview(server: McpServer, dataProvider: DataProvider): void {
  server.registerResource(
    'migration-v8-overview',
    MIGRATION_V8_OVERVIEW_URI,
    {
      description: 'Обзор компонентов и хуков, требующих миграции на VKUI v8',
      mimeType: 'application/json',
    },
    async (uri) => {
      const targets = await dataProvider.listMigrationTargets();
      return textContent(uri.toString(), JSON.stringify(targets, null, 2));
    },
  );
}
