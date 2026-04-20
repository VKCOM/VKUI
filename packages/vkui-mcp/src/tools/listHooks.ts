import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';

const INPUT_SCHEMA = z.object({});

export function registerListHooks(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'list_hooks',
    {
      description: 'Возвращает список всех хуков',
      inputSchema: INPUT_SCHEMA,
    },
    async () => {
      const result = await dataProvider.listHooks();
      return toToolResult(result);
    },
  );
}
