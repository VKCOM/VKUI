import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createRequire } from 'node:module';
import { createDataProvider } from './data.js';
import { registerAllResources } from './resources/registerAllResources.js';
import { registerAllTools } from './tools/registerAllTools.js';

const require = createRequire(import.meta.url);
const packageJSON = require('../package.json') as { name: string; version: string };

const SERVER_INFO = {
  name: packageJSON.name,
  version: packageJSON.version,
};

export function createServer(): McpServer {
  const dataProvider = createDataProvider();
  const server = new McpServer(SERVER_INFO);
  registerAllTools(server, dataProvider);
  registerAllResources(server, dataProvider);
  return server;
}

export async function startStdioServer(): Promise<McpServer> {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  return server;
}
