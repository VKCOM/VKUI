import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { DataProvider } from '../types.js';
import { registerGetComponentMetadata } from './getComponentMetadata.js';
import { registerGetExample } from './getExample.js';
import { registerListComponents } from './listComponents.js';
import { registerListExamples } from './listExamples.js';

const TOOLS_REGISTRATIONS: Array<(server: McpServer, dataProvider: DataProvider) => void> = [
  registerListComponents,
  registerGetComponentMetadata,
  registerListExamples,
  registerGetExample,
];

export function registerAllTools(server: McpServer, dataProvider: DataProvider): void {
  for (const register of TOOLS_REGISTRATIONS) {
    register(server, dataProvider);
  }
}
