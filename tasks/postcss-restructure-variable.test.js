const postcss = require("postcss");

const plugin = require("./postcss-restructure-variable");

async function run(input, output, opts = [undefined]) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it("rewrite custom property", async () => {
  const input = `.a {
    --color: #fff;
}
.a {
    --color: #000;
}
.b {
    --color: #fff;
}
.b {
    --color: #000;
}
`;

  const output = `.a, .b {
    --color: #000
}
`;

  await run(input, output);
});

it("merge one", async () => {
  const input = `:root {
    --color: #fff;
}
.b {
    color: var(--color);
}
.b {
    --color: #fff;
}
`;

  const output = `:root, .b {
    --color: #fff;
}
.b {
    color: var(--color);
}
`;

  await run(input, output);
});

it("merge three", async () => {
  const input = `:root {
    --color: #fff;
    --size: 1px;
}
.b {
    color: var(--color);
}
.b {
    --color: #fff;
    --size: 2px;
}
`;

  const output = `:root, .b {
    --color: #fff;
}
:root {
    --size: 1px;
}
.b {
    --size: 2px;
}
.b {
    color: var(--color);
}
`;

  await run(input, output);
});

// PS: по идеи @media в итоге не должно быть, но чтобы ничего не сломать оставлю так
it("check cascading", async () => {
  const input = `
@media (min-resolution: 2dppx) {
    :root {
        --color: blue;
        color: blue;
    }
}
@media (min-resolution: 3dppx) {
    :root {
        --color: blue;
    }
}
:root {
    --color: blue;
}`;

  await run(input, input);
});

it("check deep cascading", async () => {
  const input = `
@supports (display: flex) {
    @media screen and (min-width: 900px) {
        :root {
            --color: blue;
        }
    }
}
:root {
    --color: blue;
}`;

  await run(input, input);
});

it("no custom properties", async () => {
  const input = `
.b {
  color: var(--color);
}`;

  await run(input, input);
});

it("example", async () => {
  const input = `
.a {
    --color1: #ff0000;
    --color2: #ff0000;
    --size: 2px;
}
.b {
    --color1: #ff0000;
    --color2: #ff0000;
    --size: 1px;
}
.c {
    --color: #0000ff;
    --size: 1px;
}
`;

  const output = `.a, .b {
    --color1: #ff0000;
    --color2: #ff0000
}
.a {
    --size: 2px
}
.b, .c {
    --size: 1px
}
.c {
    --color: #0000ff
}
`;

  await run(input, output);
});
