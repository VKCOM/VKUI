import { WorkerManager } from './workerManager.js';
import { HoverAdapter, DocumentHighlightAdapter, DocumentLinkAdapter, FoldingRangeAdapter, DocumentSymbolAdapter, SelectionRangeAdapter, RenameAdapter, DocumentFormattingEditProvider, DocumentRangeFormattingEditProvider, CompletionAdapter } from '../common/lspLanguageFeatures.js';
export { DefinitionAdapter, DiagnosticsAdapter, DocumentColorAdapter, ReferenceAdapter, fromPosition, fromRange, toRange, toTextEdit } from '../common/lspLanguageFeatures.js';
import { languages } from '../../../editor/editor.api.js';

class HTMLCompletionAdapter extends CompletionAdapter {
  constructor(worker) {
    super(worker, [".", ":", "<", '"', "=", "/"]);
  }
}
function setupMode1(defaults) {
  const client = new WorkerManager(defaults);
  const worker = (...uris) => {
    return client.getLanguageServiceWorker(...uris);
  };
  let languageId = defaults.languageId;
  languages.registerCompletionItemProvider(languageId, new HTMLCompletionAdapter(worker));
  languages.registerHoverProvider(languageId, new HoverAdapter(worker));
  languages.registerDocumentHighlightProvider(
    languageId,
    new DocumentHighlightAdapter(worker)
  );
  languages.registerLinkProvider(languageId, new DocumentLinkAdapter(worker));
  languages.registerFoldingRangeProvider(
    languageId,
    new FoldingRangeAdapter(worker)
  );
  languages.registerDocumentSymbolProvider(
    languageId,
    new DocumentSymbolAdapter(worker)
  );
  languages.registerSelectionRangeProvider(
    languageId,
    new SelectionRangeAdapter(worker)
  );
  languages.registerRenameProvider(languageId, new RenameAdapter(worker));
  if (languageId === "html") {
    languages.registerDocumentFormattingEditProvider(
      languageId,
      new DocumentFormattingEditProvider(worker)
    );
    languages.registerDocumentRangeFormattingEditProvider(
      languageId,
      new DocumentRangeFormattingEditProvider(worker)
    );
  }
}
function setupMode(defaults) {
  const disposables = [];
  const providers = [];
  const client = new WorkerManager(defaults);
  disposables.push(client);
  const worker = (...uris) => {
    return client.getLanguageServiceWorker(...uris);
  };
  function registerProviders() {
    const { languageId, modeConfiguration } = defaults;
    disposeAll(providers);
    if (modeConfiguration.completionItems) {
      providers.push(
        languages.registerCompletionItemProvider(languageId, new HTMLCompletionAdapter(worker))
      );
    }
    if (modeConfiguration.hovers) {
      providers.push(
        languages.registerHoverProvider(languageId, new HoverAdapter(worker))
      );
    }
    if (modeConfiguration.documentHighlights) {
      providers.push(
        languages.registerDocumentHighlightProvider(
          languageId,
          new DocumentHighlightAdapter(worker)
        )
      );
    }
    if (modeConfiguration.links) {
      providers.push(
        languages.registerLinkProvider(languageId, new DocumentLinkAdapter(worker))
      );
    }
    if (modeConfiguration.documentSymbols) {
      providers.push(
        languages.registerDocumentSymbolProvider(
          languageId,
          new DocumentSymbolAdapter(worker)
        )
      );
    }
    if (modeConfiguration.rename) {
      providers.push(
        languages.registerRenameProvider(languageId, new RenameAdapter(worker))
      );
    }
    if (modeConfiguration.foldingRanges) {
      providers.push(
        languages.registerFoldingRangeProvider(
          languageId,
          new FoldingRangeAdapter(worker)
        )
      );
    }
    if (modeConfiguration.selectionRanges) {
      providers.push(
        languages.registerSelectionRangeProvider(
          languageId,
          new SelectionRangeAdapter(worker)
        )
      );
    }
    if (modeConfiguration.documentFormattingEdits) {
      providers.push(
        languages.registerDocumentFormattingEditProvider(
          languageId,
          new DocumentFormattingEditProvider(worker)
        )
      );
    }
    if (modeConfiguration.documentRangeFormattingEdits) {
      providers.push(
        languages.registerDocumentRangeFormattingEditProvider(
          languageId,
          new DocumentRangeFormattingEditProvider(worker)
        )
      );
    }
  }
  registerProviders();
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

export { CompletionAdapter, DocumentFormattingEditProvider, DocumentHighlightAdapter, DocumentLinkAdapter, DocumentRangeFormattingEditProvider, DocumentSymbolAdapter, FoldingRangeAdapter, HoverAdapter, RenameAdapter, SelectionRangeAdapter, WorkerManager, setupMode, setupMode1 };
