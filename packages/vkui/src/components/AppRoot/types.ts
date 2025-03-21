/* eslint-disable jsdoc/require-jsdoc */

export type SafeAreaInsets = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export type AppRootMode = 'partial' | 'embedded' | 'full';

export type AppRootLayout = 'card' | 'plain';

export type AppRootScroll = 'global' | 'contain';

export type AppRootUserSelectMode = 'enabled' | 'enabled-with-pointer' | 'disabled';
