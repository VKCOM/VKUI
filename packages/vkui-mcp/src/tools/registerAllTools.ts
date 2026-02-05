import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { DataProvider } from '../types.js';
import { registerGetComponentMetadata } from './getComponentMetadata.js';
import { registerGetExample } from './getExample.js';
import { registerGetHookMetadata } from './getHookMetadata.js';
import { registerGetMigrationTarget } from './getMigrationTarget.js';
import { registerListComponents } from './listComponents.js';
import { registerListExamples } from './listExamples.js';
import { registerListHooks } from './listHooks.js';
import { registerListMigrationTargets } from './listMigrationTargets.js';

const TOOLS_REGISTRATIONS: Array<(server: McpServer, dataProvider: DataProvider) => void> = [
  registerListComponents,
  registerGetComponentMetadata,
  registerListHooks,
  registerGetHookMetadata,
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
