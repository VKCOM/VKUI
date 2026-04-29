import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';

function toStructuredContent(data: unknown): Record<string, unknown> | undefined {
  if (data === null || typeof data !== 'object') {
    return undefined;
  }
  if (Array.isArray(data)) {
    return { items: data };
  }
  return data as Record<string, unknown>;
}

export function toToolResult(data: unknown): CallToolResult {
  const structured = toStructuredContent(data);
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(data, null, 2),
      },
    ],
    ...(structured !== undefined && { structuredContent: structured }),
  };
}
