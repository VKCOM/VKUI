import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({
  tag: z
    .string()
    .describe(
      'Тег для фильтрации (например: button, form, modal, navigation). Получить список доступных тегов: list_tags',
    ),
});

export function registerListComponentsByTag(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'list_components_by_tag',
    {
      description: 'Возвращает компоненты по тегу',
      inputSchema: INPUT_SCHEMA,
    },
    async ({ tag }) => {
      const result = await dataProvider.listComponentsByTag(tag);
      return toToolResult(result);
    },
  );
}
