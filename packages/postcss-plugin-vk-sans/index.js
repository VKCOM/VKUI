/* eslint-disable compat/compat */
/* stylelint-disable */
const fs = require("fs");
const path = require("path");

/**
 * Обязательные правила для стилизации "VK Sans"
 *
 * 1) Леттер-спейсинг "VK Sans" должен способствовать FOUT с `-apple-system`
 * 2) Размер шрифта более чем 21px необходимо переопределять на "VK Sans Display"
 */

let cache = {
  config: {},
  fontSizeUsages: {},
};

const defaultFeatures = {
  injectLetterSpacing: true,
  injectVkSansDisplay: true,
  overrideToVkSansDisplay: true,
  overrideCustomFonts: true,
};

const ignoredFontSizeUnits = ["em", "%", "pt"];
const initializedCustomPropertiesFiles = new Set();
const VK_SANS_DISPLAY_SIZE_STARTS = 21;

const letterSpacingFontSizes = Object.entries({
  none: ["inherit", "0", "0px", "1px"],
  normal: ["12px", "12.5px", "13px", "small"],
  "-0.035em": ["20px", "38px", "64px"],
  "-0.007em": ["13.5px"],
  "-0.02em": ["medium", "16px", "21px"],
  "-0.025em": ["large", "17px", "18px", "22px", "23px", "24px", "25px", "28px"],
  "-0.027em": ["19px", "29px", "30px", "31px", "32px", "34px", "35px", "36px"],
  "-0.08em": ["20px"],
  "-0.01em": ["14px", "14.5px"],
  "-0.017em": ["15px"],
  "0.05em": ["5px"],
  "0.04em": ["6px"],
  "0.035em": ["7px"],
  "0.027em": ["8px"],
  "0.02em": ["9px"],
  "0.015em": ["9.5px", "10px"],
  "0.007em": ["11px"],
  "0.005em": ["11.5px"],
}).reduce((acc, [k, v]) => ({ ...acc, [k]: new Set(v) }), {});

const getLetterSpacingByFontSizeValue = (fontSizeValue, platform) => {
  const fontSize = Object.entries(cache.config[platform]).find(
    ([, fontSizes]) => fontSizes.has(fontSizeValue)
  );
  if (fontSize) {
    return fontSize[0];
  }
};

const wrapVarValue = (letterSpacingValue, fallbackValue) => {
  const computedValue = letterSpacingValue.replace("em", "").replace("0.0", "");
  const varFallbackValue = fallbackValue ? `, ${fallbackValue}` : "";

  if (["normal", "inherit", "initial"].includes(letterSpacingValue)) {
    return letterSpacingValue;
  }

  return `var(--vk-sans-ls${computedValue}${varFallbackValue})`;
};

const updateFontSizeStats = (value = "", platform) => {
  const cacheHit = cache.fontSizeUsages[value];

  if (
    getLetterSpacingByFontSizeValue(value, platform) ||
    ignoredFontSizeUnits.some((i) => value.endsWith(i)) ||
    value.startsWith("calc")
  ) {
    return;
  }

  if (!cacheHit) {
    console.log(
      `[VkSansMandatoryDeclarations]: No "letter-spacing" was configured for "font-size: ${value}"`
    );
    cache.fontSizeUsages[value] = 0;
  }

  return ++cache.fontSizeUsages[value];
};

const extendConfigWithCustomProperties = (
  customPropertiesFile,
  platform,
  parse
) => {
  const customProperties = fs.readFileSync(
    path.resolve(customPropertiesFile),
    "utf8"
  );
  const customPropertiesValues = {};

  parse(customProperties).walkRules((rule) => {
    if (
      rule.parent.type === "root" &&
      rule.type === "rule" &&
      rule.selector === ":root"
    ) {
      rule.walkDecls((decl) => {
        if (decl.prop.startsWith("--") && decl.value.endsWith("px")) {
          if (!customPropertiesValues[decl.value]) {
            customPropertiesValues[decl.value] = [];
          }

          customPropertiesValues[decl.value].push(`var(${decl.prop})`);
        }
      });
    }
  });

  for (const [letterSpacing, fontSizes] of Object.entries(
    cache.config[platform]
  )) {
    for (const fontSize of fontSizes) {
      customPropertiesValues[fontSize] &&
        customPropertiesValues[fontSize].forEach((f) =>
          cache.config[platform][letterSpacing].add(f)
        );
    }
  }
};

const selectorShouldBeIgnored = (rule, ignoreSelectors) => {
  if (!ignoreSelectors) {
    return false;
  }

  return ignoreSelectors.some((i) =>
    i instanceof RegExp
      ? rule.selectors.some((j) => j.search(i) !== -1)
      : rule.selectors.includes(i)
  );
};

const initializeConfig = (platform, overrides) => {
  cache.config[platform] = { ...letterSpacingFontSizes };

  if (overrides) {
    for (const [letterSpacing, fontSizes] of Object.entries(overrides)) {
      fontSizes.forEach((f) => {
        if (!cache.config[platform][letterSpacing]) {
          cache.config[platform][letterSpacing] = new Set();
        }

        cache.config[platform][letterSpacing].add(f);
      });
    }
  }
};

const initializeCustomPropertiesFiles = (
  customPropertiesFiles,
  platform,
  parse
) => {
  customPropertiesFiles.forEach((i) => {
    if (!initializedCustomPropertiesFiles.has(i)) {
      extendConfigWithCustomProperties(i, platform, parse);
      initializedCustomPropertiesFiles.add(i);
    }
  });
};

module.exports = (opts) => {
  const {
    debug,
    overrides,
    platform = "test",
    features = defaultFeatures,
    customPropertiesFiles,
    ignoreFiles,
    ignoreSelectors,
    explicitNormalLetterSpacing,
    respectImportant,
    varName = "--palette-vk-font",
  } = opts;

  return {
    postcssPlugin: "vk-sans-mandatory-declarations",
    Once(css, { parse }) {
      if (!cache.config[platform]) {
        initializeConfig(platform, overrides);
      }

      if (customPropertiesFiles) {
        initializeCustomPropertiesFiles(customPropertiesFiles, platform, parse);
      }

      if (
        !ignoreFiles ||
        !ignoreFiles.length ||
        !ignoreFiles.some((i) => css.source.input.file.endsWith(i))
      ) {
        css.walkRules((rule) => {
          let hasFontShorthandProp = rule.some((i) => i.prop === "font");
          let hasFontFamilyProp = rule.some((i) => i.prop === "font-family");
          let hasFontSizeProp =
            hasFontShorthandProp || rule.some((i) => i.prop === "font-size");
          let hasLetterSpacingProp = rule.some(
            (i) => i.prop === "letter-spacing"
          );
          let fontSizeValue;
          let letterSpacingOverride;

          if (!selectorShouldBeIgnored(rule, ignoreSelectors)) {
            rule.walkDecls(/^(font|font-size)$/, (decl) => {
              if (decl.prop === "font") {
                const match = decl.value.match(
                  /(([0-9]|[1-9][0-9])px|inherit)/
                );
                if (match) {
                  fontSizeValue = match[0];
                }
              } else {
                fontSizeValue = decl.value.replace(/\s?!important$/, "");
              }

              letterSpacingOverride = getLetterSpacingByFontSizeValue(
                fontSizeValue,
                platform
              );

              if (debug) {
                updateFontSizeStats(fontSizeValue, platform);
                if (Object.keys(cache.fontSizeUsages).length) {
                  console.log(
                    `[VkSansMandatoryDeclarations] Unhandled Font Size Usages in "${platform}":`,
                    cache.fontSizeUsages
                  );
                }
              }

              if (
                features.injectLetterSpacing &&
                !hasLetterSpacingProp &&
                !(
                  explicitNormalLetterSpacing
                    ? [undefined]
                    : ["normal", undefined]
                ).includes(letterSpacingOverride)
              ) {
                const newRule = {
                  prop: "letter-spacing",
                  value: wrapVarValue(letterSpacingOverride),
                };

                hasLetterSpacingProp = true;
                rule.append(newRule);
              }

              if (fontSizeValue && fontSizeValue.endsWith("px")) {
                if (
                  parseFloat(fontSizeValue.replace("px", "")) >=
                  VK_SANS_DISPLAY_SIZE_STARTS
                ) {
                  if (
                    features.injectVkSansDisplay ||
                    features.overrideToVkSansDisplay
                  ) {
                    let fontFamilyValue;

                    if (hasFontFamilyProp && features.overrideToVkSansDisplay) {
                      rule.walkDecls("font-family", (decl) => {
                        fontFamilyValue = `var(--vk-sans-display, ${decl.value})`;
                        decl.remove();
                      });
                    }

                    if (
                      fontFamilyValue ||
                      (!hasFontFamilyProp && features.injectVkSansDisplay)
                    ) {
                      rule.append({
                        prop: "font-family",
                        value: fontFamilyValue || `var(--vk-sans-display)`,
                      });
                      hasFontFamilyProp = true;
                    }
                  }
                } else if (hasFontFamilyProp) {
                  if (features.overrideCustomFonts) {
                    rule.walkDecls("font-family", (decl) => {
                      const fontFaceWhitelist = [
                        varName,
                        "--vk-sans-text",
                        "--palette-vk-font",
                        "monospace",
                        "Monospace",
                      ];

                      if (
                        decl.value !== "inherit" &&
                        !fontFaceWhitelist.some((i) => decl.value.includes(i))
                      ) {
                        decl.replaceWith({
                          prop: "font-family",
                          value: `var(--vk-sans-text, ${decl.value})`,
                        });
                      }
                    });
                  }
                }
              }
            });

            if (features.injectLetterSpacing) {
              rule.walkDecls("letter-spacing", (decl) => {
                const currentLetterSpacingOverride =
                  getLetterSpacingByFontSizeValue(fontSizeValue, platform);

                if (respectImportant ? !decl.important : true) {
                  if (
                    !hasFontSizeProp ||
                    ["none", undefined].includes(letterSpacingOverride)
                  ) {
                    decl.remove();
                  } else if (
                    (letterSpacingOverride || currentLetterSpacingOverride) &&
                    ![
                      wrapVarValue(currentLetterSpacingOverride),
                      currentLetterSpacingOverride,
                    ].includes(decl.value)
                  ) {
                    decl.replaceWith({
                      prop: "letter-spacing",
                      value: wrapVarValue(
                        currentLetterSpacingOverride,
                        decl.value
                      ),
                    });
                  }
                }
              });
            }
          }
        });
      }
    },
  };
};

module.exports.postcss = true;
