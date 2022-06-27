const postcss = require("postcss");
const path = require("path");
const customPropertiesFallback = require("../index");

async function run(
  input,
  output,
  opts = {
    importFrom: path.join(__dirname, "custom_properties.css"),
  }
) {
  const result = await postcss([customPropertiesFallback(opts)]).process(
    input,
    { from: undefined }
  );
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

test("Do nothing", () => run(`.a { color: blue; }`, `.a { color: blue; }`));

test("Add fallback if custom property exists", () =>
  run(`.a { color: var(--color); }`, `.a { color: var(--color,red); }`));

test("Don't add fallback if custom property does not exist", () =>
  run(`.a { color: var(--test); }`, `.a { color: var(--test); }`));

test("Don't add fallback if property has its own fallback", () =>
  run(`.a { color: var(--test, blue); }`, `.a { color: var(--test, blue); }`));

test("Add fallback with multiple fields", () =>
  run(
    `.a { box-shadow: var(--shadow); }`,
    `.a { box-shadow: var(--shadow,0 1px 3px rgba(0, 0, 0, 0.12) , 0 1px 2px rgba(0, 0, 0, 0.24)); }`
  ));

test("Should run only on suitable declarations", () =>
  Promise.all([
    run(
      `.a { box-shadow: var(--shadow); }`,
      `.a { box-shadow: var(--shadow,0 1px 3px rgba(0, 0, 0, 0.12) , 0 1px 2px rgba(0, 0, 0, 0.24)); }`,
      {
        shouldTransformableDecl: (decl) => decl.value.includes("--shadow"),
        importFrom: path.join(__dirname, "custom_properties.css"),
      }
    ),
    run(`.a { color: var(--color); }`, `.a { color: var(--color); }`, {
      shouldTransformableDecl: (decl) => decl.value.includes("--shadow"),
      importFrom: path.join(__dirname, "custom_properties.css"),
    }),
  ]));
