import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { DataProvider } from '../types.js';
import { registerComponentResource } from './component.js';
import { registerMigrationTargetResource } from './migrationTarget.js';
import { registerMigrationV8Overview } from './migrationV8Overview.js';

const RESOURCE_REGISTRATIONS: Array<(server: McpServer, dataProvider: DataProvider) => void> = [
  registerMigrationV8Overview,
  registerComponentResource,
  registerMigrationTargetResource,
];

export function registerAllResources(server: McpServer, dataProvider: DataProvider): void {
  for (const register of RESOURCE_REGISTRATIONS) {
    register(server, dataProvider);
  }
}
