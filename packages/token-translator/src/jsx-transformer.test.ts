import ts from 'typescript';
import transformer from './jsx-transformer';

const printer = ts.createPrinter({});

async function run(input: string, output: string) {
  const sourceFile = ts.createSourceFile('input.jsx', input, ts.ScriptTarget.Latest);
  const result = ts.transform(sourceFile, [transformer]);

  expect(printer.printFile(result.transformed[0])).toEqual(output);
}

it('default', async () => {
  const input = `const App = ({ children }) => {
    return <div style={{
            color: 'var(--accent)',
            backgroundColor: "var(--accent)",
        }}>
            {children}
        </div>;
};
`;

  const output = `const App = ({ children }) => {
    return <div style={{
            color: "var(--vkui--color_text_accent)",
            backgroundColor: "var(--vkui--color_background_accent)",
        }}>
            {children}
        </div>;
};
`;

  await run(input, output);
});

it('icon', async () => {
  const input = `<Icon style={{
        color: "var(--accent)",
    }}/>;
`;

  const output = `<Icon style={{
        color: "var(--vkui--color_icon_accent)",
    }}/>;
`;

  await run(input, output);
});
