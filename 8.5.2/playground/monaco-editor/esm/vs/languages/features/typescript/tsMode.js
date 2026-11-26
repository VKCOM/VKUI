import { WorkerManager } from './workerManager.js';
import { SuggestAdapter, SignatureHelpAdapter, QuickInfoAdapter, DocumentHighlightAdapter, DefinitionAdapter, LibFiles, ReferenceAdapter, OutlineAdapter, RenameAdapter, FormatAdapter, FormatOnTypeAdapter, CodeActionAdaptor, InlayHintsAdapter, DiagnosticsAdapter } from './languageFeatures.js';
export { Adapter, FormatHelper, Kind, flattenDiagnosticMessageText } from './languageFeatures.js';
import { languages } from '../../../editor/editor.api.js';

let javaScriptWorker;
let typeScriptWorker;
function setupTypeScript(defaults) {
  typeScriptWorker = setupMode(defaults, "typescript");
}
function setupJavaScript(defaults) {
  javaScriptWorker = setupMode(defaults, "javascript");
}
function getJavaScriptWorker() {
  return new Promise((resolve, reject) => {
    if (!javaScriptWorker) {
      return reject("JavaScript not registered!");
    }
    resolve(javaScriptWorker);
  });
}
function getTypeScriptWorker() {
  return new Promise((resolve, reject) => {
    if (!typeScriptWorker) {
      return reject("TypeScript not registered!");
    }
    resolve(typeScriptWorker);
  });
}
function setupMode(defaults, modeId) {
  const providers = [];
  const client = new WorkerManager(modeId, defaults);
  const worker = (...uris) => {
    return client.getLanguageServiceWorker(...uris);
  };
  const libFiles = new LibFiles(worker);
  function registerProviders() {
    const { modeConfiguration } = defaults;
    disposeAll(providers);
    if (modeConfiguration.completionItems) {
      providers.push(
        languages.registerCompletionItemProvider(
          modeId,
          new SuggestAdapter(worker)
        )
      );
    }
    if (modeConfiguration.signatureHelp) {
      providers.push(
        languages.registerSignatureHelpProvider(
          modeId,
          new SignatureHelpAdapter(worker)
        )
      );
    }
    if (modeConfiguration.hovers) {
      providers.push(
        languages.registerHoverProvider(modeId, new QuickInfoAdapter(worker))
      );
    }
    if (modeConfiguration.documentHighlights) {
      providers.push(
        languages.registerDocumentHighlightProvider(
          modeId,
          new DocumentHighlightAdapter(worker)
        )
      );
    }
    if (modeConfiguration.definitions) {
      providers.push(
        languages.registerDefinitionProvider(
          modeId,
          new DefinitionAdapter(libFiles, worker)
        )
      );
    }
    if (modeConfiguration.references) {
      providers.push(
        languages.registerReferenceProvider(
          modeId,
          new ReferenceAdapter(libFiles, worker)
        )
      );
    }
    if (modeConfiguration.documentSymbols) {
      providers.push(
        languages.registerDocumentSymbolProvider(
          modeId,
          new OutlineAdapter(worker)
        )
      );
    }
    if (modeConfiguration.rename) {
      providers.push(
        languages.registerRenameProvider(
          modeId,
          new RenameAdapter(libFiles, worker)
        )
      );
    }
    if (modeConfiguration.documentRangeFormattingEdits) {
      providers.push(
        languages.registerDocumentRangeFormattingEditProvider(
          modeId,
          new FormatAdapter(worker)
        )
      );
    }
    if (modeConfiguration.onTypeFormattingEdits) {
      providers.push(
        languages.registerOnTypeFormattingEditProvider(
          modeId,
          new FormatOnTypeAdapter(worker)
        )
      );
    }
    if (modeConfiguration.codeActions) {
      providers.push(
        languages.registerCodeActionProvider(modeId, new CodeActionAdaptor(worker))
      );
    }
    if (modeConfiguration.inlayHints) {
      providers.push(
        languages.registerInlayHintsProvider(modeId, new InlayHintsAdapter(worker))
      );
    }
    if (modeConfiguration.diagnostics) {
      providers.push(new DiagnosticsAdapter(libFiles, defaults, modeId, worker));
    }
  }
  registerProviders();
  return worker;
}
function disposeAll(disposables) {
  while (disposables.length) {
    disposables.pop().dispose();
  }
}

export { CodeActionAdaptor, DefinitionAdapter, DiagnosticsAdapter, DocumentHighlightAdapter, FormatAdapter, FormatOnTypeAdapter, InlayHintsAdapter, LibFiles, OutlineAdapter, QuickInfoAdapter, ReferenceAdapter, RenameAdapter, SignatureHelpAdapter, SuggestAdapter, WorkerManager, getJavaScriptWorker, getTypeScriptWorker, setupJavaScript, setupTypeScript };
