export const normalizeStoryName = (storyName: string) => storyName.replace(/\W/g, '');

export const toURLSafeBase64 = (sourceString: string) =>
  btoa(String.fromCodePoint(...new TextEncoder().encode(sourceString)))
    .replaceAll('/', '_')
    .replaceAll('+', '-')
    .replaceAll('=', '');

export const fromURLSafeBase64 = (base64String: string) =>
  new TextDecoder().decode(
    Uint8Array.from(
      atob(base64String.replaceAll('_', '/').replaceAll('-', '+')),
      (m) => m.codePointAt(0) as number,
    ),
  );
