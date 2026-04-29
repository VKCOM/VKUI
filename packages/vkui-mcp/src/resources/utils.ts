export const VKUI_SCHEME = 'vkui';

export function textContent(
  uri: string,
  text: string,
  mimeType = 'application/json',
): { contents: Array<{ type: 'text'; uri: string; text: string; mimeType?: string }> } {
  return {
    contents: [{ type: 'text', uri, text, mimeType }],
  };
}

export function templateVar(v: string | string[] | undefined): string | undefined {
  if (v === undefined) {
    return undefined;
  }
  return Array.isArray(v) ? v[0] : v;
}
