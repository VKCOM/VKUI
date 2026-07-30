type Frontmatter = Record<string, string>;

export function parseFrontmatter(content: string): { data: Frontmatter; body: string } {
  const match = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) {
    return { data: {}, body: content };
  }

  const raw = match[1];
  const data: Frontmatter = {};
  let currentKey: string | null = null;
  let currentValue = '';

  for (const line of raw.split(/\r?\n/)) {
    const keyMatch = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)/);
    if (keyMatch) {
      const [, key, value] = keyMatch;
      if (currentKey) {
        data[currentKey] = currentValue.trim();
      }
      currentKey = key;
      currentValue = value.trim().replace(/^['"]|['"]$/g, '');
    } else if (currentKey && /^\s+(.+)/.test(line)) {
      currentValue += ' ' + line.trim();
    }
  }

  if (currentKey) {
    data[currentKey] = currentValue.trim();
  }

  const body = content.slice(match[0].length);
  return { data, body };
}
