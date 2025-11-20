import slug from 'slug';

export function transformer() {
  return async (tree) => {
    const visit = await import('unist-util-visit').then((module) => module.visit);

    const promises = [];

    visit(tree, 'heading', (jsxNode) => {
      if (jsxNode.depth === 1) {
        return;
      }
      promises.push(async () => transformCode(jsxNode));
    });

    await Promise.all(promises.map((p) => p()));
  };
}

const CUSTOM_ANCHOR_REG_EXP = /\s*\[#([^]+?)]\s*$/;

async function transformCode(jsxNode) {
  const lastChild = jsxNode.children.at(-1);
  if (!lastChild || lastChild.type !== 'text') {
    return;
  }
  const heading = lastChild.value;
  const matched = heading.match(CUSTOM_ANCHOR_REG_EXP);

  jsxNode.data ||= {};
  const headingProps = (jsxNode.data.hProperties ||= {});

  if (!matched) {
    headingProps.id = slug(heading);
    return;
  }

  headingProps.id = matched[1];
  lastChild.value = heading.slice(0, matched.index);
}
