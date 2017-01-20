import React from 'react';

export default function wrapTextNode(node, props, TagName = 'div') {
  if (!node) {
    return null;
  }

  if (typeof node === 'string') {
    return <TagName {...props}>{node}</TagName>;
  }

  return node;
}
