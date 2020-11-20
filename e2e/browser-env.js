import React from 'react';
import ReactDOM from 'react-dom';
import * as vkui from '../src';

console.log('init', React, ReactDOM, vkui)
window['React'] = React;
window['ReactDOM'] = ReactDOM;
window['vkui'] = vkui;
