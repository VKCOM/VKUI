import * as React from 'react';
import * as monaco from 'monaco-editor';
import { format } from './codeModifications';
import type { ExtraLibs } from './types';

let initialized = false;

const setupMonaco = () => {
  if (initialized) {
    return;
  }

  window.MonacoEnvironment = {
    getWorker(_, label) {
      switch (label) {
        case 'json': {
          return new Worker('monaco-editor/esm/vs/language/json/json.worker.js', {
            type: 'module',
          });
        }
        case 'css':
        case 'scss':
        case 'less': {
          return new Worker('monaco-editor/esm/vs/language/css/css.worker.js', { type: 'module' });
        }
        case 'html':
        case 'handlebars':
        case 'razor': {
          return new Worker('monaco-editor/esm/vs/language/html/html.worker.js', {
            type: 'module',
          });
        }
        case 'typescript':
        case 'javascript': {
          return new Worker('monaco-editor/esm/vs/language/typescript/ts.worker.js', {
            type: 'module',
          });
        }
        default: {
          return new Worker('monaco-editor/esm/vs/editor/editor.worker.js', { type: 'module' });
        }
      }
    },
  };

  monaco.typescript.typescriptDefaults.setCompilerOptions({
    jsx: monaco.typescript.JsxEmit.Preserve,
  });
  monaco.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: false,
  });

  monaco.languages.registerDocumentFormattingEditProvider('typescript', {
    async provideDocumentFormattingEdits(model) {
      return [
        {
          range: model.getFullModelRange(),
          text: await format(model.getValue()),
        },
      ];
    },
  });

  initialized = true;
};

const fetchReactTypes = async () => {
  // eslint-disable-next-line no-restricted-globals
  const res = await fetch('@types/react/index.d.ts');

  return await res.text();
};

const pendingExtraLibs = new Set();

const addedExtraLibs = new Set();

const addExtraLibs = async (extraLibs: ExtraLibs = {}) => {
  const allExtraLibs: ExtraLibs = { react: fetchReactTypes, ...extraLibs };

  for (const key of Object.keys(allExtraLibs)) {
    if (addedExtraLibs.has(key) || pendingExtraLibs.has(key)) {
      continue;
    }

    try {
      pendingExtraLibs.add(key);

      monaco.typescript.typescriptDefaults.addExtraLib(
        typeof allExtraLibs[key] === 'function' ? await allExtraLibs[key]() : allExtraLibs[key],
        `file:///node_modules/${key}/index.d.ts`,
      );

      addedExtraLibs.add(key);
      pendingExtraLibs.delete(key);
    } catch {
      pendingExtraLibs.delete(key);
    }
  }
};

interface EditorProps {
  value: string;
  extraLibs?: ExtraLibs;
  theme?: 'dark' | 'light' | undefined;
  onInput: (value: string) => void;
  onReset: () => void;
  onExportByLink: () => void;
}

let fileId = 0;

export const Editor = ({
  value,
  extraLibs,
  theme = 'dark',
  onInput,
  onReset,
  onExportByLink,
}: EditorProps) => {
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const onInputRef = React.useRef(onInput);
  const onResetRef = React.useRef(onReset);
  const onExportByLinkRef = React.useRef(onExportByLink);

  React.useEffect(() => {
    onInputRef.current = onInput;
    onResetRef.current = onReset;
    onExportByLinkRef.current = onExportByLink;
  }, [onInput, onReset, onExportByLink]);

  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    setupMonaco();
    void addExtraLibs(extraLibs);

    const editor = monaco.editor.create(containerRef.current, {
      automaticLayout: true,
      editContext: false,
      fixedOverflowWidgets: true,
      model: monaco.editor.createModel(
        value,
        'typescript',
        monaco.Uri.parse(`file:///index${fileId++}.tsx`),
      ),
      tabSize: 2,
      theme: theme === 'dark' ? 'vs-dark' : 'vs',
    });

    editor.onDidChangeModelContent((event) => {
      if (event.isFlush) {
        return;
      }
      onInputRef.current(editor.getValue());
    });

    editor.addAction({
      id: 'reset-all-changes-action',
      label: 'Reset all changes',
      contextMenuGroupId: '1_modification',
      contextMenuOrder: 1.5,
      run: () => onResetRef.current(),
    });
    editor.addAction({
      id: 'export-by-link-action',
      label: 'Export By Link',
      contextMenuGroupId: '9_cutcopypaste',
      contextMenuOrder: 5,
      run: () => onExportByLinkRef.current(),
    });

    editorRef.current = editor;

    // When the document doesn't have focus (e.g. the preview iframe captured it),
    // Monaco can't receive keyboard input after a click. This handler waits for
    // the document to gain focus and then explicitly focuses the editor.
    const handlePointerDown = () => {
      if (!document.hasFocus()) {
        window.addEventListener(
          'focus',
          () => {
            requestAnimationFrame(() => editor.focus());
          },
          { once: true },
        );
      }
    };

    containerRef.current.addEventListener('pointerdown', handlePointerDown, true);

    return () => {
      containerRef.current?.removeEventListener('pointerdown', handlePointerDown, true);
      editor.dispose();
      editor.getModel()?.dispose();
    };
  }, []);

  React.useEffect(() => {
    setupMonaco();
    void addExtraLibs(extraLibs);
  }, [extraLibs]);

  React.useEffect(() => {
    monaco.editor.setTheme(theme === 'dark' ? 'vs-dark' : 'vs');
  }, [theme]);

  React.useEffect(() => {
    if (editorRef.current && editorRef.current.getValue() !== value) {
      editorRef.current.setValue(value);
    }
  }, [value]);
  return <div ref={containerRef} style={{ height: '100%' }} />;
};
