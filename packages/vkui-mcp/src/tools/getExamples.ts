import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { DataProvider } from '../types.js';
import { toToolResult } from './utils.js';
import {resolveSlug} from "../helpers/index.js";
import {toNameFromSlug} from "../helpers/toNameFromSlug.js";

const INPUT_SCHEMA = z.object({
  name: z.string().describe('Имя компонента (например, Button)').optional(),
  slug: z.string().describe('Slug компонента (например, button)').optional(),
});

export function registerGetExamples(server: McpServer, dataProvider: DataProvider): void {
  server.registerTool(
    'get_examples',
    {
      description: 'Примеры использования компонента. Принимает имя или slug компонента.',
      inputSchema: INPUT_SCHEMA,
    },
    async (args) => {
      const slug = resolveSlug(args);
      const content = await dataProvider.getExamples(slug);
      return toToolResult({
        name: toNameFromSlug(slug),
        slug,
        content,
      });
    },
  );
}
