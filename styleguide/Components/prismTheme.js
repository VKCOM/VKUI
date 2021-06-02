const prismTheme = ({ color }) => ({
  '&': {
    color: 'var(--text_primary)',
  },
  [`& .token.comment,
& .token.prolog,
& .token.doctype,
& .token.cdata`]: {
    isolate: false,
    color: 'var(--text_secondary)',
  },
  [`& .token.punctuation`]: {
    isolate: false,
    color: 'var(--text_secondary)',
  },
  [`& .namespace`]: {
    isolate: false,
    opacity: 0.7,
  },
  [`& .token.property,
& .token.tag,
& .token.boolean,
& .token.number,
& .token.constant,
& .token.symbol`]: {
    isolate: false,
    color: 'var(--dynamic_purple)',
  },
  [`& .token.deleted`]: {
    isolate: false,
    color: color.codeDeleted,
  },
  [`& .token.selector,
& .token.attr-name,
& .token.string,
& .token.char,
& .token.builtin`]: {
    isolate: false,
    color: 'var(--dynamic_green)',
  },
  [`& .token.inserted`]: {
    isolate: false,
    color: color.codeInserted,
  },
  [`& .token.operator,
& .token.entity,
& .token.url,
& .language-css .token.string,
& .style .token.string`]: {
    isolate: false,
    color: color.codeOperator,
  },
  [`& .token.atrule,
& .token.attr-value,
& .token.keyword`]: {
    isolate: false,
    color: 'var(--dynamic_blue)',
  },
  [`& .token.function,
& .token.class-name`]: {
    isolate: false,
    color: 'var(--dynamic_red)',
  },
  [`& .token.regex,
& .token.important,
& .token.variable`]: {
    isolate: false,
    color: color.codeVariable,
  },
  [`& .token.important,
& .token.bold`]: {
    isolate: false,
    fontWeight: 'bold',
  },
  [`& .token.italic`]: {
    isolate: false,
    fontStyle: 'italic',
  },
  [`& .token.entity`]: {
    isolate: false,
    cursor: 'help',
  },
});

export default prismTheme;
