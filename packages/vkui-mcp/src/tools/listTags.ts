import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({});

export function registerListTags(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'list_tags',
    {
      description:
        'Возвращает список всех доступных тегов компонентов. Используйте теги для фильтрации компонентов через list_components_by_tag',
      inputSchema: INPUT_SCHEMA,
    },
    async () => {
      const result = await dataProvider.listTags();
      return toToolResult(result);
    },
  );
}
