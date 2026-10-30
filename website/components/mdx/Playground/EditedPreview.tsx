import * as React from 'react';
import { LiveError, LivePreview, LiveProvider } from 'react-live';
import { scope } from './scope';

const IMPORT_REGEXP = /^import\s+(?:{[\s\S]*?}|\S+)\s+from\s+['"][^'"]+['"];?$\n?/gm;

function transformCode(code: string) {
  const body = code.replace(IMPORT_REGEXP, '');
  return body.trim().startsWith('<')
    ? `<React.Fragment>\n${body}\n</React.Fragment>;`
    : `() => { ${body} }`;
}

export function EditedPreview({ code }: { code: string }) {
  return (
    <LiveProvider code={code} scope={scope} transformCode={transformCode}>
      <LiveError />
      <LivePreview Component={React.Fragment} />
    </LiveProvider>
  );
}
