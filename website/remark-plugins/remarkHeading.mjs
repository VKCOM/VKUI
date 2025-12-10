export function transformer() {
  return async (tree) => {
    const visit = await import('unist-util-visit').then((module) => module.visit);

    const promises = [];

    visit(tree, 'heading', (jsxNode) => {
      if (jsxNode.depth !== 1 && jsxNode.depth !== 2) {
        return;
      }

      promises.push(async () => transformCode(jsxNode));
    });

    await Promise.all(promises.map((p) => p()));
  };
}

const CUSTOM_ANCHOR_REG_EXP = /\s*\[(tag:[^]+?)]\s*$/;

async function transformCode(jsxNode) {
  const lastChild = jsxNode.children.at(-1);
  if (!lastChild || lastChild.type !== 'text') {
    return;
  }
  const heading = lastChild.value;
  const matched = heading.match(CUSTOM_ANCHOR_REG_EXP);

  if (matched) {
    jsxNode.data ||= {};
    const headingProps = (jsxNode.data.hProperties ||= {});

    headingProps['data-pagefind-filter'] = matched[1];
    lastChild.value = heading.slice(0, matched.index);
  }
}
