#!/usr/bin/env node
const path = require('path');
const schemeVKUI = require('@vkontakte/appearance/main.valette/scheme');
const paletteVKUI = require('@vkontakte/appearance/main.valette/palette');
const schemeWeb = require('@vkontakte/appearance/main.valette/scheme_web');
const paletteWeb = require('@vkontakte/appearance/main.valette/palette_web');
const pkg = require('../package.json');
const generateScheme = require('@vkontakte/vkjs/build/tasks/generate_scheme');

const stylesDir = path.resolve(__dirname, '../src/styles');

generateScheme(schemeVKUI, paletteVKUI, pkg.defaultSchemeId, stylesDir);
generateScheme(schemeWeb, paletteWeb, pkg.defaultSchemeId, stylesDir);
