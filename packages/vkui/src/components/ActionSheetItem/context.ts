import * as React from 'react';

export const ActionSheetItemContext = React.createContext<{ isCancelItem: boolean }>({
  isCancelItem: false,
});
