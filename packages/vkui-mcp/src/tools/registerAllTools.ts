import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { DataProvider } from '../types.js';
import { registerGetComponentMetadata } from './getComponentMetadata.js';
import { registerGetDocs } from './getDocs.js';
import { registerGetExamples } from './getExamples.js';
import { registerGetHookMetadata } from './getHookMetadata.js';
import { registerGetMigrationTarget } from './getMigrationTarget.js';
import { registerListComponents } from './listComponents.js';
import { registerListComponentsByTag } from './listComponentsByTag.js';
import { registerListHooks } from './listHooks.js';
import { registerListMigrationTargets } from './listMigrationTargets.js';
import { registerListTags } from './listTags.js';

const TOOLS_REGISTRATIONS: Array<(server: McpServer, dataProvider: DataProvider) => void> = [
  registerListComponents,
  registerListTags,
  registerListComponentsByTag,
  registerGetComponentMetadata,
  registerListHooks,
  registerGetHookMetadata,
  registerGetExamples,
  registerGetDocs,
  registerListMigrationTargets,
  registerGetMigrationTarget,
];

export function registerAllTools(server: McpServer, dataProvider: DataProvider): void {
  for (const register of TOOLS_REGISTRATIONS) {
    register(server, dataProvider);
  }
}
