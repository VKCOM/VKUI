import * as React from "react";

export const isRefObject = <T, E = Element>(
  refObject: React.RefObject<E> | T
): refObject is React.RefObject<E> => {
  console.log(refObject);
  return (
    typeof refObject === "object" &&
    refObject !== null &&
    refObject.hasOwnProperty("current")
  );
};
