// @vitest-environment node

import * as fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getPreviewId } from './common/previewId.mjs';
import { extractFirstPlayground, generateShowcaseData } from './generate-showcase';

describe(extractFirstPlayground, () => {
  it('does not rewrite unchanged data during dev compilation', async () => {
    await generateShowcaseData({ silent: true });
    const filename = new URL('../generated/showcase-data.json', import.meta.url);
    const before = fs.statSync(filename).mtimeMs;
    await generateShowcaseData({ silent: true });
    expect(fs.statSync(filename).mtimeMs).toBe(before);
  });
  it('uses the same Markdown fence indentation as documentation previews', () => {
    const result = extractFirstPlayground(
      '<Playground direction="column">\n  ```jsx\n  <Box>\n    <Button>Hello</Button>\n  </Box>\n  ```\n</Playground>',
    );
    expect(result?.code).toBe('<Box>\n  <Button>Hello</Button>\n</Box>');
    expect(result?.direction).toBe('column');
    expect(getPreviewId(result?.code || '')).toBe(
      getPreviewId('<Box>\n  <Button>Hello</Button>\n</Box>'),
    );
  });

  it('preserves multiline string whitespace after removing the fence indent', () => {
    const result = extractFirstPlayground(
      '<Playground>\n\n```jsx\nconst text = `a\n    b`;\nreturn <Text>{text}</Text>;\n```\n</Playground>',
    );
    expect(result?.code).toContain('`a\n    b`');
  });
});
