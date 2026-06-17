export function parseFrontmatter(content) {
  const match = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) {
    return { data: {}, body: content };
  }

  const raw = match[1];
  const data = {};
  let currentKey = null;
  let currentValue = '';

  for (const line of raw.split(/\r?\n/)) {
    const keyMatch = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)/);
    if (keyMatch) {
      if (currentKey) {
        data[currentKey] = currentValue.trim();
      }
      currentKey = keyMatch[1];
      currentValue = keyMatch[2].trim().replace(/^['"]|['"]$/g, '');
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
