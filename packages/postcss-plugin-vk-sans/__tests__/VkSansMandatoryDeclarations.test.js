const postcss = require("postcss");
const VkSansMandatoryDeclarations = require("../index");

async function run(input, output, opts = {}) {
  const result = await postcss([VkSansMandatoryDeclarations(opts)]).process(
    input,
    { from: undefined }
  );
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

test("Do nothing", () =>
  Promise.all(
    [
      // Font has default size without "letter-spacing" at all
      `.a { font-size: 13px; }`,
      `.a { font: 13px var(--palette-vk-font); }`,
      `.a { font: 13px/15 var(--palette-vk-font); }`,
      `.a { font: 500 13px/15 var(--palette-vk-font); }`,
      // Font already got correct "letter-spacing"
      `.a { font-size: 13px; letter-spacing: normal; }`,
      `.a { font-size: 14px; letter-spacing: -0.01em; }`,
    ].map((i) => run(i, i))
  ));

test('Add a declaration of "letter-spacing"', () =>
  Promise.all([
    run(
      `.a { font: 14px/18px; }`,
      `.a { font: 14px/18px; letter-spacing: var(--vk-sans-ls-1); }`
    ),
    run(
      `.a { font-size: 14px; }`,
      `.a { font-size: 14px; letter-spacing: var(--vk-sans-ls-1); }`
    ),
  ]));

test('Remove redundant declaration of "letter-spacing"', () =>
  Promise.all([
    // Standalone declaration
    run(`.a { letter-spacing: 1px; }`, `.a { }`),
    // Declaration in "none" group
    run(`.a { font-size: 0; letter-spacing: 1px; }`, `.a { font-size: 0; }`),
    run(
      `.a { font-size: 0px; letter-spacing: 1px; }`,
      `.a { font-size: 0px; }`
    ),
    run(
      `.a { font-size: inherit; letter-spacing: 1px; }`,
      `.a { font-size: inherit; }`
    ),
    run(
      `.a { font-size: inherit; letter-spacing: 1px; }`,
      `.a { font-size: inherit; }`
    ),
    // No config provided for "font-size" value
    run(
      `.a { font-size: 9.9px; letter-spacing: 1px; }`,
      `.a { font-size: 9.9px; }`
    ),
  ]));

test('Replace a declaration of "letter-spacing"', () => {
  const decls = [
    ["font-size: 14px;", "letter-spacing: 1px;"],
    ["font-size: 13px;", "letter-spacing: 1px;"],
  ];

  return Promise.all([
    run(
      `.a { ${decls[0].join(" ")} }`,
      `.a { font-size: 14px; letter-spacing: var(--vk-sans-ls-1, 1px); }`
    ),
    run(
      // In reverse order too
      `.a { ${decls[0].reverse().join(" ")} }`,
      `.a { letter-spacing: var(--vk-sans-ls-1, 1px); font-size: 14px; }`
    ),
    run(
      `.a { ${decls[1].join(" ")} }`,
      `.a { font-size: 13px; letter-spacing: normal; }`
    ),
    run(
      // In reverse order too
      `.a { ${decls[1].reverse().join(" ")} }`,
      `.a { letter-spacing: normal; font-size: 13px; }`
    ),
  ]);
});

test('Option "ignoreSelectors" is working', () =>
  Promise.all([
    run(
      `.a { font-size: 14px; letter-spacing: 1px; }`,
      `.a { font-size: 14px; letter-spacing: 1px; }`,
      { ignoreSelectors: [".a"] }
    ),
    run(
      `.a { font-size: 14px; letter-spacing: 1px; }`,
      `.a { font-size: 14px; letter-spacing: 1px; }`,
      { ignoreSelectors: [/^\.a$/] }
    ),
  ]));

test('Option "explicitNormalLetterSpacing" is working', () =>
  Promise.all([
    run(
      `.a { font: 13px var(--palette-vk-font); }`,
      `.a { font: 13px var(--palette-vk-font); letter-spacing: normal; }`,
      { explicitNormalLetterSpacing: true }
    ),
    run(
      `.a { font-size: 13px; }`,
      `.a { font-size: 13px; letter-spacing: normal; }`,
      { explicitNormalLetterSpacing: true }
    ),
    run(
      `.a { font-size: 13px; letter-spacing: inherit; }`,
      `.a { font-size: 13px; letter-spacing: normal; }`,
      { explicitNormalLetterSpacing: true }
    ),
  ]));

test("Adjust `font-family` for the `font-size` less than 20px", () =>
  Promise.all([
    run(
      `.a { font-family: inherit; font-size: 19px; }`,
      `.a { font-family: inherit; font-size: 19px; letter-spacing: var(--vk-sans-ls-27); }`
    ),
    run(
      `.a { font-family: 'Original Font', sans-serif; font-size: 19px; }`,
      `.a { font-family: var(--vk-sans-text, 'Original Font', sans-serif); font-size: 19px; letter-spacing: var(--vk-sans-ls-27); }`
    ),
  ]));

test("Adjust `font-family` for the `font-size` more than 20px", () =>
  Promise.all([
    run(
      `.a { font-size: 24px; }`,
      `.a { font-size: 24px; letter-spacing: var(--vk-sans-ls-25); font-family: var(--vk-sans-display); }`
    ),
    run(
      `.a { font-size: 24px; font-family: 'Original Font', sans-serif; }`,
      `.a { font-size: 24px; letter-spacing: var(--vk-sans-ls-25); font-family: var(--vk-sans-display, 'Original Font', sans-serif); }`
    ),
    run(
      `.a { font: 24px/32px; }`,
      `.a { font: 24px/32px; letter-spacing: var(--vk-sans-ls-25); font-family: var(--vk-sans-display); }`
    ),
    run(
      `.a { font: 24px/32px; font-family: 'Original Font', sans-serif; }`,
      `.a { font: 24px/32px; letter-spacing: var(--vk-sans-ls-25); font-family: var(--vk-sans-display, 'Original Font', sans-serif); }`
    ),
  ]));

test("Respect `!important` declaration", () =>
  Promise.all([
    run(
      `.a { font-size: 20px; letter-spacing: -0.123em !important; }`,
      `.a { font-size: 20px; letter-spacing: -0.123em !important; }`,
      { respectImportant: true }
    ),
    run(
      `.a { font-size: 20px; letter-spacing: -0.123em !important; }`,
      `.a { font-size: 20px; letter-spacing: var(--vk-sans-ls-35, -0.123em); }`
    ),
  ]));

test("Test proper fallback with Custom Properties", () =>
  Promise.all([
    run(
      `.a { font-size: 13px; font-family: var(--prop); }`,
      `.a { font-size: 13px; font-family: var(--vk-sans-text, var(--prop)); }`
    ),
    run(
      `.a { font: 13px/21px; font-family: var(--prop); }`,
      `.a { font: 13px/21px; font-family: var(--vk-sans-text, var(--prop)); }`
    ),
    // Do nothing. Don't make a recursion
    run(
      `.a { font-size: 13px; font-family: var(--vk-sans-text); }`,
      `.a { font-size: 13px; font-family: var(--vk-sans-text); }`
    ),
    // TODO: Detect font-family in shorthand?
    // run(
    //   `.a { font: 14px var(--vk-sans-text); }`,
    //   `.a { font: 14px var(--vk-sans-text); }`,
    // ),
  ]));

test("Test Custom Properties handling", () =>
  Promise.all([
    run(
      `.a { font-size: var(--avatar-size-40-font-size); }`,
      `.a { font-size: var(--avatar-size-40-font-size); }`
    ),
    run(
      `.a { font-size: var(--avatar-size-40-font-size); }`,
      `.a { font-size: var(--avatar-size-40-font-size); letter-spacing: var(--vk-sans-ls-1); }`,
      {
        customPropertiesFiles: [
          "packages/postcss-plugin-vk-sans/__tests__/custom_properties.css",
        ],
      }
    ),
  ]));
