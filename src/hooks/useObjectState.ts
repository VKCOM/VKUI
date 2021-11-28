import * as React from "react";
import { objectEquals } from "./useObjectMemo";

export const useObjectState = <S>(init: S) => {
  return React.useReducer(
    (state: S, update: S) => (objectEquals(state, update) ? state : update),
    init
  );
};
