import { WorkerManager } from './workerManager.js';
import { DocumentFormattingEditProvider, DocumentRangeFormattingEditProvider, CompletionAdapter, HoverAdapter, DocumentSymbolAdapter, DocumentColorAdapter, FoldingRangeAdapter, SelectionRangeAdapter, DiagnosticsAdapter } from '../common/lspLanguageFeatures.js';
export { DefinitionAdapter, DocumentHighlightAdapter, DocumentLinkAdapter, ReferenceAdapter, RenameAdapter, fromPosition, fromRange, toRange, toTextEdit } from '../common/lspLanguageFeatures.js';
import { createTokenizationSupport } from './tokenization.js';
import { languages, editor } from '../../../editor/editor.api.js';

let worker;
function getWorker() {
  return new Promise((resolve, reject) => {
    if (!worker) {
      return reject("JSON not registered!");
    }
    resolve(worker);
  });
}
class JSONDiagnosticsAdapter extends DiagnosticsAdapter {
  constructor(languageId, worker2, defaults) {
    super(languageId, worker2, defaults.onDidChange);
    this._disposables.push(
      editor.onWillDisposeModel((model) => {
        this._resetSchema(model.uri);
      })
    );
    this._disposables.push(
      editor.onDidChangeModelLanguage((event) => {
        this._resetSchema(event.model.uri);
      })
    );
  }
  _resetSchema(resource) {
    this._worker().then((worker2) => {
      worker2.resetSchema(resource.toString());
    });
  }
}
function setupMode(defaults) {
  const disposables = [];
  const providers = [];
  const client = new WorkerManager(defaults);
  disposables.push(client);
  worker = (...uris) => {
    return client.getLanguageServiceWorker(...uris);
  };
  function registerProviders() {
    const { languageId, modeConfiguration: modeConfiguration2 } = defaults;
    disposeAll(providers);
    if (modeConfiguration2.documentFormattingEdits) {
      providers.push(
        languages.registerDocumentFormattingEditProvider(
          languageId,
          new DocumentFormattingEditProvider(worker)
        )
      );
    }
    if (modeConfiguration2.documentRangeFormattingEdits) {
      providers.push(
        languages.registerDocumentRangeFormattingEditProvider(
          languageId,
          new DocumentRangeFormattingEditProvider(worker)
        )
      );
    }
    if (modeConfiguration2.completionItems) {
      providers.push(
        languages.registerCompletionItemProvider(
          languageId,
          new CompletionAdapter(worker, [" ", ":", '"'])
        )
      );
    }
    if (modeConfiguration2.hovers) {
      providers.push(
        languages.registerHoverProvider(languageId, new HoverAdapter(worker))
      );
    }
    if (modeConfiguration2.documentSymbols) {
      providers.push(
        languages.registerDocumentSymbolProvider(
          languageId,
          new DocumentSymbolAdapter(worker)
        )
      );
    }
    if (modeConfiguration2.tokens) {
      providers.push(languages.setTokensProvider(languageId, createTokenizationSupport(true)));
    }
    if (modeConfiguration2.colors) {
      providers.push(
        languages.registerColorProvider(
          languageId,
          new DocumentColorAdapter(worker)
        )
      );
    }
    if (modeConfiguration2.foldingRanges) {
      providers.push(
        languages.registerFoldingRangeProvider(
          languageId,
          new FoldingRangeAdapter(worker)
        )
      );
    }
    if (modeConfiguration2.diagnostics) {
      providers.push(new JSONDiagnosticsAdapter(languageId, worker, defaults));
    }
    if (modeConfiguration2.selectionRanges) {
      providers.push(
        languages.registerSelectionRangeProvider(
          languageId,
          new SelectionRangeAdapter(worker)
        )
      );
    }
  }
  registerProviders();
  disposables.push(languages.setLanguageConfiguration(defaults.languageId, richEditConfiguration));
  let modeConfiguration = defaults.modeConfiguration;
  defaults.onDidChange((newDefaults) => {
    if (newDefaults.modeConfiguration !== modeConfiguration) {
      modeConfiguration = newDefaults.modeConfiguration;
      registerProviders();
    }
  });
  disposables.push(asDisposable(providers));
  return asDisposable(disposables);
}
function asDisposable(disposables) {
  return { dispose: () => disposeAll(disposables) };
}
function disposeAll(disposables) {
  while (disposables.length) {
    disposables.pop().dispose();
  }
}
const richEditConfiguration = {
  wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}", notIn: ["string"] },
    { open: "[", close: "]", notIn: ["string"] },
    { open: '"', close: '"', notIn: ["string"] }
  ]
};

export { CompletionAdapter, DiagnosticsAdapter, DocumentColorAdapter, DocumentFormattingEditProvider, DocumentRangeFormattingEditProvider, DocumentSymbolAdapter, FoldingRangeAdapter, HoverAdapter, SelectionRangeAdapter, WorkerManager, getWorker, setupMode };
