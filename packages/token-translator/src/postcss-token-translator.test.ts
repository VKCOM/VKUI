import postcss from 'postcss';

import plugin from './postcss-token-translator';

async function run(input: string, output: string, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it('default', async () => {
  const input = `.a {
    color: var(--accent);
}
`;

  const output = `.a {
    color: var(--vkui--color_text_accent);
}
`;

  await run(input, output);
});

it('stroke', async () => {
  const input = `.a {
    box-shadow: 0 0 2px var(--accent);
    border-color: var(--accent);
    border: 1px solid var(--accent);
}
`;

  const output = `.a {
    box-shadow: 0 0 2px var(--vkui--color_stroke_accent);
    border-color: var(--vkui--color_stroke_accent);
    border: 1px solid var(--vkui--color_stroke_accent);
}
`;

  await run(input, output);
});

it('background', async () => {
  const input = `.a {
    background: var(--accent);
    background-color: var(--accent);
}
`;

  const output = `.a {
    background: var(--vkui--color_background_accent);
    background-color: var(--vkui--color_background_accent);
}
`;

  await run(input, output);
});

it('icon', async () => {
  const input = `.a .Icon {
    color: var(--accent);
    background: var(--accent);
}
`;

  const output = `.a .Icon {
    color: var(--vkui--color_icon_accent);
    background: var(--vkui--color_icon_accent);
}
`;

  await run(input, output);
});

it('at rule', async () => {
  const input = `
@supports (display: flex) {
  @media screen and (min-width: 900px) {
      :root {
        color: var(--accent);
      }
  }
}
`;

  const output = `
@supports (display: flex) {
  @media screen and (min-width: 900px) {
      :root {
        color: var(--vkui--color_text_accent);
      }
  }
}
`;

  await run(input, output);
});
