import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { DataProvider } from '../types.js';
import { registerGetComponentMetadata } from './getComponentMetadata.js';
import { registerGetExample } from './getExample.js';
import { registerGetMigrationTarget } from './getMigrationTarget.js';
import { registerListComponents } from './listComponents.js';
import { registerListExamples } from './listExamples.js';
import { registerListMigrationTargets } from './listMigrationTargets.js';

const TOOLS_REGISTRATIONS: Array<(server: McpServer, dataProvider: DataProvider) => void> = [
  registerListComponents,
  registerGetComponentMetadata,
  registerListExamples,
  registerGetExample,
  registerListMigrationTargets,
  registerGetMigrationTarget,
];

export function registerAllTools(server: McpServer, dataProvider: DataProvider): void {
  for (const register of TOOLS_REGISTRATIONS) {
    register(server, dataProvider);
  }
}
