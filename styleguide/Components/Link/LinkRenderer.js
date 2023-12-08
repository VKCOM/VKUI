import * as React from 'react';
import { Link } from '@vkui';
import { generateIdByReactNode } from '../../utils';

const resolveHref = (hrefProp, children) => {
  if (hrefProp) {
    if (hrefProp === '{{anchor}}') {
      const id = generateIdByReactNode(children);
      return {
        scrollTo() {
          const el = document.getElementById(id);
          if (el) {
            window.scrollTo({ behavior: 'smooth', top: el.offsetTop });
          }
        },
        native: undefined,
      };
    }

    return {
      scrollTo: null,
      native: hrefProp.replace('https://vkcom.github.io/VKUI/', ''),
    };
  }
};

export const LinkRenderer = ({ href: hrefProp, onClick, children, ...restProps }) => {
  const href = resolveHref(hrefProp, children);

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (href.scrollTo !== null) {
      href.scrollTo();
    }
  };

  return (
    <Link href={href.native} onClick={handleClick} {...restProps}>
      {children}
    </Link>
  );
};

export default LinkRenderer;
