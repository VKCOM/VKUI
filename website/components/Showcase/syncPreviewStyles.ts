/** Mirror stylesheet chunks that Next loads after the iframe has mounted. */
export function syncPreviewStyles(target: Document) {
  const mirrors = new Map<Element, Element>();

  const sync = () => {
    const sources = new Set(document.querySelectorAll('link[rel="stylesheet"], style'));
    for (const source of sources) {
      let clone = mirrors.get(source);
      if (!clone) {
        clone = source.cloneNode(true) as Element;
        mirrors.set(source, clone);
        target.head.appendChild(clone);
      }
      for (const attribute of [...source.attributes]) {
        if (clone.getAttribute(attribute.name) !== attribute.value) {
          clone.setAttribute(attribute.name, attribute.value);
        }
      }
      for (const attribute of [...clone.attributes]) {
        if (!source.hasAttribute(attribute.name)) {
          clone.removeAttribute(attribute.name);
        }
      }
      if (source.tagName === 'STYLE' && clone.textContent !== source.textContent) {
        clone.textContent = source.textContent;
      }
    }
    for (const [source, clone] of mirrors) {
      if (!sources.has(source)) {
        clone.remove();
        mirrors.delete(source);
      }
    }
  };

  sync();
  const observer = new MutationObserver(sync);
  observer.observe(document.head, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
  });
  return () => observer.disconnect();
}
