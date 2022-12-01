const path = require("path");
const { BREAKPOINTS, MEDIA_QUERIES } = require("./src/shared/breakpoints");

module.exports = {
  generateScopedName: (name) => {
    return name.startsWith("vkui") || name === "mount" ? name : `vkui${name}`;
  },

  cssCustomPropertiesPaths: [path.join(__dirname, "src/styles/constants.css")],

  /**
   * Возвращает медиа выражения необходимые по дизайн-системе. У ключей синтаксис должен быть как у CSS Custom Properties.
   * <br />
   * {@link https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media}
   */
  getCustomMedias: () => {
    const customMedia = {
      "--sizeX-regular": `(min-width: ${BREAKPOINTS.SMALL_TABLET}px)`,
      "--sizeX-compact": `(max-width: ${BREAKPOINTS.SMALL_TABLET - 1}px)`,

      "--sizeY-compact": `(pointer: fine) and (min-width: ${BREAKPOINTS.SMALL_TABLET}px), (max-height: ${BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT}px)`, // prettier-ignore
      "--sizeY-regular": `(pointer: coarse) and (min-height: ${415}px), (pointer: none) and (min-height: ${415}px), (max-width: ${BREAKPOINTS.SMALL_TABLET - 1}px) and (min-height: ${415}px)`, // prettier-ignore

      "--hover-has": "(hover: hover)",
      "--hover-has-not": "(hover: none)",

      "--pointer-has": "(pointer: fine)",
      "--pointer-has-not": "(pointer: coarse), (pointer: none)",

      "--desktop": `(min-width: ${BREAKPOINTS.SMALL_TABLET}px) and (pointer: fine), (min-width: ${BREAKPOINTS.SMALL_TABLET}px) and (min-height: ${BREAKPOINTS.MEDIUM_HEIGHT}px)`, // prettier-ignore
      "--mobile": `(max-width: ${BREAKPOINTS.SMALL_TABLET - 1}px), (pointer: none) and (max-height: ${BREAKPOINTS.MEDIUM_HEIGHT - 1}px), (pointer: coarse) and (max-height: ${BREAKPOINTS.MEDIUM_HEIGHT - 1}px)`, // prettier-ignore

      "--viewWidth-desktopPlus": MEDIA_QUERIES.DESKTOP_PLUS,

      "--viewWidth-tabletPlus": `(min-width: ${BREAKPOINTS.TABLET}px)`,
      "--viewWidth-tablet": MEDIA_QUERIES.TABLET,
      "--viewWidth-tabletMinus": `(max-width: ${BREAKPOINTS.TABLET - 1}px)`,

      "--viewWidth-smallTabletPlus": `(min-width: ${BREAKPOINTS.SMALL_TABLET}px)`,
      "--viewWidth-smallTablet": MEDIA_QUERIES.SMALL_TABLET,
      "--viewWidth-smallTabletMinus": `(max-width: ${BREAKPOINTS.SMALL_TABLET - 1}px)`, // prettier-ignore

      "--viewWidth-mobilePlus": `(min-width: ${BREAKPOINTS.MOBILE}px)`,
      "--viewWidth-mobile": MEDIA_QUERIES.MOBILE,

      "--viewWidth-smallMobileMinus": `(max-width: ${BREAKPOINTS.MOBILE - 1}px)`, // prettier-ignore
    };

    return { customMedia };
  },
};
