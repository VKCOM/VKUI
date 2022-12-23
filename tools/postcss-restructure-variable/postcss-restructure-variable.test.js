const postcss = require('postcss');

const plugin = require('./index');

async function run(input, opts = [undefined]) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.warnings()).toHaveLength(0);

  return result.css;
}

it('rewrite custom property', async () => {
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

  expect(await run(input)).toMatchSnapshot();
});

it('merge one', async () => {
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

  expect(await run(input)).toMatchSnapshot();
});

it('merge three', async () => {
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

  expect(await run(input)).toMatchSnapshot();
});

// PS: по идеи @media в итоге не должно быть, но чтобы ничего не сломать оставлю так
it('check cascading', async () => {
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

  expect(await run(input)).toMatchSnapshot();
});

it('check deep cascading', async () => {
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

  expect(await run(input)).toMatchSnapshot();
});

it('no custom properties', async () => {
  const input = `
.b {
  color: var(--color);
}`;

  expect(await run(input)).toMatchSnapshot();
});

it('example', async () => {
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

  expect(await run(input)).toMatchSnapshot();
});
