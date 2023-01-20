import postcss, { ProcessOptions } from 'postcss';
import postcssLESS from 'postcss-less';
import postcssSCSS from 'postcss-scss';

import plugin from './postcss-token-translator';

async function run(input: string, output: string, processOption: ProcessOptions = {}) {
  let result = await postcss([plugin({})]).process(input, {
    from: undefined,
    ...processOption,
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

describe('less', () => {
  it('default', async () => {
    const input = `.a {
    color: var(--accent);
}
`;

    const output = `.a {
    color: var(--vkui--color_text_accent);
}
`;

    await run(input, output, { parser: postcssLESS });
  });

  // https://lesscss.org/#variables
  it('variables', async () => {
    const input = `@color: var(--accent);

.a {
    color: @color;
}
`;

    const output = `@color: var(--vkui--color_text_accent);

.a {
    color: @color;
}
`;

    await run(input, output, { parser: postcssLESS });
  });

  // https://lesscss.org/#nesting
  it('nesting', async () => {
    const input = `.a {
    font-size: 12px;
    .blue {
        color: var(--accent);
    }
}
`;

    const output = `.a {
    font-size: 12px;
    .blue {
        color: var(--vkui--color_text_accent);
    }
}
`;

    await run(input, output, { parser: postcssLESS });
  });

  // https://lesscss.org/#nesting-nested-at-rules-and-bubbling
  it('nested At-Rules and Bubbling', async () => {
    const input = `.a {
    font-size: 12px;
    @media (min-width: 768px) {
        color: var(--accent);
        @media  (min-resolution: 192dpi) {
            color: var(--accent);
        }
    }
}
`;

    const output = `.a {
    font-size: 12px;
    @media (min-width: 768px) {
        color: var(--vkui--color_text_accent);
        @media  (min-resolution: 192dpi) {
            color: var(--vkui--color_text_accent);
        }
    }
}
`;

    await run(input, output, { parser: postcssLESS });
  });
});

describe('scss', () => {
  it('default', async () => {
    const input = `.a {
    color: var(--accent);
}
`;

    const output = `.a {
    color: var(--vkui--color_text_accent);
}
`;

    await run(input, output, { parser: postcssSCSS });
  });

  // https://sass-lang.com/documentation/variables
  it('variables', async () => {
    const input = `$color: var(--accent);

.a {
    color: #{color};
}
`;

    const output = `$color: var(--vkui--color_text_accent);

.a {
    color: #{color};
}
`;

    await run(input, output, { parser: postcssSCSS });
  });

  it('nesting', async () => {
    const input = `.a {
    font-size: 12px;
    .blue {
        color: var(--accent);
    }
}
`;

    const output = `.a {
    font-size: 12px;
    .blue {
        color: var(--vkui--color_text_accent);
    }
}
`;

    await run(input, output, { parser: postcssSCSS });
  });

  // https://sass-lang.com/documentation/style-rules#interpolation
  it('interpolation', async () => {
    const input = `@mixin define-emoji($name, $glyph) {
  span.emoji-#{$name} {
    color: var(--accent);
  }
}
`;

    const output = `@mixin define-emoji($name, $glyph) {
  span.emoji-#{$name} {
    color: var(--vkui--color_text_accent);
  }
}
`;

    await run(input, output, { parser: postcssSCSS });
  });

  it('nested At-Rules and Bubbling', async () => {
    const input = `.a {
    font-size: 12px;
    @media (min-width: 768px) {
        color: var(--accent);
        @media  (min-resolution: 192dpi) {
            color: var(--accent);
        }
    }
}
`;

    const output = `.a {
    font-size: 12px;
    @media (min-width: 768px) {
        color: var(--vkui--color_text_accent);
        @media  (min-resolution: 192dpi) {
            color: var(--vkui--color_text_accent);
        }
    }
}
`;

    await run(input, output, { parser: postcssSCSS });
  });
});
