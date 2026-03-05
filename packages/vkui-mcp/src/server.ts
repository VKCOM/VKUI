import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createDataProvider } from './data.js';
import { registerAllResources } from './resources/registerAllResources.js';
import { registerAllTools } from './tools/registerAllTools.js';

const SERVER_INFO = {
  name: '@vkontakte/vkui-mcp',
  version: '0.0.1',
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
