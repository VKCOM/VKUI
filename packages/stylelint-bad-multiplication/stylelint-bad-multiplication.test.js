const { ruleName } = require(".");

testRule({
  plugins: ["./packages/stylelint-bad-multiplication"],
  ruleName,
  config: true,

  accept: [
    {
      code: `.class{margin: 0 calc(-1*var(--some-var))}`,
    },
    {
      code: `.class{--abc: calc((-1 * var(--some-var)))}`,
    },
  ],

  reject: [
    {
      code: `.class{margin: 0 calc(var(--some-var) * -1)}`,
      message: `Bad multiplication, swap operands`,
    },
    {
      code: `.class{margin: 0 calc(var(--some-var)*-1)}`,
      message: `Bad multiplication, swap operands`,
    },
    {
      code: `.class{width: calc(
        (var(--some-var) * -1)
)}`,
      message: `Bad multiplication, swap operands`,
    },
  ],
});
