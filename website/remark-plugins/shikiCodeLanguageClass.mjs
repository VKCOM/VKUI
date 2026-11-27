/** @type {import('shiki').ShikiTransformer} */
export const codeLanguageClass = {
  name: 'code-language-class',
  code(node) {
    if (typeof this.options.lang === 'string') {
      this.addClassToHast(node, `language-${this.options.lang}`);
    }
  },
};
