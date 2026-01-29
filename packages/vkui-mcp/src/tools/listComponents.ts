import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({});

export function registerListComponents(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'list_components',
    {
      description: 'Возвращает список всех компонентов',
      inputSchema: INPUT_SCHEMA,
    },
    async () => {
      const result = await dataProvider.listComponents();
      return toToolResult(result);
    },
  );
}
