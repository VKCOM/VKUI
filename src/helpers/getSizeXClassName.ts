import { AdaptivityProps } from "../hoc/withAdaptivity";

export function getSizeXClassName(
  base: string,
  sizeX?: AdaptivityProps["sizeX"]
): string {
  return `${base}--sizeX-${sizeX ?? "none"}`;
}
