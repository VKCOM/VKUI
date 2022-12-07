const { ruleName } = require(".");

testRule({
  plugins: ["./packages/stylelint-atomic"],
  ruleName,
  config: true,
  codeFilename: "src/Cmp.css",

  accept: [
    {
      code: `
  .Cmp {}
  .Cmp__icon {}
  .Cmp .Cmp__icon {}
  .Cmp.Icon {}
  @keyframes vkui-animation {}
  @media (min-resolution: 2dppx) {
    .Cmp.Icon {}
  }
`,
    },
  ],

  reject: [
    {
      code: `.Icon {}`,
      message: `"Icon" must reference .Cmp`,
    },
    {
      code: `.Cmp .Icon {}`,
      message: `"Icon" must reference .Cmp`,
    },
    {
      code: `
  @media (min-resolution: 2dppx) {    
    .Cmp .Icon {}
  }
`,
      message: `"Icon" must reference .Cmp`,
    },
    {
      code: `.Cmp :global(.vkuiIcon) {}`,
      message: `"vkuiIcon" must reference .Cmp`,
    },
  ],
});
