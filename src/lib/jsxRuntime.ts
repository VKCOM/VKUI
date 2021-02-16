import { createElement, Fragment } from 'react';

export const createScopedElement = Object.assign(createElement, { Fragment });
