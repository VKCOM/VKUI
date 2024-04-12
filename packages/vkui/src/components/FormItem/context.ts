import * as React from 'react';

interface FormItemContextProps {
  required?: boolean;
  topMultiline?: boolean;
}

export const FormItemContext = React.createContext<FormItemContextProps>({
  required: false,
  topMultiline: false,
});
