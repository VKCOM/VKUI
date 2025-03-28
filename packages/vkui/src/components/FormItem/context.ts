/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';

interface FormItemContextProps {
  required?: boolean;
  topMultiline?: boolean;
}

export const FormItemContext: React.Context<FormItemContextProps> =
  React.createContext<FormItemContextProps>({
    required: false,
    topMultiline: false,
  });
