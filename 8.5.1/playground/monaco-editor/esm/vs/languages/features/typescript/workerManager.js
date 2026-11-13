import { editor } from '../../../editor/editor.api.js';
import { createWebWorker } from '../../../internal/common/workers.js';

class WorkerManager {
  constructor(_modeId, _defaults) {
    this._modeId = _modeId;
    this._defaults = _defaults;
    this._worker = null;
    this._client = null;
    this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker());
    this._updateExtraLibsToken = 0;
    this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(
      () => this._updateExtraLibs()
    );
  }
  dispose() {
    this._configChangeListener.dispose();
    this._extraLibsChangeListener.dispose();
    this._stopWorker();
  }
  _stopWorker() {
    if (this._worker) {
      this._worker.dispose();
      this._worker = null;
    }
    this._client = null;
  }
  async _updateExtraLibs() {
    if (!this._worker) {
      return;
    }
    const myToken = ++this._updateExtraLibsToken;
    const proxy = await this._worker.getProxy();
    if (this._updateExtraLibsToken !== myToken) {
      return;
    }
    proxy.updateExtraLibs(this._defaults.getExtraLibs());
  }
  _getClient() {
    if (!this._client) {
      this._client = (async () => {
        this._worker = createWebWorker({
          // module that exports the create() method and returns a `TypeScriptWorker` instance
          moduleId: "vs/language/typescript/tsWorker",
          createWorker: () => new Worker(new URL('ts.worker.js', import.meta.url), { type: "module" }),
          label: this._modeId,
          keepIdleModels: true,
          // passed in to the create() method
          createData: {
            compilerOptions: this._defaults.getCompilerOptions(),
            extraLibs: this._defaults.getExtraLibs(),
            customWorkerPath: this._defaults.workerOptions.customWorkerPath,
            inlayHintsOptions: this._defaults.inlayHintsOptions
          }
        });
        if (this._defaults.getEagerModelSync()) {
          return await this._worker.withSyncedResources(
            editor.getModels().filter((model) => model.getLanguageId() === this._modeId).map((model) => model.uri)
          );
        }
        return await this._worker.getProxy();
      })();
    }
    return this._client;
  }
  async getLanguageServiceWorker(...resources) {
    const client = await this._getClient();
    if (this._worker) {
      await this._worker.withSyncedResources(resources);
    }
    return client;
  }
}

export { WorkerManager };
