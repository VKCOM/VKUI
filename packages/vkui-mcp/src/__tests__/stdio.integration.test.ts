/**
 * Интеграционные тесты: запросы к MCP-серверу через stdio с моком HTTP-ресурсов.
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { createServer as createHttpServer } from 'node:http';
import path from 'node:path';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(__dirname, '../..');
const CLI_PATH = path.join(PACKAGE_ROOT, 'dist/cli.js');

const hasBuiltCli = () => existsSync(CLI_PATH);

/** Минимальные мок-данные для компонентов и примеров (чтобы не ходить в интернет) */
const MOCK_COMPONENTS = [
  {
    name: 'Alert',
    slug: 'alert',
    description: 'Модальное окно с кнопками',
    examplesCount: 2,
  },
];
const MOCK_EXAMPLES = [
  {
    id: 'alert-basic',
    component: 'Alert',
    componentSlug: 'alert',
    title: 'Базовый пример',
    code: '<Alert title="Пример" />',
    sourcePath: 'content/components/alert.mdx',
  },
];

/** Мок метаданных компонента Alert (для get_component_metadata) */
const MOCK_ALERT_METADATA = {
  name: 'Alert',
  slug: 'alert',
  description: 'Модальное окно с кнопками',
  props: [{ name: 'title', type: 'string', description: 'Заголовок' }],
  examples: MOCK_EXAMPLES,
};

/** Запускает HTTP-сервер с мок-данными, возвращает base URL и функцию остановки */
function startMockDocsServer(): Promise<{ baseUrl: string; close: () => void }> {
  const routes: Record<string, string> = {
    '/mcp/components.json': JSON.stringify(MOCK_COMPONENTS),
    '/mcp/examples.json': JSON.stringify(MOCK_EXAMPLES),
    '/mcp/examples/alert-basic.json': JSON.stringify(MOCK_EXAMPLES[0]),
    '/mcp/components/alert.json': JSON.stringify(MOCK_ALERT_METADATA),
  };

  return new Promise((resolve, reject) => {
    const server = createHttpServer((req, res) => {
      const url = req.url?.split('?')[0] ?? '';
      const body = routes[url];
      if (body !== undefined) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(body);
      } else {
        res.writeHead(404);
        res.end();
      }
    });
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      const port = address && typeof address === 'object' ? address.port : 0;
      const baseUrl = `http://127.0.0.1:${port}`;
      resolve({
        baseUrl,
        close: () => server.close(),
      });
    });
    server.on('error', reject);
  });
}

/** Отправляет JSON-RPC сообщение в процесс и возвращает промис с ответом по id */
function sendRequest(
  child: ReturnType<typeof spawn>,
  message: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const id = message.id;
  if (id === undefined) {
    return Promise.reject(new Error('Сообщение должно содержать id'));
  }

  return new Promise((resolve, reject) => {
    const rl = createInterface({ input: child.stdout!, crlfDelay: Infinity });
    const onLine = (line: string) => {
      try {
        const parsed = JSON.parse(line) as Record<string, unknown>;
        if (parsed.id === id) {
          rl.off('line', onLine);
          rl.close();
          resolve(parsed);
        }
      } catch {
        // не наш ответ — продолжаем слушать
      }
    };
    rl.on('line', onLine);
    child.stdin!.write(JSON.stringify(message) + '\n', (err) => {
      if (err) {
        rl.close();
        reject(err);
      }
    });
  });
}

describe.skipIf(!hasBuiltCli())('MCP server over stdio (integration)', () => {
  let mockBaseUrl: string;
  let closeMock: (() => void) | undefined;

  beforeAll(async () => {
    const { baseUrl, close } = await startMockDocsServer();
    mockBaseUrl = baseUrl;
    closeMock = close;
  });

  afterAll(() => {
    closeMock?.();
  });

  it('инициализация и вызов get_migration_target через stdio', async () => {
    const child = spawn('node', [CLI_PATH], {
      cwd: PACKAGE_ROOT,
      env: { ...process.env, VKUI_DOCS_BASE_URL: mockBaseUrl },
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    const initResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'test', version: '0.0.0' },
      },
    });

    expect(initResponse.result).toBeDefined();
    expect((initResponse.result as Record<string, unknown>).serverInfo).toBeDefined();

    // Уведомление о завершении инициализации (без id)
    child.stdin.write(
      JSON.stringify({
        jsonrpc: '2.0',
        method: 'notifications/initialized',
        params: {},
      }) + '\n',
    );

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'get_migration_target',
        arguments: { name: 'ActionSheet' },
      },
    });

    expect(callResponse.result).toBeDefined();
    const result = callResponse.result as { content?: Array<{ type: string; text?: string }> };
    expect(result.content).toBeDefined();
    const textContent = result.content?.find((c) => c.type === 'text');
    expect(textContent?.text).toBeDefined();
    expect(textContent!.text).toContain('onClosed');

    child.kill('SIGTERM');
  });

  it('list_migration_targets через stdio возвращает отсортированный список', async () => {
    const child = spawn('node', [CLI_PATH], {
      cwd: PACKAGE_ROOT,
      env: { ...process.env, VKUI_DOCS_BASE_URL: mockBaseUrl },
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    await sendRequest(child, {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'test', version: '0.0.0' },
      },
    });

    child.stdin.write(
      JSON.stringify({
        jsonrpc: '2.0',
        method: 'notifications/initialized',
        params: {},
      }) + '\n',
    );

    await new Promise((r) => setTimeout(r, 50));

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'list_migration_targets',
        arguments: {},
      },
    });

    if ('error' in callResponse && callResponse.error) {
      throw new Error(
        `MCP error: ${(callResponse.error as { message?: string }).message ?? JSON.stringify(callResponse.error)}`,
      );
    }
    expect(callResponse.result).toBeDefined();
    const result = callResponse.result as { content?: Array<{ type: string; text?: string }> };
    const textContent = result.content?.find((c) => c.type === 'text');
    expect(textContent?.text).toBeDefined();
    const parsed = JSON.parse(textContent!.text!) as Array<{ name: string }>;
    expect(parsed.length).toBeGreaterThan(0);
    expect(parsed.map((p) => p.name)).toContain('ActionSheet');
    const names = parsed.map((p) => p.name);
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);

    child.kill('SIGTERM');
  });

  it('list_components через stdio возвращает компоненты из мока', async () => {
    const child = spawn('node', [CLI_PATH], {
      cwd: PACKAGE_ROOT,
      env: { ...process.env, VKUI_DOCS_BASE_URL: mockBaseUrl },
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    await sendRequest(child, {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'test', version: '0.0.0' },
      },
    });

    child.stdin.write(
      JSON.stringify({
        jsonrpc: '2.0',
        method: 'notifications/initialized',
        params: {},
      }) + '\n',
    );
    await new Promise((r) => setTimeout(r, 50));

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'list_components',
        arguments: {},
      },
    });

    if ('error' in callResponse && callResponse.error) {
      throw new Error(
        `MCP error: ${(callResponse.error as { message?: string }).message ?? JSON.stringify(callResponse.error)}`,
      );
    }
    expect(callResponse.result).toBeDefined();
    const result = callResponse.result as { content?: Array<{ type: string; text?: string }> };
    const textContent = result.content?.find((c) => c.type === 'text');
    expect(textContent?.text).toBeDefined();
    const parsed = JSON.parse(textContent!.text!) as Array<{
      name: string;
      slug: string;
      description: string;
    }>;
    expect(parsed.length).toBe(1);
    expect(parsed[0].name).toBe('Alert');
    expect(parsed[0].slug).toBe('alert');
    expect(parsed[0].description).toContain('Модальное окно');

    child.kill('SIGTERM');
  });

  it('get_example через stdio возвращает пример по id', async () => {
    const child = spawn('node', [CLI_PATH], {
      cwd: PACKAGE_ROOT,
      env: { ...process.env, VKUI_DOCS_BASE_URL: mockBaseUrl },
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    await sendRequest(child, {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'test', version: '0.0.0' },
      },
    });

    child.stdin.write(
      JSON.stringify({
        jsonrpc: '2.0',
        method: 'notifications/initialized',
        params: {},
      }) + '\n',
    );
    await new Promise((r) => setTimeout(r, 50));

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'get_example',
        arguments: { id: 'alert-basic' },
      },
    });

    if ('error' in callResponse && callResponse.error) {
      throw new Error(
        `MCP error: ${(callResponse.error as { message?: string }).message ?? JSON.stringify(callResponse.error)}`,
      );
    }
    expect(callResponse.result).toBeDefined();
    const result = callResponse.result as { content?: Array<{ type: string; text?: string }> };
    const textContent = result.content?.find((c) => c.type === 'text');
    expect(textContent?.text).toBeDefined();
    const parsed = JSON.parse(textContent!.text!) as { id: string; title: string; code: string };
    expect(parsed.id).toBe('alert-basic');
    expect(parsed.title).toBe('Базовый пример');
    expect(parsed.code).toContain('<Alert');

    child.kill('SIGTERM');
  });

  it('get_component_metadata через stdio возвращает карточку компонента', async () => {
    const child = spawn('node', [CLI_PATH], {
      cwd: PACKAGE_ROOT,
      env: { ...process.env, VKUI_DOCS_BASE_URL: mockBaseUrl },
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    await sendRequest(child, {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'test', version: '0.0.0' },
      },
    });

    child.stdin.write(
      JSON.stringify({
        jsonrpc: '2.0',
        method: 'notifications/initialized',
        params: {},
      }) + '\n',
    );
    await new Promise((r) => setTimeout(r, 50));

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'get_component_metadata',
        arguments: { name: 'Alert' },
      },
    });

    if ('error' in callResponse && callResponse.error) {
      throw new Error(
        `MCP error: ${(callResponse.error as { message?: string }).message ?? JSON.stringify(callResponse.error)}`,
      );
    }
    expect(callResponse.result).toBeDefined();
    const result = callResponse.result as { content?: Array<{ type: string; text?: string }> };
    const textContent = result.content?.find((c) => c.type === 'text');
    expect(textContent?.text).toBeDefined();
    const parsed = JSON.parse(textContent!.text!) as {
      name: string;
      slug: string;
      description: string;
      props: unknown[];
    };
    expect(parsed.name).toBe('Alert');
    expect(parsed.slug).toBe('alert');
    expect(parsed.description).toContain('Модальное окно');
    expect(Array.isArray(parsed.props)).toBe(true);
    expect(parsed.props.length).toBeGreaterThan(0);

    child.kill('SIGTERM');
  });

  it('resources/list и resources/read для vkui://migration/v8', async () => {
    const child = spawn('node', [CLI_PATH], {
      cwd: PACKAGE_ROOT,
      env: { ...process.env, VKUI_DOCS_BASE_URL: mockBaseUrl },
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    await sendRequest(child, {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'test', version: '0.0.0' },
      },
    });

    child.stdin.write(
      JSON.stringify({
        jsonrpc: '2.0',
        method: 'notifications/initialized',
        params: {},
      }) + '\n',
    );
    await new Promise((r) => setTimeout(r, 50));

    const listResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'resources/list',
      params: {},
    });

    if ('error' in listResponse && listResponse.error) {
      throw new Error(
        `MCP error: ${(listResponse.error as { message?: string }).message ?? JSON.stringify(listResponse.error)}`,
      );
    }
    expect(listResponse.result).toBeDefined();
    const listResult = listResponse.result as { resources?: Array<{ uri: string }> };
    expect(listResult.resources).toBeDefined();
    const uris = listResult.resources!.map((r) => r.uri);
    expect(uris).toContain('vkui://migration/v8');

    const readResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 3,
      method: 'resources/read',
      params: { uri: 'vkui://migration/v8' },
    });

    if ('error' in readResponse && readResponse.error) {
      throw new Error(
        `MCP error: ${(readResponse.error as { message?: string }).message ?? JSON.stringify(readResponse.error)}`,
      );
    }
    expect(readResponse.result).toBeDefined();
    const readResult = readResponse.result as {
      contents?: Array<{ type: string; text?: string; uri?: string }>;
    };
    expect(readResult.contents).toBeDefined();
    const textBlock = readResult.contents!.find((c) => c.type === 'text');
    expect(textBlock?.text).toBeDefined();
    const parsed = JSON.parse(textBlock!.text!) as Array<{ name: string }>;
    expect(parsed.length).toBeGreaterThan(0);
    expect(parsed.map((p) => p.name)).toContain('ActionSheet');

    child.kill('SIGTERM');
  });
});
