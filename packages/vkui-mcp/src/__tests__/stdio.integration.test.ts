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

/** Мок списка хуков и метаданных хука (для list_hooks и get_hook_metadata) */
const MOCK_HOOKS = [
  {
    name: 'useModalManager',
    slug: 'use-modal-manager',
    description: 'Хук для управления модальными окнами',
    examplesCount: 1,
  },
];
const MOCK_USE_MODAL_MANAGER_METADATA = {
  name: 'useModalManager',
  slug: 'use-modal-manager',
  description: 'Хук для управления модальными окнами',
  props: [{ name: 'saveHistory', type: 'boolean', description: 'Сохранять историю' }],
  examples: [],
};

/** Запускает HTTP-сервер с мок-данными, возвращает base URL и функцию остановки */
function startMockDocsServer(): Promise<{ baseUrl: string; close: () => void }> {
  const routes: Record<string, string> = {
    '/mcp/components.json': JSON.stringify(MOCK_COMPONENTS),
    '/mcp/hooks.json': JSON.stringify(MOCK_HOOKS),
    '/mcp/examples.json': JSON.stringify(MOCK_EXAMPLES),
    '/mcp/examples/alert-basic.json': JSON.stringify(MOCK_EXAMPLES[0]),
    '/mcp/components/alert.json': JSON.stringify(MOCK_ALERT_METADATA),
    '/mcp/hooks/use-modal-manager.json': JSON.stringify(MOCK_USE_MODAL_MANAGER_METADATA),
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

const INIT_MESSAGE = {
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'test', version: '0.0.0' },
  },
} as const;

const INITIALIZED_NOTIFICATION =
  JSON.stringify({
    jsonrpc: '2.0',
    method: 'notifications/initialized',
    params: {},
  }) + '\n';

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

/** Запускает процесс MCP-сервера с заданным baseUrl для документации */
function spawnMcpProcess(baseUrl: string): ReturnType<typeof spawn> {
  return spawn('node', [CLI_PATH], {
    cwd: PACKAGE_ROOT,
    env: { ...process.env, VKUI_DOCS_BASE_URL: baseUrl },
    stdio: ['pipe', 'pipe', 'pipe'],
  });
}

/**
 * Выполняет инициализацию MCP-сессии: initialize → notifications/initialized → пауза.
 * Возвращает ответ на initialize (для проверки serverInfo при необходимости).
 */
async function initMcpSession(child: ReturnType<typeof spawn>): Promise<Record<string, unknown>> {
  const initResponse = await sendRequest(child, { ...INIT_MESSAGE });
  child.stdin!.write(INITIALIZED_NOTIFICATION);
  await new Promise((r) => setTimeout(r, 50));
  return initResponse;
}

/** Бросает ошибку, если в ответе MCP есть поле error */
function assertNoMcpError(response: Record<string, unknown>): void {
  if ('error' in response && response.error) {
    const msg = (response.error as { message?: string }).message ?? JSON.stringify(response.error);
    throw new Error(`MCP error: ${msg}`);
  }
}

/** Извлекает текстовый content из результата tools/call (content) или resources/read (contents) */
function getResultTextContent(result: Record<string, unknown> | undefined): string {
  const list =
    (result?.content as Array<{ type: string; text?: string }> | undefined) ??
    (result?.contents as Array<{ type: string; text?: string }> | undefined);
  const block = list?.find((c) => c.type === 'text');
  if (block?.text === undefined) {
    throw new Error('Ожидался text content в ответе');
  }
  return block.text;
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
    const child = spawnMcpProcess(mockBaseUrl);
    const initResponse = await initMcpSession(child);
    expect(initResponse.result).toBeDefined();
    expect((initResponse.result as Record<string, unknown>).serverInfo).toBeDefined();

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
    expect(getResultTextContent(callResponse.result as Record<string, unknown>)).toContain(
      'onClosed',
    );

    child.kill('SIGTERM');
  });

  it('list_migration_targets через stdio возвращает отсортированный список', async () => {
    const child = spawnMcpProcess(mockBaseUrl);
    await initMcpSession(child);

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'list_migration_targets',
        arguments: {},
      },
    });

    assertNoMcpError(callResponse);
    const parsed = JSON.parse(
      getResultTextContent(callResponse.result as Record<string, unknown>),
    ) as Array<{ name: string }>;
    expect(parsed.length).toBeGreaterThan(0);
    expect(parsed.map((p) => p.name)).toContain('ActionSheet');
    const names = parsed.map((p) => p.name);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));

    child.kill('SIGTERM');
  });

  it('list_components через stdio возвращает компоненты из мока', async () => {
    const child = spawnMcpProcess(mockBaseUrl);
    await initMcpSession(child);

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'list_components',
        arguments: {},
      },
    });

    assertNoMcpError(callResponse);
    const parsed = JSON.parse(
      getResultTextContent(callResponse.result as Record<string, unknown>),
    ) as Array<{ name: string; slug: string; description: string }>;
    expect(parsed).toHaveLength(1);
    expect(parsed[0].name).toBe('Alert');
    expect(parsed[0].slug).toBe('alert');
    expect(parsed[0].description).toContain('Модальное окно');

    child.kill('SIGTERM');
  });

  it('list_hooks через stdio возвращает хуки из мока', async () => {
    const child = spawnMcpProcess(mockBaseUrl);
    await initMcpSession(child);

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'list_hooks',
        arguments: {},
      },
    });

    assertNoMcpError(callResponse);
    const parsed = JSON.parse(
      getResultTextContent(callResponse.result as Record<string, unknown>),
    ) as Array<{ name: string; slug: string; description: string }>;
    expect(parsed).toHaveLength(1);
    expect(parsed[0].name).toBe('useModalManager');
    expect(parsed[0].slug).toBe('use-modal-manager');
    expect(parsed[0].description).toContain('модальными окнами');

    child.kill('SIGTERM');
  });

  it('get_example через stdio возвращает пример по id', async () => {
    const child = spawnMcpProcess(mockBaseUrl);
    await initMcpSession(child);

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'get_example',
        arguments: { id: 'alert-basic' },
      },
    });

    assertNoMcpError(callResponse);
    const parsed = JSON.parse(
      getResultTextContent(callResponse.result as Record<string, unknown>),
    ) as { id: string; title: string; code: string };
    expect(parsed.id).toBe('alert-basic');
    expect(parsed.title).toBe('Базовый пример');
    expect(parsed.code).toContain('<Alert');

    child.kill('SIGTERM');
  });

  it('get_component_metadata через stdio возвращает карточку компонента', async () => {
    const child = spawnMcpProcess(mockBaseUrl);
    await initMcpSession(child);

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'get_component_metadata',
        arguments: { name: 'Alert' },
      },
    });

    assertNoMcpError(callResponse);
    const parsed = JSON.parse(
      getResultTextContent(callResponse.result as Record<string, unknown>),
    ) as { name: string; slug: string; description: string; props: unknown[] };
    expect(parsed.name).toBe('Alert');
    expect(parsed.slug).toBe('alert');
    expect(parsed.description).toContain('Модальное окно');
    expect(Array.isArray(parsed.props)).toBe(true);
    expect(parsed.props.length).toBeGreaterThan(0);

    child.kill('SIGTERM');
  });

  it('get_hook_metadata через stdio возвращает карточку хука', async () => {
    const child = spawnMcpProcess(mockBaseUrl);
    await initMcpSession(child);

    const callResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'get_hook_metadata',
        arguments: { slug: 'use-modal-manager' },
      },
    });

    assertNoMcpError(callResponse);
    const parsed = JSON.parse(
      getResultTextContent(callResponse.result as Record<string, unknown>),
    ) as { name: string; slug: string; description: string; props: unknown[] };
    expect(parsed.name).toBe('useModalManager');
    expect(parsed.slug).toBe('use-modal-manager');
    expect(parsed.description).toContain('модальными окнами');
    expect(Array.isArray(parsed.props)).toBe(true);

    child.kill('SIGTERM');
  });

  it('resources/list и resources/read для vkui://migration/v8', async () => {
    const child = spawnMcpProcess(mockBaseUrl);
    await initMcpSession(child);

    const listResponse = await sendRequest(child, {
      jsonrpc: '2.0',
      id: 2,
      method: 'resources/list',
      params: {},
    });

    assertNoMcpError(listResponse);
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

    assertNoMcpError(readResponse);
    const readResult = readResponse.result as Record<string, unknown>;
    const parsed = JSON.parse(getResultTextContent(readResult)) as Array<{ name: string }>;
    expect(parsed.length).toBeGreaterThan(0);
    expect(parsed.map((p) => p.name)).toContain('ActionSheet');

    child.kill('SIGTERM');
  });
});
