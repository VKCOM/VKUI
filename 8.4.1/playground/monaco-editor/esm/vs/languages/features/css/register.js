import { languages, Emitter } from '../../../editor/editor.api.js';

class LanguageServiceDefaultsImpl {
  constructor(languageId, options, modeConfiguration) {
    this._onDidChange = new Emitter();
    this._languageId = languageId;
    this.setOptions(options);
    this.setModeConfiguration(modeConfiguration);
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  get languageId() {
    return this._languageId;
  }
  get modeConfiguration() {
    return this._modeConfiguration;
  }
  get diagnosticsOptions() {
    return this.options;
  }
  get options() {
    return this._options;
  }
  setOptions(options) {
    this._options = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(this);
  }
  setDiagnosticsOptions(options) {
    this.setOptions(options);
  }
  setModeConfiguration(modeConfiguration) {
    this._modeConfiguration = modeConfiguration || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(this);
  }
}
const optionsDefault = {
  validate: true,
  lint: {
    compatibleVendorPrefixes: "ignore",
    vendorPrefix: "warning",
    duplicateProperties: "warning",
    emptyRules: "warning",
    importStatement: "ignore",
    boxModel: "ignore",
    universalSelector: "ignore",
    zeroUnits: "ignore",
    fontFaceProperties: "warning",
    hexColorLength: "error",
    argumentsInColorFunction: "error",
    unknownProperties: "warning",
    ieHack: "ignore",
    unknownVendorSpecificProperties: "ignore",
    propertyIgnoredDueToDisplay: "warning",
    important: "ignore",
    float: "ignore",
    idSelector: "ignore"
  },
  data: { useDefaultDataProvider: true },
  format: {
    newlineBetweenSelectors: true,
    newlineBetweenRules: true,
    spaceAroundSelectorSeparator: false,
    braceStyle: "collapse",
    maxPreserveNewLines: void 0,
    preserveNewLines: true
  }
};
const modeConfigurationDefault = {
  completionItems: true,
  hovers: true,
  documentSymbols: true,
  definitions: true,
  references: true,
  documentHighlights: true,
  rename: true,
  colors: true,
  foldingRanges: true,
  diagnostics: true,
  selectionRanges: true,
  documentFormattingEdits: true,
  documentRangeFormattingEdits: true
};
const cssDefaults = new LanguageServiceDefaultsImpl(
  "css",
  optionsDefault,
  modeConfigurationDefault
);
const scssDefaults = new LanguageServiceDefaultsImpl(
  "scss",
  optionsDefault,
  modeConfigurationDefault
);
const lessDefaults = new LanguageServiceDefaultsImpl(
  "less",
  optionsDefault,
  modeConfigurationDefault
);
function getMode() {
  return import('./cssMode.js');
}
languages.onLanguage("less", () => {
  getMode().then((mode2) => mode2.setupMode(lessDefaults));
});
languages.onLanguage("scss", () => {
  getMode().then((mode2) => mode2.setupMode(scssDefaults));
});
languages.onLanguage("css", () => {
  getMode().then((mode2) => mode2.setupMode(cssDefaults));
});

export { cssDefaults, lessDefaults, scssDefaults };
