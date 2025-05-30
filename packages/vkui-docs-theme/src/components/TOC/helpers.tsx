export const calculateItemPadding = (depth: number): number => {
  const basePadding = 12;
  const depthMultiplier = 10;
  return basePadding + depthMultiplier * (depth - 2);
};
