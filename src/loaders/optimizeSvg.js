const xml2js = require('xml2js-parser').parseStringSync;

module.exports = function (source) {
  const parsed = xml2js(source);
  return `<svg viewBox="${parsed.svg.$.viewBox}"><path d="${parsed.svg.defs[0].path[0].$.d}"></path></svg>`;
};
