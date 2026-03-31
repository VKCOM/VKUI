/* eslint-disable jsdoc/require-jsdoc */

export type SafeAreaInsets = {
  top?: number | undefined;
  right?: number | undefined;
  bottom?: number | undefined;
  left?: number | undefined;
};

export type AppRootMode = 'partial' | 'embedded' | 'full';

export type AppRootLayout = 'card' | 'plain';

export type AppRootScroll = 'global' | 'contain';

export type AppRootUserSelectMode = 'enabled' | 'enabled-with-pointer' | 'disabled';
